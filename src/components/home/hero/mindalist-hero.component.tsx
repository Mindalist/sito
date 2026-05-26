import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFadeInUp } from "../../../hooks/useGSAPAnimations";
import showreel from "../../../assets/showreel.mp4";

export default function MindalistHero() {
  const { t } = useTranslation();
  const firstLineRef = useFadeInUp(0, 0.8);
  const secondLineRef = useFadeInUp(0.2, 0.8);
  const paragraphRef = useFadeInUp(0.4, 0.8);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isPlaying = false;

    // Gestione errori di caricamento
    const handleError = () => {
      setVideoError(true);
    };

    const tryPlay = () => {
      if (isPlaying) return;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            isPlaying = true;
            setVideoError(false);
          })
          .catch(() => {
            // Chrome potrebbe bloccare l'autoplay, riprova dopo un breve delay
            setTimeout(() => {
              video.play()
                .then(() => {
                  isPlaying = true;
                  setVideoError(false);
                })
                .catch(() => {
                  setVideoError(true);
                });
            }, 300);
          });
      }
    };

    // Prova a riprodurre quando il video è pronto
    const handleCanPlay = () => {
      tryPlay();
    };

    // Se il video è già caricato, prova subito
    if (video.readyState >= 3) {
      tryPlay();
    } else {
      // Altrimenti aspetta che sia pronto
      video.addEventListener("canplaythrough", handleCanPlay, { once: true });
    }

    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${
          videoError ? "hidden" : ""
        }`}
        src={showreel}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      />
      {/* Fallback background se il video non si carica */}
      {videoError && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&h=1080&fit=crop)",
            zIndex: 0,
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div
            ref={firstLineRef}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-2 sm:mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            "{t("home.heroLine1")}
          </div>
          <div
            ref={secondLineRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-4 sm:mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            {t("home.heroLine2")}"
          </div>
          <p
            ref={paragraphRef}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
          >
            {t("home.heroTagline")}
          </p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Lazy Video (IntersectionObserver-based autoplay)                     */
/* ------------------------------------------------------------------ */
interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

function LazyVideo({
  src,
  className = "",
  poster,
  autoPlay = false,
  loop = false,
  muted = true,
  controls = false,
  playsInline = true,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const shouldAutoplay = autoPlay && !prefersReducedMotion;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && !loaded) {
          el.src = src;
          el.load();
          if (shouldAutoplay) {
            const play = async () => {
              try {
                await el.play();
              } catch {
                /* autoplay blocked */
              }
            };
            if (el.readyState >= 3) play();
            else el.addEventListener("canplay", () => play(), { once: true });
          }
          setLoaded(true);
        } else if (!entry.isIntersecting && loaded && shouldAutoplay) {
          try { el.pause(); } catch { /* noop */ }
        } else if (entry.isIntersecting && loaded && shouldAutoplay) {
          try { await el.play(); } catch { /* noop */ }
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "80px",
      threshold: 0.15,
    });
    observer.observe(el);

    const onVisibility = () => {
      if (!el) return;
      if (document.visibilityState === "hidden") {
        try { el.pause(); } catch { /* noop */ }
      } else if (shouldAutoplay && loaded) {
        el.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, [src, loaded, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  );
}

/* ------------------------------------------------------------------ */
/* Phone Card                                                          */
/* ------------------------------------------------------------------ */
export interface PhoneCardProps {
  title?: string;
  sub?: string;
  tone?: string;
  gradient?: string;
  videoSrc?: string;
  imageSrc?: string;
  mediaType?: "video" | "image";
}

export function PhoneCard({
  title = "",
  sub = "",
  tone = "Mindalist.fpv",
  gradient = "from-[#0f172a] via-[#1e1b4b] to-[#020212]",
  videoSrc,
  imageSrc,
  mediaType = "video",
}: PhoneCardProps) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] rounded-[2.5rem] border-[6px] border-[#2a2a3d] bg-black shadow-2xl shadow-[#6129b5]/20 overflow-hidden aspect-[9/19.5]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 z-30 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />

      {/* Media */}
      <div className="absolute inset-0">
        {mediaType === "video" && videoSrc ? (
          <LazyVideo
            src={videoSrc}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-70`}
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-end p-5 pb-8">
        {title && (
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
        )}
        {sub && (
          <p className="mt-1 text-sm leading-snug text-white/70">{sub}</p>
        )}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#9494f8] animate-pulse" />
          <span className="text-xs font-medium text-[#9494f8]">{tone}</span>
        </div>
      </div>
    </div>
  );
}

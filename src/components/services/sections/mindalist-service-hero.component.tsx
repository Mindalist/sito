import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFadeInUp } from "../../../hooks/useGSAPAnimations";
import horizon from "../../../assets/services-section/collage.jpg";

export default function MindalistServiceHero() {
  const { t } = useTranslation();
  const titleRef = useFadeInUp(0, 0.8);
  const subtitleRef = useFadeInUp(0.2, 0.8);
  const buttonRef = useFadeInUp(0.4, 0.8);

  return (
    <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(" + horizon + " )",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6"
          >
            {t("services.title")}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            {t("services.subtitle")}
          </p>
          <div ref={buttonRef}>
            <Link
              to="/contatti"
              className="bg-[#6129b5] hover:bg-[#9494f8] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-colors inline-block"
            >
              {t("services.contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type SectionCardProps = {
  src: string;
  titolo: string;
  frase: string;
  serviceId?: string;
};

const serviceIdMap: Record<string, string> = {
  "Build Droni FPV Personalizzati": "build-droni",
  "Post-Produzione": "post-produzione",
  Consulenza: "consulenza",
  Videomaking: "videomaking",
};

// Service IDs that have a dedicated detail page
const detailPageMap: Record<string, string> = {
  videomaking: "/servizi/videomaking",
  "post-produzione": "/servizi/post-produzione",
};

export default function MindalistServicesSectionCard({
  src,
  titolo,
  frase,
  serviceId,
}: SectionCardProps) {
  const { t } = useTranslation();
  const id = serviceId || serviceIdMap[titolo] || "";
  const linkTo = detailPageMap[id] || `/servizi${id ? `#${id}` : ""}`;

  return (
    <Link
      to={linkTo}
      className="group flex justify-center w-full max-w-[320px] sm:max-w-[240px] md:max-w-[256px] lg:max-w-[288px] mx-auto mindalist-service-card-container"
    >
      <div className="relative w-full aspect-[9/13] lg:aspect-[9/14] rounded-xl shadow-xl mindalist-service-card">
        <div className="mindalist-service-card-front absolute inset-0 h-full w-full rounded-xl">
          <img
            className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
            src={src}
            alt={titolo}
            width="250"
            height="250"
          />
          <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-blue/70 transition-colors duration-300" />
          <div className="absolute inset-0 translate-y-[78%] px-4 sm:px-6 md:px-8 text-center">
            <p className="font-dmserif text-base sm:text-lg md:text-xl font-bold text-white">{titolo}</p>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-3 sm:px-4 md:px-5 text-center text-slate-200 mindalist-service-card-back">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">{titolo}</h2>
            <p className="text-sm sm:text-base md:text-lg text-pretty text-center mb-3 sm:mb-4 px-2">{frase}</p>
            <div className="flex">
              <button className="!text-center cursor-pointer bg-[#6129b5] hover:bg-[#9494f8] text-white font-bold py-1 sm:py-1.5 px-3 sm:px-4 md:pl-10 rounded-full flex items-center text-xs sm:text-sm md:text-base">
                <span className="!text-center">{t("home.readMore")}</span>
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-1 sm:ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .mindalist-service-card-container {
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        .mindalist-service-card {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .mindalist-service-card-container:hover .mindalist-service-card {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }
        .mindalist-service-card-front,
        .mindalist-service-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .mindalist-service-card-back {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }
      `}</style>
    </Link>
  );
}

import { useTranslation } from "react-i18next";
import build from "../../../assets/services-section/Build_droni.jpg";
import post from "../../../assets/services-section/Post_produzione.jpg";
import consultant from "../../../assets/services-section/Consulenza.jpg";
import video from "../../../assets/services-section/Videomaking.jpg";
import buildHorizontal from "../../../assets/169/building-drone.jpg";
import consulenzaHorizontal from "../../../assets/169/consulenza.jpg";
import fotoHorizontal from "../../../assets/169/foto.jpg";
import senzaTitoloHorizontal from "../../../assets/169/Senza-titolo-2-Recuperato.jpg";
import MindalistServicesSectionCard from "./mindalist-services-section-card.component";
import MindalistServicesHorizontalCard from "./mindalist-services-horizontal-card.component";
import { MdDesignServices } from "react-icons/md";
import { useFadeInUp, useStaggerChildren } from "../../../hooks/useGSAPAnimations";

export default function MindalistServicesSection() {
  const { t } = useTranslation();
  const titleRef = useFadeInUp(0, 0.8);
  const cardsRef = useStaggerChildren(0.2, 0.15);

  return (
    <section className="!bg-[#020212] py-4 sm:py-6 md:py-8 overflow-hidden">
      <div className="flex justify-center object-center px-4">
        <div className="flex justify-between flex-col items-center w-full max-w-7xl">
          <div
            ref={titleRef}
            className="self-stretch w-full sm:w-auto relative overflow-hidden rounded-2xl border border-[#6129b5]/50 bg-[#0d0d1a]/90 py-4 sm:py-5 flex justify-center items-center gap-3 sm:gap-4 px-6 sm:px-8 shadow-xl shadow-[#6129b5]/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9494f8]/60 to-transparent" />
            <MdDesignServices className="h-7 w-7 sm:h-8 sm:w-8 text-[#9494f8] shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
              {t("home.services")}
            </h2>
            <MdDesignServices className="h-7 w-7 sm:h-8 sm:w-8 text-[#9494f8] shrink-0" />
          </div>

          {/* Vertical Cards - Desktop (>756px) */}
          <div
            ref={cardsRef}
            className="hidden md:grid gap-6 sm:gap-8 md:gap-10 pt-6 sm:pt-8 md:pt-10 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pointer-events-none md:pointer-events-auto"
          >
            <MindalistServicesSectionCard
              src={build}
              titolo={t("home.customDronesHome")}
              frase={t("home.customDronesHomeDesc")}
              serviceId="build-droni"
            />
            <MindalistServicesSectionCard
              src={post}
              titolo={t("home.postProductionHome")}
              frase={t("home.postProductionHomeDesc")}
              serviceId="post-produzione"
            />
            <MindalistServicesSectionCard
              src={consultant}
              titolo={t("home.consultingHome")}
              frase={t("home.consultingHomeDesc")}
              serviceId="consulenza"
            />
            <MindalistServicesSectionCard
              src={video}
              titolo={t("home.videomakingHome")}
              frase={t("home.videomakingHomeDesc")}
              serviceId="videomaking"
            />
          </div>

          {/* Horizontal Cards - Mobile (≤756px) */}
          <div
            ref={cardsRef}
            className="md:hidden flex flex-col gap-4 pt-6 sm:pt-8 w-full pointer-events-auto md:pointer-events-none"
          >
            <MindalistServicesHorizontalCard
              src={buildHorizontal}
              titolo={t("home.customDronesHome")}
              frase={t("home.customDronesHomeDesc")}
              serviceId="build-droni"
            />
            <MindalistServicesHorizontalCard
              src={senzaTitoloHorizontal}
              titolo={t("home.postProductionHome")}
              frase={t("home.postProductionHomeDesc")}
              serviceId="post-produzione"
            />
            <MindalistServicesHorizontalCard
              src={consulenzaHorizontal}
              titolo={t("home.consultingHome")}
              frase={t("home.consultingHomeDesc")}
              serviceId="consulenza"
            />
            <MindalistServicesHorizontalCard
              src={fotoHorizontal}
              titolo={t("home.videomakingHome")}
              frase={t("home.videomakingHomeDesc")}
              serviceId="videomaking"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

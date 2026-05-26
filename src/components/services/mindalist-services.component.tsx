import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFadeInUp } from "../../hooks/useGSAPAnimations";
import MindalistServiceHero from "./sections/mindalist-service-hero.component";
import MindalistServiceSection from "./sections/mindalist-service-section.component";
import MindalistServiceGrid from "./sections/mindalist-service-grid.component";
import MindalistServiceColumns from "./sections/mindalist-service-columns.component";
import postproduzione from "../../assets/services-section/videomaking.png";
import videomaking from "../../assets/services-section/videomaking3.jpg";
import consulenzah from "../../assets/services-section/attrezzatura.jpg";
import consulenzas from "../../assets/services-section/beta11.jpg";
import consulenzav from "../../assets/services-section/collage3.jpg";
import training from "../../assets/services-section/pad.jpg";

export default function MindalistServices() {
  const location = useLocation();
  const { t } = useTranslation();
  const heroRef = useFadeInUp(0, 0.8);

  // Scroll to specific service when hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.hash]);

  const videomakingData = useMemo(
    () => ({
      id: "videomaking",
      title: t("services.videomaking"),
      description: t("services.videomakingDesc"),
      imageUrl: videomaking,
      buttonText: t("services.discoverMore"),
      secondaryButtonText: t("services.contactUs"),
    }),
    [t]
  );

  const postProduzioneData = useMemo(
    () => ({
      id: "post-produzione",
      title: t("services.postProduction"),
      description: t("services.postProductionDesc"),
      imageUrl: postproduzione,
      buttonText: t("services.discoverMore"),
      secondaryButtonText: t("services.contactUs"),
    }),
    [t]
  );

  const consulenzaGridData = useMemo(
    () => [
      {
        id: "consulenza-hardware",
        title: t("services.consultingHardware"),
        description: t("services.consultingHardwareDesc"),
        price: t("services.onRequest"),
        imageUrl: consulenzah,
      },
      {
        id: "consulenza-software",
        title: t("services.consultingSoftware"),
        description: t("services.consultingSoftwareDesc"),
        price: t("services.onRequest"),
        imageUrl: consulenzas,
      },
      {
        id: "consulenza-videomaking",
        title: t("services.consultingVideomaking"),
        description: t("services.consultingVideomakingDesc"),
        price: t("services.onRequest"),
        imageUrl: consulenzav,
      },
      {
        id: "formazione-training",
        title: t("services.training"),
        description: t("services.trainingDesc"),
        price: t("services.onRequest"),
        imageUrl: training,
      },
    ],
    [t]
  );

  const droniData = useMemo(
    () => [
      {
        icon: "drone",
        subheading: t("services.customDesign"),
        text: t("services.customDesignDesc"),
      },
      {
        icon: "perm_data_setting",
        subheading: t("services.softwareConfig"),
        text: t("services.softwareConfigDesc"),
      },
      {
        icon: "tools_pliers_wire_stripper",
        subheading: t("services.professionalAssembly"),
        text: t("services.professionalAssemblyDesc"),
      },
      {
        icon: "support_agent",
        subheading: t("services.continuousSupport"),
        text: t("services.continuousSupportDesc"),
      },
    ],
    [t]
  );


  return (
    <div className="w-full bg-[#020212]! min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} id="servizi-hero">
        <MindalistServiceHero />
      </div>


      {/* Videomaking Section */}
      <div id="videomaking" className="pb-0">
        <MindalistServiceSection
          title={videomakingData.title}
          description={videomakingData.description}
          imageUrl={videomakingData.imageUrl}
          imagePosition="right"
          buttonText={videomakingData.buttonText}
          secondaryButtonText={videomakingData.secondaryButtonText}
          detailLink="/servizi/videomaking"
        />
      </div>

      {/* Post-Produzione Section */}
      <div id="post-produzione" className="pt-0">
        <MindalistServiceSection
          title={postProduzioneData.title}
          description={postProduzioneData.description}
          imageUrl={postProduzioneData.imageUrl}
          imagePosition="left"
          buttonText={postProduzioneData.buttonText}
          secondaryButtonText={postProduzioneData.secondaryButtonText}
          detailLink="/servizi/post-produzione"
        />
      </div>

      {/* CONSULENZA Grid */}
      <div id="consulenza" className="bg-[#020212]! pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
            {t("services.consulting")}
          </h2>
          <MindalistServiceGrid items={consulenzaGridData} />
        </div>
      </div>

      {/* DRONI AUTOCOSTRUITI Columns */}
      <div id="build-droni" className="bg-[#020212]! pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
            {t("services.customDrones")}
          </h2>
          <MindalistServiceColumns items={droniData} />
        </div>
      </div>
    </div>
  );
}

import { MindalistLastWork } from "./mindalist-last-work.component";
import rieti from "../../../assets/works_section/rieti.jpg";
import gubbio from "../../../assets/works_section/gubbio.jpg";
import erice from "../../../assets/works_section/erice.jpg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useFadeInUp } from "../../../hooks/useGSAPAnimations";
import { useTranslation } from "react-i18next";

export function MindalistLastWorks() {
  const { t } = useTranslation();
  const titleRef = useFadeInUp(0, 0.8);

  return (
    <section className="w-full mx-auto py-4 sm:py-6 md:py-8 !bg-[#030318] dark:bg-gray-900 dark:text-white overflow-x-hidden">
      <div className="flex justify-center object-center px-4">
        <div className="flex flex-col items-center w-full max-w-7xl">
          <div
            ref={titleRef}
            className="self-stretch w-full sm:w-auto relative overflow-hidden rounded-2xl border border-[#6129b5]/50 bg-[#0d0d1a]/90 py-4 sm:py-5 flex justify-center items-center gap-3 sm:gap-4 px-6 sm:px-8 mb-10 shadow-xl shadow-[#6129b5]/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9494f8]/60 to-transparent" />
            <MdOutlineWorkspacePremium className="h-7 w-7 sm:h-8 sm:w-8 text-[#9494f8] shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
              {t("home.lastWorks")}
            </h2>
            <MdOutlineWorkspacePremium className="h-7 w-7 sm:h-8 sm:w-8 text-[#9494f8] shrink-0" />
          </div>
        </div>
      </div>

      <MindalistLastWork
        title={t("home.rietiTitle")}
        desc={t("home.rietiDesc")}
        imgUrl={rieti}
      />
      <MindalistLastWork
        title={t("home.gubbioTitle")}
        desc={t("home.gubbioDesc")}
        imgUrl={gubbio}
        type="imgRight"
      />
      <MindalistLastWork
        title={t("home.ericeTitle")}
        desc={t("home.ericeDesc")}
        imgUrl={erice}
      />
    </section>
  );
}

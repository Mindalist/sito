import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language ?? "it";
  const isIt = currentLang.startsWith("it");
  const isEn = currentLang.startsWith("en");

  return (
    <div className="flex shrink-0 items-center gap-0.5 sm:gap-1 rounded-full border border-[#6129b5]/30 bg-[#030318]/60 p-0.5 shadow-lg backdrop-blur-sm sm:gap-1 sm:p-1">
      <button
        onClick={() => changeLanguage("it")}
        className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
          isIt
            ? "bg-[#6129b5] text-white shadow-md"
            : "text-[#E0E0E0]/60 hover:text-[#E0E0E0] hover:bg-[#6129b5]/10"
        }`}
      >
        IT
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
          isEn
            ? "bg-[#6129b5] text-white shadow-md"
            : "text-[#E0E0E0]/60 hover:text-[#E0E0E0] hover:bg-[#6129b5]/10"
        }`}
      >
        EN
      </button>
    </div>
  );
}

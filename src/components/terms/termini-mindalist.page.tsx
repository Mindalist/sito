// src/components/terms/TermsOfService.tsx

import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen bg-[#020212] text-gray-200 px-6 py-12"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6129b5] mb-6">
          {t("terms.title")}
        </h1>
        <p className="text-sm text-[#8e98df] mb-8">
          <strong>{t("terms.lastUpdate")}</strong> {t("terms.lastUpdateDate")}
        </p>

        <p className="mb-6">
          {t("terms.intro")}{" "}
          <strong className="text-[#9494f8]">{t("terms.siteName")}</strong>.
        </p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section1Title")}
        </h2>
        <p className="mb-6">{t("terms.section1Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section2Title")}
        </h2>
        <p className="mb-6">{t("terms.section2Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section3Title")}
        </h2>
        <p className="mb-6">{t("terms.section3Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section4Title")}
        </h2>
        <p className="mb-4">{t("terms.section4Text")}</p>
        <p className="mb-4">{t("terms.section4ListTitle")}</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-200">
          <li>{t("terms.section4Item1")}</li>
          <li>{t("terms.section4Item2")}</li>
          <li>{t("terms.section4Item3")}</li>
        </ul>
        <p className="mb-6">{t("terms.section4Legal")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section5Title")}
        </h2>
        <p className="mb-4">{t("terms.section5Intro")}</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-200">
          <li>{t("terms.section5Item1")}</li>
          <li>{t("terms.section5Item2")}</li>
          <li>{t("terms.section5Item3")}</li>
          <li>{t("terms.section5Item4")}</li>
          <li>{t("terms.section5Item5")}</li>
        </ul>
        <p className="mb-6">
          {t("terms.section5Contact")}{" "}
          <strong className="text-[#9494f8]">{t("terms.privacyEmail")}</strong>.
        </p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section6Title")}
        </h2>
        <p className="mb-6">{t("terms.section6Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section7Title")}
        </h2>
        <p className="mb-6">{t("terms.section7Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section8Title")}
        </h2>
        <p className="mb-6">{t("terms.section8Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section9Title")}
        </h2>
        <p className="mb-6">{t("terms.section9Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section10Title")}
        </h2>
        <p className="mb-6">{t("terms.section10Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section11Title")}
        </h2>
        <p className="mb-6">{t("terms.section11Text")}</p>

        <h2 className="text-xl font-semibold text-[#6129b5] mt-8 mb-4">
          {t("terms.section12Title")}
        </h2>
        <p className="mb-6">{t("terms.section12Text")}</p>

        <div className="border-t border-[#8e98df] pt-6 text-sm text-gray-300">
          <p className="mb-2">
            <strong className="text-white">{t("terms.contactTitle")}</strong>
          </p>
          <p>
            {t("terms.emailPrivacy")}{" "}
            <strong className="text-[#9494f8]">{t("terms.privacyEmail")}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

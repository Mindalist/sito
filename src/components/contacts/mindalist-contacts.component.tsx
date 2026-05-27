import { useTranslation } from "react-i18next";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import MindalistForm2 from "./form/mindalist-form-2.component";

export default function MindalistContacts() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full overflow-x-clip bg-gray-50 dark:bg-[#030318]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-gray-100">
            {t("contacts.title")}
          </h2>
          <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400 break-words [overflow-wrap:anywhere]">
            {t("contacts.subtitle")}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid min-w-0 grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-8 lg:gap-x-12">
          <div className="min-w-0 w-full">
            <MindalistForm2 />
          </div>
          <div className="min-w-0 w-full">
            <h2 className="text-lg font-bold dark:text-gray-100">
              {t("contacts.contactUs")}
            </h2>
            <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
              {t("contacts.message")}
            </p>

            <a
              href="https://www.facebook.com/mindalist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mb-2 gap-2 text-dark-600 dark:text-gray-400 hover:text-white">
                <CiFacebook className="shrink-0" />
                <span>Andrea Manfroni</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/mindalist.fpv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mb-2 gap-2 text-dark-600 dark:text-gray-400 hover:text-white">
                <FaInstagram className="shrink-0" />
                <span>mindalist.fpv</span>
              </div>
            </a>
            <div className="flex items-start mt-2 gap-2 text-dark-600 dark:text-gray-400 hover:text-white min-w-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4 shrink-0 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <a
                href="mailto:info@mindalist.it"
                className="min-w-0 break-all"
              >
                info@mindalist.it
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
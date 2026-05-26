import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./notfound.style.css";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="perspective-container">
        <div className="floating-box relative w-64 h-64 md:w-80 md:h-80">
          <div className="front absolute w-full h-full bg-[#030318] border-2 border-[#6129b5] rounded-lg flex flex-col items-center justify-center p-4 shadow-lg">
            <div className="text-9xl font-bold text-[#6129b5] mb-2 glow">
              404
            </div>
            <div className="text-xl font-semibold text-blue-200">
              {t("notfound.title")}
            </div>
            <p className="text-gray-400 text-center mt-4">
              {t("notfound.message")}
            </p>
            <Link
              to="/"
              className="mt-6 px-6 py-2 bg-[#6129b5] hover:bg-[#8e98df] rounded-full text-white font-medium transition-all transform hover:scale-105"
            >
              {t("notfound.backHome")}
            </Link>
          </div>

          <div className="back absolute w-full h-full bg-[#030318] border-2 border-[#9494f8] rounded-lg"></div>
          <div className="right absolute w-10 h-full bg-[#6129b5] left-full origin-left rounded-r-lg"></div>
          <div className="left absolute w-10 h-full bg-[#6129b5] right-full origin-right rounded-l-lg"></div>
          <div className="top absolute w-full h-10 bg-[#020212] bottom-full origin-bottom rounded-t-lg"></div>
          <div className="bottom absolute w-full h-10 bg-[#020212] top-full origin-top rounded-b-lg"></div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-[#9494f8] rounded-full opacity-30"
          style={{
            top: "20%",
            left: "15%",
            animation: "particle 8s linear infinite",
          }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-[#8e98df] rounded-full opacity-20"
          style={{
            top: "60%",
            left: "25%",
            animation: "particle 10s linear infinite 2s",
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-[#9494f8] rounded-full opacity-25"
          style={{
            top: "40%",
            left: "80%",
            animation: "particle 7s linear infinite 1s",
          }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-[#9494f8] rounded-full opacity-15"
          style={{
            top: "80%",
            left: "70%",
            animation: "particle 9s linear infinite 3s",
          }}
        ></div>
      </div>
    </div>
  );
}

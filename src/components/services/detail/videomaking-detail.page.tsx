import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useFadeInUp, useStaggerChildren } from "../../../hooks/useGSAPAnimations";
import { PhoneCard } from "../../ui/phone-card.component";

// Assets
import heroImg from "../../../assets/services-section/videomaking3.jpg";
import showreel from "../../../assets/showreel.mp4";

export default function VideomakingDetailPage() {
  const { t } = useTranslation();
  const heroRef = useFadeInUp(0, 0.8);
  const featuresRef = useStaggerChildren(0.1, 0.15);
  const phoneRef = useFadeInUp(0.1, 0.8);
  const ctaRef = useFadeInUp(0.1, 0.8);

  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      titleKey: "serviceDetail.videomaking.feat1Title",
      descKey: "serviceDetail.videomaking.feat1Desc",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      titleKey: "serviceDetail.videomaking.feat2Title",
      descKey: "serviceDetail.videomaking.feat2Desc",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      titleKey: "serviceDetail.videomaking.feat3Title",
      descKey: "serviceDetail.videomaking.feat3Desc",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      ),
      titleKey: "serviceDetail.videomaking.feat4Title",
      descKey: "serviceDetail.videomaking.feat4Desc",
    },
  ];

  return (
    <div className="min-h-screen !bg-[#030318]">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020212]" />
        </div>
        <div ref={heroRef} className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60">
            <Link to="/servizi" className="hover:text-[#9494f8] transition-colors">
              {t("services.title")}
            </Link>
            <span>/</span>
            <span className="text-white">{t("services.videomaking")}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            {t("services.videomaking")}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80">
            {t("serviceDetail.videomaking.heroSub")}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 px-4 bg-[#030318]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {t("serviceDetail.videomaking.featuresTitle")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {t("serviceDetail.videomaking.featuresDesc")}
            </p>
          </div>
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-[#6129b5]/20 bg-[#0d0d1a]/80 p-6 sm:p-8 transition-colors hover:border-[#6129b5]/50"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#6129b5]/5 blur-2xl transition-all group-hover:bg-[#6129b5]/10" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#6129b5]/15 text-[#9494f8]">
                    {f.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {t(f.titleKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {t(f.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Card + Showreel Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Phone */}
            <div ref={phoneRef} className="lg:w-1/2 flex justify-center">
              <PhoneCard
                title={t("serviceDetail.videomaking.phoneTitle")}
                sub={t("serviceDetail.videomaking.phoneSub")}
                tone="Mindalist.fpv"
                videoSrc={showreel}
                mediaType="video"
                gradient="from-[#020212] via-[#1e1b4b]/80 to-[#020212]"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#6129b5]/50 bg-[#6129b5]/10 text-[#9494f8] text-sm font-medium mb-4">
                {t("serviceDetail.videomaking.reelTag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t("serviceDetail.videomaking.reelTitle")}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t("serviceDetail.videomaking.reelDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/contatti"
                  className="bg-[#6129b5] hover:bg-[#9494f8] text-white px-6 py-3 rounded-full text-base font-medium transition-colors text-center"
                >
                  {t("services.contactUs")}
                </Link>
                <Link
                  to="/servizi#videomaking"
                  className="border-2 border-[#9494f8] text-[#9494f8] px-6 py-3 rounded-full text-base font-medium hover:bg-[#9494f8]/10 transition-colors text-center"
                >
                  {t("serviceDetail.backToServices")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-16 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl border border-[#6129b5]/30 bg-gradient-to-br from-[#0d0d1a] to-[#1e1b4b]/30 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("serviceDetail.ctaTitle")}
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              {t("serviceDetail.ctaDesc")}
            </p>
            <Link
              to="/contatti"
              className="inline-block bg-[#6129b5] hover:bg-[#9494f8] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              {t("serviceDetail.ctaButton")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

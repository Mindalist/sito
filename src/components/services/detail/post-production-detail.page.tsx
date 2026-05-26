import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useFadeInUp, useStaggerChildren } from "../../../hooks/useGSAPAnimations";
import { ImageComparison } from "../../ui/image-comparison.component";
import { PhoneCard } from "../../ui/phone-card.component";

// Assets
import heroImg from "../../../assets/services-section/Post_produzione.jpg";
import phoneImg from "../../../assets/services-section/videomaking.png";

const comparisonBefore = "/postfot.jpg";
const comparisonAfter = "/postfot2.jpg";

export default function PostProductionDetailPage() {
  const { t } = useTranslation();
  const heroRef = useFadeInUp(0, 0.8);
  const comparisonRef = useFadeInUp(0.1, 0.8);
  const featuresRef = useStaggerChildren(0.1, 0.15);
  const phoneRef = useFadeInUp(0.1, 0.8);
  const ctaRef = useFadeInUp(0.1, 0.8);

  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      titleKey: "serviceDetail.postProduction.feat1Title",
      descKey: "serviceDetail.postProduction.feat1Desc",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
        </svg>
      ),
      titleKey: "serviceDetail.postProduction.feat2Title",
      descKey: "serviceDetail.postProduction.feat2Desc",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125m1.5 0c-.621 0-1.125.504-1.125 1.125v1.5" />
        </svg>
      ),
      titleKey: "serviceDetail.postProduction.feat3Title",
      descKey: "serviceDetail.postProduction.feat3Desc",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      ),
      titleKey: "serviceDetail.postProduction.feat4Title",
      descKey: "serviceDetail.postProduction.feat4Desc",
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
            <span className="text-white">{t("services.postProduction")}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            {t("services.postProduction")}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80">
            {t("serviceDetail.postProduction.heroSub")}
          </p>
        </div>
      </div>

      {/* Image Comparison Section */}
      <section className="py-16 sm:py-20 px-4">
        <div ref={comparisonRef} className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#6129b5]/50 bg-[#6129b5]/10 text-[#9494f8] text-sm font-medium mb-4">
              {t("serviceDetail.postProduction.comparisonTag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {t("serviceDetail.postProduction.comparisonTitle")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {t("serviceDetail.postProduction.comparisonDesc")}
            </p>
          </div>
          <ImageComparison
            beforeImage={comparisonBefore}
            afterImage={comparisonAfter}
            beforeLabel={t("serviceDetail.before")}
            afterLabel={t("serviceDetail.after")}
            className="aspect-video w-full shadow-2xl shadow-[#6129b5]/10"
          />
        </div>
      </section>

      {/* Phone Card + Description */}
      <section className="py-16 sm:py-20 px-4 bg-[#030318]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#6129b5]/50 bg-[#6129b5]/10 text-[#9494f8] text-sm font-medium mb-4">
                {t("serviceDetail.postProduction.showcaseTag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t("serviceDetail.postProduction.showcaseTitle")}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t("serviceDetail.postProduction.showcaseDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/contatti"
                  className="bg-[#6129b5] hover:bg-[#9494f8] text-white px-6 py-3 rounded-full text-base font-medium transition-colors text-center"
                >
                  {t("services.contactUs")}
                </Link>
                <Link
                  to="/servizi#post-produzione"
                  className="border-2 border-[#9494f8] text-[#9494f8] px-6 py-3 rounded-full text-base font-medium hover:bg-[#9494f8]/10 transition-colors text-center"
                >
                  {t("serviceDetail.backToServices")}
                </Link>
              </div>
            </div>
            {/* Phone */}
            <div ref={phoneRef} className="lg:w-1/2 flex justify-center">
              <PhoneCard
                title={t("serviceDetail.postProduction.phoneTitle")}
                sub={t("serviceDetail.postProduction.phoneSub")}
                tone="Mindalist.fpv"
                imageSrc={phoneImg}
                mediaType="image"
                gradient="from-[#020212] via-[#1e1b4b]/80 to-[#020212]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {t("serviceDetail.postProduction.featuresTitle")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {t("serviceDetail.postProduction.featuresDesc")}
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

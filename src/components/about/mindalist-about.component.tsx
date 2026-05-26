import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import horizon from "../../assets/about/horizon1.jpg";
import neve from "../../assets/about/andreNeve.jpg";
import attrezzatura from "../../assets/about/attrezzatura.jpg";
import attrezzatura2 from "../../assets/services-section/attrezzatura2.jpg";
import attrezzatura3 from "../../assets/services-section/attrezzatura3.jpg";
import attrezzatura4 from "../../assets/services-section/attrezzatura4.jpg";
import attrezzatura5 from "../../assets/services-section/attrezzatura5.jpg";
import attrezzatura6 from "../../assets/about/attrezzatura5.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function MindalistAbout() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const whyChooseItemsRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLHeadingElement>(null);
  const equipmentGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animazione per il titolo
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animazione per la prima immagine
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animazione per il testo
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animazione per "Perché scegliere me" title
    if (whyChooseRef.current) {
      gsap.fromTo(
        whyChooseRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animazione stagger per gli items "Perché scegliere me"
    if (whyChooseItemsRef.current) {
      const children = whyChooseItemsRef.current.children;
      if (children.length > 0) {
        gsap.fromTo(
          Array.from(children),
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whyChooseItemsRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }

    // Animazione scale per la seconda immagine
    if (secondImageRef.current) {
      gsap.fromTo(
        secondImageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: secondImageRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animazione per il titolo attrezzatura
    if (equipmentRef.current) {
      gsap.fromTo(
        equipmentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: equipmentRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animazione stagger per la griglia attrezzatura
    if (equipmentGridRef.current) {
      const children = equipmentGridRef.current.children;
      if (children.length > 0) {
        gsap.fromTo(
          Array.from(children),
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: equipmentGridRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-[#020212] min-h-screen">
      {/* Hero Section with Title and Main Image */}
      <div className="bg-[#020212] pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 text-center"
          >
            {t("about.title")}
          </h1>
          <div
            ref={imageRef}
            className="w-full rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={neve}
              alt="Still life composition"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="bg-[#020212] pt-6 sm:pt-8 pb-6 sm:pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={textRef} className="space-y-6 text-gray-300">
            <p className="text-lg sm:text-xl leading-relaxed">
              {t("about.intro")}
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Image and Why Choose Me Section - Side by Side */}
      <div className="bg-[#020212] pt-6 sm:pt-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Image */}
            <div ref={secondImageRef} className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={horizon}
                  alt="Rustic food arrangement"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Why Choose Me */}
            <div ref={whyChooseRef} className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
                {t("about.whyChoose")}
              </h2>
              <div ref={whyChooseItemsRef} className="space-y-4 sm:space-y-5">
                <li className="flex items-start group">
                  <span className="text-[#6129b5] mr-4 text-2xl group-hover:scale-125 transition-transform duration-300">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-semibold text-white text-lg sm:text-xl">
                      {t("about.creativity")}
                    </span>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-1">
                      {t("about.creativityDesc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#6129b5] mr-4 text-2xl group-hover:scale-125 transition-transform duration-300">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-semibold text-white text-lg sm:text-xl">
                      {t("about.experience")}
                    </span>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-1">
                      {t("about.experienceDesc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-[#6129b5] mr-4 text-2xl group-hover:scale-125 transition-transform duration-300">
                    •
                  </span>
                  <div className="flex-1">
                    <span className="font-semibold text-white text-lg sm:text-xl">
                      {t("about.innovation")}
                    </span>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-1">
                      {t("about.innovationDesc")}
                    </p>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="bg-[#020212] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={equipmentRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center"
          >
            {t("about.equipment")}
          </h2>
          <div
            ref={equipmentGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                id: 1,
                title: "Droni FPV",
                image: attrezzatura,
              },
              {
                id: 2,
                title: "Camera Professionale",
                image: attrezzatura2,
              },
              {
                id: 3,
                title: "Stabilizzatore",
                image: attrezzatura3,
              },
              {
                id: 4,
                title: "Post-Produzione",
                image: attrezzatura4,
              },
              {
                id: 5,
                title: "Accessori",
                image: attrezzatura5,
              },
              {
                id: 6,
                title: "Software",
                image: attrezzatura6,
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-[#030318] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

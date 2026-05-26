import { memo } from "react";
import { Link } from "react-router-dom";
import { useFadeInUp } from "../../../hooks/useGSAPAnimations";

interface ServiceSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  buttonText: string;
  secondaryButtonText: string;
  detailLink?: string;
}

function MindalistServiceSection({
  title,
  description,
  imageUrl,
  imagePosition,
  buttonText,
  secondaryButtonText,
  detailLink,
}: ServiceSectionProps) {
  const contentRef = useFadeInUp(0, 0.6);

  const isLeft = imagePosition === "left";

  return (
    <div
      ref={contentRef}
      className="w-full bg-[#020212]! py-8 sm:py-12"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-6 sm:gap-8 lg:gap-10`}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-5 sm:mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={detailLink || "/contatti"}
                className="bg-[#6129b5] hover:bg-[#9494f8] text-white px-6 py-3 rounded-full text-base font-medium transition-colors text-center"
              >
                {buttonText}
              </Link>
              <Link
                to="/contatti"
                className="border-2 border-[#9494f8] text-[#9494f8] px-6 py-3 rounded-full text-base font-medium hover:bg-[#9494f8]/10 transition-colors text-center"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MindalistServiceSection);

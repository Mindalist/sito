import { Link } from "react-router-dom";

type HorizontalCardProps = {
  src: string;
  titolo: string;
  frase: string;
  serviceId?: string;
};

const serviceIdMap: Record<string, string> = {
  "Build Droni FPV Personalizzati": "build-droni",
  "Post-Produzione": "post-produzione",
  Consulenza: "consulenza",
  Videomaking: "videomaking",
};

const detailPageMap: Record<string, string> = {
  videomaking: "/servizi/videomaking",
  "post-produzione": "/servizi/post-produzione",
};

export default function MindalistServicesHorizontalCard({
  src,
  titolo,
  frase,
  serviceId,
}: HorizontalCardProps) {
  const id = serviceId || serviceIdMap[titolo] || "";
  const linkTo = detailPageMap[id] || `/servizi${id ? `#${id}` : ""}`;

  return (
    <Link
      to={linkTo}
      className="group block w-full"
    >
      <div className="relative w-full h-48 sm:h-56 rounded-xl shadow-xl overflow-hidden bg-black/80 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="object-cover h-full w-full opacity-60 group-hover:opacity-70 transition-opacity duration-300"
            src={src}
            alt={titolo}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{titolo}</h3>
          <p className="text-sm sm:text-base text-white/90 line-clamp-2">{frase}</p>
          <div className="mt-3 sm:mt-4 flex items-center">
            <span className="text-sm sm:text-base font-semibold text-[#9494f8] group-hover:text-[#6129b5] transition-colors">
              Leggi di più
            </span>
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}


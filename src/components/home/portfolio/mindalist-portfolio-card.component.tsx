import type { InstagramPost } from "../../../store/api/types";

interface PortfolioCardProps {
  post: InstagramPost;
}

export default function MindalistPortfolioCard({ post }: PortfolioCardProps) {
  // Usa l'immagine ottimizzata da sizes se disponibile, altrimenti usa thumbnailUrl
  const imageUrl =
    post.sizes?.medium?.mediaUrl ||
    post.sizes?.large?.mediaUrl ||
    post.sizes?.full?.mediaUrl ||
    post.thumbnailUrl;

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-center perspective-[1000px] "
      aria-label={`Vai al post Instagram: ${post.prunedCaption || post.caption}`}
    >
      <div className="relative w-full aspect-[3/4] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] overflow-hidden">
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          <img
            className="object-cover cursor-pointer object-center h-full w-full rounded-xl"
            src={imageUrl}
            alt={post.prunedCaption || post.caption}
            width={post.sizes?.medium?.width || 250}
            height={post.sizes?.medium?.height || 250}
            loading="lazy"
          />
        </div>
        <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-blue/70"></div>
        <div className="absolute inset-0 translate-y-[78%] px-4 text-center">
          <p className="font-dmserif text-sm font-bold text-white line-clamp-2">
            {post.prunedCaption || post.caption}
          </p>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <div className="mb-4">
              {post.isReel && (
                <span className="inline-block bg-[#020212] text-white text-xs font-bold py-1 px-3 rounded-full mb-2">
                  REEL
                </span>
              )}
            </div>
            <p className="text-sm text-pretty text-center mb-4 line-clamp-4">
              {post.prunedCaption || post.caption}
            </p>
            {post.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {post.hashtags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-[#9494f8] font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex">
              <button className="text-center! cursor-pointer bg-[#020212] hover:bg-[#9494f8] text-white font-bold py-1 px-4 pl-10 rounded-full flex items-center">
                <span className="text-center!">Vedi su Instagram</span>
                <svg
                  className="h-5 w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}


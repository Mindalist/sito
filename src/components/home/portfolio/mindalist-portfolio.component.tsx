import { useGetInstagramFeedQuery } from "../../../store/api/instagramApi";
import MindalistPortfolioCard from "./mindalist-portfolio-card.component";
import { MdPhotoLibrary } from "react-icons/md";
import { useFadeInUp, useStaggerChildren } from "../../../hooks/useGSAPAnimations";

export default function MindalistPortfolio() {
  const { data, isLoading, error } = useGetInstagramFeedQuery();
  const titleRef = useFadeInUp(0, 0.8);
  const cardsRef = useStaggerChildren(0.2, 0.15);

  if (isLoading) {
    return (
      <section className="w-full mx-auto py-4 sm:py-6 md:py-8 bg-[#020212] flex justify-center items-center overflow-x-clip">
        <div className="text-white text-xl">Caricamento portfolio...</div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="w-full mx-auto py-4 sm:py-6 md:py-8 bg-[#020212] flex justify-center items-center overflow-x-clip">
        <div className="text-white text-xl">
          Errore nel caricamento del portfolio
        </div>
      </section>
    );
  }

  // Prendi i primi 6 post
  const posts = data.posts.slice(0, 6);

  return (
    <section className="w-full mx-auto py-4 sm:py-6 md:py-8 !bg-[#030318] dark:bg-gray-900 dark:text-white overflow-x-clip">
      <div className="flex justify-center object-center px-4">
        <div className="flex flex-col items-center w-full max-w-7xl">
          <div
            ref={titleRef}
            className="self-stretch w-full sm:w-auto relative overflow-hidden rounded-2xl border border-[#6129b5]/50 bg-[#0d0d1a]/90 py-4 sm:py-5 flex justify-center items-center gap-3 sm:gap-4 px-6 sm:px-8 mb-10 shadow-xl shadow-[#6129b5]/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9494f8]/60 to-transparent" />
            <MdPhotoLibrary className="h-7 w-7 sm:h-8 sm:w-8 text-[#9494f8] shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
              Portfolio
            </h2>
            <MdPhotoLibrary className="h-7 w-7 sm:h-8 sm:w-8 text-[#9494f8] shrink-0" />
          </div>
        </div>
      </div>

      <div
        ref={cardsRef}
        className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 px-4 max-w-7xl mx-auto"
      >
        {posts.map((post) => (
          <MindalistPortfolioCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}


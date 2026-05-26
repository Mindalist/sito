import { memo, useMemo } from "react";
import { useStaggerChildren } from "../../../hooks/useGSAPAnimations";

interface GridItem {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface ServiceGridProps {
  items: GridItem[];
}

function MindalistServiceGrid({ items }: ServiceGridProps) {
  const gridRef = useStaggerChildren(0.1, 0.15);

  const memoizedItems = useMemo(() => items, [items]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
    >
      {memoizedItems.map((item) => (
        <div
          key={item.id}
          className="bg-[#030318] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {item.description}
            </p>
            <p className="text-base sm:text-lg font-bold text-[#9494f8]">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(MindalistServiceGrid);


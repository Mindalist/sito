import { memo, useMemo } from "react";
import { useStaggerChildren } from "../../../hooks/useGSAPAnimations";

interface ColumnItem {
  icon: string;
  subheading: string;
  text: string;
}

interface ServiceColumnsProps {
  items: ColumnItem[];
}

function MindalistServiceColumns({ items }: ServiceColumnsProps) {
  const columnsRef = useStaggerChildren(0.1, 0.2);

  const memoizedItems = useMemo(() => items, [items]);

  // Split items into two columns
  const leftColumn = useMemo(
    () => memoizedItems.filter((_, index) => index % 2 === 0),
    [memoizedItems]
  );
  const rightColumn = useMemo(
    () => memoizedItems.filter((_, index) => index % 2 === 1),
    [memoizedItems]
  );

  return (
    <div
      ref={columnsRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
    >
      {/* Left Column */}
      <div className="space-y-8 sm:space-y-12">
        {leftColumn.map((item, index) => (
          <div
            key={`left-${index}`}
            className="flex flex-col items-center text-center"
          >
            <span
              className="material-symbols-outlined mb-4 text-white"
              style={{ fontSize: "50px" }}
            >
              {item.icon}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              {item.subheading}
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-8 sm:space-y-12">
        {rightColumn.map((item, index) => (
          <div
            key={`right-${index}`}
            className="flex flex-col items-center text-center"
          >
            <span
              className="material-symbols-outlined material-icon-large mb-4 text-white"
              style={{ fontSize: "50px" }}
            >
              {item.icon}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              {item.subheading}
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(MindalistServiceColumns);

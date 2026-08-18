import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: "top" | "right" | "bottom" | "left";
}

const Tooltip = ({
  children,
  text,
  position = "top",
}: TooltipProps) => {
  const positionClasses = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
  };

  const arrowClasses = {
    top: "left-1/2 top-full -translate-x-1/2 border-l-transparent border-r-transparent border-b-0 border-t-gray-800",
    right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-0 border-r-gray-800",
    bottom: "left-1/2 bottom-full -translate-x-1/2 border-l-transparent border-r-transparent border-t-0 border-b-gray-800",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-0 border-l-gray-800",
  };

  return (
    <div className="group relative inline-flex">
      {children}

      <div
        role="tooltip"
        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-gray-800 px-3 py-2 text-sm text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 ${positionClasses[position]}`}
      >
        {text}

        <span
          className={`absolute h-0 w-0 border-[5px] border-solid border-transparent ${arrowClasses[position]}`}
        />
      </div>
    </div>
  );
};

export { Tooltip };
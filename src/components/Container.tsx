import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-4 sm:w-[625px] md:w-[750px] lg:w-[1000px] xl:w-[1250px] ${className}`}
    >
      {children}
    </div>
  );
}

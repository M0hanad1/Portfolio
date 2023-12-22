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
      className={
        "mx-auto w-full px-4 md:w-[750px] lg:w-[1000px] xl:w-[1250px] " +
        className
      }
    >
      {children}
    </div>
  );
}

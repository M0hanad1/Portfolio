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
    <div className={"mx-auto w-full px-4 md:w-[98%] " + className}>
      {children}
    </div>
  );
}

import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

export default function Container({ children }: IContainer) {
  return <div className="mx-auto w-full px-4 md:w-[98%]">{children}</div>;
}
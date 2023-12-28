import { sectionContext } from "context/sectionContext";
import { useContext } from "react";
import { Sections } from "types";

interface NavLinkProps {
  link: string;
  name: Sections;
}

export default function NavLink({ link, name }: NavLinkProps) {
  const { section, setSection } = useContext(sectionContext);
  const show = section === name;

  return (
    <div className="flex h-full items-center justify-center text-3xl">
      <span
        className={`mb-1 mr-[2px] text-cyan-500 transition-opacity ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        &lt;
      </span>
      <a
        className={`peer text-2xl capitalize transition ${
          show
            ? "scale-105 text-cyan-500 opacity-100"
            : "opacity-50 hover:scale-105 hover:text-cyan-500 hover:opacity-80"
        }`}
        href={link}
        onClick={() => setSection(name)}
      >
        {name}
      </a>
      <span
        className={`ml-1 text-cyan-500 transition-opacity ${
          show ? "opacity-100" : "opacity-0  peer-hover:opacity-80"
        }`}
      >
        /
      </span>
      <span
        className={`mb-0.5 text-cyan-500 transition-opacity ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        &gt;
      </span>
    </div>
  );
}

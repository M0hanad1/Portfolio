import { sectionContext, sections } from "context/sectionContext";
import { useContext } from "react";

interface NavLinkProps {
  link: string;
  name: sections;
}

export default function NavLink({ link, name }: NavLinkProps) {
  const { section, setSection } = useContext(sectionContext);
  const show = section === name ? "!text-cyan-500 !opacity-100" : "";

  return (
    <div className="flex h-full items-center justify-center text-3xl">
      <span
        className={`mb-1 mr-[2px] text-cyan-500 opacity-0 transition-opacity ${show}`}
      >
        &lt;
      </span>
      <a
        className={`peer text-2xl capitalize opacity-50 transition hover:scale-105 hover:text-cyan-500 hover:opacity-80 ${
          show ? "scale-105 " + show : ""
        }`}
        href={link}
        onClick={() => setSection(name)}
      >
        {name}
      </a>
      <span
        className={`ml-1 text-cyan-500 opacity-0 transition-opacity ${
          !show ? "peer-hover:opacity-80" : show
        }`}
      >
        /
      </span>
      <span
        className={`mb-0.5 text-cyan-500 opacity-0 transition-opacity ${show}`}
      >
        &gt;
      </span>
    </div>
  );
}

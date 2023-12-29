import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sectionContext } from "context/sectionContext";
import { useContext } from "react";
import { NavItem } from "types";

export default function NavLink({ link, name, icon }: NavItem) {
  const { section, setSection } = useContext(sectionContext);
  const show = section === name;

  return (
    <div className="flex h-full items-center justify-center text-3xl">
      <span
        className={`mb-1 mr-[2px] hidden text-cyan-400 transition-opacity sm:block ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        &lt;
      </span>
      <a
        className={`peer text-2xl capitalize transition ${
          show
            ? "scale-110 text-cyan-400 opacity-100 sm:scale-105"
            : "opacity-50 hover:scale-105 hover:text-cyan-400 hover:opacity-80"
        }`}
        href={link}
        onClick={() => setSection(name)}
      >
        <span className="hidden sm:block">{name}</span>
        <FontAwesomeIcon
          icon={icon}
          className="sm:hidden"
          title={name}
          size="lg"
        />
      </a>
      <span
        className={`ml-1 hidden text-cyan-400 transition-opacity sm:block ${
          show ? "opacity-100" : "opacity-0  peer-hover:opacity-80"
        }`}
      >
        /
      </span>
      <span
        className={`mb-0.5 hidden text-cyan-400 transition-opacity sm:block ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        &gt;
      </span>
    </div>
  );
}

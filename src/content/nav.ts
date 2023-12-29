import { NavItem } from "types";
import {
  faAddressBook,
  faDiagramProject,
  faHouse,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const nav: NavItem[] = [
  { name: "home", link: "#", icon: faHouse },
  { name: "skills", link: "#", icon: faToolbox },
  { name: "projects", link: "#", icon: faDiagramProject },
  { name: "contact", link: "#", icon: faAddressBook },
];

export default nav;

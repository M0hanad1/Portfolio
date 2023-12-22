import Container from "components/Container";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <div className="fixed inset-0 h-16 bg-black/30 font-bold shadow-md backdrop-blur-sm">
      <Container className="flex h-full items-center justify-evenly">
        <NavLink link="#" name="home" />
        <NavLink link="#" name="skills" />
        <NavLink link="#" name="projects" />
        <NavLink link="#" name="contact" />
      </Container>
    </div>
  );
}

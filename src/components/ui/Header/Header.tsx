import Container from "components/Container";
import NavLink from "./NavLink";
import nav from "content/nav";

export default function Header() {
  return (
    <div className="fixed bottom-0 left-0 h-16 w-full bg-white/30 font-bold shadow-[0_-4px_6px_-1px_rgb(0_0_0/0.1)_0_-2px_4px_-2px_rgb(0_0_0/0.1)] shadow-black/20 backdrop-blur-sm dark:bg-black/30 sm:inset-0 sm:shadow-md">
      <Container className="flex h-full items-center justify-around sm:justify-evenly">
        {nav.map((value) => (
          <NavLink key={value.name} {...value} />
        ))}
      </Container>
    </div>
  );
}

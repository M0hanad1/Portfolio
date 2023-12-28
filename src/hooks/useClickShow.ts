import { RefObject, useEffect, useState } from "react";

export default function useClickShow<T extends HTMLElement>(ref: RefObject<T>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function hide() {
      setActive(false);
    }

    function handleClick(event: MouseEvent) {
      if (ref.current?.contains(event.target as Node) && !active) {
        setActive(true);
      } else hide();
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", hide);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", hide);
    };
  }, [ref, active]);

  return active;
}

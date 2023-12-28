import { RefObject, useEffect, useState } from "react";

export default function useClick<T extends HTMLElement>(ref: RefObject<T>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current?.contains(event.target as Node) && !active) {
        setActive(true);
      } else setActive(false);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref, active]);

  return active;
}

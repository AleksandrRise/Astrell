import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import infoSrc from "/assets/Information.png";

type InfoProps = {
    children: ReactNode;
};

export default function Info({ children }: InfoProps) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!wrapperRef.current) return;

            if (!wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <div ref={wrapperRef} className="relative fadeIn opacity-0">
        <button
            type="button"
            className={`rounded-full bg-white/30 w-17.5 h-17.5 flex cursor-pointer transition ${
            isOpen ? "hint-open" : "hover:bg-white/50"
            }`}
            aria-label="Show information"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
        >
            <img className="w-10 h-10 m-auto" src={infoSrc} alt="" />
        </button>

      {isOpen ? children : null}
    </div>
  );
}
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("button, a, .gallery-card");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-grow");
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-grow");
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default Cursor;

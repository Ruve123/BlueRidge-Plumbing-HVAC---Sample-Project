"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scene in-view toggling (pauses animation off-screen) and scroll reveal, ported from the theme's main.js. */
export function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".tp-illus").forEach((el) => el.classList.add("is-in-view"));
      return;
    }

    const sceneIo = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-in-view", e.isIntersecting)),
      { rootMargin: "80px 0px" },
    );
    document.querySelectorAll(".tp-illus").forEach((el) => sceneIo.observe(el));

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    document
      .querySelectorAll(".section__head, .card, .feature, .steps__item, .team-card, .faq__item")
      .forEach((el) => {
        el.classList.add("reveal");
        io.observe(el);
      });

    return () => {
      sceneIo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}

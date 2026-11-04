"use client";

import { useRef } from "react";

/** details/summary whose answer slides open and closed (Web Animations API), as in the theme. */
export function FaqItem({ question, answer, wp = false }: { question: string; answer: string; wp?: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const anim = useRef<Animation | null>(null);

  function onClick(e: React.MouseEvent) {
    const d = ref.current;
    if (!d) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !d.animate) return; // native toggle
    e.preventDefault();
    if (anim.current) {
      anim.current.cancel();
      anim.current = null;
    }
    const startH = d.offsetHeight;
    const opening = !d.open;
    let endH: number;
    if (opening) {
      d.open = true;
      endH = d.offsetHeight;
    } else {
      d.open = false;
      endH = d.offsetHeight;
      d.open = true;
    }
    d.style.overflow = "hidden";
    const a = d.animate({ height: [`${startH}px`, `${endH}px`] }, { duration: 380, easing: "cubic-bezier(.22, 1, .36, 1)" });
    anim.current = a;
    a.onfinish = () => {
      if (anim.current !== a) return;
      if (!opening) d.open = false;
      d.style.overflow = "";
      anim.current = null;
    };
  }

  return (
    <details ref={ref} className={`${wp ? "wp-block-details " : ""}faq__item`}>
      <summary onClick={onClick}>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}

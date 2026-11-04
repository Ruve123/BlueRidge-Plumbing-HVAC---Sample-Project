"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { phoneHref, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // html.nav-open locks page scroll (see globals.css)
  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Widening past the breakpoint must not leave the page scroll-locked
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header id="masthead" className={`site-header${open ? " nav-open" : ""}${stuck ? " is-stuck" : ""}`}>
      <div className="container site-header__inner">
        <div className="site-branding">
          <Link className="site-title" href="/" rel="home">
            <span className="site-title__mark">
              <Icon name="droplet" size={22} />
            </span>
            <span className="site-title__text">{site.name}</span>
          </Link>
        </div>

        <button
          ref={toggleRef}
          className="nav-toggle"
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="screen-reader-text">Menu</span>
          <span className="nav-toggle__bars" aria-hidden="true"></span>
        </button>

        <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary" onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) close();
        }}>
          <div className="site-nav__inner">
            <ul id="primary-menu" className="menu">
              {site.nav.map((item) => (
                <li key={item.href} className="menu-item">
                  {/* aria-current only for real pages, never for #anchors */}
                  <Link href={item.href} aria-current={!item.href.includes("#") && pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a className="btn btn--accent site-nav__call" href={`tel:${phoneHref}`}>
              <Icon name="phone" size={18} /> Call now
            </a>
          </div>
        </nav>
      </div>
      <div className="nav-scrim" aria-hidden="true" onClick={close}></div>
    </header>
  );
}

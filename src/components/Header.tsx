"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Utility: Conditional classNames
function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// Hook: Detect if scrolled past threshold
function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// Types
export interface HeaderProps {
  activePath?: string; // e.g., "/products"
  onQuoteClick?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Insurance Services", href: "/insurance-services" },
  { name: "News", href: "/news" },
  { name: "Cleaning specialists", href: "/cleaning" },
  { name: "Claims", href: "/claims" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" }, // added careers tab
];

export function Header({ activePath = "/", onQuoteClick }: HeaderProps) {
  const router = useRouter();
  const scrolled = useScrolled(8);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);
  const lastFocusable = useRef<HTMLButtonElement | null>(null);

  // Focus trap for mobile panel
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
      } else if (e.key === "Tab") {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  // Close on click outside
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Lock scroll when mobile panel open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on nav link click (simulate route change)
  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header className="relative z-40 w-full">
      <div className="hidden lg:flex w-full justify-center">
        <nav
          role="navigation"
          aria-label="Primary"
          className="pointer-events-auto select-auto w-full flex justify-center"
        >
          <div
            className={cn(
              "backdrop-blur-3xl bg-white/3 border border-white/10 rounded-full px-10 py-4 flex gap-5 shadow-2xl mt-16 max-w-6xl mx-auto items-center font-sans font-semibold tracking-tight text-sm md:text-base overflow-visible",
              scrolled ? 'bg-white/4' : 'bg-white/2'
            )}
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            {NAV_LINKS.map((link) => {
              if (link.name.toLowerCase() === 'home') {
                return (
                  <Link key={link.href} href="/" onClick={handleNavClick} className="flex items-center" aria-label="Home">
                    <Image src="/logo.png" alt="Allied logo" height={56} width={210} className="h-14 w-auto object-contain -my-4" priority />
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activePath === link.href ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm md:text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] text-white/90 whitespace-nowrap",
                    "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#D4AF37] after:rounded-full after:origin-center after:transform after:transition-transform after:duration-350 after:ease-out after:scale-x-0 after:opacity-0 after:content-['']",
                    "hover:text-[#D4AF37] hover:after:scale-x-100 hover:after:opacity-100",
                    activePath === link.href &&
                      "after:scale-x-100 after:opacity-100 text-[#D4AF37] drop-shadow-[0_6px_18px_rgba(212,175,55,0.09)]"
                  )}
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
                  tabIndex={0}
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                if (onQuoteClick) return onQuoteClick();
                router.push('/get-a-quote');
              }}
              className="relative overflow-hidden rounded-full px-6 py-2 ml-6 text-sm font-semibold text-black bg-gradient-to-r from-[#FFD700] via-[#C9A635] to-[#B8860B] transition-all duration-500 transform-gpu hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] group"
              style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}
            >
              <span className="relative z-10 text-black transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]">Enquire Now</span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out group-hover:opacity-100" />
              {/* Glow pulse effect */}
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 rounded-full" />
              {/* Rotating gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-transparent to-[#B8860B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_3s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite]" style={{ animationPlayState: 'paused' }} />
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile: Hamburger and panel remain unchanged */}
      <div className="flex lg:hidden ml-auto">
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-nav-panel"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
      {/* Mobile: Slide-in panel */}
      {mobileOpen && (
        <>
          {/* Scrim */}
          <div
            className="fixed inset-0 z-50 bg-black/50 transition-opacity"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div
            ref={panelRef}
            id="mobile-nav-panel"
            className="fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs bg-[#0B0B0B] border-l border-white/10 shadow-lg flex flex-col p-6 gap-6 transition-transform duration-300 focus:outline-none"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-lg font-bold">Menu</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                ref={firstFocusable}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav role="navigation" aria-label="Primary" className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activePath === link.href ? "page" : undefined}
                  className={cn(
                    "relative block px-2 py-3 rounded-md text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]",
                    "text-white hover:text-[#D4AF37]",
                    activePath === link.href &&
                      "after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-0.5 after:bg-[#D4AF37] after:rounded-full after:content-['']"
                  )}
                  tabIndex={0}
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                if (onQuoteClick) return onQuoteClick();
                router.push('/get-a-quote');
              }}
              className="relative overflow-hidden mt-4 bg-gradient-to-r from-[#FFD700] via-[#C9A635] to-[#B8860B] text-black font-semibold rounded-full px-5 py-3 text-base transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_25px_rgba(212,175,55,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] group shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
              ref={lastFocusable}
            >
              <span className="relative z-10">Enquire Now</span>
              {/* Shimmer effect for mobile */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out group-hover:opacity-100" />
            </button>
            {/* Apply button removed per request */}
          </div>
        </>
      )}
    </header>
  );
}

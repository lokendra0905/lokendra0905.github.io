"use client"

import { useEffect, useState } from "react"
import { navContent } from "@/content/nav"

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith("#") && href.length > 1) {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="font-mono text-sm text-primary"
          aria-label="Go to top"
        >
          {navContent.logo}
        </a>

        <ul className="hidden items-center gap-6 md:flex" role="list">
          {navContent.items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={navContent.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary/20"
        >
          {navContent.resumeLabel}
        </a>
      </nav>
    </header>
  )
}

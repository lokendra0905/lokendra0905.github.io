"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { AnimatedGrid } from "./animated-grid"
import { CodeTexture } from "./code-texture"
import { heroContent } from "@/content/hero"

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <AnimatedGrid />
      <CodeTexture />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="animate-slide-up relative flex-shrink-0">
            <div className="relative h-48 w-48 md:h-64 md:w-64">
              <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md animate-pulse-glow" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/30">
                <Image
                  src={heroContent.profileImagePath}
                  alt={`Portrait of ${heroContent.name}`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-muted-foreground font-mono">Available</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="inline-block rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-primary mb-4">
                {heroContent.badge}
              </span>
            </div>

            <p className="animate-slide-up text-muted-foreground text-lg mb-1" style={{ animationDelay: "0.15s", opacity: 0 }}>
              {heroContent.greeting}
            </p>
            <h1 className="animate-slide-up text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <span className="text-balance">{heroContent.name}</span>
            </h1>
            <p className="animate-slide-up mt-2 text-lg text-primary font-mono md:text-xl" style={{ animationDelay: "0.25s", opacity: 0 }}>
              {heroContent.title}
            </p>
            <p className="animate-slide-up mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl" style={{ animationDelay: "0.3s", opacity: 0 }}>
              {heroContent.subtitle}
            </p>
            {/* <p className="animate-slide-up mt-2 text-sm text-muted-foreground" style={{ animationDelay: "0.32s", opacity: 0 }}>
              {heroContent.credibility}
            </p> */}

            <div className="animate-slide-up mt-6 flex flex-wrap items-center gap-2" style={{ animationDelay: "0.4s", opacity: 0 }}>
              {heroContent.techPills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="animate-slide-up mt-6 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.45s", opacity: 0 }}>
              {heroContent.ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") || cta.href.startsWith("mailto") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") || cta.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
                  className="rounded-md border border-border bg-primary/10 px-4 py-2.5 font-mono text-xs text-primary transition-all hover:border-primary/40 hover:bg-primary/20"
                >
                  {cta.label}
                </Link>
              ))}
            </div>

            <div className="animate-slide-up mt-6 flex items-center gap-4" style={{ animationDelay: "0.5s", opacity: 0 }}>
              {heroContent.socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] ?? Mail
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-md border border-border bg-secondary/30 px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                    aria-label={`${link.label}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary" aria-label="Scroll to About section">
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

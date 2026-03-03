"use client"

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { contactContent } from "@/content/contact"

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">
          {contactContent.comment}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {contactContent.heading}
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {contactContent.message}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {contactContent.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap] ?? Mail
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-md border border-border bg-secondary/20 px-5 py-3 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                aria-label={`Connect on ${social.label}`}
              >
                <Icon className="h-4 w-4" />
                <span>{social.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

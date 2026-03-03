"use client"

import { Code2, Globe, Terminal, Zap, Layers, Activity, Cpu } from "lucide-react"
import { aboutContent } from "@/content/about"

const iconMap = { code: Code2, zap: Zap, globe: Globe, terminal: Terminal, layers: Layers, activity: Activity, cpu: Cpu } as const

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border bg-card/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">
          {aboutContent.comment}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {aboutContent.heading}
        </h2>
        {aboutContent.paragraphs.map((p, i) => (
          <p key={i} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {aboutContent.highlights.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Code2
            return (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-secondary/20 p-6 transition-all hover:border-primary/30 hover:bg-secondary/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

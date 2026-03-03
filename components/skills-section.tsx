"use client"

import { skillsContent } from "@/content/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-border bg-card/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">
          {skillsContent.comment}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {skillsContent.heading}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillsContent.groups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

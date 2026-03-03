"use client"

import { ExternalLink } from "lucide-react"
import { experienceContent } from "@/content/experience"

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">
          {experienceContent.comment}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {experienceContent.heading}
        </h2>

        <div className="mt-12 space-y-2">
          {experienceContent.items.map((exp) => {
            const Wrapper = exp.url ? "a" : "div"
            const wrapperProps = exp.url
              ? { href: exp.url, target: "_blank" as const, rel: "noopener noreferrer" }
              : {}
            return (
              <Wrapper
                key={exp.role}
                className="group block rounded-lg border border-transparent p-6 transition-all hover:border-border hover:bg-secondary/20"
                {...wrapperProps}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  <span className="flex-shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground md:w-40 md:pt-1">
                    {exp.period}
                  </span>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 font-semibold text-foreground">
                      <span>{exp.role}</span>
                      <span className="text-muted-foreground">{"\u00B7"}</span>
                      <span className="text-primary">{exp.company}</span>
                      {exp.url && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />}
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground list-disc list-inside pl-1">
                      {Array.isArray(exp.description)
                        ? exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))
                        : <li>{exp.description}</li>}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

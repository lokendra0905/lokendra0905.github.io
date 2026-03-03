"use client"

import { ExternalLink, Github } from "lucide-react"
import { projectsContent } from "@/content/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative border-t border-border bg-card/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">
          {projectsContent.comment}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {projectsContent.heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsContent.items.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/30"
            >
              <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

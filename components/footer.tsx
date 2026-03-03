import { footerContent } from "@/content/nav"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            {footerContent.credit}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {footerContent.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}

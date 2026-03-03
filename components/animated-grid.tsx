"use client"

export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Main grid pattern */}
      <svg className="absolute inset-0 h-full w-full animate-grid-fade" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Radial glow in the center */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      </div>

      {/* Accent glow bottom-right */}
      <div className="absolute bottom-0 right-0">
        <div className="h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>
    </div>
  )
}

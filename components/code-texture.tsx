"use client"

const codeLines = [
  'const app = createServer({',
  '  port: 3000,',
  '  middleware: [cors(), auth()],',
  '});',
  '',
  'interface User {',
  '  id: string;',
  '  name: string;',
  '  role: "admin" | "user";',
  '}',
  '',
  'async function fetchData<T>(',
  '  endpoint: string',
  '): Promise<T> {',
  '  const res = await fetch(endpoint);',
  '  return res.json();',
  '}',
  '',
  'export const handler = async (',
  '  req: Request',
  ') => {',
  '  const users = await db',
  '    .select()',
  '    .from(schema.users)',
  '    .where(eq(schema.users.active, true));',
  '',
  '  return Response.json({ users });',
  '};',
  '',
  'app.get("/api/v1/users", handler);',
  'app.post("/api/v1/auth", authHandler);',
  '',
  '// WebSocket support',
  'const ws = new WebSocketServer({',
  '  server: app,',
  '  path: "/ws",',
  '});',
  '',
  'ws.on("connection", (socket) => {',
  '  socket.send(JSON.stringify({',
  '    type: "connected",',
  '    timestamp: Date.now(),',
  '  }));',
  '});',
]

export function CodeTexture() {
  const doubledLines = [...codeLines, ...codeLines]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]" aria-hidden="true">
      <div className="animate-code-scroll font-mono text-xs leading-6 text-foreground whitespace-pre">
        {doubledLines.map((line, i) => (
          <div key={i}>{line || '\u00A0'}</div>
        ))}
      </div>
    </div>
  )
}

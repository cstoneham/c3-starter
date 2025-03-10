import { serve } from "bun";

const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === "/api/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    
    return new Response("API endpoint not found", { status: 404 });
  },
});

console.log(`API server listening on http://localhost:${server.port}`);
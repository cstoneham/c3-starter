import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { appRouter } from "./router";

const app = new Hono();

// Middleware
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type"],
    exposeHeaders: ["Content-Length"],
    maxAge: 86400,
  })
);

// Routes
app.get("/api/health", (c) => {
  return c.json({ status: "ok" });
});

// 404 handler
app.notFound((c) => {
  return c.json({ message: "API endpoint not found" }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error(`Error: ${err.message}`);
  return c.json({ error: "Internal Server Error" }, 500);
});

// TRPC
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

// Start the server
const port = 3000;
export default {
  port,
  fetch: app.fetch,
};

console.log(`API server listening on http://localhost:${port}`);

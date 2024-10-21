import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { resolveRoutes } from "./router.tsx";

const app = new Hono();

app.use("*", logger(), poweredBy());
app.all("/static/*", serveStatic({ root: "./public" }));

// Dynamically add routes from src/routes directory
resolveRoutes(app);

// Start the server
Deno.serve(app.fetch);

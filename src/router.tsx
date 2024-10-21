import { Hono } from "hono";
import { relative, resolve, SEPARATOR } from "@std/path";

export const resolveRoutes = async (app: Hono) => {
  const routesDir = resolve(Deno.cwd(), "src", "routes");

  // Traverse all files and directories recursively
  for await (const entry of walkDir(routesDir)) {
    if (entry.endsWith("index.tsx")) {
      const routePath = buildRoutePath(routesDir, entry);
      const routeModule = await import(entry);

      app.use(routePath, routeModule.default);
    }
  }
};

// Helper function to walk through directories and yield file paths
const walkDir = async function* (dir: string): AsyncIterableIterator<string> {
  for await (const entry of Deno.readDir(dir)) {
    const entryPath = resolve(dir, entry.name);
    if (entry.isDirectory) {
      yield* walkDir(entryPath); // Recurse into subdirectories
    } else {
      yield entryPath; // Yield the file path
    }
  }
};

// Function to build the route path based on the relative file path
const buildRoutePath = (baseDir: string, filePath: string) => {
  const relativePath = relative(baseDir, filePath); // Get relative path from the base routes dir
  let routePath = `/${relativePath.replace(".tsx", "")}`; // Remove file extension

  // Handle dynamic params (e.g., [slug] -> :slug)
  routePath = routePath
    .split(SEPARATOR)
    .map((segment) => {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        return `:${segment.slice(1, -1)}`; // Convert [slug] -> :slug
      }
      return segment;
    })
    .join("/");

  // Special case for index.tsx files (remove trailing /index)
  routePath = routePath.replace(/\/index$/, "") || "/"; // Ensure root "/" for the main index

  console.log(`Resolved route: ${routePath}`);
  return routePath;
};

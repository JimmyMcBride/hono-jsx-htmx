# Dhonosaur Stack

This project is a web application built using the **Deno 2.0** runtime, the **Hono** web framework, **JSX** for templating, and **HTMX** for dynamic frontend behavior.

## Features

- **Deno**: A modern, secure runtime for JavaScript and TypeScript.
- **Hono**: A minimal, fast web framework for building HTTP applications with support for middleware, JSX templating, and more.
- **JSX**: Write React-like components that are rendered on the server.
- **HTMX**: Add interactive, Ajax-like behavior to your frontend without needing complex client-side frameworks.
- **File-based Routing**: Automatically map file structures in the `src/pages` directory to URL pages.
- **Custom Layouts**: Pages are wrapped in a common layout for consistent structure.

## Project Structure

```plaintext
src/
├── pages/
│   ├── index.tsx               # Home page ("/")
│   ├── about/
│   │   └── index.tsx           # About page ("/about")
│   ├── blog/
│   │   ├── index.tsx           # Blog main page ("/blog")
│   │   └── [slug]/
│   │       └── index.tsx       # Dynamic blog posts ("/blog/:slug")
│   └── layout.tsx              # Layout component used across the app
├── server.tsx                  # Main entry point for the server
├── router.ts                   # Handles dynamic route resolution
```

## Getting Started

### Prerequisites

- Install [Deno](https://deno.land/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JimmyMcBride/hono-jsx-htmx.git
   cd hono-jsx-htmx
   ```

2. Run the project using Deno:

   ```bash
   deno run dev
   ```

### File-based Routing

This project uses a file-based routing system. `index.tsx` files ONLY inside the `src/pages` directory are mapped to pages automatically:

- `index.tsx` files are mapped to the root of their directory.
- Dynamic pages are supported by wrapping file names with brackets (e.g., `[slug]` becomes `:slug`).

### Layout Component

All pages in the app can be wrapped in a common layout by importing the `Layout` component from `src/pages/layout.tsx`:

```tsx
import { Layout } from "@/layout";

export default (c) => {
  return c.html(
    <Layout title="Example">
      <h1>Welcome to the Example Page</h1>
    </Layout>,
  );
};
```

### HTMX Integration

HTMX is used to add dynamic behavior to your frontend. For example, a button using HTMX could trigger an Ajax request:

```tsx
app.get("/button", (c: Context) => {
  return c.html(<p>I'm not a button anymore!</p>);
});

const Button: FC = () => {
  return (
    <div>
      <button class="btn primary-solid" hx-get="/button" hx-swap="outerHTML">
        Click me
      </button>
    </div>
  );
};
```

### Import Map

The project takes advantage the `deno.json` to alias imports, making them simpler and cleaner.

```json
{
  "imports": {
    "@/layout": "./src/pages/layout.tsx",
    "@": "./src/server.tsx"
  }
}
```

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to modify any sections based on your project’s specifics, such as adding more details to the setup process, dependencies, or advanced features. Let me know if you'd like further changes!

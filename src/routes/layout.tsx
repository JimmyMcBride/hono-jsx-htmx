import { html } from "hono/html";
import type { FC } from "hono/jsx";
type LayoutProps = {
  title: string;
  // deno-lint-ignore no-explicit-any
  children?: any;
};
const Index: FC<LayoutProps> = (props: LayoutProps) =>
  html`<!doctype html>
    <html>
      <head>
        <title>${props.title}</title>
        <script
          src="https://unpkg.com/htmx.org@2.0.3"
          integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        ${props.children}
      </body>
    </html> `;

export default function Layout(props: LayoutProps) {
  return (
    <Index title={props.title}>
      <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
      </nav>
      {props.children}
    </Index>
  );
}

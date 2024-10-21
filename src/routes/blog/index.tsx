import Layout from "@/layout";
import type { Context } from "hono";

export default (c: Context) => {
  return c.html(
    <Layout title="Blog">
      <h1>Blog Posts...</h1>
      <ul>
        <li>
          <a href="/blog/welcome">Welcome</a>
        </li>
        <li>
          <a href="/blog/hello-world">Hello world!</a>
        </li>
      </ul>
    </Layout>,
  );
};

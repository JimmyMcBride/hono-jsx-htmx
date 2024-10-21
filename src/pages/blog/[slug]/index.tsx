import Layout from "@/layout";
import type { Context } from "hono";

export default (c: Context) => {
  const slug = c.req.param("slug");
  return c.html(
    <Layout title={slug}>
      <h1>Blog Post: {slug}</h1>
    </Layout>,
  );
};

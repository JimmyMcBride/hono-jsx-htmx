import type { Context } from "hono";
import Layout from "@/layout";
import Button from "./button.tsx";

export default (c: Context) => {
  return c.html(
    <Layout title="Home">
      <h1>Welcome to the Home Page!</h1>
      <Button />
    </Layout>,
  );
};

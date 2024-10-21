import app from "@";
import { type Context } from "hono";
import type { FC } from "hono/jsx";

app.get("/button", (c: Context) => {
  return c.html(<p>I'm not a button anymore!</p>);
});

export const Button: FC = () => {
  return (
    <div>
      <button class="btn primary-solid" hx-get="/button" hx-swap="outerHTML">
        Click me
      </button>
    </div>
  );
};

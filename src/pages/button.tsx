import app from "@";
import { type Context } from "hono";

let count = 0;

app.get("/button", (c: Context) => {
  count++;
  return c.text(`Time's clicked: ${count}`);
});

export default function Button() {
  return (
    <div>
      <p class="times-clicked">Time's clicked: {count}</p>
      <button hx-get="/button" hx-target=".times-clicked" hx-swap="innerHTML">
        Click me
      </button>
    </div>
  );
}

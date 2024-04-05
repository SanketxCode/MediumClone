import { Hono } from "hono";

const app = new Hono();
// route to signup a user
app.post("/api/v1/signup", (c) => {
  return c.text("Hello Hono!");
});

// rouote to signin user
app.post("/api/v1/signin", (c) => {
  return c.text("Hello Hono!");
});

//route to post a blog
app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

//route to edit a blog
app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

// route to get a specific blog by id
app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;

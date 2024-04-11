import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  createBloginput,
  updateBloginput,
} from "@sanket-777/medium-blog-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//middleware
blogRouter.use("/*", async (c, next) => {
  const authheader = c.req.header("authorization") || " ";

  const token = authheader.split(" ")[1];
  try {
    const user = await verify(token, c.env?.SECRET);
    c.set("userId", user.id);
    console.log("Passed Middlewares !");

    await next();
  } catch (error) {
    c.status(411);
    return c.json({
      error: error,
    });
  }
});

//route to post/create a blog
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // const { success } = createBloginput.safeParse(body);

  // if (!success) {
  //   c.status(411);
  //   return c.json({
  //     error: " Wrong Inputs",
  //   });
  // }
  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    });

    return c.json({
      message: "Blog created Sucessfully !",
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: error,
    });
  }
});

//route to edit a blog
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = updateBloginput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      error: " Wrong Inputs",
    });
  }
  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      message: "blog updated",
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: error,
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.blog.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        authorId:true,
        author: {
          select: { name: true, id: true },
        },
      },
    });

    console.log(blogs);

    return c.json({
      blogs: blogs,
    });
  } catch (error) {
    c.status(411);
    c.json({
      error: error,
    });
  }
});

// route to get a specific blog by id
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log(id);
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
      select: {
        authorId:true,
        title: true,
        content: true,
        id: true,
        author: {
          select: { name: true,id:true },
        },
      },
    });

    return c.json({
      blog: blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: error,
    });
  }
});

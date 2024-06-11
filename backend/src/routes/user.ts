import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signUpinput,signIninput } from "@sanket-777/medium-blog-common";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = signUpinput.safeParse(body);

  if(!success)
    {
        c.status(411);
        return c.json({
            error  :  " Wrong Inputs"
        })
    }

  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    
    const token = await sign({ id: user.id }, c.env?.SECRET);

  
    //returning the token to user
    return c.json({
    message : "User created Sucessfully !",
      jwt: token,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error: "User with same email already Exists !",
    });
  }
});

// rouote to signin user
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const {success} = signIninput.safeParse(body);

  if(!success)
    {
        c.status(411);
        return c.json({
            error  :  " Wrong Inputs"
        })
    }
  // finding the user in the db
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: body.username,
        password: body.password,
      },
    });

    // returning the error is user not exists
    console.log(user);

    if (!user) {
      c.status(403);
      return c.json({
        error: "Ooops , User not found !",
      });
    }

    const token = await sign({ id: user.id }, c.env.SECRET);

    //returning the token to user
    return c.json({
      jwt: token,
      id :user.id
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: error,
    });
  }
});

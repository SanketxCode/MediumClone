import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signUpinput, signIninput } from "@sanket-777/medium-blog-common";
import { jwtDecode } from "jwt-decode";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>();

// userRouter.post("/signup", async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env?.DATABASE_URL,
//   }).$extends(withAccelerate());

//   const body = await c.req.json();
//   const { success } = signUpinput.safeParse(body);

//   if (!success) {
//     c.status(411);
//     return c.json({
//       error: " Wrong Inputs",
//     });
//   }

//   try {
//     const user = await prisma.user.create({
//       data: {
//         username: body.username,
//         password: body.password,
//         name: body.name,
//       },
//     });

//     const token = await sign({ id: user.id }, c.env?.SECRET);

//     //returning the token to user
//     return c.json({
//       message: "User created Sucessfully !",
//       jwt: token,
//       id: "Sanket",
//     });
//   } catch (error) {
//     c.status(403);
//     console.log(error);

//     return c.json({
//       error: "User with same email already Exists !",
//     });
//   }
// });

// // rouote to signin user
// userRouter.post("/signin", async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());

//   const body = await c.req.json();

//   const { success } = signIninput.safeParse(body);

//   if (!success) {
//     c.status(411);
//     return c.json({
//       error: " Wrong Inputs",
//     });
//   }
//   // finding the user in the db
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         username: body.username,
//         password: body.password,
//       },
//     });

//     // returning the error is user not exists
//     console.log(user);

//     if (!user) {
//       c.status(403);
//       return c.json({
//         error: "Ooops , User not found !",
//       });
//     }

//     const token = await sign({ id: user.id }, c.env.SECRET);

//     //returning the token to user
//     return c.json({
//       jwt: token,
//       id: user.id,
//     });
//   } catch (error) {
//     c.status(411);
//     return c.json({
//       error: error,
//     });
//   }
// });

userRouter.post("/auth/google", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const { credential } = await c.req.json();
    const decodedToken = jwtDecode(credential);
    console.log(credential);

    const { email, name } = decodedToken;

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          username: email.split("@")[0],
          password: "",
        },
      });
    }
    const token = await sign({ id: user.id }, c.env?.SECRET);

    return c.json({ message: "User logged in", jwt: token, id: user.id }, 200);
  } catch (error) {
    console.error("Error during authentication:", error);
    return c.json({ message: "Internal server error" }, 500);
  } finally {
    await prisma.$disconnect();
  }
});

import z from "zod";

export const signUpinput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signIninput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
});

export const createBloginput =  z.object({
    title :z.string(),
    contene:z.string(),
})


export const updateBloginput = z.object({
    id : z.string(),
    title :z.string(),
    contene:z.string(),
})

export type signUpinput = z.infer<typeof signUpinput>
export type signIninput = z.infer<typeof signIninput>
export type createBloginput = z.infer<typeof createBloginput>
export type updateBloginput = z.infer<typeof updateBloginput>
import { z } from "zod";

export const signUpShcema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password should be at least 10 character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpShcema>;

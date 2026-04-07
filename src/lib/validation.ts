import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("সঠিক ইমেইল দিন"),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
  remember_me: z.string().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
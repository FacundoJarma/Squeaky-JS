import { z, defineCollection } from "astro:content";

const lectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    difficult: z.enum(["Fácil", "Medio", "Difícil"]),
    description: z.string().optional(),
    classList: z.string(),
    index: z.number(),
  }),
});

export const collections = {
  lecciones: lectionsCollection,
};

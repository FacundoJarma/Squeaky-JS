import { z, defineCollection, reference } from "astro:content";

const lectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    difficult: z.enum(["Fácil", "Medio", "Difícil"]),
    description: z.string().optional(),
    classList: z.string(),
    index: z.number(),
    exercises: z.array(reference("ejercicios")).optional(),
  }),
});

const exercicesCollection = defineCollection({
  type: "data",
  schema: z.object({
    head: z.object({
      title: z.string(),
      lection: reference("lecciones"),
    }),
    body: z.object({
      question: z.string(),
      options: z.array(
        z.object({
          text: z.string(),
          correct: z.boolean(),
        })
      )
    })
  }),

});


export const collections = {
  lecciones: lectionsCollection,
  ejercicios: exercicesCollection
};

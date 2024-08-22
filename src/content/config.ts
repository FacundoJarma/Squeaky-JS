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
      type: z.enum(["Unica Opcion", "Multiple Opcion", "Arrastra"]),
    }),
    body: z.object({
      //Unica Opcion y Multiple Opcion
      question: z.string().optional(),
      options: z.array(
        z.object({
          text: z.string(),
          correct: z.boolean(),
        })
      ).optional(),

      //Arrastra
      bloques: z.array(
        z.object({
          type: z.enum(["in-line", "block", "oneWord"]),
          code: z.string(),
          order: z.number(),
        })
      ).optional()

    })
  }),

});


export const collections = {
  lecciones: lectionsCollection,
  ejercicios: exercicesCollection
};

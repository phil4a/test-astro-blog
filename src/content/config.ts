// Импортируйте утилиты из `astro:content`.
import { z, defineCollection } from "astro:content";
// Определите `type` и `schema` для каждой коллекции
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
// Экспортируйте один объект `collections` для регистрации вашей коллекции (коллекций)
export const collections = {
  posts: postsCollection,
};

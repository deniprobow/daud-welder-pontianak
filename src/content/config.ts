import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Gallery collection schema
const galleryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    counter: z.array(
      z.object({
        name: z.string(),
        number: z.number(),
        suffix: z.string().optional(),
        prefix: z.string().optional(),
      })
    ),
    gallery: z.array(
      z.object({
        image: z.string(),
      })
    ),
  }),
});

// Services collection schema
const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    gallery: z.array(
      z.object({
        image: z.string(),
      })
    ),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  gallery: galleryCollection,
  services: servicesCollection,
};

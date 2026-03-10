import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    status: z.string(),
    order: z.number().default(0),
    cta: z
      .object({
        text: z.string(),
        href: z.string(),
      })
      .optional(),
    privacyPolicy: z.string().optional(),
  }),
});

export const collections = { projects };

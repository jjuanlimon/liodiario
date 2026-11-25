import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './config';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string().nullish().transform((v) => v ?? ''),
    date: z.coerce.date(),
    category: z.enum(CATEGORIES),
    image: z.string().nullish(),
    imageAlt: z.string().nullish().transform((v) => v ?? ''),
    video: z.string().nullish(),
    featured: z.boolean().nullish().transform((v) => v ?? false),
  }),
});

export const collections = { noticias };

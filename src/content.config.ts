import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['Humanoids', 'Robotics', 'AI', 'Research', 'Industry', 'Deals']),
    author: z.string().default('HUMANOID Staff'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readTime: z.string().optional(),
  }),
});

export const collections = { blog };

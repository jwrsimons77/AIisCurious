import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /** Topic cluster, e.g. "Getting Started with AI" */
      cluster: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      /** Cover image: shown on the post, used for Article schema + social sharing */
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = { blog };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sharedSchema = z.object({
  lang: z.enum(['es', 'en']),
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  url: z.url().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: sharedSchema.extend({
    repo: z.url().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: sharedSchema.extend({
    stage: z.enum(['proposal', 'working-paper', 'published']).default('proposal'),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    status: z.enum(['reading', 'finished', 'to-read']).default('finished'),
    rating: z.number().min(0).max(5).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, research, books };

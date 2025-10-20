import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string()
    })
})

export const collections = {posts}
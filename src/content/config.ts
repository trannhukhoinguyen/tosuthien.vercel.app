import { defineCollection, z } from "astro:content";

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    master: z.string().default(""),
    categories: z.array(z.string()).default([""]),
    tags: z.array(z.string()).default([""]),
    draft: z.boolean().optional(),
  }),
});
const faqsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    master: z.string().default(""),
    categories: z.array(z.string()).default([""]),
    tags: z.array(z.string()).default([""]),
    draft: z.boolean().optional(),
  }),
});
const koansCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    masters: z.array(z.string()).default([""]),
    types: z.array(z.string()).default([""]),
    tags: z.array(z.string()).default([""]),
    draft: z.boolean().optional(),
  }),
});
const cautionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([""]),
    draft: z.boolean().optional(),
  }),
});

// Collection schema
const mastersCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([""]),
    draft: z.boolean().optional(),
  }),
});
const monasteriesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([""]),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Banner schema
const bannerSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string(),
  button: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }),
});

// Features schema
const featureSchema = z.object({
  title: z.string(),
  image: z.string(),
  content: z.string(),
  bulletpoints: z.array(z.string()),
  button: z.object({
    enable: z.boolean(),
    label: z.string().optional(),
    link: z.string().optional(),
  }),
});

// Content schema (for the main content structure with banner and features)
const contentSchema = z.object({
  banner: bannerSchema,
  features: z.array(featureSchema),
});

// Content collection schema
const contentCollection = defineCollection({
  schema: contentSchema,
});

// huatou schema
const huatouSchema = z.object({
  name: z.string(),
  designation: z.string(),
  avatar: z.string(),
  content: z.string(),
});

// huatous schema
const huatousSchema = z.array(huatouSchema);

// Call to Action schema
const callToActionSchema = z.object({
  enable: z.boolean(),
  title: z.string(),
  image: z.string(),
  description: z.string(),
  button: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string().url(),
  }),
});

// Export collections
export const collections = {
  books: booksCollection,
  faqs: faqsCollection,
  koans: koansCollection,
  cautions: cautionsCollection,
  masters: mastersCollection,
  monasteries: monasteriesCollection,
  pages: pagesCollection,
  content: contentCollection,
  huatous: huatousSchema,
  callToAction: callToActionSchema,
};

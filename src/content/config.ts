import { defineCollection, z } from "astro:content";

// Collection schema
const conversationsCollection = defineCollection({
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
const teachingsCollection = defineCollection({
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
const blogsCollection = defineCollection({
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
const koansCollection = defineCollection({
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

// faqHome schema
const faqHomeSchema = z.object({
  name: z.string(),
  designation: z.string(),
  avatar: z.string(),
  content: z.string(),
});

// faqHomes schema
const faqHomesSchema = z.array(faqHomeSchema);

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
  blogs: blogsCollection,
  conversations: conversationsCollection,
  teachings: teachingsCollection,
  koans: koansCollection,
  masters: mastersCollection,
  monasteries: monasteriesCollection,
  pages: pagesCollection,
  content: contentCollection,
  huatous: huatousSchema,
  faqHomes: faqHomesSchema,
  callToAction: callToActionSchema,
};

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import languagesJSON from "./src/config/language.json";

const { default_language } = config.settings;

const supportedLang = [...languagesJSON.map((lang) => lang.languageCode)];
const disabledLanguages = config.settings.disable_languages;

// Filter out disabled languages from supportedLang
const filteredSupportedLang = supportedLang.filter(
  (lang) => !disabledLanguages.includes(lang),
);

export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://patriarchalzen.quest",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "ignore",
  i18n: {
    locales: filteredSupportedLang,
    defaultLocale: default_language,
  },
  image: {
    service: squooshImageService(),
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'daily',
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Accordion",
        "@/shortcodes/Button",
        "@/shortcodes/Indent",
        "@/shortcodes/Notice",
        "@/shortcodes/Tab",
        "@/shortcodes/Tabs",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/YoutubePlaylist",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});

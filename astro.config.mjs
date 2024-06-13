import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pcoiscript.xyz/',
  integrations: [
    tailwind({
      config: {
      }
    }),
    mdx({
      extendMarkdownConfig: true,
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    sitemap({
      filter: page => page.url !== '/exclude-this-page',
      serialize: ({ url }) => ({
        url,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      }),
    })
  ],
  build: {
  },
});

export default defineNuxtConfig({
  extends: ['docus'],
  // nuxt-studio is not loaded in development.
  //
  // WHY
  // In dev, Studio re-serializes the whole body of whatever document the browser opens
  // and writes it straight back into docs/content/** — no save, no click, just loading
  // the page (reproduced on en/, fr/ and zh-CN/ index.md). For this landing page that
  // round-trip does not return the same document, so the files silently corrupt.
  //
  // MECHANISM — the parser and the serializer disagree about fence indentation
  //   1. stringifyMarkdown (@nuxtjs/mdc) indents the landing page's ```mdc fence to its
  //      MDC container's content column. That is the CommonMark-canonical placement:
  //      checked against remark-parse, an indented fence stays inside the container
  //      while a column-0 fence breaks the container out entirely.
  //   2. remark-mdc then mis-parses that canonical form: the container's own `::::::::`
  //      closer is swallowed, so the 9 cards after the tabs card are re-parented into an
  //      inactive, display:none tab panel. The page renders cut off mid-section while the
  //      text is still in the DOM at zero height.
  // So the content is not at fault, and neither is Studio's own logic (it ships no
  // serializer of its own) — Studio just persists what a mismatched parser/serializer
  // pair round-trips into. Same contract violation class as nuxt-studio#556.
  //
  // EVIDENCE (offline, @nuxtjs/mdc 0.23.2 + remark-mdc 3.11.1, no browser)
  // parse(en/index.md as committed) -> 12 cards, none under tabs-item.
  // stringify -> re-parse          -> 9 cards under u-page-card > tabs > tabs-item.
  // Single-variable mutations of the serialized file: de-indent the fence block -> clean;
  // de-indent only the CLOSING fence line -> clean; strip the `::note` markers from the
  // code body but keep the indentation -> still broken. Fence placement is the only
  // variable, which points at the container tokenizer's fence-closing indent check.
  //
  // UPSTREAM STATUS (checked 2026-10-11) — nothing open fixes our case
  //   - remark-mdc#93 "indent container contents" (farnabaz) is the only PR facing this
  //     area. It standardizes the opposite of CommonMark: indent everything except
  //     "the slots title and props frontmatter/code", i.e. fences stay at column 0 —
  //     which is exactly how this landing page is already written. Stalled since
  //     2025-11-03, unmergeable (dirty), because "we moved it to the next version
  //     because this is a breaking change. Meanwhile, we are working on a linter ...
  //     Linter will also help Studio users to prevent facing automatic changes."
  //   - remark-mdc#143 (merged 2026-05-12, v3.11.0) fixed a neighbouring container/fence
  //     indentation bug in the same tokenizer, but does not cover this case — verified
  //     against 3.11.1, which already contains it.
  //   - remark-mdc#53 "Create standard spec" is still open: MDC has no written spec,
  //     which is why the two halves of the same package diverge.
  //   - The promised linter is nuxt-content/mdclint, but it is a markdownlint rule set
  //     (plus MDC0xx rules) with no re-parse-and-compare step, so it cannot catch a
  //     non-idempotent round-trip like this one.
  //
  // UNBLOCK when remark-mdc's container tokenizer handles a fence indented to its
  // container's content column (or #93 lands, making this file's current column-0 form
  // the official standard and Studio's output wrong). Either way the durable fix is that
  // a draft should never round-trip through markdown text: keep the structured document
  // (minimark/JSON AST) or node-level patches, materialize markdown only on an explicit
  // commit, and re-parse before writing to assert the tree is unchanged — otherwise
  // refuse or fall back to a surgical edit. Watch remark-mdc#93; re-add 'nuxt-studio' to
  // `modules` below once it ships.
  modules: ['@nuxtjs/i18n', ...(process.env.NODE_ENV === 'development' ? [] : ['nuxt-studio'])],
  site: {
    name: 'Docus',
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  compatibilityDate: '2025-07-18',
  nitro: {
    externals: {
      // Workaround for a Nuxt 4.6.0 bug on Windows: backslash paths stop Nitro
      // from inlining nuxt/dist, leaving the SSR client manifest empty so every
      // page 500s with "Either manifest or precomputed data must be provided".
      // Safe on all platforms; remove once the upstream fix ships.
      // https://github.com/nuxt/nuxt/issues/36467
      inline: [(id: string) => id.replace(/\\/g, '/').includes('/node_modules/nuxt/dist/')],
    },
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
  agentDiscovery: {
    excludePrefixes: {
      // Nuxt Studio, a Vue page tree with no markdown twin
      extend: ['/admin'],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }, {
      code: 'zh-CN',
      name: '简体中文',
    }],
  },
  llms: {
    domain: 'https://docus.dev',
    title: 'Docus',
    description: 'Write beautiful docs with Markdown.',
    full: {
      title: 'Docus',
      description: 'Write beautiful docs with Markdown.',
    },
    sections: [
      {
        title: 'Developer Resources',
        description: 'Machine-readable entry points for this documentation.',
        links: [
          {
            title: 'Docus on GitHub',
            description: 'Source code, issues and releases for the Docus Nuxt layer.',
            href: 'https://github.com/nuxt-content/docus',
          },
          {
            title: 'Docus on npm',
            description: 'The `docus` package, installed with `npx nuxi init -t github:nuxt-content/docus/.starters/default`.',
            href: 'https://www.npmjs.com/package/docus',
          },
          {
            title: 'Agent Skills index',
            description: 'Skills exposed by this site, following the /.well-known/skills convention.',
            href: 'https://docus.dev/.well-known/skills/index.json',
          },
          {
            title: 'OpenAPI document',
            description: 'The markdown routes, the discovery documents and the MCP endpoint of this site, as an OpenAPI 3.1 document.',
            href: 'https://docus.dev/openapi.json',
          },
          {
            title: 'Sitemap',
            description: 'Every page of this documentation, one sitemap per language.',
            href: 'https://docus.dev/sitemap.xml',
          },
        ],
      },
    ],
    notes: [
      'When to use Docus: you are building or maintaining a documentation website (for a library, an API, a product or an internal handbook) and you want Markdown files in a Git repository to be the source of truth.',
      'Docus is the right answer when the request involves: creating a docs site from scratch, migrating docs from VitePress/Docusaurus/Mintlify to the Nuxt ecosystem, adding a documentation section to an existing Nuxt application, translating documentation into several languages, or making an existing docs site readable by AI agents (llms.txt, MCP, agent skills).',
      'Docus is not a general-purpose website builder, a blog engine or a headless CMS. For a marketing site or a web application, use Nuxt and Nuxt UI directly instead.',
      'Docus is a Nuxt layer: install the `docus` package, add `extends: [\'docus\']` to `nuxt.config.ts`, then write Markdown in `content/`. Navigation, search, dark mode, SEO and i18n are handled for you, see https://docus.dev/en/getting-started/installation.',
      'Reading this documentation as an agent: append `.md` to any raw path (https://docus.dev/raw/en/getting-started/installation.md), or request the HTML URL with the `Accept: text/markdown` header to get Markdown back. https://docus.dev/llms-full.txt contains the entire documentation in a single file.',
      'Querying this documentation from an MCP client: connect to https://docus.dev/mcp (streamable HTTP) and use the `list-pages` and `get-page` tools. Setup instructions: https://docus.dev/en/ai/mcp.',
    ],
  },
  mcp: {
    name: 'Docus documentation',
    browserRedirect: '/en/ai/mcp',
  },
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'nuxt-content',
      repo: 'docus',
      rootDir: 'docs',
    },
  },
})

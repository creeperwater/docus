---
seo:
  title: 用 Markdown 编写精美文档
  description: 快速交付灵活且对 SEO 友好的文档，开箱即拥有精美设计。Docus 汇聚了 Nuxt 生态的精华，由 Nuxt UI 驱动。
---

::u-page-hero
#title
用 Markdown 编写精美文档。

#description
快速交付灵活且对 SEO 友好的文档，开箱即拥有精美设计。 :br Docus 汇聚了 Nuxt 生态的精华。

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /zh-cn/getting-started/installation
  trailing-icon: i-lucide-arrow-right
  ---
  开始使用
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/nuxt-content/docus
  variant: outline
  ---
  在 GitHub 上标星
  :::

#headline
  :::u-button
  ---
  size: sm
  to: https://github.com/nuxt-content/docus/releases/tag/v5.0.0
  variant: outline
  ---
  Docus v5 →
  :::
::

::u-page-section
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: group col-span-2 lg:col-span-1
    target: _blank
    to: https://nuxt.com
    ---
    :floating-nuxt

    #title
    基于 [Nuxt](https://nuxt.com) 构建

    #description
    由最知名的 Vue 框架深度优化。Docus 为你提供构建快速、高性能且对 SEO 友好的网站所需的一切。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    to: https://ui.nuxt.com
    ---
      :::::u-color-mode-image
      ---
      height: 320
      width: 859
      alt: 由 UI 驱动的精美视觉
      class: w-full h-80 object-cover rounded-lg
      dark: /landing/dark/templates-ui-pro.webp
      light: /landing/light/templates-ui-pro.webp
      ---
      :::::

    #title
    由 [Nuxt UI](https://ui.nuxt.com) 驱动

    #description
    开箱即用即为精美，设计上极简却高度可自定义。Docus 借助 Nuxt UI 为你带来零样板代码的最佳文档编写体验，让你专注于内容本身。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::tabs
        ::::::tabs-item{.mt-5 icon="i-lucide-eye" label="预览"}
          :::::::div{.flex.flex-col.gap-4}
            ::::::::note{.my-0}
            这里是一些补充信息。
            ::::::::

            ::::::::tip{.my-0}
            这里是一条有用的建议。
            ::::::::

            ::::::::warning{.my-0}
            请谨慎执行此操作，它可能产生意外结果。
            ::::::::

            ::::::::caution{.my-0}
            此操作无法撤销。
            ::::::::
          :::::::
        ::::::

        ::::::tabs-item
        ---
        class: mt-5 mb-2 text-xs overflow-x-auto
        icon: i-lucide-code
        label: 代码
        ---
```mdc
::note
这里是一些补充信息。
::

::tip
这里是一条有用的建议。
::

::warning
请谨慎执行此操作，它可能产生意外结果。
::

::caution
此操作无法撤销。
::
```
        ::::::
      :::::

    #title
    由 [Nuxt Content](https://content.nuxt.com) 增强的 Markdown 语法

    #description
    你唯一需要操心的就是撰写内容。用 Markdown 编写页面，并通过 MDC 语法扩展以嵌入 Nuxt UI 或自定义 Vue 组件。结构、路由与渲染均已为你处理妥当。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1
    ---
    :assistant-demo

    #title
    内置[智能助手]{.text-primary}

    #description
    让访客以自然语言向你的文档提问。助手会检索你的内容，并给出带来源引用的准确答案。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1 min-h-[450px]
    target: _blank
    ---
    :color-mode-switch

    #title
    [Nuxt Color](https://color-mode.nuxtjs.org/) 模式

    #description
    内置深色模式，无需任何配置。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::u-color-mode-image
      ---
      height: 554
      width: 859
      alt: 内置导航与全文搜索
      class: rounded-lg
      dark: /landing/dark/command-menu.png
      format: webp
      light: /landing/light/command-menu.png
      loading: lazy
      ---
      :::::

    #title
    内置导航与[全文搜索]{.text-primary}

    #description
    你只需专注于组织内容，Docus 会为你处理搜索弹窗并自动生成侧边导航。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::browser-frame
      :video{.rounded-md controls loop playsinline src="https://res.cloudinary.com/nuxt/video/upload/v1767647099/studio/studio-demo_eiofld.mp4"}
      :::::

    #title
    在生产环境中用 [Nuxt Studio](https://nuxt.studio) 编辑内容

    #description
    以可视化方式撰写和管理内容，完全不需要 Markdown 知识。让非技术同事也能参与文档协作，无需编程技能即可集成 Vue 组件。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    target: _blank
    to: https://image.nuxt.com/
    ---
      :::::div{.flex-1.flex.items-center.justify-center}
        ::::::u-color-mode-image
        ---
        alt: Nuxt Image 视觉图
        class: w-[30%] lg:w-[70%] my-12 lg:my-0
        dark: /landing/dark/nuxt-image.svg
        light: /landing/light/nuxt-image.svg
        ---
        ::::::
      :::::

    #title
    [Nuxt Image](https://image.nuxt.com) 图片优化

    #description
    Docus 会自动将 Markdown 图片转换为使用 `<NuxtImg>` 。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    target: _blank
    to: /zh-cn/concepts/internationalization
    ---
      :::::u-color-mode-image
      ---
      height: 195
      width: 403
      alt: 国际化示意图
      class: w-full my-12 lg:my-0
      dark: /landing/dark/i18n.svg
      light: /landing/light/i18n.svg
      ---
      :::::

    #title
    [国际化]{.text-primary}支持

    #description
    内置 i18n 支持，自动处理路由与内容管理。轻松创建多语言文档。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    to: /zh-cn/ai/mcp
    ---
      :::::u-color-mode-image
      ---
      height: 400
      width: 859
      alt: 原生 MCP 服务器与 AI 就绪内容示意图
      class: w-full h-auto rounded-lg translate-y-10
      dark: /landing/dark/mcp.svg
      light: /landing/light/mcp.svg
      ---
      :::::

    #title
    原生 MCP，[AI 就绪]{.text-primary}

    #description
    内置 Model Context Protocol 服务器，将你的文档连接到 Cursor、VS Code、Claude 等 AI 工具。自动生成 `llms.txt` 和 `llms-full.txt` 文件，无缝对接 LLM。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
    ```ts [app.config.ts]
    export default defineAppConfig({
              ui: {
                colors: {
                  primary: 'green',
                  secondary: 'sky',
                },
              },
              socials: {
                x: 'https://x.com/nuxt_js',
                nuxt: 'https://nuxt.com'
              }
    })
    ```

    #title
    通过 [Nuxt App Config](https://nuxt.com/docs/4.x/getting-started/configuration#app-configuration) 自定义

    #description
    借助 `app.config.ts` 全局更新颜色、社交链接、页头 Logo 与组件样式，无需直接修改代码。
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex-1.flex.flex-col.items-center.justify-center.py-8.text-center}
        ::::::div{.flex.flex-col.gap-3.w-full.max-w-xs}
          :::::::u-button
          ---
          block: true
          color: primary
          size: lg
          to: /zh-cn/getting-started/introduction
          trailing-icon: i-lucide-arrow-right
          ---
          阅读文档
          :::::::

          :::::::u-button
          ---
          block: true
          color: neutral
          icon: i-simple-icons-github
          size: lg
          target: _blank
          to: https://github.com/nuxt-content/docus
          variant: outline
          ---
          在 GitHub 上查看
          :::::::
        ::::::
      :::::

    #title
    准备好[开始]{.text-primary}了吗？

    #description
    探索让 Docus 成为完美文档解决方案的全部特性。
    ::::
  :::
::

// @ts-check
const lightCodeTheme = require('./light.theme.js');
const darkCodeTheme = require('./dark.theme.js');
const theme = require('shiki/themes/material-default.json');
const { remarkCodeHike } = require('@code-hike/mdx');
/** @type {import('@docusaurus/types').Config} */
module.exports = async function config() {
  const math = (await import('remark-math')).default;
  const katex = (await import('rehype-katex')).default;
  return {
    title: 'JMES World Docs',
    tagline: 'The official docs for JMES World',
    url: 'https://jmes.world/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'jmesworld', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    plugins: ['docusaurus-plugin-sass'],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            beforeDefaultRemarkPlugins: [
              [
                remarkCodeHike,
                {
                  theme,
                  lineNumbers: true,
                  showCopyButton: true,
                  staticMediaQuery: 'not screen, (max-width: 768px)',
                },
              ],
              math,
            ],
            rehypePlugins: [katex],
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/', // Serve the docs at the site's root
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/jmesworld/docs/edit/main/',
          },
          blog: false,
          theme: {
            customCss: [
              require.resolve('@code-hike/mdx/styles.css'),
              require.resolve('./src/styles/main.scss'),
              require.resolve('katex/dist/katex.min.css'),
            ],
          },
        }),
      ],
    ],
    themes: ['mdx-v2'],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: false,
            autoCollapseCategories: false,
          },
        },
        algolia: {
          appId: 'WEPANKXN0T',
          apiKey: '1bc5804b4045c10dcd8309cd7e00b2ed',
          indexName: 'jmes',
          contextualSearch: true,
        },
        navbar: {
          title: '',
          logo: {
            alt: 'JMES Docs',
            src: 'img/logo.png',
            srcDark: 'img/logo-white.png',
          },
          items: [
            {
              href: 'https://jmes.art/', //front-end URL
              position: 'right',
              label: 'JMES World',
              className: 'header-jmes-link',
              'aria-label': 'JMES World',
            },
            {
              href: 'https://github.com/jmesworld/docs ',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {},
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  };
};

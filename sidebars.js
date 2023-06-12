/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */

  Sidebar: [
    'index',
    {
      type: 'category',
      label: 'Learn',
      link: { type: 'doc', id: 'learn/README' },
      items: [
        {
          type: 'category',
          label: 'JMES Blockchain',
          collapsed: true,
          link: { type: 'doc', id: 'learn/about/README' },
          items: [
            {
              type: 'doc',
              id: 'learn/about/blockchain',
              label: 'Protocol',
            },                       
            {
              type: 'doc',
              id: 'learn/about/whitepaper',
              label: 'Whitepaper',
            },             
          ],
        },      
        'learn/fees',
        'learn/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      link: { type: 'doc', id: 'develop/README' },
      items: [
        'develop/get-started',
        'develop/which-tools',



        {
          type: 'category',
          label: 'Developer tools',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'JMES.js',
              collapsed: true,
              link: { type: 'doc', id: 'develop/jmes-js/README' },
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Jmesd',
              collapsed: true,
              items: [
                'develop/jmesd/install-jmesd',
                'develop/jmesd/jmesd-mac',
                'develop/jmesd/using-jmesd',
                'develop/jmesd/commands',
                'develop/jmesd/subcommands',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'JMES Core modules',
          collapsed: true,
          link: { type: 'doc', id: 'develop/module-specifications/README' },
          items: [
            'develop/module-specifications/spec-auth',
            'develop/module-specifications/spec-authz',
            'develop/module-specifications/spec-bank',
            'develop/module-specifications/spec-capability',
            'develop/module-specifications/spec-crisis',
            'develop/module-specifications/spec-distribution',
            'develop/module-specifications/spec-evidence',
            'develop/module-specifications/spec-feegrant',
            'develop/module-specifications/spec-governance',
            'develop/module-specifications/spec-mint',
            'develop/module-specifications/spec-params',
            'develop/module-specifications/spec-slashing',
            'develop/module-specifications/spec-staking',
            'develop/module-specifications/spec-upgrade',
            'develop/module-specifications/spec-wasm',
          ],
        },
        'develop/resources',
        'develop/endpoints',
      ],
    },
    {
      type: 'category',
      label: 'Full node',
      link: { type: 'doc', id: 'landing-pages/full-node' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'full-node',
        },
      ],
    },
  ],
};

module.exports = sidebars;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tiny tools',
  tagline: 'Collection of useful, simple, single-purpose apps and tools for everyday problems and tasks',
  url: 'https://tinytools.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/circle.svg',
  organizationName: 'chilikasha',
  projectName: 'tinytools',
  deploymentBranch: 'main',

  scripts: [
    ({
      "data-no-cookie": true,
      async: true,
      src: "https://cdn.splitbee.io/sb.js"
    })
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // routeBasePath: '/'
        },
        /**
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        metadata: [
        {name: 'keywords', content: 'apps,tools,collection,simple'},
        {name: 'ahrefs-site-verification', content: 'e84720fd3dd7d0e2d439a09168118c870f2382eb512d13636e43d3af505252f5'}
      ], 
      colorMode: {
        respectPrefersColorScheme: true,
      },
      /** announcementBar: {
        id: 'cli',
        content:
          'New tool added: <a target="_blank" rel="noopener noreferrer" href="">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#000',
        isCloseable: true,
      }, */
      image: 'img/tt.webp',
      hideableSidebar: true,
      navbar: {
        title: 'Tiny tools',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/circle.svg',
        // },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/chilikasha/tinytools',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   to: 'https://airtable.com/shr5X8eog0uy8Ab1K',
          //   label: 'Submit',
          //   position: 'left',
          // },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/submit',
            label: 'Submit',
            position: 'left',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Tiny tools. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

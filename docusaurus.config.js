// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/ultramin');
// const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
        },
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
        {name: 'keywords', content: 'useful apps, simple apps, tools, collection of apps, macos apps, useful web apps, useful macos apps'},
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
        logo: {
          alt: 'Tiny tools',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/submit',
            label: 'Submit',
            position: 'left',
          },
          {
            href: 'https://github.com/chilikasha/tinytools',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

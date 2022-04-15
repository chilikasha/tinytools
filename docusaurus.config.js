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
  favicon: 'img/favicon.svg',
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
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        blog: false,
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
        {name: 'keywords', content: 'small useful apps, useful apps for macos, interesting apps, list of useful apps, minimalist software, simple macos tools, list of useful apps for macos, most useful apps, tiny macos apps, small but useful apps'},
        {property: 'og:type', content: 'website'},
        {name: 'description', content: 'Collection of useful, simple, single-purpose apps and tools for everyday problems and tasks'},
        {property: 'og:title', content: 'Tiny tools'},
        {property: 'og:image', content: '/img/tt.webp'},
        {property: 'og:description', content: 'Collection of useful, simple, single-purpose apps and tools for everyday problems and tasks'},
        {property: 'og:url', content: 'https://tinytools.club/'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image', content: '/img/tt.webp'},
        {name: 'twitter:description', content: 'Collection of useful, simple, single-purpose apps and tools for everyday problems and tasks'},
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

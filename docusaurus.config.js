/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tiny tools',
  tagline: 'that just work.',
  url: 'https://tinytools.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'tinytools', // Usually your GitHub org/user name.
  projectName: 'tinytools', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    // sidebarCollapsible: true,
    navbar: {
      title: 'Main',
      // logo: {
      //   alt: 'Tiny tools',
      //   src: 'img/minimize_logo.svg',
      // },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Tools',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://twitter.com/tinytools_club',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     // title: 'Tools',
      //     items: [
      //       {
      //         label: 'Getting Started',
      //         to: 'docs/',
      //       },
      //     ],
      //   },
      //   {
      //     // title: 'Community',
      //     items: [
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     // title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Tinytools. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}

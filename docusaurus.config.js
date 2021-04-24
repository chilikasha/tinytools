/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tiny tools',
  tagline: 'that just work.',
  url: 'https://tinytools.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/circle.svg',
  organizationName: 'tinytools', // Usually your GitHub org/user name.
  projectName: 'tinytools', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
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
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'https://airtable.com/shr5X8eog0uy8Ab1K',
          label: 'Submit',
          position: 'left',
        },
        {
          href: 'https://twitter.com/tinytools_club',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    // footer: {
    // style: 'light',
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
    // ],
    // copyright: `Copyright © ${new Date().getFullYear()} Tinytools. Built with Docusaurus.`,
    // },
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
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tiny tools',
  // subtitle: 'Fast • beautiful • minimalist • single-purpose',
  tagline: 'Collection of fast, minimalist, single-purpose apps',
  url: 'https://tinytools.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/circle.svg',
  organizationName: 'tinytools', // Usually your GitHub org/user name.
  projectName: 'tinytools', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'calculations', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: 'black', // Defaults to `#000`.
    //   isCloseable: true, // Defaults to `true`.
    // },
    image: 'img/tt.webp',
    twitterImage: 'img/tt.webp',
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
      //   src: 'img/circle_32.svg',
      // },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Tools',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'https://airtable.com/shr5X8eog0uy8Ab1K',
          label: 'Submit',
          position: 'left',
        },
        // {
        //   href: 'https://twitter.com/tinytools_club',
        //   label: 'Twitter',
        //   position: 'right',
        // },
      ],
    },
    // footer: {
    //   style: 'light',
    //   // links: [
    //   //   {
    //   //     // title: 'Tools',
    //   //     items: [
    //   //       {
    //   //         label: 'Getting Started',
    //   //         to: 'docs/',
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Tinytools. Built with Docusaurus.`,
    //   },
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

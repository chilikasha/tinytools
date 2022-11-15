import { useConfig } from 'nextra-theme-docs'

export default {
  darkMode: true,
  editLink: false,
  footer: {
    component: null,
    // text: `MIT ${new Date().getFullYear()} © Chili Kasha.`
  },
  getNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalMetaTags: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'og:title', content: 'Tiny tools' },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: 'https://tinytools.club/tt.webp' },
        { name: 'og:url', content: 'https://tinytools.club' },
        { name: 'apple-mobile-web-app-title', content: 'Tiny tools' },
        { name: 'ahrefs-site-verification', content: 'e84720fd3dd7d0e2d439a09168118c870f2382eb512d13636e43d3af505252f5' }
      ],
      description: frontMatter.description || 'Tiny tools: list of useful, simple, single-purpose apps and tools for everyday problems and tasks',
      openGraph: {
        images: [
          { url: 'https://tinytools.club/tt.webp' }
        ]
      },
      titleTemplate: '%s – Tiny tools',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://tinytools.club'
      }
    }
  },
  gitTimestamp: '',
  head: () => {
    return (
      <>
        <link
          rel="icon"
          href="/favicon.svg"
          />
      </>
    )
  },
  logo: <strong>Tiny tools</strong>,
  navigation: {
    next: true,
    prev: true
  },
  nextThemes: {
    defaultTheme: "system",
    storageKey: 'theme'
  },
  project: {
    link: 'https://github.com/chilikasha/tinytools'
  },
  search: {
    unstable_flexsearch: true,
    emptyResult: (
      <span className="block select-none p-8 text-center text-sm text-gray-400">
        No results found.
      </span>
    ),
    placeholder() {
      return 'Search tools'
    }
  }
}

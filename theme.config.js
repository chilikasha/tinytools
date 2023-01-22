import { useConfig } from 'nextra-theme-docs'

export default {
  darkMode: true,
  editLink: {
    text: ''
  },
  feedback: {
    content: '',
    labels: '',
  },
  footer: {
    component: '',
    text: ''
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalMetaTags: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'og:title', content: 'Tiny tools' },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: 'https://tinytools.club/tt.webp' },
        { name: 'og:url', content: 'https://tinytools.club' },
        { name: 'apple-mobile-web-app-title', content: 'Tiny tools' }
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
      placeholder: 'Search tools'
  },
  toc: {
    extraContent: '',
    float: true
  }
}

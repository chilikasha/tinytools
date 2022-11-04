import { useRouter } from 'next/router'
// import { inject } from '@vercel/analytics'

// inject()

export default {
  darkMode: true,
  editLink: false,
  footer: {
    component: null,
    // text: `MIT ${new Date().getFullYear()} © Chili Kasha.`
  },
  gitTimestamp: '',
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
  },
  titleSuffix: ' – Tiny tools',
  logo: <strong>Tiny tools</strong>,
  head: () => {
    return (
      <>
        {/* Favicons, meta */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Tiny tools: list of useful, simple, single-purpose apps and tools for everyday problems and tasks" />
        <meta name="og:title" content="Tiny tools" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://tinytools.club/tt.webp" />
        <meta name="og:description" content="List of useful, simple, single-purpose apps and tools for everyday problems and tasks" />
        <meta name="og:url" content="https://tinytools.club/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://tinytools.club/tt.webp" />
        <meta name="twitter:url" content="https://tinytools.club" />
        <meta name="twitter:site:domain" content="https://tinytools.club" />
        <meta name="twitter:description" content="Tiny tools: list of useful, simple, single-purpose apps and tools for everyday problems and tasks" />
        <meta name="apple-mobile-web-app-title" content="Tiny tools" />
        <meta name="ahrefs-site-verification" content="e84720fd3dd7d0e2d439a09168118c870f2382eb512d13636e43d3af505252f5" />
        <link
          rel="icon"
          href="/favicon.svg"
          />
      </>
    )
  }
}

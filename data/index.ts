export const navbarData = {
  homeTitle: 'Crosswords Solver Online',
}

export const footerData = {
  author: 'Al Asad Nur Riyad',
  aboutAuthor: 'Hi! I am Riyad, a Tech enthusiast, problem solver and software engineer. Currently working at Appscode Inc.',
  authorInterest: 'I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Welcome to the Ultimate Crossword Solver and Puzzle Resource',
  description: 'Welcome to Crossword Solver Online, your number one source for solving all kinds of crossword puzzles. Our site is entire of anagrams, word definitions, or just a way to see if a given word fits into your current puzzle. Our vast database contains famous crossword solutions published in the New York Times, LA Times, USA Today, and many more. Read our blog for tips, tricks, and strategies to solve those terrific clues.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Al Asad Nur Riyad',
  description: 'Software Engineer, Problem Solver, Web Enthusiast.',
  aboutMe: 'Hello, fellow human! I\'m a software wizard who spends most of his day crafting code spells at @AppsCode in the Bytebuilders team. When I\'m not crafting code, you can find me summoning solutions to problems on online judges. Just don\'t ask me to cast any love spells, my magic only works on machines!',
}

export const seoData = {
  description: 'Riyad, Software Engineer at AppsCode, with over 2.5+ years experience in software development.',
  ogTitle: 'Riyad codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app/',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: '@qdnvubp' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]

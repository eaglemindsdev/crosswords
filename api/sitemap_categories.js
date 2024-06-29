// sitemap-categories.js

import { getCategories } from './service' // Adjust the path as per your project structure

async function generateSitemapEntries() {
  const categories = await getCategories()
  const urls = []

  // Assuming categories have a slug and updatedAt field
  categories.forEach((category) => {
    // Calculate the start of the current week
    const currentDate = new Date()
    const startOfWeek = new Date(currentDate)
    startOfWeek.setHours(0, 0, 0, 0) // Set to beginning of the day

    // Adjust startOfWeek to the beginning of the current week (Sunday)
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())

    

    urls.push({
      url: `/crossword-answers/${category.slug}`, // Adjust the URL structure as per your application
      lastmod: new Date().toISOString(), // Set lastmod to the beginning of the current week
     // changefreq: 'weekly',
     // priority: 0.8,

      //lastUpdated: new Date().toISOString(), // Example: Set last updated timestamp
    })
  })

  return urls
}

// Export the function for use in your Nuxt.js configuration
export default generateSitemapEntries

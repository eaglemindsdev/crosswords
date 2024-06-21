// sitemap-categories.js

import { getCategories, getDatelistsByCategorySlug } from '../service' // Adjust the path as per your project structure

async function generateSitemapCategoryDateEntries() {
  const urls = []

  // Fetch categories or data necessary for generating URLs
  const categories = await getCategories() // Example: Fetch categories

  // Loop through each category to generate sitemap entries
  for (const category of categories) {
    // Fetch data using category.slug to get updated_date
    const data = await getDatelistsByCategorySlug(category.slug, 1, 500) // Adjust parameters as per your service method

    // Map fetched data to sitemap entries
    const entries = data?.results.map(item => ({

      url: `/crossword-answers/${category.slug}/${item.updated_date}`, // Adjust URL structure as per your application
      lastmod: new Date(item.updated_date).toISOString(), // Example: Use updated_date as lastmod (convert to ISO format)
      changefreq: 'weekly',
      priority: 0.8,

      lastUpdated: new Date().toISOString(), // Example: Set last updated timestamp
    }))

    // Push all entries for the current category into urls array
    urls.push(...entries)
  }

  return urls
}

// Export the function for use in your Nuxt.js configuration
export default generateSitemapCategoryDateEntries

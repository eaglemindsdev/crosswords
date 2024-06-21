// sitemap-months.js

import { getMonthwiseClues } from '../service'

// Function to get the last 10 months in "MMM-yyyy" format
export function getLast10Months() {
  const months = []
  const currentDate = new Date()

  // Start with November 2023
  const startMonth = 10 // November (0-based index)
  const startYear = 2023 // Starting year

  // Calculate the total number of months to generate
  const totalMonths = (currentDate.getFullYear() - startYear) * 12 + (currentDate.getMonth() - startMonth) + 1

  for (let i = 0; i < Math.min(10, totalMonths); i++) {
    const monthDate = new Date(startYear, startMonth + i, 1) // Create date for each month
    const month = (monthDate.getMonth() + 1).toString().padStart(2, '0') // Month (1-based index with leading zero)
    const year = monthDate.getFullYear() // Year
    months.push(`${month}-${year}`)
  }

  return months
}

// Function to generate sitemap entries for a specific month
export async function generateSitemapEntriesForMonth(monthSlug) {
  const [month, year] = monthSlug.split('-')

  const categories = await getMonthwiseClues(`${month}`, `${year}`)

  const urls = categories.map(category => ({
    url: `/clue/${category.clue_slug}`,
    lastmod: category.updated_time,
    changefreq: 'monthly',
    priority: 0.8,
  }))

  return urls
}

// Function to generate sitemap configuration for the last 10 months
export function getMonthSitemapConfig(last10Months) {
  const sitemapsConfig = {}

  last10Months.forEach((slug) => {
    sitemapsConfig[`clue-posts-${slug}`] = {
      path: `/clue-posts-${slug}.xml`, // Path for dynamic sitemap
      urls: generateSitemapEntriesForMonth(slug),
    }
  })

  return sitemapsConfig
}

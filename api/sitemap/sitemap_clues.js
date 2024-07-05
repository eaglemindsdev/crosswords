// sitemap-categories.js

import { getMonthwiseClues } from '../service'

async function generateClue() {
  // Get the current date
  const currentDate = new Date();
  
  // Extract the current month and year
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0') // Months are 0-based, so add 1
  const year = currentDate.getFullYear();

  const categories = await getMonthwiseClues(`${month}`, `${year}`)

  const urls = categories.map(category => ({
    url: `/clue/${category.clue_slug}`,
    lastmod:new Date(category.updated_time).toISOString(),
    //changefreq: 'monthly',
    //priority: 0.8,
  }))

  return urls
}
export default generateClue


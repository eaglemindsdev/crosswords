// api/service.js

const BASE_URL = 'https://crosswords.freepush.workers.dev/api' // Replace with actual API base URL
// const BASE_URL = 'http://127.0.0.1:8787/api';

// Fetch all blog posts
async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/categories`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

// Fetch all blog posts
async function getDatelistsByCategorySlug(slug, page, limit) {
  try {
    const response = await fetch(`${BASE_URL}/crosswords/categories/${slug}?page=${page}&limit=${limit}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

// Fetch a crosswords by cat slug and Date
async function getCrosswordCluesByCategorySlugAndDate(slug, date) {
  // console.log(slug);
  try {
    const response = await fetch(`${BASE_URL}/crosswords/category-date/${slug}?date=${date}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

async function getFeaturedCategories() {
  try {
    const response = await fetch(`${BASE_URL}/featurecategories`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

async function getCrosswords() {
  try {
    const response = await fetch(`${BASE_URL}/home-crosswords?page=1&limit=1050`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

// Fetch a single crosswords clue by slug
async function getClueAnswerBySlug(slug) {
  try {
    const response = await fetch(`${BASE_URL}/crosswords-clue/${slug}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blog = await response.json()
    return blog
  }
  catch (error) {
    console.error(`Failed to fetch blog with ID ${slug}:`, error)
    return null
  }
}





async function getMonthwiseClues(month, year) {
  try {
    
    const response = await fetch(`${BASE_URL}/crosswords-monthwise/clue-sitemap?month=${month}&year=${year}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

async function getBlogs(page, perPage) {
  try {
    
    const response = await fetch(`https://crossword-nirvakam.eagleminds.net/api/get_blogs.php?page=${page}&per_page=${perPage}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

async function getBlog(slug){

  try {
    
    const response = await fetch(`https://crossword-nirvakam.eagleminds.net/api/get_blog.php?slug=${slug}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blogs = await response.json()
    return blogs
  }
  catch (error) {
    console.error('Failed to fetch blogs:', error)
    return []
  }
}

export {getBlogs, getBlog, getCrosswords, getCategories, getFeaturedCategories, getDatelistsByCategorySlug, getCrosswordCluesByCategorySlugAndDate, getClueAnswerBySlug,  getMonthwiseClues }

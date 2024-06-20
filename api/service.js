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

// Fetch a single blog post by ID
async function getBlogById(id) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}`)
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const blog = await response.json()
    return blog
  }
  catch (error) {
    console.error(`Failed to fetch blog with ID ${id}:`, error)
    return null
  }
}

// Create a new blog post
async function createBlog(blogData) {
  try {
    const response = await fetch(`${BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const newBlog = await response.json()
    return newBlog
  }
  catch (error) {
    console.error('Failed to create blog:', error)
    return null
  }
}

// Update an existing blog post
async function updateBlog(id, blogData) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    const updatedBlog = await response.json()
    return updatedBlog
  }
  catch (error) {
    console.error(`Failed to update blog with ID ${id}:`, error)
    return null
  }
}

// Delete a blog post
async function deleteBlog(id) {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`)

    return { message: 'Blog deleted successfully' }
  }
  catch (error) {
    console.error(`Failed to delete blog with ID ${id}:`, error)
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

export { getCategories, getFeaturedCategories, getDatelistsByCategorySlug, getCrosswordCluesByCategorySlugAndDate, getClueAnswerBySlug, getBlogById, createBlog, updateBlog, getMonthwiseClues }

export default async function ({ store, $axios }) {
    if (!store.state.categories.length) {
      try {
        const categories = await fetch(`${BASE_URL}/categories`);
        store.commit('SET_CATEGORIES', categories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }
  }

  
  
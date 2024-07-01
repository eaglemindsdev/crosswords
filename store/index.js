export const state = () => ({
    categories: [],
  });
  
  export const mutations = {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  };
  
  export const actions = {
    async fetchCategories({ commit }) {
      try {
        const categories = await this.$axios.$get('/categories');
        commit('SET_CATEGORIES', categories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    },
  };
  
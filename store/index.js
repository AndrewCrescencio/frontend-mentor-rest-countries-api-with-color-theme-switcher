export const state = () => ({
  content: [],
  searchFilter: 'All',
})

export const getters = {
  getContentByRegion: (state) => (filter) => {
    if (filter === 'All') {
      return state.content
    } else {
      const list = []
      // return state.content[filter]
      state.content.forEach((item) => {
        if (item.region === filter) {
          list.push(item)
        }
      })
      return list
    }
  },
  searchFilter: (state) => {
    return state.searchFilter
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    try {
      const url = process.env.BASE_URL_API
      const data = await app.$axios.$get(`${url}/all`)
      const content = []
      data.map((item) => {
        return content.push({
          name: item.name.common,
          flag: item.flags.png,
          population: item.population,
          region: item.region,
          capital: item.capital,
        })
      })
      if (data) {
        commit('SET_CONTENT', content)
      } else {
        window.console.error({
          statusCode: 404,
          message: 'Page not found',
        })
      }
    } catch (e) {
      console.error({ statusCode: 500, message: 'Error internal' })
    }
  },
  searchFilter({ commit }, payload) {
    commit('SET_SEARCH_FILTER', payload)
  },
}

export const mutations = {
  SET_CONTENT(state, value) {
    state.content = value
  },
  SET_SEARCH_FILTER(state, value) {
    state.searchFilter = value
  },
}

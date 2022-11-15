export const state = () => ({
  content: {},
})

// export const getters = {}

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
}

export const mutations = {
  SET_CONTENT(state, value) {
    state.content = value
  },
}

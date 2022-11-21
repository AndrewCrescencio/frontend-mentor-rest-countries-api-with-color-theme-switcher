export const state = () => ({
  content: [],
  regionFilter: 'All',
  searchBar: '',
})

export const getters = {
  getContent: (state) => {
    if (state.regionFilter !== 'All') {
      const content = []
      state.content.forEach((item) => {
        if (item.region === state.regionFilter) {
          content.push(item)
        }
      })

      if (state.searchBar.length >= 1) {
        // eslint-disable-next-line no-unreachable
        const filteredContent = []
        content.forEach((item) => {
          if (item.name.toLowerCase().includes(state.searchBar)) {
            filteredContent.push(item)
          }
        })

        return filteredContent
      } else {
        return content
      }
    } else if (state.searchBar.length >= 1) {
      const filteredContent = []
      state.content.forEach((item) => {
        if (item.name.toLowerCase().includes(state.searchBar)) {
          filteredContent.push(item)
        }
      })
      return filteredContent
    } else {
      return state.content
    }
  },
  getCountry: (state) => (country) => {
    let countryData = {}

    for (let i = 0; i < state.content.length; i++) {
      if (state.content[i].name === country) {
        countryData = state.content[i]
        break
      } else {
        continue
      }
    }
    countryData.borders.forEach((borderCountry, index) => {
      // console.log(borderCountry)
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i].cca3 === borderCountry) {
          console.log(state.content[i])
          countryData.borders[index] = state.content[i].name
          console.log(countryData.borders[index])
        } else {
          continue
        }
      }
    })
    return countryData
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
          cca3: item.cca3,
          borders: item.borders,
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
      console.error({ statusCode: 500, message: 'Error internal' }, e)
    }
  },
  setRegionFilter({ commit }, payload) {
    commit('SET_REGION_FILTER', payload)
  },
  setSearchBar({ commit }, payload) {
    commit('SET_SEARCH_BAR', payload)
  },
}

export const mutations = {
  SET_CONTENT(state, value) {
    state.content = value
  },
  SET_REGION_FILTER(state, value) {
    state.regionFilter = value
  },
  SET_SEARCH_BAR(state, value) {
    state.searchBar = value
  },
}

export const strict = false

export const state = () => ({
  loadingApp: true
})

export const mutations = {
  setLoadingApp: (state, loading) => { state.loadingApp = loading }
}

export const actions = {
  init: ({ commit, dispatch }) => {
    dispatch('initAuth')
    commit('setLoadingApp', false)
  }
}

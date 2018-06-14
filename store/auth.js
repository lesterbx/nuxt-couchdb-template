import superlogin from 'superlogin-client'
import config from '../sl-client.config'

export const state = () => ({
  authenticated: false,
  session: undefined,
  user: undefined
})

export const mutations = {
  setAuthenticated: (state, authenticated) => { state.authenticated = authenticated },
  setSession: (state, session) => { state.session = session }
}

export const actions = {
  initAuth: {
    root: true,
    handler: ({ dispatch }) => {
      //Initialize superlogin and check if there is a session
      superlogin.configure(config)
      dispatch('setAuthListeners')
      let session = superlogin.getSession()
      if (session) {
        dispatch('loggedIn', session)
      } else {
        dispatch('loggedOut')
      }
    }
  },
  setAuthListeners: ({ dispatch }) => {
    superlogin.on('login', (session) => dispatch('loggedIn', session))
    superlogin.on('logout', () => dispatch('loggedOut'))
  },
  loggedIn: ({ commit, dispatch }, session) => {
    commit('setAuthenticated', true)
    commit('setSession', session)
    dispatch('initAuthenticatedDB', { token: session.token, password: session.password }, { root: true })
  },
  loggedOut: ({ commit, dispatch }) => {
    commit('setAuthenticated', false)
    commit('setSession', null)
    dispatch('initDB', null, { root: true })
  },
  login: ({ dispatch }, { username, password }) => {
    return superlogin.login({ username, password }).then(dispatch('loggedIn'))
  },
  logout: ({ dispatch }) => {
    return superlogin.logout().then(dispatch('loggedOut'))
  },
  signUp: ({ dispatch }, user) => {
    return superlogin.register(user).then(dispatch('loggedIn'))
  },
  getSession: () => {
    let session = superlogin.getSession()
    return session ? Promise.resolve(session) : Promise.reject()
  }
}

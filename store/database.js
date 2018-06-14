import PouchDB from 'pouchdb'
PouchDB.adapter('socket', require('socket-pouch/client'))

const { protocol, host, port, name } = process.env.dbProxy

export const state = () => ({
  db: undefined
})

export const mutations = {

}

export const actions = {
  // Initialize the pouchdb database without authentication header
  initDB: {
    root: true,
    handler: (state) => {
      state.db = new PouchDB(name, {
        adapter: 'socket',
        url: `${protocol}://${host}:${port}`
      })
    }
  },
  // Initialize the pouchdb database with authentication header
  initAuthenticatedDB: {
    root: true,
    handler: (state, { token, password }) => {
      state.db = new PouchDB(name, {
        adapter: 'socket',
        url: `${protocol}://${host}:${port}`,
        ajax: {
          headers: {
            Authorization: `Bearer ${token}:${password}`
          }
        }
      })
    }
  }
}

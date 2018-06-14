# nuxt-couchdb-template

Template for Nuxt ready to work with CouchDB/PouchDB through websockets and including authentication support with superlogin.

## Packages included
- [Nuxt](https://nuxtjs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Express API](https://github.com/nuxt-community/express-template)
- [PouchDB](https://pouchdb.com/)
- [Superlogin Server](https://github.com/colinskow/superlogin)
- [Superlogin Cliente](https://github.com/micky2be/superlogin-client)
- [Socket Pouch](https://github.com/pouchdb-community/socket-pouch)

## How does it works
To allow the use of PouchDB with websockets the [Socket Pouch](https://github.com/pouchdb-community/socket-pouch) plugin is used, the configuration for the proxy server is included in the Nuxt environment variables (nuxt.config.js).  

For the authentication [Superlogin](https://github.com/colinskow/superlogin) is used.

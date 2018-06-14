module.exports = {
  // An optional URL to API server, by default a current window location is used.
  serverUrl: 'http://localhost:3000',

  // The base URL for the SuperLogin routes with leading and trailing slashes (defaults to '/auth')
  baseUrl: '/auth',

  // Specific endpoint for social authentication and social link popups (defaults to `${location.origin}${baseUrl}`)
  // socialUrl: 'http://localhost:3001/auth',
  
  // A list of API endpoints to automatically add the Authorization header to
  // By default the host the browser is pointed to will be added automatically
  //endpoints: ['api.example.com'],
  
  // Set this to true if you do not want the URL bar host automatically added to the list
  //noDefaultEndpoint: false,
  
  // Where to save your session token: localStorage ('local') or sessionStorage ('session'), default: 'local'
  // storage: 'local',
  
  // The authentication providers that are supported by your SuperLogin host
  // providers: ['facebook', 'twitter'],

  // Sets when to check if the session is expired during the setup.
  // false by default.
  // checkExpired: false,

  // A float that determines the percentage of a session duration, after which SuperLogin will automatically refresh the
  // token. For example if a token was issued at 1pm and expires at 2pm, and the threshold is 0.5, the token will
  // automatically refresh after 1:30pm. When authenticated, the token expiration is automatically checked on every
  // request. You can do this manually by calling superlogin.checkRefresh(). Default: 0.5
  // refreshThreshold: 0.5,

  // The number of milliseconds before a request times out
  // If the request takes longer than `timeout`, the request will be aborted.
  // Default is 0, meaning it won't timeout.
  // timeout: 0
}
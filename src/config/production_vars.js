let keys = {}

if (process.env.IS_PRODUCTION) {
  keys.movieKey = process.env.apiKey
} else {
  keys = require('./config')
}

module.exports = keys

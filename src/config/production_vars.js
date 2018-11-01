let keys = {}

if (process.env.IS_PRODUCTION) {
  keys.apiKey = process.env.apiKey
} else {
  keys = require('./config')
}

module.exports = keys

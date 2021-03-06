// Don't commit this file to your public repos
exports.creds = {
  server_port: 8080, // default: 8080
  sleeptime: 2000, // sleep time in ms between the iteration of all textblocks
  mongoose_auth_local: 'mongodb://localhost/opensemanticapi', // default: mongodb://localhost/opensemanticapi
  min_text_block_length: 120, // default: 120
  debug: true, // default: true
  lang: 'en' // default: english
  // lang: 'de' // german
  // lang: 'es' // spansih
};
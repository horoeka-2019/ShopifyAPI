const router = require('express').Router()
const request = require('superagent')

module.exports = router

// server routes, talking to the external data source

router.get('/', (req, res) => {
  return request
    .get('https://www.boredapi.com/api/activity') // asking for info from here
    .then(response => { // response from external
      res.json(response.body) // this sends the response back to the client
    })
})
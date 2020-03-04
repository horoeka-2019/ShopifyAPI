const router = require('express').Router()
const request = require('superagent')

module.exports = router

// server routes, talking to the external data source


router.get('/joke', (req, res) => {
  return request
    .get('https://official-joke-api.appspot.com/random_joke') //place in url frm postmasn
    // .withCredentials() 
    // https://paintvine.myshopify.com/admin/api/2020-01/orders.json
    // GET https://{username}:{password}@{shop}.myshopify.com/admin/api/2020-01/shop.json

    // https://paintvine.myshopify.com/admin/api/2020-01/orders.json?since_id=123

    .then(response => {
      res.json(response.body)
    })
})

// GET /admin/api/2020-01/orders.json?since_id=1863560101962

// response.body
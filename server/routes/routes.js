const router = require('express').Router()
const request = require('superagent')

module.exports = router

// server routes, talking to the external data source
const vineAPI = 'https://{9aea6c07b34a4b45c1d8d88861fab0d6}:{63c91fc3e75bc93e0d419566986c7c08}@paintvine.myshopify.com/admin/api/2020-01/orders.json?since_id=1863560101962'

router.get('/joke', (req, res) => {
    console.log('router hit')
  return request.get(vineAPI)
  .then(response => {
    res.json(response.body)
  })
  .catch(err => {
    res.status(500).send('API ERROR ' + err.message)
  })
})



// basic auth: GET https://{username}:{password}@{shop}.myshopify.com/admin/api/2020-01/shop.json


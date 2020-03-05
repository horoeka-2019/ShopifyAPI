const router = require('express').Router()
const request = require('superagent')

module.exports = router


const vineAPI = 'https://9aea6c07b34a4b45c1d8d88861fab0d6:63c91fc3e75bc93e0d419566986c7c08@paintvine.myshopify.com/admin/api/2020-01/orders.json?since_id=1863560101962' // working link in postman

router.get('/order', (req, res) => {
    console.log('router hit') // yes working
  return request
  .get(vineAPI)
  .then(response => {
    res.json(response.body)
  })
  
  .catch(err => {
    res.status(500).send('API ERROR ' + err.message)
  })
})



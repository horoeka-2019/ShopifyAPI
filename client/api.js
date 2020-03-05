import request from 'superagent'

// const orderURL = 'https://{9aea6c07b34a4b45c1d8d88861fab0d6}:{63c91fc3e75bc93e0d419566986c7c08}@paintvine.myshopify.com/admin/api/2020-01/orders.json?since_id=1863560101962'
const orderURL = 'http://localhost:3000/api/v1/order'

export function getOrder () {
  console.log('getorder api hit')
  return request.get(orderURL)
}

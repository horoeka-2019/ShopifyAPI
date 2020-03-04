import request from 'superagent'

const orderURL = '/api/v1/joke'


export function getOrder () {
  return request.get(orderURL)
}

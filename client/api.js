import request from 'superagent'

const orderURL = '/api/v1/joke'


export function getOrder () {
  console.log('getorder api hit')
  return request.get(orderURL)
}


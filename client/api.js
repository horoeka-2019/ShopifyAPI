import request from 'superagent'

const jokeURL = '/api/v1/joke'


export function getJoke () {
  return request.get(jokeURL)
}

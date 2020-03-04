  
import request from 'superagent'

const boredURL = 'http://localhost:3000/api/v1/' // localhost3000 is the server. GET reqests served here, which means the info from the external database is served up here. This addy is just a data source. boredURL is holding our data 

//removed bored from end of url

export function getActivity () {
  return request.get(boredURL) // this is the GET request from the client (being sent to server) 
}
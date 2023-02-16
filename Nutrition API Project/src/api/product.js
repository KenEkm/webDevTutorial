"use strict"

import axios from "axios"

export async function search(term){
  const url = "/api/search"
  const response = await axios
    .get(url, {
      params: {
        q: term
      }
    })
  return response.data['foods']
}

export async function info(fdcId) {
  const url = "/api/info"
  const response = await axios
    .get(url, {
      params: {
        q: fdcId
      }
    })
  return response.data
}
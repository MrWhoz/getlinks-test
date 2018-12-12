// @flow

import axios from 'axios'

export const fetchPost = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/post',
    headers: {Authorization: 'bearer ' + (localStorage.getItem('user') || '')}
  })
  return response.data
}

export const login = async (username: string, password: string) => {
  const res = await axios({
    method: 'post',
    url: '/auth/login',
    data: {
      username: username,
      password: password
    }
  })
  localStorage.setItem('user', res.data.token)
  return res.data
}

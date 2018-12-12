// @flow
import {fetchPost, login} from 'api'

export const getArticles = () => async (dispatch: Function) => {
  dispatch({
    type: 'GET_POSTS_REQUEST'
  })
  const data = await fetchPost()
  dispatch({
    type: 'GET_POSTS_SUCCESS',
    payload: data
  })
}

export const userLogin = (username: string, password: string) => async (
  dispatch: Function
) => {
  dispatch({
    type: 'LOGIN_REQUEST'
  })
  try {
    const response = await login(username, password)
    console.log(response)
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response
    })
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE'
    })
  }
}

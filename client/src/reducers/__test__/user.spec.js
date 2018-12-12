import reducer from '../user'

const initialState = {
  id: 0,
  isLoginFailed: false,
  username: ''
}

describe('Chat > reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: '', payload: null})).toEqual(initialState)
  })
  it('should handle LOGIN_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: 'LOGIN_FAILURE'
      }).isLoginFailed
    ).toEqual(true)
  })
  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: 'LOGIN_SUCCESS',
        payload: {
          id: 1,
          username: 'test'
        }
      })
    ).toEqual({id: 1, isLoginFailed: false, username: 'test'})
  })
})

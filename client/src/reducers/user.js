// @flow

type StateProps = {
  +id: number,
  +username: string
};

type ActionProps = {
  +type: string,
  +payload: Object
};

const posts = (
  state: any = {
    id: 0,
    username: '',
    isLoginFailed: false
  },
  action: ActionProps
): Array<StateProps> => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        isLoginFailed: false
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoginFailed: true
      }
    default:
      return state
  }
}

export default posts

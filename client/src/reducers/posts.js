// @flow

type StateProps = {
  +id: number,
  +title: string,
  +content: string
};

type ActionProps = {
  +type: string,
  +payload: Array<Object>
};

const  posts = (
  state: Array<StateProps> = [],
  action: ActionProps
): Array<StateProps> => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return [...action.payload]
    default:
      return state
  }
}

export default posts

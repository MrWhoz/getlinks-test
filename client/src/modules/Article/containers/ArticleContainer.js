// @flow
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import MainLayout from '../components/MainLayout'
import * as actions from 'actions'

import type {MapStateToProps, MapDispatchToProps} from 'react-redux'
import type {State, Action} from 'modules/Common/types'
export type StateProps = {
  posts: any
};

export type DispatchProps = {
  getPost: any
};

const  mapStateToProps: MapStateToProps<State, *, StateProps> = (
  state,
  props
) => {
  return {
    user: state.user,
    posts: state.posts
  }
}

const  mapDispatchToProps: MapDispatchToProps<Action<*>,
  {},
  DispatchProps> = dispatch =>
    bindActionCreators(
      {
        getPost: actions.getArticles,
        userLogin: actions.userLogin
      },
      dispatch
    )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)

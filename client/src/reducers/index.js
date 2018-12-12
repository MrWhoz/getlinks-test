//@flow
import {combineReducers} from 'redux'
import user from './user'
import posts from './posts'

const  reducers = {
  user,
  posts
}

export type Reducers = typeof reducers;

export default combineReducers(reducers)

//@flow
import React, {Component} from 'react'
import NewsItem from './NewsItem'
import Input from 'modules/Common/components/Input'
// $FlowFixMe
import './MainLayout.scss'

type State = {
  username: string,
  password: string,
  isShownDetail: boolean,
  detail: string
};

export default class MainLayout extends Component<*, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isShownDetail: false,
      detail: ''
    }
    ;(this: any)._renderArticles = this._renderArticles.bind(this)
    ;(this: any).handleChangeInput = this.handleChangeInput.bind(this)
    ;(this: any)._login = this._login.bind(this)
  }

  getSnapshotBeforeUpdate(prevProps: any) {
    !prevProps.user.username && this.props.user.username && this.props.getPost()
  }


  componentDidMount() {
    this.props.getPost()
  }

  _renderArticles() {
    const posts = this.props.posts
    return (
      <>
        {posts.map(post => (
          <NewsItem {...post} />
        ))}
      </>
    )
  }

  _renderLogin() {
    return (
      <div className='login'>
        Please login with username/password: admin/secret
        <div className='input-wrapper'>
          <Input
            type='text'
            placeholder='admin'
            value={this.state.username}
            onChange={this.handleChangeInput}
          />
          <Input
            type='password'
            placeholder=''
            value={this.state.password}
            onChange={this.handleChangeInput}
          />
        </div>
        <div className='login-btn' onClick={this._login}>LOGIN</div>
        {this.props.user.isLoginFailed ? <span>Login failed</span> : ''}
      </div>
    )
  }

  handleChangeInput(value: string, type: string) {
    if (type === 'password') return this.setState({password: value})
    this.setState({username: value})
  }

  _login() {
    const {username, password} = this.state
    this.props.userLogin(username, password)
  }

  render() {
    return (
      <div className='main-layout'>
        {this.props.posts.length ? this._renderArticles() : this._renderLogin()}
      </div>
    )
  }
}

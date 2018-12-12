import React, {PureComponent} from 'react'
import './NewsItem.scss'

export default class NewsItem extends PureComponent {
  render() {
    return <div className='container'>
      <img alt='' className='thumbnail' src={this.props.thumbnail}/>
      <span className='news-title'>{this.props.title}</span>
      <span className='news-content'>{this.props.content + this.props.content}</span>
    </div>
  }
}

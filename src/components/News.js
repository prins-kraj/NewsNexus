import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  render() {
    return (
      <div>
        This is a news.
        <Newsitems/>
        
      </div>
    )
  }
}

export default News

import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://th.bing.com/th/id/R.1199bb8f4b12cff1a3e5f69c70938336?rik=Xsy%2bPnxMScv6tg&riu=http%3a%2f%2fsaibersys.com%2fimg%2fnews1.jpg&ehk=8ZoGX5q3tXGHf6pA9yY05phVvnJjJMRCpkv0VoZS5Sk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems

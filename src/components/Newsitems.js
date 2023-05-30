import React from 'react'

const Newsitems = (props)=>{
  let {title, description, imageUrl, newsUrl, author, date, source} =props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        <span className="position-absolute badge rounded-pill bg-primary bg-gradient " style={{color: 'pink'}}>{source}</span>
        </div>
        <img src={!imageUrl?"https://th.bing.com/th/id/R.1199bb8f4b12cff1a3e5f69c70938336?rik=Xsy%2bPnxMScv6tg&riu=http%3a%2f%2fsaibersys.com%2fimg%2fnews1.jpg&ehk=8ZoGX5q3tXGHf6pA9yY05phVvnJjJMRCpkv0VoZS5Sk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown" : author} on {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </div>
  )
}

export default Newsitems

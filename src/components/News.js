import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8935beed65a44170978c421f7a4aaa87";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>News - Top Hedlines</h2>
        <div className="row my-5">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <Newsitems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News

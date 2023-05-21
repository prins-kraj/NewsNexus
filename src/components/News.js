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
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8935beed65a44170978c421f7a4aaa87&page=1&pagesize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults });
  }

  handlePrevClick =async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8935beed65a44170978c421f7a4aaa87&page=${this.state.page-1}&pagesize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page-1,
      articles: parseData.articles
    })
  }

  handleNextClick = async () =>{
    if (this.state.page+1 > Math.ceil(this.state.totalResults/20)) {
      
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8935beed65a44170978c421f7a4aaa87&page=${this.state.page+1}&pagesize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page+1,
        articles: parseData.articles
      })
    }
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
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps ={
    country: 'in',
    pageSize: 11,
    category: 'general'
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsNexus`
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8935beed65a44170978c421f7a4aaa87&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick =async () =>{
    this.setState({page: this.state.page-1});
    this.updateNews();
  }

  handleNextClick = async () =>{
    this.setState({page: this.state.page+1});
    this.updateNews();
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: '35px, 0px'}}>NewsNexus - Top {this.capitalizeFirstLetter(this.props.category)} Hedlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-5">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <Newsitems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

import React, { useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles([...articles, ...parseData.articles]);
    setTotalResults(parseData.totalResults);
  };

  React.useEffect(() => {
    updateNews();
  }, []);
// },);

  return (
      <>
        <h1 className='text-center my 3' style={{margin: '35px, 0px', marginTop: '90px'}}>NewsNexus - Top {capitalizeFirstLetter(props.category)} Hedlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={page+1 > Math.ceil(totalResults/props.pageSize)?"":<Spinner/>}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                  <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps ={
  country: 'in',
  pageSize: 11,
  category: 'general'
}

News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News; 

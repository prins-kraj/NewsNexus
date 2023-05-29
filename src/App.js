import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'; 
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=14
  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={4}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* <News setProgress={this.setProgress} apikey={this.apikey} pageSize={11} country="in" category="general"/> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            {/* <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="sports"/>}/> */}
            {/* <Roexactute path="/about"element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="sports"/>}/> */}
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

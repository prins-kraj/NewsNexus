import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* <News pageSize={11} country="in" category="sports"/> */}
          <Routes>
            <Route  path="/general" element={<News key="general" pageSize={11} country="in" category="general"/>}/>
            {/* <Route path="/about"element={<News pageSize={11} country="in" category="sports"/>}/> */}
            <Route  path="/business" element={<News pageSize={11} country="in" category="business"/>}/>
            <Route  path="/entertainment" element={<News key="entertainment" pageSize={11} country="in" category="entertainment"/>}/>
            <Route  path="/general" element={<News key="general" pageSize={11} country="in" category="general"/>}/>
            <Route  path="/health" element={<News key="health" pageSize={11} country="in" category="health"/>}/>
            <Route  path="/science" element={<News key="science" pageSize={11} country="in" category="science"/>}/>
            <Route  path="/sports" element={<News key="sports" pageSize={11} country="in" category="sports"/>}/>
            <Route  path="/technology" element={<News key="technology" pageSize={11} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

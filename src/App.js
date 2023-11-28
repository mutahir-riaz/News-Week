import './App.css';
import React, { Component } from 'react';

import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  apiKey="31970b9f423c4c1793851f53fd03fdaf"   /// 

  // k = process.env.REACT_APP_NEWS_KEY
  // console.log(k);
  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress: progress }); // Use this.setState to update the state
  };
    render(){
    return (
    <div >
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />
      <Routes> 
      <Route exact  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'business'}  pageSize={9} category='business' country='us'/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'entertainment'} pageSize={9} category='entertainment' country='us'/>}></Route>
      <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'general'}pageSize={9} category='general' country='us'/>}></Route>
      <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'health'}pageSize={9} category='health' country='us'/>}></Route>
      <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'science'}pageSize={9} category='science' country='us'/>}></Route>
      <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'sports'}pageSize={9} category='sports' country='us'/>}></Route>
      <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'technology'}pageSize={9} category='technology' country='us'/>}></Route>
      </Routes>
     
     </Router>
    </div>
  );
}}

export default App;

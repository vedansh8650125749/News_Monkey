import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //switch -> Routes
import About from './component/About';
import Footer from './component/Footer';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  apikey = process.env.REACT_APP_NEWS_API
  constructor(props) {
    super(props);

    this.state = {
      mode: 'light',
      style :{
        backgroundColor:'white',
        color:'black'
      }
    };
  }

  toggleMode = () => {
    const { mode } = this.state;
    if (mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      // console.log('dark mode');
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // console.log('light mode');
    }
  };
  

  render() {
    const { mode } = this.state;
    const pageSize = 10, newsApi=this.apikey
    return (
      
      <>
      <Router>
          <Navbar mode={mode} toggleMode={this.toggleMode} />
          <LoadingBar
          height={3}
        color='gold'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/about" element={<About setProgress={this.setProgress} mode={mode}/>} />

            <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" mode={mode} pageSize={pageSize} country='in' category="general" newsApi={newsApi} />} ></Route>
            <Route exact path="/business" element={ <News setProgress={this.setProgress} key="business" mode={mode} pageSize={pageSize} country='in' category="business" newsApi={newsApi} />} ></Route>
            <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key="entertainment" mode={mode} pageSize={pageSize} country='in' category="entertainment" newsApi={newsApi} />} ></Route>
            <Route exact path="/health" element={ <News setProgress={this.setProgress} key="health" mode={mode} pageSize={pageSize} country='in' category="health" newsApi={newsApi} />} ></Route>
            <Route exact path="/science" element={ <News setProgress={this.setProgress} key="science" mode={mode} pageSize={pageSize} country='in' category="science" newsApi={newsApi} />} ></Route>
            <Route exact path="/sports" element={ <News setProgress={this.setProgress} key="sports" mode={mode} pageSize={pageSize} country='in' category="sports" newsApi={newsApi} />} ></Route>
            <Route exact path="/technology" element={ <News setProgress={this.setProgress} key="technology" mode={mode} pageSize={pageSize} country='in' category="technology" newsApi={newsApi} />} ></Route>

          </Routes>
        </Router>
        <Footer mode={mode}/>
      </>
    );
  }
}


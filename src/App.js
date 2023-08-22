import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //switch -> Routes
import About from './component/About';
import Footer from './component/Footer';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')

  const apikey = process.env.REACT_APP_NEWS_API


  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'

    }
  }
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'black';
  //     document.body.style.color = 'white';
  //     // console.log('dark mode');
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     // console.log('light mode');
  //   }
  // }

  const pageSize = 10, newsApi = apikey
  return (

    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color="gold" // we can use also like this color="linear-gradient(to right, red, yellow, gold)"
          progress={progress}
        />
        <Routes>
          <Route exact path="/about" element={<About setProgress={setProgress} mode={mode} />} />

          <Route exact path="/" element={<News setProgress={setProgress} key="general" mode={mode} pageSize={pageSize} country='in' category="general" newsApi={newsApi} />} ></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" mode={mode} pageSize={pageSize} country='in' category="business" newsApi={newsApi} />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" mode={mode} pageSize={pageSize} country='in' category="entertainment" newsApi={newsApi} />} ></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" mode={mode} pageSize={pageSize} country='in' category="health" newsApi={newsApi} />} ></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" mode={mode} pageSize={pageSize} country='in' category="science" newsApi={newsApi} />} ></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" mode={mode} pageSize={pageSize} country='in' category="sports" newsApi={newsApi} />} ></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" mode={mode} pageSize={pageSize} country='in' category="technology" newsApi={newsApi} />} ></Route>

        </Routes>
      </Router>
      <Footer mode={mode} />
    </>
  );
}
export default App
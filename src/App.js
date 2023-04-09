import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className='App '>  
           
           {/* <Header></Header>
           <Home></Home>
          <SearchPage/>
            */}
            <>
           
             <Router>
             <Header></Header>
             <Routes>
              <Route path="/" element={<Home/>} />
              <Route  path="/search" element={<SearchPage/>} />
             </Routes>
             </Router>
            </>
           
              
    </div>
  )
}

export default App;
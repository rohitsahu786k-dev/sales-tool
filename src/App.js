import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { store } from './Redux/store';
import Vslider from './Components/Vslider/Vslider.js';
import { Provider } from 'react-redux';
import CircularMenu from './Components/CircularMenu/CircularMenu';
import HeaderMain from './Components/Header/HeaderMain';



function App() {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className='container-fluid main-back'>
          <div className='row'>
            <div className="col-md-12 p-0">
              <div className='frame'>
                <Routes>
                  <Route path='/' element={<HeaderMain title="Control Room Consoles" head="Navigation Tool" subTitle="Pyrotech Workspace Solutions Pvt. Ltd. " desc="A Dynamic and User-friendly program which helps to visualize Control room 
Consoles and furniture. 
Features and Configurations are visible just on a single click."
bText="Start by clicking the start now button" buttonName="Start Now" />}>
                  </Route>
                  <Route path='/Vslider' element={<Vslider setPlayVideo={setPlayVideo}/>}>
                  </Route>
                  <Route exact path='/CircularMenu' element={<CircularMenu />}>
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { store } from './Redux/store';
import Vslider from './Components/Vslider/Vslider.js';
import { Provider } from 'react-redux';
import CircularMenu from './Components/CircularMenu/CircularMenu';

function App() {
  const [, setPlayVideo] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className='main-back min-h-screen w-full'>
          <div className="w-full p-0">
            <div className='frame'>
              <Routes>
                {/* / → redirect to consoles listing */}
                <Route path='/' element={<Navigate to="/consoles" replace />} />

                {/* Consoles listing page */}
                <Route path='/consoles' element={<Vslider setPlayVideo={setPlayVideo} />} />

                {/* Direct product URL — e.g. /consoles/xlat-ze */}
                <Route path='/consoles/:slug' element={<CircularMenu />} />

                {/* Catch-all */}
                <Route path='*' element={<Navigate to="/consoles" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

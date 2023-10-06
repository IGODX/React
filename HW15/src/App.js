import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CityInfo from './CityInfo';
import Landmark from './Landmark';
import { useRef } from 'react';
import CityPhotos from './CityPhotos';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Город</Link>
          </li>
          <li>
            <Link to="/landmark">Известная достопримечательность</Link>
          </li>
          <li>
            <Link to="/photos">Фотографии города</Link>
          </li>
        </ul>
      </nav>
      <Routes>
              <Route path="/" element={<CityInfo />} />
        <Route path="/landmark" element={<Landmark />} />
        <Route path="/photos" element={<CityPhotos />} />
            </Routes>
    </Router>

  );
}

export default App;
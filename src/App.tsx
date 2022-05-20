import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sample from './Sample/Sample';

function App() {
  return (
    <Routes>
      <Route path="sample" element={<Sample />} />
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import React from 'react';
import './App.css';
import MyInfo from './MyInfo';
import CityInfo from './CityInfo';

function App() {
  const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Привет, мир!'
);
  return (
    <>
      {element}
      <MyInfo></MyInfo>
      <CityInfo></CityInfo>
    </>
  );
}

export default App;

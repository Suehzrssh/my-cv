import React from 'react';
import LeftCv from './components/LeftCv';
import RightCv from './components/RightCv';
import Footer from './components/Footer';



import './App.css';


function App() {
  return (
    <>
    <div className="App">
      <div className='cvBody'>
      <LeftCv />
      <RightCv />
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default App;

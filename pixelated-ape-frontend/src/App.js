
import React from 'react';
import { Header } from './component/Header'
import { Minter } from './component/Minter'
import backgroundVideo from './images/background.mp4';

import './css/App.css';


function App() {
  return (

    <div className="App">
      {/* <video autoPlay loop muted className='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video> */}
        <Header />
      <section className="minting">
        <Minter />
      </section>
    </div>
  );
}

export default App;

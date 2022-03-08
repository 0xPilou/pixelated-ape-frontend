
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import { Header } from './component/Header'
import Minter from './page/Minter'
import About from './page/About'
import Admin from './page/Admin'
import ErrorPage from './page/ErrorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/App.css';

import APG_ABI from './contract/ApePixelGang.json'
const APG_ADDRESS = '0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7';


function App() {

  const [connected, setConnected] = useState(false);
  const [number, setNumber] = useState(3);
  const [error, setError] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(APG_ADDRESS, APG_ABI.abi, provider);
      try {
        const cost = await contract.price();
        const totalSupply = await contract.totalSupply();
        const object = { "cost": cost, "totalSupply": String(totalSupply) }
        setData(object);
      }
      catch (err) {
        setError(err.message);
      }
    }
  }

  async function mint() {
    if (typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(APG_ADDRESS, APG_ABI.abi, signer);
      try {
        let overrides = {
          from: accounts[0],
          value: data.cost.mul(number)
        }
        const tx = await contract.mint(number, overrides);
        await tx.wait();
        fetchData();
      }
      catch (err) {
        setError(err.message);
        console.log(err.message)

      }
    }
  }

  const increaseNumber = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  }

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  }

  const updateConnection = (boolean) => {
    setConnected(boolean);
  }

  return (
    <Router>
      <Header updateConnection={updateConnection} />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/mint" 
        element={
          <Minter 
            data={data}
            connected={connected}
            decreaseNumber={decreaseNumber}
            number={number}
            increaseNumber={increaseNumber}
            mint={mint} 
          />
        } />
        <Route path="/admin" element={<Admin />}/>

        <Route path="*" element={<ErrorPage />}/>
      </Routes>

    </Router>
  );
}

export default App;

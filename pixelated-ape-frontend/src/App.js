/* Libs & Modules */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ethers } from 'ethers'
import { Header } from './component/Header'

/* Pages & Components */
import Minter from './page/Minter'
import About from './page/About'
import Admin from './page/Admin'
import ErrorPage from './page/ErrorPage'

/* Style */
import './css/App.css';

/* Contract & Configuration */
import CONTRACT from './contract/ApePixelGang.json'
import CONFIG from './config.json'


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
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, provider);
      try {
        const cost = await contract.price();
        const totalSupply = await contract.totalSupply();
        const maxQuantity = await contract.MAX_QTY();
        const startBlock = await contract.startBlock();
        const unrevealedURI = await contract.notRevealedURI();
        const balance = await provider.getBalance(CONFIG.CONTRACT_ADDRESS)
        const revealStatus = await contract.revealed();
        const object = {
          "cost": cost,
          "totalSupply": String(totalSupply),
          "maxQuantity": String(maxQuantity),
          "startBlock": String(startBlock),
          "unrevealedURI": String(unrevealedURI),
          "revealStatus": revealStatus,
          "balance": String(balance)
        }
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
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
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

  async function updateStartBlock(blockId) {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
      try {
        const tx = await contract.setStartBlock(blockId);
        await tx.wait();
        fetchData();
      }
      catch (err) {
        setError(err.message);
        console.log(err.message)
      }
    }
  }

  async function updateBaseURI(baseURI) {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
      try {
        const tx = await contract.setBaseURI(baseURI);
        await tx.wait();
        fetchData();
      }
      catch (err) {
        setError(err.message);
        console.log(err.message)
      }
    }
  }

  async function updateUnrevealedURI(unrevealedURI) {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
      try {
        const tx = await contract.setNotRevealedURI(unrevealedURI);
        await tx.wait();
        fetchData();
      }
      catch (err) {
        setError(err.message);
        console.log(err.message)
      }
    }
  }

  async function updateRevealStatus() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
      try {
        const tx = await contract.reveal();
        await tx.wait();
        fetchData();
      }

      catch (err) {
        setError(err.message);
        console.log(err.message)
      }
    }
  }

  async function withdrawFunds() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
      try {
        const tx = await contract.withdrawAll();
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
    if (number < CONFIG.MAX_MINT) {
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
        <Route path="/" element={<About />} />
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
        <Route path="/admin" element={
          <Admin
            data={data}
            updateStartBlock={updateStartBlock}
            updateBaseURI={updateBaseURI}
            updateUnrevealedURI={updateUnrevealedURI}
            updateRevealStatus={updateRevealStatus}
            withdrawFunds={withdrawFunds}
          />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </Router>
  );
}

export default App;

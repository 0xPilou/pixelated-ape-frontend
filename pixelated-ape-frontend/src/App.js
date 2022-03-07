
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import { Header } from './component/Header'
import { Minter } from './component/Minter'
import MetaMaskOnboarding from '@metamask/onboarding'


import './css/App.css';

import backgroundVideo from './images/background.mp4';

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

  window.addEventListener('DOMContentLoaded', () => {
    const onboarding = new MetaMaskOnboarding();
    const onboardButton = document.getElementById('connectWallet');
    let accounts;

    const updateButton = async () => {
      if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
        onboardButton.innerText = 'Install MetaMask!';
        onboardButton.onclick = () => {
          onboardButton.innerText = 'Connecting...';
          onboardButton.disabled = true;
          onboarding.startOnboarding();
        };
      } else if (accounts && accounts.length > 0) {
        onboardButton.innerText = `✔ ${accounts[0].substring(0, 6)}...${accounts[0].slice(-4)}`;
        onboardButton.disabled = true;
        onboarding.stopOnboarding();
        setConnected(true);
      } else {
        onboardButton.innerText = 'Connect MetaMask!';
        onboardButton.onclick = async () => {
          await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
            .then(function (accounts) {
              onboardButton.innerText = `✔ ${accounts[0].substring(0, 6)}...${accounts[0].slice(-4)}`;
              onboardButton.disabled = true;
              setConnected(true);
            });
        };
      }
    };
    updateButton();

    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.on('accountsChanged', (newAccounts) => {
        accounts = newAccounts;
        updateButton();
      });
    }
  });

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

  return (
    <div className="App">
      {/* <video autoPlay loop muted className='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video> */}
      <Header />
      <Minter data={data} connected={connected} decreaseNumber={decreaseNumber} number={number} increaseNumber={increaseNumber} mint={mint} />
    </div>
  );
}

export default App;

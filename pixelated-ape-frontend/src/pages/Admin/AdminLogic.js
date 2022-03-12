import { useState } from 'react';
import { ethers } from 'ethers'

import CONFIG from '../../config.json'
import CONTRACT from '../../contract/ApePixelGang.json'

const AdminLogic = () => {

    const [error, setError] = useState('');

    async function updateStartBlock(blockId) {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
            try {
                const tx = await contract.setStartBlock(blockId);
                await tx.wait();
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
          }
          catch (err) {
            setError(err.message);
            console.log(err.message)
          }
        }
      }
    return { updateStartBlock, updateBaseURI, updateUnrevealedURI, updateRevealStatus, withdrawFunds };
}
export default AdminLogic;
import { useState } from 'react';
import { ethers } from 'ethers'

import CONTRACT from '../contract/ApePixelGang.json'
import CONFIG from '../config.json'

const FetchData = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState('');

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

    return { data, fetchData };
}

export default FetchData;
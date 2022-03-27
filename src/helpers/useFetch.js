import { useState, useEffect } from 'react';
import { ethers } from 'ethers'

import CONTRACT from '../contract/ApePixelGang.json'
import ERC20_CONTRACT from '../contract/ERC20.json'
import CONFIG from '../config.json'

function useFetch() {

    const [data, setData] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetch() {

            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, provider);

                // Needed to accept APECOIN as payment
                const apecoin = new ethers.Contract(CONFIG.APECOIN_ADDRESS, ERC20_CONTRACT.abi, provider);

                try {
                    const cost = await contract.price();
                    const totalSupply = await contract.totalSupply();
                    const maxQuantity = await contract.MAX_QTY();
                    const startBlock = await contract.startBlock();
                    const unrevealedURI = await contract.notRevealedURI();
                    const balance = await provider.getBalance(CONFIG.CONTRACT_ADDRESS)
                    const revealStatus = await contract.revealed();

                    // Needed to accept APECOIN as payment
                    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const apecoinAllowance = await apecoin.allowance(accounts[0], CONFIG.CONTRACT_ADDRESS);

                    const object = {
                        "cost": cost,
                        "totalSupply": String(totalSupply),
                        "maxQuantity": String(maxQuantity),
                        "startBlock": String(startBlock),
                        "unrevealedURI": String(unrevealedURI),
                        "revealStatus": revealStatus,
                        "balance": String(balance),
                        "apecoinAllowance": String(apecoinAllowance)
                    }
                    console.log(String(apecoinAllowance) / 10 ** 18);
                    setData(object);
                }
                catch (err) {
                    setError(err.message);
                }
            }
        }
        fetch();
    },[])


    const refetch = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, provider);

            // Needed to accept APECOIN as payment
            const apecoin = new ethers.Contract(CONFIG.APECOIN_ADDRESS, ERC20_CONTRACT.abi, provider);

            try {
                const cost = await contract.price();
                const totalSupply = await contract.totalSupply();
                const maxQuantity = await contract.MAX_QTY();
                const startBlock = await contract.startBlock();
                const unrevealedURI = await contract.notRevealedURI();
                const balance = await provider.getBalance(CONFIG.CONTRACT_ADDRESS)
                const revealStatus = await contract.revealed();

                // Needed to accept APECOIN as payment
                let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const apecoinAllowance = await apecoin.allowance(accounts[0], CONFIG.CONTRACT_ADDRESS);

                const object = {
                    "cost": cost,
                    "totalSupply": String(totalSupply),
                    "maxQuantity": String(maxQuantity),
                    "startBlock": String(startBlock),
                    "unrevealedURI": String(unrevealedURI),
                    "revealStatus": revealStatus,
                    "balance": String(balance),
                    "apecoinAllowance": String(apecoinAllowance)
                }
                console.log(String(apecoinAllowance) / 10 ** 18);
                setData(object);
            }
            catch (err) {
                setError(err.message);
            }
        }
    }
    return { data, refetch };
}

export default useFetch;
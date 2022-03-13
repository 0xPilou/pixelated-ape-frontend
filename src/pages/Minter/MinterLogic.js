/* Libs & Modules */
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'

/* Logic & Helpers */
import FetchData from '../../helpers/FetchData'

/* Contract & Configuration */
import CONFIG from '../../config.json'
import CONTRACT from '../../contract/ApePixelGang.json'

const MinterLogic = () => {
    const [number, setNumber] = useState(3);
    const [error, setError] = useState('');

    const { data, fetchData } = FetchData();


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

    useEffect(() => {
        let isMounted = true;
        if (isMounted) fetchData();
        return () => { isMounted = false };
    }, [])

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
            }
            catch (err) {
                setError(err.message);
            }
        }
    }
    return { number, increaseNumber, decreaseNumber, mint };
}
export default MinterLogic;
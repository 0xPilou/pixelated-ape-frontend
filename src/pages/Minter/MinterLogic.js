/* Libs & Modules */
import { useState } from 'react';
import { ethers } from 'ethers'

/* Logic & Helpers */
import useFetch from '../../helpers/useFetch'

/* Contract & Configuration */
import CONFIG from '../../config.json'
import CONTRACT from '../../contract/ApePixelGang.json'
import ERC20_CONTRACT from '../../contract/ERC20.json'

const MinterLogic = () => {
    const [number, setNumber] = useState(3);
    const [error, setError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState("ETH")

    const { data } = useFetch();

    const updatePaymentMethod = (method) => {
        setPaymentMethod(method);
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

    const mint = async () => {
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

    // Functions required to Pay with APECOIN

    const approve = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const apecoin = new ethers.Contract(CONFIG.APECOIN_ADDRESS, ERC20_CONTRACT.abi, signer);

            try {
                const amountToApprove = number * 15;
                const weiAmountToApprove = ethers.utils.parseEther(amountToApprove.toString());
                const tx = await apecoin.approve(CONFIG.CONTRACT_ADDRESS, weiAmountToApprove);
                await tx.wait();
            }
            catch (err) {
                setError(err.message);
            }
        }
    }

    const mintWithApecoin = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, signer);
            try {
                const tx = await contract.mintWithApecoin(number);
                await tx.wait();
            }
            catch (err) {
                setError(err.message);
            }
        }
    }


    return { paymentMethod, updatePaymentMethod, number, increaseNumber, decreaseNumber, mint, approve, mintWithApecoin };

}
export default MinterLogic;


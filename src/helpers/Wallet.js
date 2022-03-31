import MetaMaskOnboarding from '@metamask/onboarding'
import { ethers } from 'ethers'

import CONFIG from '../config.json'

const Wallet = () => {

    const onboarding = new MetaMaskOnboarding();

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({
                method: 'eth_requestAccounts',
            })
                .then(function (accounts) {
                    accountChangeHandler(accounts[0])
                });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            provider.getNetwork()
                .then(function (network) {
                    chainChangeHandler(network.chainId);
                });
        } else {
            onboarding.startOnboarding();
        }
    }

    const accountChangeHandler = (newAccount) => {
        localStorage.setItem('account', newAccount.toString())
        localStorage.setItem('status', "connected")
        if (newAccount.toString() === "") {
            localStorage.setItem('status', "disconnected")
        }
        window.location.reload()
    }

    const chainChangeHandler = (chainId) => {
        if (chainId !== CONFIG.CHAIN_ID) {
            localStorage.setItem('network', "error")
        }
        else {
            localStorage.setItem('network', CONFIG.CHAIN_ID)
        }
        window.location.reload()
    }

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountChangeHandler);
    }

    if (window.ethereum) {
        window.ethereum.on('chainChanged', chainChangeHandler);
    }

    return { connectWalletHandler };

}

export default Wallet;

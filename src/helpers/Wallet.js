import MetaMaskOnboarding from '@metamask/onboarding'

const Wallet = () => {

    const onboarding = new MetaMaskOnboarding();

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({
                method: 'eth_requestAccounts',
            })
                .then(function (accounts) {
                    accountChangeHandler(accounts[0])
                    localStorage.setItem('status', "connected")
                });
        } else {
            onboarding.startOnboarding();
        }
    }

    const accountChangeHandler = (newAccount) => {
        localStorage.setItem('account', newAccount.toString())
        if (newAccount.toString() === "") {
            localStorage.setItem('status', "disconnected")
        }
        window.location.reload()
    }


    if (window.ethereum) {
        window.ethereum.on('accountsChanged', accountChangeHandler);
    }

    return { connectWalletHandler };

}

export default Wallet;

/* Libs & Modules */
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'

import GalleryCard from '../../components/GalleryCard/GalleryCard'

/* Contract & Configuration */
import CONFIG from '../../config.json'
import CONTRACT from '../../contract/Contract.json'

const GalleryLogic = () => {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        async function fetchCollection() {
            if (typeof window.ethereum !== 'undefined') {
                // const provider = new ethers.providers.Web3Provider(window.ethereum);
                const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
                const contract = new ethers.Contract(CONFIG.CONTRACT_ADDRESS, CONTRACT.abi, provider);
                const userAddress = localStorage.getItem('account')

                let tokenIDs = []
                let tokenURI;
                let metadata;
                let json;
                let imageCID;

                try {
                    // Get the owners token IDs
                    tokenIDs = await contract.tokensOfOwner(userAddress);

                    for (let i = 0; i < tokenIDs.length; i++) {
                        // Get the token URI corresponding to a token ID
                        tokenURI = await contract.tokenURI(tokenIDs[i]);

                        // Reformat URI to be able to fetch data from ipfs.io
                        tokenURI = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");

                        // Check contract function tokenURI to see metadata format
                        tokenURI = tokenURI.replace(".json", "");

                        // Fetch the metadata file
                        metadata = await fetch(tokenURI);
                        if (!metadata.ok)
                            throw new Error(metadata.statusText);

                        // Convert response to JSON
                        json = await metadata.json();

                        console.log(json)
                        console.log(json.attributes)
                        // Extract Image CID from the JSON Metadata
                        imageCID = json.image

                        // Reformat URI to be able to render the image using ipfs.io
                        imageCID = imageCID.replace("ipfs://", "https://ipfs.io/ipfs/");

                        // Add a GalleryCard component to the collection
                        setCollection(
                            collection => [
                                ...collection,
                                <GalleryCard key={i} img={imageCID} id={tokenIDs[i].toString()} />   
                            ]);
                    }
                }
                catch (err) {
                    console.log(err.message)
                }
            }
        }
        fetchCollection();
    }, [])

    return { collection };
}
export default GalleryLogic;


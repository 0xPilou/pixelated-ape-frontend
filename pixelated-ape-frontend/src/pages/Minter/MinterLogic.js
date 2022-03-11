import { useState } from 'react';

import CONFIG from '../../config.json'

const MinterLogic = () => {
    const [number, setNumber] = useState(3);

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

    return { number, increaseNumber, decreaseNumber };
}
export default MinterLogic;
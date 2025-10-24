import React from 'react';
import swimming from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className=''>
                        <img src={swimming} alt="" />
                        <img src={classImage} alt="" />
                        <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
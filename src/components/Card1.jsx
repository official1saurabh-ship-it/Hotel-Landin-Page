import React from 'react'

const Card1 = ({ image, heading, description, index }) => {


    // Ultra-safe color selection



    return (
        <div className={`w-full h-full p-5 rounded-2xl flex flex-col items-center justify-center text-center bg-white border border-gray-200 `}>
            <div className='flex flex-col items-center gap-2 mb-2'>
                {image && <img className='w-12 h-12 object-contain mb-2' src={image} alt="" />}
                <div className='font-bold text-xl text-black '> {heading}</div>
            </div>
            <p className='text-xl text-gray-700 font-bold leading-relaxed'>{description}</p>
        </div>
    )
}

export default Card1
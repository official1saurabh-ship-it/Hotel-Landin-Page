import React from 'react'
import comment from '../assets/comments.png'


const CardAbout = ({ comment, name, paragraph }) => {
    return (
        <div className="h-36 w-50 flex flex-col  bg-white  p-4 border-2 border-amber-800 rounded-4xl  shadow transition-transform duration-300 hover:scale-105 justify-center items-center">
            <div className='h-10 w-10 rounded-full'>
                <img src={comment} alt="" />
            </div>
            <div className='text-black font-bold'>{name}</div>
            <div className="text-gray-300">{paragraph}</div>
        </div>
    )
}

export default CardAbout
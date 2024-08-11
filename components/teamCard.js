import React from 'react'

const TeamCard = ({ name, post, image }) => {
    return (
        <div className='w-64'>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                    className="absolute object-cover w-full h-full rounded"
                    src={image}
                    alt="Person"
                />
            </div>
            <div className="flex flex-col sm:text-center">
                <p className="text-xl font-bold">{name}</p>
                <p className="mb-5 text-sm text-gray-800">{post}</p>
                <div className="flex items-center space-x-3 sm:justify-center">
                </div>
            </div>
        </div>
    )
}

export default TeamCard
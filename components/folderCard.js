'use client'
import React from 'react'
import Link from 'next/link'
const FolderCard = ({ name, url = "/home" }) => {
    return (
        <div className='z-50 hover:scale-105 transition-all duration-100 hover:bg-gray-300  bg-gray-200 rounded-xl md:h-48 md:w-48 h-32 w-36 '>
            <Link href={url}>
                <div className='flex justify-center items-center flex-col'>
                    < img src="/folder.png" alt="" className='lg:h-40 lg:w-40 h-24' />
                    <p className="lg:text-base text-sm font-bold text-gray-800">{name}</p>
                </div>
            </Link>
        </div >
    )
}

export default FolderCard
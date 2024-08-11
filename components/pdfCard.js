'use client'
import React from 'react'
import Link from 'next/link'
const PdfCard = ({ name, url = "/home" }) => {
    return (
        <div className='z-50 hover:scale-105 transition-all duration-100 hover:bg-gray-300  bg-gray-200 rounded-xl md:h-48 md:w-48 h-32 w-36 '>
            <a href={url} target='_blank'>

                <div className='flex justify-center items-center flex-col h-full'>
                    < img src="/pdf.png" alt="" className='lg:h-36 h-24' />
                    <p className="lg:text-base text-sm font-bold text-gray-800">{name}</p>
                </div>
            </a>
        </div >
    )
}

export default PdfCard
import React from 'react'

const Container = ({ child }) => {
    return (
        <div className='flex justify-center md:h-[15rem] h-auto mt-5 md:pt-5 pt-14 md:mb-0 mb-10'>
            <div className='max-w-4xl flex flex-wrap gap-10 lg:justify-normal justify-center items-center'>

                {child}


            </div>
        </div >
    )
}

export default Container
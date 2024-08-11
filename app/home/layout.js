'use client';

import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import { useRouter } from 'next/navigation'

const Layout = ({ children }) => {
    const router = useRouter();

    return (
        <div className="relative " id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50">
                <div className="blur-[106px] h-44 bg-gradient-to-br from-purple-600 to-purple-400 "></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-red-800 to-green-300"></div>
            </div>
            <div className='w-screen md:h-[80px] h-[120px] flex items-center md:justify-between justify-around md:px-36 '>
                <h1 onClick={() => router.push('/home')} className='text-black cursor-default font-bold md:text-3xl text-4xl hover:text-purple-600 transition-all duration-300 ease-in-out z-40'>Free Notes</h1>
                <a
                    onClick={() => router.push("/home/team")}
                    className="relative flex h-11 cursor-default items-center justify-center md:px-6 px-4 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:bg-purple-600 sm:w-max"
                >
                    <span className="relative w-full text-base font-semibold text-white">Our Team</span>
                </a>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
                <div className="relative pt-16 ml-auto ">
                    <div className="text-center cursor-default mx-auto flex justify-center items-center flex-col gap-3">
                        <h1 className="text-gray-900 font-bold md:text-7xl text-3xl">
                            Shaping a world with
                        </h1>
                        <h1 className="font-bold md:text-7xl text-2xl text-purple-600 ">
                            {/* <TypewriterComponent
                                options={
                                    {
                                        strings: ["freenotes.gautamsuthar.in"],
                                        autoStart: true,
                                        loop: true,
                                    }
                                }

                            /> */}
                            freenotes.gautamsuthar.in
                        </h1>
                        <p className="md:mt-8 lg:w-[900px] text-gray-700">
                            Unlock a library of free PDFs provided by BCA professors. Ideal for students seeking top-quality academic resources to streamline their studies and excel in their BCA program.
                        </p>
                    </div>
                </div>
                {children}
            </div>
        </div >
    )
}


export default Layout
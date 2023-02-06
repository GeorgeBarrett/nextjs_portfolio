import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {

    const [navigation, setNavigation] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'portfolio'
        },
        {
            id: 3,
            link: 'experience'
        },
        {
            id: 4,
            link: 'me'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <div className=" w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in">
            <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
                <Link href="/#home" >
                    <h1 className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 trackingwider cursor-pointer">George</h1>
                </Link >
                
                <div>
                    <ul className="hidden md:flex">

                        
                            {links.map(({id, link}) => (
                                <Link key={id} href={`/#${link}`}>
                                    <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-110 tracking-wider">{link}</li>
                                </Link>
                            ))}
                        
                    </ul>

                    {
                        !navigation && (
                        <div className="md:hidden cursor-pointer" onClick={() => setNavigation(true)}>
                            <FaBars size={30} />
                        </div>
                        )
                    }

                </div>
            </div>

            <div className={
                navigation 
                    ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/20 backdrop-blur"
                    : ""}
                >    
                    <div className={
                        navigation
                        ? "left-0 fixed top-0 w-4/5 h-full bg-gradient-to-r from-black to-gray-600 text-white p-4 ease-in duration-500"
                        : "fixed top-0 left-[-100%] p-4 h-full ease-in duration-500"}>
                
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/#home">
                                <h2 className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">George</h2>
                            </Link>
                            <div onClick={() => setNavigation(false)} className="p-3 cursor-pointer">
                                <FaTimes size={30} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 flex flex-col h-fit gap-20">
                        <ul className="w-5 uppercase">

                            {links.map(({id, link}) => (
                                <Link key={id} href={`/#${link}`}>
                                    <li className="py-4 text-2xl tracking-wider cursor-pointer">{link}</li>
                                </Link>
                            ))}

                        </ul>

                        <div>
                            <div className="grid grid-cols-1 mx-auto w-2/5 gap-10">
                                <div href="" className="flex items-center justify-center rounded-md shadow-md shadow-white p-3 cursor-pointer">
                                    <Link href="https://github.com/GeorgeBarrett">
                                        <FaGithub size={25}/>
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center rounded-md shadow-md shadow-white p-3 cursor-pointer">
                                    
                                        <FaLinkedin size={25}/>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>                    
        </div>
    );
};

export default Navbar

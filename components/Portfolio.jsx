import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import api from '../public/assets/api.jpg';
import driedFruit from '../public/assets/driedFruit.jpg';
import lpthw from '../public/assets/lpthw.jpg'
import weatherApp from '../public/assets/weatherApp.jpg';
import { MdExpandMore } from 'react-icons/md';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: "learn python the hard way",
            imageSrc: lpthw,
            url: "lpthw"
        },
        {
            id: 2,
            title: "django rest api",
            imageSrc: api,
            url: "django_rest_api"
        },
        {
            id: 3,
            title: "vanilla javascript dried fruit shop",
            imageSrc: driedFruit,
            url: "bizarre_bazaar"
        },
        {
            id: 4,
            title: "javascript weather app",
            imageSrc: weatherApp,
            url: "weather_app"
        },
    ]
    
    return (
        <div id="portfolio" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black font-bold">portfolio</h2>
                <p className=" py-4 max-w-lg">here are some of the projects that I have built</p>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                    {portfolios.map(({id, title, imageSrc, url}) => (

                        <Link key={id} href={`/portfolio/${url}`}>

                            <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                                <Image height="500" width="500" src={imageSrc} alt={title} className="rounded-md duration-200 hover:scale-105" />
                                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                                    {title}
                                </h2>
                            </div>

                        </Link>
                    ))}
                </div>
                
                <div className="flex items-center justify-center mt-11">
                    <Link href="/portfolio">
                        <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
                            All projects
                        <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                            <MdExpandMore size={25} />
                        </span>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Portfolio
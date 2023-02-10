import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import api from '../../public/assets/api.jpg';
import driedFruit from '../../public/assets/driedFruit.jpg';
import lpthw from '../../public/assets/lpthw.jpg'
import weatherApp from '../../public/assets/weatherApp.jpg';

export const getStaticProps = async () => {

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
            url: "bizarre-bazaar"
        },
        {
            id: 4,
            title: "javascript weather app",
            imageSrc: weatherApp,
            url: "weather-app"
        },
    ];

    return {
        props: {portfolios}
    }

}

const allProjects = ({portfolios}) => {
  
    
    return (
        <div id="portfolio" className="w-full">
            <div className="max-w-screen-xl mx-auto pt-36 p-4 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black font-bold pb-16">portfolio</h2>

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
            </div>
        </div>
    );
}

export default allProjects
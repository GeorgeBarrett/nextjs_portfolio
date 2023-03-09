import React from 'react';
import { useRouter } from 'next/router';
import api from '../../public/assets/api.jpg';
import driedFruit from '../../public/assets/driedFruit.jpg';
import lpthw from '../../public/assets/lpthw.jpg'
import weatherApp from '../../public/assets/weatherApp.jpg';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai'
import { BiChevronLeft } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';

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
        title: "next.js weather app",
        imageSrc: weatherApp,
        url: "weather_app"
    },
];

const getPortfolioFrom = (url) => portfolios.filter(p => p.url === url)[0]

export async function getStaticPaths() {
    const paths = portfolios.map(p => ({
        params: {id: p.url}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const portfolio = getPortfolioFrom(params.id)

    return {
        props: {portfolio}
    }
}

const OnePortfolio = ({portfolio: {title, imageSrc}}) => {

    return (
        <div className="h-fit w-full text-center">
            <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
                <div className="flex">
                    <Link href="/portfolio">

                        <div className="flex items-center justify-center my-8 text-black font-bold capitalize cursor-pointer">
                            <BiChevronLeft size={25} /> back
                        </div>

                    </Link>
                </div>

                <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-gray-600 tracking-wider">{title}</h1>

                <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
                    <Image src={imageSrc} alt={imageSrc} layout="fill" objectFit="cover" />
                </div>

                {/* <h2 className="text-center md:text-left my-4 text-2xl font-bold">
                    Description
                </h2> */}

                <div className="flex items-center justify-center gap-10">
                    <Link href="/">
                        <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            demo
                            <span className="duration-200 ease-in">
                                <AiOutlineCaretRight size={18} className="ml-2" />
                            </span>
                        </div>
                    </Link>

                    <Link href="https://github.com/GeorgeBarrett">
                        <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            my portfolio
                            <span className="duration-200 ease-in">
                                <FaGithub size={18} className="ml-2" />
                            </span>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default OnePortfolio
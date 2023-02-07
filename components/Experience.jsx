import React from 'react';
import css from 'styled-jsx/css';
import django from '../public/assets/experience/django.jpg';
import html from '../public/assets/experience/html.jpg';
import javascript from '../public/assets/experience/javascript.jpg';
import mySql from '../public/assets/experience/mySql.jpg';
import nextjs from '../public/assets/experience/nextjs.jpg';
import cssImage from '../public/assets/experience/cssImage.jpg';
import nodeExpress from '../public/assets/experience/nodeExpress.jpg';
import python from '../public/assets/experience/python.jpg';
import react from '../public/assets/experience/react.jpg';
import tailwind from '../public/assets/experience/tailwind.jpg';
import Image from 'next/image';

const Experience = () => {
  
    const technologies = [
        {
            id: 1,
            title: "HTML",
            src: html,
        },
        {
            id: 2,
            title: "CSS",
            src: cssImage,
        },
        {
            id: 1,
            title: "JAVASCRIPT",
            src: javascript,
        },
        {
            id: 1,
            title: "REACT",
            src: react,
        },
        {
            id: 1,
            title: "NEXT.JS",
            src: nextjs,
        },
        {
            id: 1,
            title: "TAILWIND",
            src: tailwind,
        },
        {
            id: 1,
            title: "NODE/EXPRESS",
            src: nodeExpress,
        },
        {
            id: 1,
            title: "MYSQL",
            src: mySql,
        },
        {
            id: 1,
            title: "PYTHON",
            src: python,
        },
        {
            id: 1,
            title: "DJANGO",
            src: django,
        },
    ]
  
    return (
    <div id="experience" className=" w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black font-bold">
                experience
            </h2>
            <p className="py-4 max-w-lg">
                Here are some of the technologies that I am familiar with. My experience with them varies so please check out my github for more clarification.
            </p>

            <div className="grid lg:grid-cols-4 gap-8">

                {
                    technologies.map(({id, title, src}) => (
                        
                        <div key={id} className=" flex flex-col lg:flex-col gap-10 lg:gap-0 items-center justify-between p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
                            
                            <Image src={src} width="64px" height="64px" alt={title} />
                            <h3 className="font-light">{title}</h3>

                        </div>

                    ))
                }

            </div>

        </div>
    </div>
  )
}

export default Experience
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import CV from '../public/assets/CV';
import { MdExpandMore } from 'react-icons/md';
import frog from '../public/assets/frog.jpg'


const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="mx-auto overflow-hidden rounded-xl">
          <Image height={600} width={600} src={frog} alt="frog" />
        </div>
        <h2 className="uppercase font-bold text-gray-600 text-5xl">Junior Software Engineer</h2>
        <p className="text-gray-600 text-xl max-w-sm mx-auto">
          Hey! My name is George, I'm 35 years old, live in Bristol and have a passion for development. I'm currently on the road to becoming a full stack software engineer 
          and would like to specialise in the backend. I am familiar with technologies such as javascript, express, node, react, python and django.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
            About me
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default HomePage
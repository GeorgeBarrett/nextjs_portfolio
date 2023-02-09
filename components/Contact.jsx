import Image from 'next/image';
import React from 'react';
import contact from '../public/assets/contact/contact.jpg';
import contact2 from '../public/assets/contact/contact2.jpg';
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div id="contact" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black font-bold">contact</h2>

            <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-gray-600 bg-white mt-4">
              
              <div className="w-full md:w-1/2 h-full rounded-md p-4">
                
                <Image src={contact} alt="retro phone" className="rounded-md" />
                <p className="pt-2 pb-8">
                  Please don't hesitate to get in contact using my contact form oolala. I love coding, team-work, problem solving and want to continualy better myself both as a coder and as a jedi.
                </p>
                <div className="grid grid-cols-2 mx-auto w-2/5 gap-10">
                  <div className="flex items-center justify-center rounded-md shadow-md shadow-black p-3 cursor-pointer hover:scale-105 duration-200">
                    <Link href="https://github.com/GeorgeBarrett">
                      <FaGithub size={30}/>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center rounded-md shadow-md shadow-black p-3 cursor-pointer hover:scale-105 duration-200">
                    <FaLinkedin size={30}/>
                  </div>
                </div>
              
              </div>

              <div className="w-full md:w-1/2 h-full rounded-md p-4">
                <div className="p-4 text-left">
                  <form action="https://getform.io/f/28aefd53-2032-4b70-a4b8-345cf1747005" method="POST">
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                      
                      <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          name
                        </label>
                        <input type="text" name="name" 
                          className="border-2 rounded-md p-3 flex focus:outline-none border-black-500"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          phone
                        </label>
                        <input type="text" name="phone" 
                          className="border-2 rounded-md p-3 flex focus:outline-none border-black-500"
                        />
                      </div>

                      <div className="flex flex-col col-span-2">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          email
                        </label>
                        <input type="email" name="email" 
                          className="border-2 rounded-md p-3 flex focus:outline-none border-black-500"
                        />
                      </div>

                      <div className="flex flex-col col-span-2">
                        <label className="capitalize text-sm py-2 text-slate-600 font-light">
                          message
                        </label>
                        <textarea name="message" rows="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-black-400">
                        </textarea>
                      </div>

                    </div>

                    <div className="flex items-center justify-center ">
                      <button className="group my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                        Send message
                      </button>
                    </div>

                  </form>
                </div>
              </div>

            </div>

        </div>
    </div>
  )
}

export default Contact  
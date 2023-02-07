import React from 'react';
import Link from 'next/link';

const Me = () => {
  return (
    <div id="me" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black font-bold">
                me
            </h2>

            <div className="shadow-xl shadow-gray-600 my-8 px-8 py-4">
                <p className="py-4 max-w-2xl mx-auto">
                    Besides from the love of coding. I would like to mention some other things about myself. My previous experiences of being an electrician, project manager, system designer
                    and consultant, have prepared me well for the essential skills required that surround a code-centered job. Team/independent working skills, problem solving and communication
                    are areas that I'm well versed in. During my spare time, I enjoy climbing, yoga, learning spanish, djing, surfing and all of the other usual suspects. 
                </p>
            </div>

            <div className="flex items-center justify-center gap-10">
                <Link href="/cv.pdf" download={true}>
                    <div className="group flex items-center justify-center my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider duration-200 ease-out hover:scale-110">
                        download cv
                    </div>   
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Me
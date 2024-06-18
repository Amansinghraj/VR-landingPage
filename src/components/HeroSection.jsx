import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-4xl lg:text-5xl text-center tracking-wide '> VirtualR build tools
        <span className='bg-gradient-to-r from-orange-200 to-orange-500 text-transparent bg-clip-text'>{" "}for developer</span>
            
        </h1>
        <p className='mt-10 max-w-2xl text-md text-center text-neutral-500'>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>
        <div className='my-10 flex justify-center'>
            <a href="" className='py-3 px-4 mx-3 bg-gradient-to-r from-orange-200 to-orange-500  rounded-md'>Start for free</a>
            <a className='py-3 px-4 mx-3 rounded-md border' href="">Documentation</a>
        </div>
        <div className='flex mt-10 justify-center'> 
            <video 
                autoPlay
                loop
                muted
                className='w-1/2 rounded-lg border border-orange-500 shadow-sm shadow-orange-400 mx-2 my-4'>
                <source src={video1}/>
                Your browser does not support the video tag.
            </video>
            <video 
                autoPlay
                loop
                muted
                className='w-1/2 rounded-lg border border-orange-500 shadow-sm shadow-orange-400 mx-2 my-4'>
                <source src={video2}/>
                Your browser does not support the video tag.
            </video>
        </div>

    </div>
  )
}

export default HeroSection
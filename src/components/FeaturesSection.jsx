import React from 'react'
import { features } from '../constants'

const FeaturesSection = () => {
  return (
    <div className='mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center'>
            <span className='text-orange-500 rounded-full text-sm h-6 font-medium px-2 py-1'>
                FEATURES
            </span>
            <h2 className='mt-10 lg:mt-20 text-3xl sm:text-4xl lg:text-5xl tracking-wide'>
            Easily build 
            <span className='bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent '>
            {" "}your code
            </span>
            </h2>
        </div>
        <div className='flex flex-wrap mt-10 lg:mt-20'>
            {
                features.map((feature,index) =>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                        <div className='flex'>
                            <div className='flex mx-6 h-10 w-10 p-2 text-orange-700 justify-center item-center'>
                             {feature.icon}

                            </div>
                            <div>
                             <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                             <p className=' text-neutral-700 mb-20 p-2 text-md'>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturesSection
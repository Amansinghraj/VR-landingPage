import React from 'react'
import {pricingOptions} from "../constants/index"
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl tracking-wide my-8'>
            Pricing
        </h2>
        <div className='flex flex-wrap'>
            {pricingOptions.map((option,index) =>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-slate-400 rounded-xl '>
                        <p className='text-3xl mb-8'>
                        {option.title}
                        {option.title === "Pro" &&(
                            <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text 
                            text-xl ml-2 mb-4'> (Most Popular)</span>
                        )}
                        </p>
                        <p className='mb-8'>
                            <span className='mt-6 mr-2 text-5xl' >
                                {option.price}
                            </span>
                            <span className='tracking-tight text-neutral-400 '>
                                /Month
                            </span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) =>(
                                <li key={index} className='flex items-center mt-8'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="" className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-orange-200 to-orange-500 rounded-lg trasition-duration-200  '>Subscribe</a>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
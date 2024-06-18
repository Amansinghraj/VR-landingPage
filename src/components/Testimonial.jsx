import React from 'react'
import {testimonials} from "../constants/index"

const Testimonial = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20'>
             What People are saying
        </h2>
        <div className='flex justify-center flex-wrap'>
            {
                testimonials.map((testimonial , index)=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='border border-neutral-500 font-light rounded-md p-6 text-md'>
                            <p>{testimonial.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img src={testimonial.image} alt="" className='w-12 h-12 rounded-full border-neutral-300 mr-6' />
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className='font-normal text-sm italic text-neutral-600'>{testimonial.company}</span>
                                </div>
                            </div>
                        </div>

                    </div>      
                ))
            }
        </div>
    </div>
  )
}

export default Testimonial
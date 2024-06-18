import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeimg from "../assets/code.jpg"
import {checklistItems} from '../constants/index'
 
const WorkflowSection = () => {
  return (
    <div className='mt-20'>
        <h2 className=' text-center text-3xl sm:text-4xl lg:text-5xl tracking-wide mb-10' >
        Accelerate your 
        <span  className=' bg-gradient-to-r  from-orange-200 to-orange-500 bg-clip-text text-transparent'>
            {" "}coding workflow</span>
        </h2>
        <div className='flex justify-center flex-wrap'>
            <div className='p-2 w-full lg:w-1/2'>
                <img  src={codeimg} alt="code img"  />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item, index) =>(
                        <div key={index} className='mb-12 flex'>
                            <div className=' text-green-400 mx-6 justify-center items-center '>
                            <CheckCircle2/>
                            </div>   
                            <div>
                                <h5 className=' mb-2 text-xl'>{item.title} </h5>
                                <p className='text-md text-neutral-500'>{item.description}</p>
                            </div> 
                        </div>

                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default WorkflowSection
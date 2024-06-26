import React from 'react'
import {resourcesLinks,platformLinks,communityLinks } from "../constants/index"


const Footer = () => {
  return (
    <footer className='border-t py-10 mt-20 border-neutral-700'>
        <div className='grid grid-col-2 lg:grid-cols-3 gap-4 items-center text-center'>
            <div >
                <h3 className='text-md font-bold mb-4'>Resources</h3>
                <ul className='space-y-2 '>
                    {resourcesLinks.map((link, index) =>(
                        <li key={index} >
                            <a href={link.href} className='text-neutral-500 hover:text-orange-500'>
                                {link.text}
                            </a>

                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-md font-bold mb-4'>Platform</h3>
                <ul className='space-y-2 '>
                    {platformLinks.map((link, index) =>(
                        <li key={index} >
                            <a href={link.href} className='text-neutral-500 hover:text-orange-500'>
                                {link.text}
                            </a>

                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-md font-bold mb-4'>Community</h3>
                <ul className='space-y-2 '>
                    {communityLinks.map((link, index) =>(
                        <li key={index} >
                            <a href={link.href} className='text-neutral-500 hover:text-orange-500'>
                                {link.text}
                            </a>

                        </li>
                    ))}
                </ul>
            </div>

            
            
        </div>
    </footer>
  )
}

export default Footer
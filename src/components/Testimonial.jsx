import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center my-10 lg:my-20'>What people are saying</h2>
        <div className='flex flex-wrap justify-center'>
            {testimonials.map((test,i) => (
                <div key={i} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md p-6 border border-neutral-800 text-md font-thin'>
                        <p>{test.text}</p>
                        <div className='flex mt-8 items-center'>
                            <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={test.image} alt={test.user} />
                            <div>
                                <h6>{test.user}</h6>
                                <span className='text-sm italic text-neutral-600 font-normal'>{test.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
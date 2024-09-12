import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl tracking-wide my-8 text-center'>Pricing</h1>
        <div className='flex flex-wrap'>
            {pricingOptions.map((price, i) => (
                <div key={i} className='w-full sm:w-1/2 lg"w-1/3 p-2'>
                    <div className='border border-neutral-700 p-10 rounded-md'>
                        <p className='text-4xl mb-8'>
                            {price.title}
                            {price.title === "Pro" && (
                                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular)</span>
                            )}
                        </p>
                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>
                                {price.price}
                            </span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>
                        <ul>
                            {price.features.map((feature, i) => (
                                <li key={i} className='mt-8 flex items-center'>
                                    <CheckCircle2 />
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex items-center justify-center mt-20 text-center w-full h-12 p-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'>Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
import React from 'react'
import { platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 border-t border-neutral-700 py-10'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='col-span-1 md:col-span-1 lg:col-span-1'>
                <h3 className='text-md font-semibold mb-4'>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link, i) => (
                        <li key={i}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link, i) => (
                        <li key={i}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='col-span-2 md:col-span-1 lg:col-span-1'>
                <h3 className='text-md font-semibold mb-4'>Community</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link, i) => (
                        <li key={i}>
                            <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
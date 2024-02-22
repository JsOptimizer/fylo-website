import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.svg'

const Footer = () => {
  return (
    <section className='p-[5%] bg-primary text-white space-y-8'>
      <div className=''>
        <Image
        className=''
        src={logo}
        alt='logo'
        width={100}
        height={100}
        />
      </div>
      <section className='grid grid-cols-4'>
        {
          [1,2,3,4].map((val:any,idx)=>(
            <ul key={idx}>
              <li>Phone:</li>
            </ul>
          ))
        }
      </section>
    </section>
  )
}

export default Footer
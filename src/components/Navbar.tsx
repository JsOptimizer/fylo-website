import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/logo.svg' 
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
      <div>
        <Image src={logo} alt='logo' width={100} height={100}/>
      </div>
      <ul className='flex gap-2'>
        {
          ['Features',"Teams","Sign In"].map((label:string,idx)=>
          (
            <li key={idx} className='min-w-10  p-1 m-1'>
              <Link href={''}>{label}</Link>
            </li>
          )
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar
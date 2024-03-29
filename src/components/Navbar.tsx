import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/logo.svg' 
import Link from 'next/link'
import { navList } from '@/constant'

const Navbar = () => {
  return (
    <nav className='w-full  flex justify-between items-center px-[10%] pt-[2%]'>
      <div>
        <Image src={logo} alt='logo' width={100} height={100}
        className='w-16  sm:w-auto sm:h-auto'
        />
      </div>
      <ul className='flex gap-2'>
        {
          navList.map(({label,path},idx)=>
          (
            <li key={idx} className='text-xs font-bold sm:text-md min-w-10  p-1 m-1'>
              <Link href={path}>{label}</Link>
            </li>
          )
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar
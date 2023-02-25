import React from 'react'
import { Hero } from '../Hero'
import { Navbar } from '../Navbar'

type Props = {navData?:{name:string,link:string}[]}

const Header = ({navData}: Props) => {
  return (
    <header className='flex flex-col h-screen'>
      <nav>
      <Navbar navitems={navData}/>
      </nav>
      <section id='Hero' className='flex-1'>
      <Hero />
      </section>
    </header>
  )
}

export default Header
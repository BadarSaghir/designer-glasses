import React from 'react'
import { Hero } from '../Hero'
import { Navbar } from '../Navbar'

type Props = {navData?:{name:string,link:string}[],logo:string;
imageText:{name:string,link:string}[]}

const Header = ({navData,logo,imageText}: Props) => {
  return (
    <header className='flex flex-col h-screen'>
      <nav>
      <Navbar navitems={navData}  logo={logo}/>
      </nav>
      <section id='Hero' className='flex-1'>
      <Hero imageText={imageText}/>
      </section>
    </header>
  )
}

export default Header
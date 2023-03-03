import { StaticImageData } from 'next/image';
import React from 'react'
import { Hero } from '../Hero'
import { Navbar } from '../Navbar'

type Props = {navData?:{name:string,link:string}[],logo:StaticImageData;
imageText:{name:string,link:string}[];
hreoImg:string

}

const Header = ({navData,logo,imageText,hreoImg}: Props) => {
  return (
    <header className='flex flex-col h-screen'>
      <nav >
      <Navbar navitems={navData}  logo={logo}/>
      </nav>
      <section id='Hero'  style={{
      backgroundImage: `url(${hreoImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    

      backgroundPosition: '0% 0%'

    }} className='flex-1 '>
      <Hero imageText={imageText} imgSrc={hreoImg}/>
      </section>
    </header>
  )
}

export default Header
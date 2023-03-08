import React from 'react'
import GlassesLayout from '../../components/Layout/GlassesLayout'
import heroImg from "../../assets/page2/img.png"


const Index = () => {
  return (
    <GlassesLayout header={heroImg.src} showHeader={true} >
      <div className='flex-1  -z-10'>d</div>

    </GlassesLayout>
  )
}

export default Index
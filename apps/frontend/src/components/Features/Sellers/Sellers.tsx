import  PhonelinkLockOutlined  from '@mui/icons-material/PhonelinkLockOutlined'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'
import FeaturesLayout from '../../Layout/FeaturesLayout'
type Props ={
  sellerListSrc:string[],
  sectionTitles:string[]
}

const Sellers = ({sellerListSrc}:Props) => {
  return (
    <div className="h-100% flex flex-col bg">

<FeaturesLayout>
  <div>
  <Tabs
>
  <Tab icon={<PhonelinkLockOutlined />} label="top" />

</Tabs>
  </div>
  <div>d</div>
  <div>d</div>
</FeaturesLayout>

    </div>
  )
}
export default Sellers

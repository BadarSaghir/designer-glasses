import PhonelinkLockOutlined from '@mui/icons-material/PhonelinkLockOutlined';
import { Grid, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';
import FeaturesLayout from '../../Layout/FeaturesLayout';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import style from "./Sellers.module.scss"
import Seller from './Seller';
type Props = {
  sellerListSrc: { new: string[]; best: string[] };
  sectionTitles: string[];
  sellerUrl: { new: string; best: string };
};

const Sellers = ({ sellerListSrc, sectionTitles }: Props) => {
  const [value, setValue] = useState(0);
const theme = useTheme()
  return (
    <div className={`h-[100%]    flex flex-col width-full bg-[${theme.sellerBg}]`}>
      <FeaturesLayout>
        <div className=" h-[100%] flex justify-center">
          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="New and Best Sellers"
          >
            {sectionTitles.map((value, idx) => (
              <Tab key={idx} value={idx} label={value} />
            ))}
          </Tabs>
        </div>
        <div className="w-full h-[100%] flex w-[100%]">
          <TabContext value={value+""}>
            {Object.entries(sellerListSrc).map(([key, val], idx) => {
              return (
                <TabPanel className='justify-center w-[100%]'  key={key} value={idx+""}>
                  <div className='w-[100%]  flex items-center justify-center'>
                  <div  className="h-[100%]  w-[80%] md:w-[100%] lg:gap-12 gap-2 flex flex-wrap items-center justify-center">
                  {val.map((src, i) => (
                  <div className={`bg-white rounded-3xl w-[35vw] h-[20vh] p-4 lg:h-[25vh] lg:w-[25vw] ${i%2==0?style.displayNone:style.size}`}   key={i} >
                   
                   
                    <Seller   imgSrc={src} />
                   
                    </div>
                  ))}
                  </div>
                  </div>
                </TabPanel>
              );
            })}
          </TabContext>
        </div>
        <div className={`width-full bg-[${theme.sellerBg}]`}>d</div>
      </FeaturesLayout>
    </div>
  );
};
export default Sellers;

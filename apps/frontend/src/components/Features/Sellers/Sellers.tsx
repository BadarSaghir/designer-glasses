import PhonelinkLockOutlined from '@mui/icons-material/PhonelinkLockOutlined';
import { Grid, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';
import FeaturesLayout from '../../Layout/FeaturesLayout';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

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
    <div className="h-[100%]   flex flex-col">
      <FeaturesLayout>
        <div className=" flex justify-center">
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
        <div className="w-full h-[100%]">
          <TabContext value={value+""}>
            {Object.entries(sellerListSrc).map(([key, val], idx) => {
              return (
                <TabPanel className=''  key={key} value={idx+""}>
                  <Grid container  gap={3} justifyContent="center"  className="h-[80%] w-[100%]">
                  {val.map((src, i) => (
                  <Grid item  className="h-[40%] w-[40%]" xs={3} key={i} >
                   
                   
                    <Seller   imgSrc={src} />
                   
                    </Grid>
                  ))}
                  </Grid>
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

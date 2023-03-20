import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import { Divider } from '@mui/material';

export default function ProductInfoTabs({
  product,
}: {
  product: ProductModel;
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col overflow-hidden w-[100%]">
      <Tabs
        className=""
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        <Tab label="Description" />
        <Tab label="Frame & Measurements" />
        
      </Tabs>
      <div className='p-16 overflow-hidden text-opacity-75 min-h-[340px] w-[100%] rounded-2xl bg-opacity-30 mt-8 bg-tertiaryMain'>
      {value === 0 && (
        // Content for Description tab
        <div className="">
          <h6 className="text-secondaryMain font-bold">About {product.name}</h6>
          <p className="text-secondaryMain  "> {product.description}</p>
        </div>
      )}
      {value === 1 && (
        // Content for Frame & Measurements tab
        <div className="">
          <h6 className="text-secondaryMain font-bold">About {product.name}</h6>
          <div className="text-secondaryMain flex">
            <div className=''> {product.description}</div> 
          
            <div> {product.description}</div>
          </div>
        </div>
      )}
    
      </div>
    </div>
  );
}

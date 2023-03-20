import * as React from 'react';
import  Tab  from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';

export default function ProductInfoTabs({product}:{product:ProductModel}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (<div className='flex flex-col overflow-hidden'>
    <Tabs className='' variant='scrollable' value={value} onChange={handleChange}>
      <Tab label="Description" />
      <Tab label="Frame & Measurements" />
      <Tab label="Shipping & Returns" />
    </Tabs>

{value === 0 && (
    // Content for Description tab
    <div>{product.description}{product.description}{product.description}{product.description}{product.description}</div>
  )}
  {value === 1 && (
    // Content for Frame & Measurements tab
    <div>1</div>
  )}
  {value === 2 && (
    // Content for Shipping & Returns tab
    <div>2</div>
  )}
  </div>
  );
}
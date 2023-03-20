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
      <div className="p-16 overflow-hidden text-opacity-75 min-h-[340px] w-[100%] rounded-2xl bg-opacity-30 mt-8 bg-tertiaryMain">
        {value === 0 && (
          // Content for Description tab
          <div className="">
            <h6 className="text-secondaryMain font-bold">
              About {product.name}
            </h6>
            <p className="text-secondaryMain  "> {product.description}</p>
          </div>
        )}
        {value === 1 && (
          // Content for Frame & Measurements tab
          <div className="h-[100%]">
            <h6 className="text-secondaryMain font-bold ">
             
            </h6>
            {/* <div className="text-secondaryMain hidden text-justify sm:flex-row sm:flex h-[100%]">
            <div className='pr-3'> {product.description}</div> 
            <Divider orientation="vertical"  flexItem/>
            <div className='pl-3'> {product.description}</div>
          </div> */}
            <ProductMeasurement
              className="text-secondaryMain hidden text-justify sm:flex-row sm:flex h-[100%]"
              upper={{ className: 'pr-3 text-justify' }}
              lower={{ className: 'pl-3 text-justify' }}
              orientation="vertical"
              product={product}
            />
            <ProductMeasurement
              className="text-secondaryMain flex flex-col text-justify sm:flex-row sm:hidden h-[100%]"
              upper={{ className: 'pb-3 text-justify' }}
              lower={{ className: 'pt-3 text-justify' }}
              orientation="horizontal"
              product={product}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ProductMeasurement({
  product,
  orientation,
  upper,
  lower,
  className,
}: {
  product: ProductModel;
  className: string;
  orientation: 'vertical' | 'horizontal';
  upper: { className: string };
  lower: { className: string };
}) {
  return (
    <div className={`${className} w-[100%] flex-1`} >
      <div className={`${upper.className} w-[100%] flex flex-col flex-wrap gap-1 `}>
      <MeasureItem title='genders'  productMeasurement={product.genders}   />
      <MeasureItem title='size'  productMeasurement={product.sku}   />
      <MeasureItem title='shape'  productMeasurement={product.shape}   />
      <MeasureItem title='frames'  productMeasurement={product.frameType}   />
      <MeasureItem title='biofocal'  productMeasurement={product.biofocal?product.biofocal:['Yes']}   />

      </div>
      <Divider orientation={orientation} flexItem />
      <div className={`${lower.className} w-[100%]`}> {product.description}</div>
    </div>
  );
}

    function MeasureItem({title,productMeasurement}:{title:string,productMeasurement:string[]}) {
      return (<ul className='list-disc'>
          {' '}
          <li>
            <div className="flex gap-2">
              <h5 className="text-sm font-semibold">{title}: </h5>{' '}
              <div>
                {' '}
                {productMeasurement.map((item, idx) => <span className='text-sm' key={idx}> {item.toUpperCase() + `${idx < productMeasurement.length - 1 ? ',' : ''}`}</span>)}
              </div>
            </div>
          </li>
        </ul>);
    }
  
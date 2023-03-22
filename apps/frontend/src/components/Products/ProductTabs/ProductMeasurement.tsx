import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import { Divider } from '@mui/material';
import { GlassesSize } from './glassesSize';
import { MeasureItem } from './MeasureItem';
import lens1 from '../../../assets/page2/lense.png';
import lens2 from '../../../assets/page2/lense 2.png';
import lensHeight from '../../../assets/page2/lense height.png';
import lensWidth from '../../../assets/page2/lense width.png';

export function ProductMeasurement({
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
  const lenseData = [
    { img: lensWidth.src, label: 'Lense Width', value: product.lensWidth },
    { img: lensWidth.src, label: 'Lense Height', value: product.lensHeight },
    { img: lensWidth.src, label: 'Bridge Width', value: product.bridgeHeight },
    {
      img: lensWidth.src,
      label: 'Temple Lenght',
      value: product.templatelenght,
    },
  ];
  return (
    <div className={`${className} w-[100%] flex-1`}>
      <div
        className={`${upper.className} w-[100%] flex flex-col flex-wrap gap-1 `}
      >
        <MeasureItem title="genders" productMeasurement={product.genders} />
        <MeasureItem title="Sizes" productMeasurement={product.sku} />
        <MeasureItem title="Shapes" productMeasurement={product.shape} />
        <MeasureItem title="Frames" productMeasurement={product.frameType} />
        <MeasureItem
          title="Biofocal"
          productMeasurement={product.biofocal ? product.biofocal : ['Yes']}
        />
        <MeasureItem title="Manufacturer" productMeasurement={product.brands} />
        <MeasureItem
          title="Prescription Range"
          productMeasurement={[
            product.prescriptionRange.start +
              ' , ' +
              product.prescriptionRange.end,
          ]}
        />
      </div>
      <Divider orientation={orientation} flexItem />
      <div className={`${lower.className} w-[100%] flex flex-col gap-2`}>
      
        <h1>Frame & Measurements: mm/in</h1>
        <div className="grid grid-rows-2 grid-cols-2">
          {lenseData.map((val,key) => (
            <div key={key}>
              <GlassesSize img={val.img} label={val.label} value={val.value?.toString()} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

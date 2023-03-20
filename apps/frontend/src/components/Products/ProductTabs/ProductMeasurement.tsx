import { ProductModel } from "@designer-glasses/libs/models/Products/products.interface";
import { Divider } from "@mui/material";
import { MeasureItem } from "./MeasureItem";

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
            <MeasureItem
            title="Manufacturer"
            productMeasurement={product.brands}
          />
             <MeasureItem
            title="Prescription Range"
            productMeasurement={[product.prescriptionRange.start+" , "+product.prescriptionRange.end]}
          />
        </div>
        <Divider orientation={orientation} flexItem />
        <div className={`${lower.className} w-[100%]`}>{product.description}</div>
      </div>
    );
  }
  
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
function Product({
  advertisment,
  colors,
  date,
  frameType,
  genders,
  id,
  images,
  name,
  shape,
  sku,
}: ProductModel) {
  return (
    <div className="bg-white aspect-square md:min-w-[140px]  lg:min-w-[240px] lg:min-h-[240px]">
      <Carousel>
        {images.map((value, idx) => (
          <div key={idx}>
                                <Image src={value} height={240} width={240} alt={name}/>

            <p className="legend">Legend 1</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Product;

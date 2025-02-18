
import React, { useEffect, useState } from 'react';
import ProductZoom from './ProductZoom';
import { HorizontalCardList } from '../Components';
import { useProductDetails } from '../Utils/customHooks/useProductDetails';
import ProductCard from '../Components/Cards/ProductCard';
import AddToCartButton from '../Components/Buttons/AddToCartButton';
import { useLocation } from 'react-router-dom';
import Rating from '../Components/Buttons/Rating';

const Product: React.FC = () => {
  const { product } = useProductDetails();
  const [activeProductImg, setActiveProductImg] = useState<string>(product.sliding_images[0]);
  const location = useLocation().hash.replace("#", "");
  useEffect(() => {
    (location && location !== "-1") && setActiveProductImg(product.sliding_images[parseInt(location) - 1])
  }, [product, location]);
  console.log(product.name);
  
  const productDetails = {
    name: product.name,
    type: product.type,
    keyFeatures: ["Healthy and fresh", "Used in making tea, coffee, etc.", "Has a shelf life of 90 days"],
    unit: "450 ml",
    ingredients: ["Toned Milk", "Fat 3% minimum", "SNF 8.5% minimum"],
    fssaiLicense: "10012021000071",
    shelfLife: "3 months",
    returnPolicy: ["The product is non-returnable. For a damaged, defective, expired, or incorrect item, you can request a replacement within 24 hours of delivery.", "In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/unopened/unused and in original condition."],
    manufacturer: { name: "Kaira District Co-operative Milk Producers Union Limited", address: "Anand 388 001. At Food Complex Mogar, Mogar. Lic. No. 10014021001010." },
    countryOfOrigin: "India",
    customerCare: "info@blinkit.com",
    seller: "TAMS GLOBAL PRIVATE LIMITED",
    sellerFssai: "13323999000106",
    description: "Amul Moti Toned Milk (Polypack) is packed with the goodness of essential nutrients. It is popularly used in the preparation of sweets, curd, tea, coffee, etc., or can even be consumed directly.",
    disclaimer: "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.",
  };
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="">
          <div className='px-5 pb-5'>
            <ProductZoom src={activeProductImg} zoomLevel={3} />
          </div>
          <div className='w-[85%] relative'>
            <HorizontalCardList>{product.sliding_images.map((el: any, ind: number) => <ProductCard product={el} width={50} activecard={activeProductImg === el ? -1 : ind + 1} />)}</HorizontalCardList>
          </div>
        </div>
        <div className="my-6 py-4 border-t-[1px]">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          {Object.entries(productDetails).map(([key, value]) => (
            <div key={key} className="mb-4">
              <p className="font-semibold">{key.replace(/([A-Z])/g, " $1")}</p>
              {Array.isArray(value) ? (
                <ul className="list-disc ml-6">
                  {value.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : typeof value === "object" ? (
                Object.entries(value).map(([subKey, subValue]) => (
                  // <p key={subKey}>{subValue?subValue:""}</p>
                  <></>
                ))
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 max-w-[45%] sticky top-[90px] bottom-0 self-start pt-16 pl-12">
        <div className="sticky top-6">
          <p className="text-sm text-gray-500 mb-2">Home / Milk / Amul Moti Toned Milk (90 Days Shelf Life)</p>
          <h1 className="text-2xl font-bold mb-4">Amul Moti Toned Milk (90 Days Shelf Life)</h1>
          <div className="mb-4"><Rating />
          </div>
          <p className="text-green-500 mb-2">In 10 MINS</p>
          <p className="mb-4">
            View all by <a href="#" className="text-blue-500">Amul</a>
          </p>
          <p className="text-xl font-bold mb-2">
            <strong>450 ml</strong>
          </p>
          <div className="flex items-center mb-6"> {/* Price and Add to Cart */}
            <p className="mr-4">
              MRP ₹33 <span className="text-sm text-gray-500">(Inclusive of all taxes)</span>
            </p>
            <AddToCartButton handleClick={() => { }} itemCount={0} />
          </div>
          <div> {/* Why shop from Blinkit? */}
            <h3 className="text-xl font-bold mb-4">Why shop from blinkit?</h3>
            <div className="mb-4 flex">
              <img src="/Assests/Img/10_minute_delivery.png" alt="Delivery Icon" className="w-14 h-14 object-cover mr-2" /> {/* Replace with your icon */}
              <div>
                <p className="font-bold">Superfast Delivery</p>
                <p className="text-sm">
                  Get your order delivered to your doorstep at the earliest from
                  dark stores near you.
                </p>
              </div>
            </div>
            <div className="mb-4 flex">
              <img src="/Assests/Img/Best_Prices_Offers.png" alt="Price Icon" className="w-14 h-14 object-cover mr-2" /> {/* Replace with your icon */}
              <div>
                <p className="font-bold">Best Prices & Offers</p>
                <p className="text-sm">
                  Best price destination with offers directly from the
                  manufacturers.
                </p>
              </div>
            </div>
            <div className="flex">
              <img src="/Assests/Img/Wide_Assortment.png" alt="Assortment Icon" className="w-14 h-14 object-cover mr-2" /> {/* Replace with your icon */}
              <div>
                <p className="font-bold">Wide Assortment</p>
                <p className="text-sm">
                  Choose from 5000+ products across food, personal care,
                  household & other categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
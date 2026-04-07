import React from 'react';
import Image from 'next/image';
import { FaStar, FaPlus } from 'react-icons/fa6';

const products = [
  { id: 1, name: "Mint flavor chocolate", price: "399.00", rating: 5, image: "/p1.jpg", bgColor: "bg-[#4ade80]" },
  { id: 2, name: "Mint flavor chocolate", price: "399.00", rating: 4, image: "/p2.jpg", bgColor: "bg-[#bbf7d0]" },
  { id: 3, name: "Mint flavor chocolate", price: "399.00", rating: 5, image: "/p3.jpg", bgColor: "bg-[#fed7aa]" },
  { id: 4, name: "Mint flavor chocolate", price: "399.00", rating: 5, image: "/p4.jpg", bgColor: "bg-[#facc15]" },
  { id: 5, name: "Mint flavor chocolate", price: "399.00", rating: 4, image: "/p5.jpg", bgColor: "bg-[#86efac]" },
  { id: 6, name: "Mint flavor chocolate", price: "399.00", rating: 5, image: "/p6.jpg", bgColor: "bg-[#fef3c7]" },
];

export default function OurProduct() {
  return (
    <section className="py-16 px-4 max-w-[1440px] mx-auto bg-white">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-black italic uppercase text-[#000000] tracking-tight">
          Our Products
        </h2>
        <p className="text-[#000000] mt-1 font-medium">
          Fuel Your Workouts with Protein-Packed Nutrition
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-black rounded-[40px] p-2 flex flex-col overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image Container */}
            <div className={`relative h-64 w-full rounded-[35px] overflow-hidden ${product.bgColor} flex items-center justify-center p-6`}>
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={200}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Product Details */}
            <div className="p-5 flex justify-between items-end">
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-lg">
                  {product.name}
                </h3>
              <div className='flex justify-center items-center gap-1'>
                  <p className="text-white font-bold text-xl">
                  ₹{product.price}
                </p>
                {/* Rating Stars */}
                <div className="flex gap-1 text-[#57B233] text-sm">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={index < product.rating ? "fill-[#71AC16]" : "fill-gray-600"} 
                    />
                  ))}
                </div>
              </div>
              </div>

              {/* Add Button */}
              <button className="bg-[#57B233] text-white p-3 rounded-xl hover:bg-[#85C341] transition-colors shadow-lg active:scale-95">
                <FaPlus className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
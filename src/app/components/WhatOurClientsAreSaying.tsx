import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

const testimonials = [
  {
    id: 1,
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatar: "/avatar1.png", // public folder এ ইমেজ রেখো
    feedback: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!"
  },
  {
    id: 2,
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatar: "/avatar2.png",
    feedback: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!"
  },
  {
    id: 3,
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatar: "/avatar3.png",
    feedback: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!"
  },
  {
    id: 4,
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatar: "/avatar4.png",
    feedback: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!"
  },
  {
    id: 5,
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatar: "/avatar5.png",
    feedback: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!"
  },
  {
    id: 6,
    name: "Stive meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    avatar: "/avatar6.png",
    feedback: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!"
  }
];

export default function WhatOurClientsAreSaying() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto bg-white">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-black italic uppercase text-[#000000] tracking-tight">
          What Our Clients Are Saying
        </h2>
        <p className="text-[#000000] mt-1 font-medium">
          Real Stories, Real Results — Hear From Our Athletes
        </p>
      </div>

      {/* Testimonials Container with Light Gray Background */}
      <div className="bg-[#FFFFFF] rounded-[40px] p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-black rounded-[30px] p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <h4 className="text-[#FFFFFF] font-bold text-lg">
                  The Best Training Program!
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.feedback}
                </p>
              </div>

              {/* User Info & Rating */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ffc700]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{item.name}</h5>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex text-[#ffc700] text-[10px]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < 4 ? "fill-[#ffc700]" : "fill-gray-600"} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-[10px] font-bold">({item.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
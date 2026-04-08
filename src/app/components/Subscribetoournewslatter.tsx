import React from 'react';

export default function SubscribeNewsletter() {
  return (
    <section className="  pb-5 pt-5 px-4 md:px-8 max-w-[1440px] md:max-w-[1440px] lg:max-w-[1440px] mx-auto bg-white relative overflow-hidden ">
      {/* Background Decorative Elements (Optional - based on figma) */}
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-3 gap-2 h-[400px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>

      {/* Main Black Container */}
      <div className="bg-black rounded-[40px] md:rounded-[60px] py-16 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[#FFFFFF]0 uppercase tracking-[0.2em] text-sm font-medium">
            Join our community
          </p>
          
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-[28px] lg:text-[38px] font-black text-[#FFFFFF] italic uppercase tracking-tight">
              Subscribe to our <span className="text-[#FFFFFF]">newsletter</span>
            </h2>
            {/* Orange Curved Line under 'newsletter' */}
            <div className="absolute -bottom-2 right-0 w-full md:w-[40%] h-2">
               <svg viewBox="0 0 255 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M1 9.5C51.5 3.5 152.5 -4.5 254 10.5" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round"/>
               </svg>
            </div>
          </div>

          <p className="text-[#FFFFFF] text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-4">
            Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, You&apos;ll Receive Expert Training Tips, Nutrition Guides, Exclusive Discounts, And The Latest News On Upcoming Events And Products.
          </p>

          {/* Subscription Input Field */}
          <div className="pt-8 max-w-xl mx-auto">
            <form className="relative flex items-center bg-transparent border border-gray-600 rounded-full p-1.5 focus-within:border-white transition-all">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="bg-transparent text-white px-6 py-3 w-full outline-none text-sm md:text-base placeholder:text-[#FFFFFF]"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-[#71AC16] hover:text-white transition-all duration-300 uppercase text-xs md:text-sm tracking-widest active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Left Decorative Elements */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-3 gap-2 rotate-180">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

export default function TrainLikeaChampion() {
  return (
    <section className="py-16 px-4 md:px-8  w-full mx-auto bg-white">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-black italic uppercase text-[#000000] tracking-tight">
          Train Like a Champion
        </h2>
        <p className="text-[#000000] mt-1 font-medium">
          Unleash Your Power with Expert Boxing Training
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-black rounded-[40px] p-6 lg:p-10 flex flex-col lg:flex-row gap-10 items-center overflow-hidden">
        
        {/* Left: Image Side */}
        <div className="w-full lg:w-1/3 relative h-[400px] lg:h-[500px] rounded-[30px] overflow-hidden">
          <Image
            src="/trink.png" // আপনার ট্রেইনার ইমেজের পাথ
            alt="Boxing Champion"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right: Text Content Side */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Training Focus Areas Column */}
          <div className="space-y-8">
            <h3 className="text-white text-xl font-bold border-b border-gray-800 pb-2">
              Training Focus Areas:
            </h3>
            
            <div className="space-y-6">
              <FocusItem 
                title="Strength & Conditioning" 
                desc="Develop knockout power with a mix of strength training and explosive movements." 
              />
              <FocusItem 
                title="Speed & Agility" 
                desc="Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination." 
              />
              <FocusItem 
                title="Endurance Training" 
                desc="Boost your stamina with high-intensity circuits that keep you fighting strong till the final round." 
              />
            </div>
          </div>

          {/* Why Train With Us Column */}
          <div className="space-y-8 flex flex-col h-full">
            <h3 className="text-white text-xl font-bold border-b border-gray-600 pb-2">
              Why Train With Us:
            </h3>

            <div className="space-y-6 flex-1">
              <FocusItem 
                title="Expert Coaches" 
                desc="Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals." 
              />
              <FocusItem 
                title="Flexible Programs" 
                desc="Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs." 
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-6">
              <button className="bg-[#71AC16] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#85C341] transition-all active:scale-95 flex-1 md:flex-none text-center">
                Punch Now
              </button>
              
              <button className="group relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-dashed border-[#71AC16] p-1">
                <div className="bg-[#71AC16]/20 w-full h-full rounded-full flex items-center justify-center group-hover:bg-[#71AC16] transition-all">
                  <FaPlay className="text-[#71AC16] group-hover:text-white ml-1 transition-colors" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for clean code
function FocusItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-[#fefefe] font-bold text-lg">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
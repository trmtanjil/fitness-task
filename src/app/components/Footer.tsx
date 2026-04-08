import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8      wfull mx-auto border-t border-gray-100">
      {/* 4 Column Grid Structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16  px-[5%]">
        
        {/* Column 1: About */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">About</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            At MuscleForge, we believe in the power of dedication and hard work. 
            Our mission is to provide you with the tools, resources, and community 
            you need to build the body of your dreams.
          </p>
          {/* Social Media Link with Underline as per Figma */}
          <div className="pt-4 border-t border-gray-200 inline-block w-full max-w-[180px]">
            <div className="flex gap-4 text-sm font-bold text-gray-900">
              <span>Social Media:</span>
              <Link href="#" className="hover:text-[#71AC16] transition-colors">Fb</Link>
              <Link href="#" className="hover:text-[#71AC16] transition-colors">In</Link>
              <Link href="#" className="hover:text-[#71AC16] transition-colors">Tw</Link>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Home</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Our gym location</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Service */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Our Service</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Indoor gym</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Outdoor gym</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">On ground gym</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-[#71AC16] text-sm transition-colors">Yoga class</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Contact I nfo</h3>
          <ul className="space-y-4">
            <li className="text-sm">
              <span className="font-bold text-gray-900">Mail:</span> 
              <span className="text-gray-500 ml-2">info@example.com</span>
            </li>
            <li className="text-sm">
              <span className="font-bold text-gray-900">Call:</span> 
              <span className="text-gray-500 ml-2">+91 9876543210</span>
            </li>
            <li className="text-sm flex">
              <span className="font-bold text-gray-900 shrink-0">Location:</span> 
              <span className="text-gray-500 ml-2">New York, 235 Lane, 10001</span>
            </li>
            <li className="text-sm flex">
              <span className="font-bold text-gray-900 shrink-0">Time:</span> 
              <span className="text-gray-500 ml-2">Workout Hours: 5AM - 8PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom / Copyright */}
      <div className="pt-8 border-t border-gray-100 flex flex-col items-center">
         {/* Decorative line as per design */}
        <div className="w-full max-w-md h-[1px] bg-gray-100 mb-6 hidden md:block"></div>
        <p className="text-gray-400 text-xs md:text-sm font-medium">
          websitename.com © {currentYear} all right reserve
        </p>
      </div>
    </footer>
  );
}

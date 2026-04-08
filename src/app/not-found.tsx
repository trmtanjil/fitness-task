import Link from "next/link";
import { MoveLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#71AC16] opacity-10 blur-[120px] rounded-full"></div>

      {/* Icon & Error Code */}
      <div className="relative">
        <Dumbbell size={80} className="text-[#71AC16] mb-4 animate-bounce mx-auto" />
        <h1 className="text-9xl font-black text-white opacity-20">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Lost in the Gym?
          </h2>
        </div>
      </div>

      {/* Message */}
      <p className="mt-6 text-gray-400 max-w-md text-lg">
        Oops! The page you are looking for doesnt exist. Even the strongest 
        warriors get lost sometimes. Lets get you back to the track.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-[#71AC16] hover:bg-[#5d8d12] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <MoveLeft size={20} />
          Back to Home
        </Link>
        
        <Link
          href="/support"
          className="border border-gray-700 hover:border-[#71AC16] text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
        >
          Contact Support
        </Link>
      </div>

      {/* Footer Quote */}
      <p className="absolute bottom-10 text-gray-600 text-sm uppercase tracking-widest">
        The Tribe — No Excuses
      </p>
    </div>
  );
}
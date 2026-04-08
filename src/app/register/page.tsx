'use client'
import { useState } from 'react';
import { authController } from '@/src/services/auth.controller';
import Link from 'next/link';

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // ১. ইউজার যখন বাটনে ক্লিক করবে, রেজিস্ট্রেশন কল হবে
    const result = await authController.onRegister(formData);

    if (result.success || "success") {
      // ২. রেজিস্ট্রেশন সফল হলে অটোমেটিক ওটিপি পেজে পাঠিয়ে দিবে
      // এখানে আলাদা করে resend কল করার দরকার নেই, কারণ register এপিআই নিজেই ওটিপি পাঠায়
      window.location.href = "/verifyotp"; 
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#111] p-10 rounded-[35px] border border-gray-900 shadow-2xl">
        <h1 className="text-4xl font-black italic uppercase text-[#71AC16] mb-2 text-center tracking-tighter">Join The Tribe</h1>
        <p className="text-gray-500 text-center mb-8 uppercase text-xs tracking-widest font-bold">Start your fitness journey</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <input name="first_name" placeholder="FIRST NAME" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm" />
            <input name="last_name" placeholder="LAST NAME" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm" />
          </div>
          <input name="email" type="email" placeholder="EMAIL" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm" />
          <input name="password" type="password" placeholder="PASSWORD" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm" />
          <input name="password_confirmation" type="password" placeholder="CONFIRM PASSWORD" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm" />
          
          {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}

          <button disabled={loading} type="submit" className="bg-[#71AC16] text-black font-black py-4 rounded-2xl mt-2 hover:bg-[#8fd61c] transition-all uppercase tracking-widest">
            {loading ? "CREATING..." : "GET STARTED"}
          </button>
        </form>
        <p className="text-center mt-8 text-gray-500 text-xs uppercase font-bold tracking-widest">
          Member? <Link href="/login" className="text-[#71AC16] hover:underline">Login</Link>
        </p>
      </div>
    </main>
  );
}
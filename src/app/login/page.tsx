'use client'
import { useState } from 'react';
import { authController } from '@/src/services/auth.controller';
import Link from 'next/link';

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await authController.onLogin(formData);

    if (result.success || "success") {
      window.location.href = "/"; // Landing Page
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#111] p-10 rounded-[35px] border border-gray-900 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black italic uppercase text-[#71AC16] tracking-tighter">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-xs font-bold uppercase tracking-widest">Enter credentials to enter gym</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input name="email" type="email" placeholder="EMAIL ADDRESS" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm  " />
          <input name="password" type="password" placeholder="PASSWORD" required className="bg-[#1a1a1a] p-4 rounded-2xl outline-none border border-gray-800 focus:border-[#71AC16] text-sm uppercase" />
          
          <button disabled={loading} type="submit" className="bg-[#71AC16] text-black font-black py-4 rounded-2xl mt-4 hover:bg-[#8fd61c] transition-all uppercase tracking-widest">
            {loading ? "CHECKING..." : "SECURE LOGIN"}
          </button>
        </form>

        {error && <p className="text-center text-red-500 mt-4 text-xs font-bold uppercase">{error}</p>}
        <p className="text-center mt-10 text-gray-500 text-xs uppercase font-bold tracking-widest">
            <Link href="/verifyotp" className="text-[#71AC16] hover:underline">verify Account</Link>
        </p>

        <p className="text-center mt-10 text-gray-500 text-xs uppercase font-bold tracking-widest">
          New here? <Link href="/register" className="text-[#71AC16] hover:underline">Create Account</Link>
        </p>
      </div>
    </main>
  );
}
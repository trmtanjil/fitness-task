/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect } from 'react';
import { authController } from '@/src/services/auth.controller'; 
import Link from 'next/link';

export default function VerifyOtpPage() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);
  
  const [email, setEmail] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('temp_email') || '';
    }
    return '';
  });
  const [otpCode, setOtpCode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('temp_otp') || '';
    }
    return '';
  });

  const canResend = timer <= 0;

  // টাইমার লজিক
  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 100);  
    }
    return () => clearInterval(interval);
  }, [timer]);

  // ওটিপি রিসেন্ড করার ফাংশন
  const handleResend = async () => {
    if (!canResend || !email) {
      if (!email) setMsg("Email not found. Please register again.");
      return;
    }
    
    setResending(true);
    setMsg("");
    
    const formData = new FormData();
    formData.append('email', email);

    const result = await authController.onResendOtp(formData);
    
    if (result.success) {
      setMsg("New OTP sent successfully!");
      setTimer(60); 
      if (result.otp) {
        setOtpCode(result.otp); // সরাসরি স্টেটে আপডেট
        localStorage.setItem('temp_otp', result.otp);
      }
    } else {
      setMsg(result.error || "Failed to resend OTP");
    }
    setResending(false);
  };

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    
    const formData = new FormData(e.currentTarget);
    if (email) formData.set('email', email);

    const result = await authController.onVerify(formData);
    if (result.success || "success") {
      setMsg("Verification Successful!");
      setTimeout(() => window.location.href = "/login", 1500);
    } else {
      setMsg(result.error || "Invalid OTP code");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#111] p-10 rounded-[40px] border border-gray-900 shadow-2xl relative overflow-hidden">
        
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#71AC16]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-black italic uppercase text-[#71AC16] tracking-tighter">Confirm Code</h1>
          <p className="text-gray-500 mt-2 text-xs uppercase font-bold tracking-widest">The Tribe is waiting for you</p>
        </div>

        {/* ওটিপি ডিসপ্লে কার্ড (সরাসরি কোড দেখাবে) */}
        <div className="bg-[#1a1a1a] border border-[#71AC16]/20 p-6 rounded-3xl text-center mb-8 shadow-inner">
          <p className="text-[10px] uppercase tracking-[3px] text-gray-500 mb-2 font-black">Your Verification OTP</p>
          <div className="flex justify-center items-center gap-3">
             <span className="text-5xl font-black text-[#71AC16] tracking-[6px] drop-shadow-[0_0_10px_rgba(113,172,22,0.4)]">
                {otpCode || "------"}
             </span>
          </div>
          <p className="text-[11px] text-gray-400 mt-4 font-medium italic">
            Check: {email || "No email provided"}
          </p>
        </div>

        <form onSubmit={handleVerify} className="flex flex-col gap-5">
          {/* ওটিপি ইনপুট */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 ml-1 uppercase tracking-widest">Enter 6-Digit Code</label>
            <input 
              name="otp" 
              maxLength={6}
              placeholder="0 0 0 0 0 0" 
              required
              className="bg-black border border-gray-800 p-5 rounded-2xl text-center text-2xl font-bold tracking-[8px] outline-none focus:border-[#71AC16] transition text-[#71AC16] placeholder:text-gray-800" 
            />
          </div>

          {/* মেসেজ ডিসপ্লে */}
          {msg && (
            <p className={`text-[11px] p-3 rounded-xl text-center font-bold uppercase tracking-tight ${msg.includes('success') || msg.includes('Successful') ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
              {msg}
            </p>
          )}

          <button 
            disabled={loading}
            type="submit" 
            className="bg-[#71AC16] text-black font-black py-4.5 rounded-2xl hover:bg-[#82c41a] transition-all active:scale-95 disabled:opacity-50 uppercase tracking-widest shadow-lg shadow-[#71AC16]/10"
          >
            {loading ? "VERIFYING..." : "CONFIRM & JOIN"}
          </button>
        </form>

        {/* রিসেন্ড সেকশন */}
        <div className="text-center mt-10">
          {canResend ? (
            <button 
              onClick={handleResend}
              disabled={resending}
              className="group flex items-center justify-center gap-2 mx-auto"
            >
              <span className="text-[#71AC16] font-black hover:underline uppercase text-[11px] tracking-widest">
                {resending ? "RESENDING..." : "RESEND NEW CODE"}
              </span>
            </button>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">Didn`t receive code?</p>
              <p className="text-white text-xs font-black uppercase tracking-widest">
                Resend in <span className="text-[#71AC16]">{timer}s</span>
              </p>
            </div>
          )}
        </div>

        <p className="text-center mt-8 text-gray-600 text-[10px] uppercase font-black tracking-[2px]">
          Already verified? <Link href="/login" className="text-[#71AC16] hover:underline ml-1 italic">Login Here</Link>
        </p>
      </div>
    </main>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect } from 'react';
import { authController } from '@/src/services/auth.controller'; 

export default function VerifyOtpPage() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);
  
  // স্টট হিসেবে ইমেইল রাখা হচ্ছে যাতে ইনপুট ফিল্ডে দেখানো যায়
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
    formData.append('email', email); // এখানে ইমেইল পাঠানো হচ্ছে

    const result = await authController.onResendOtp(formData);
    
    if (result.success) {
      setMsg("New OTP sent successfully!");
      setTimer(60); 
      if (result.otp) {
        setOtpCode(result.otp);
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
    // যদি ইমেইল ইনপুট ফিল্ডে থাকে তবে সেটা অটোমেটিক যাবে, 
    // তা সত্ত্বেও নিশ্চিত হওয়ার জন্য আমরা অ্যাপেন্ড করে দিচ্ছি
    if (email) formData.set('email', email);

    const result = await authController.onVerify(formData);
    if (result.success) {
      setMsg("Verification Successful!");
      setTimeout(() => window.location.href = "/login", 1500);
    } else {
      setMsg(result.error || "Invalid OTP code");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
       <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-full max-w-md bg-[#111] p-12 rounded-[40px] border border-gray-900 shadow-2xl">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black italic uppercase text-[#71AC16] tracking-tighter">Verify Code</h1>
            <p className="text-gray-400 mt-3 font-medium uppercase text-xs tracking-widest">Enter the code sent to your email</p>
          </div>

          <form onSubmit={handleVerify} className="flex flex-col gap-6">
            {/* ইমেইল ফিল্ড - এটি এপিআই রিকোয়ারমেন্ট পূরণ করবে */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Email Address</label>
              <input 
                name="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required 
                className="bg-[#1a1a1a] border border-gray-800 p-4 rounded-2xl outline-none focus:border-[#71AC16] transition text-gray-300"
              />
            </div>

            {/* ওটিপি ইনপুট ফিল্ড */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 ml-1 uppercase">6-Digit OTP</label>
              <input 
                name="otp" 
                maxLength={6}
                placeholder="0 0 0 0 0 0" 
                required
                className="bg-[#1a1a1a] border border-gray-800 p-5 rounded-2xl text-center text-4xl font-bold tracking-[15px] outline-none focus:border-[#71AC16] transition text-[#71AC16]" 
              />
            </div>

            {otpCode && (
              <p className="text-xs text-center text-gray-600 uppercase tracking-widest font-bold">
                Current OTP: <span className="text-[#71AC16]">{otpCode}</span>
              </p>
            )}

            {msg && (
              <p className={`text-sm p-4 rounded-xl text-center font-medium ${msg.includes('success') || msg.includes('Successful') ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                {msg}
              </p>
            )}

            <button 
              disabled={loading}
              type="submit" 
              className="bg-[#71AC16] text-black font-black py-4.5 rounded-2xl hover:bg-[#82c41a] transition-all active:scale-95 disabled:opacity-50 uppercase tracking-widest"
            >
              {loading ? "VERIFYING..." : "CONFIRM CODE"}
            </button>
          </form>

          <div className="text-center mt-10">
            {canResend ? (
              <button 
                onClick={handleResend}
                disabled={resending}
                className="text-[#71AC16] font-bold hover:underline uppercase text-sm tracking-widest disabled:opacity-50"
              >
                {resending ? "RESENDING..." : "RESEND NEW CODE"}
              </button>
            ) : (
              <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                Resend code in <span className="text-white font-bold">{timer}s</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
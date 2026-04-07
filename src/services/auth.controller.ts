/* eslint-disable @typescript-eslint/no-explicit-any */
import { authService, ApiResponse } from './auth.service';

export type AuthResult = 
  | { success: true; message: string; otp?: string; token?: string }
  | { success: false; error: string };

const extractMessage = (res: ApiResponse, fallback: string): string => {
  return res.message || fallback;
};

export const authController = {


    async onResendOtp(formData: FormData): Promise<AuthResult> {
    try {
      const response = await authService.resendOtp(formData);

      if (response.status === 'success') {
        return { 
          success: true, 
          otp: response.otp, // নতুন ওটিপিটি পাঠিয়ে দেওয়া যেন ফ্রন্টএন্ডে দেখানো যায়
          message: response.message || 'New OTP sent successfully!' 
        };
      }

      return { 
        success: false, 
        error: response.message || 'Failed to resend OTP' 
      };
    } catch (err: any) {
      // এপিআই থেকে আসা স্পেসিফিক এরর মেসেজ ধরা
      const errorMsg = err.response?.data?.message || 'Something went wrong while resending OTP';
      return { success: false, error: errorMsg };
    }
  },

  // রেজিস্ট্রেশন হ্যান্ডলার
  async onRegister(formData: FormData): Promise<AuthResult> {
    try {
      const response = await authService.register(formData);
      if (response.status === 'success') {
        return {
          success: true,
          otp: response.otp,
          message: extractMessage(response, 'Registration successful!'),
        };
      }
      return { success: false, error: extractMessage(response, 'Registration failed') };
    } catch (err: any) {
      return { success: false, error: err.response?.data?.message || 'Server error during registration' };
    }
  },

  // ওটিপি ভেরিফিকেশন হ্যান্ডলার
  async onVerify(formData: FormData): Promise<AuthResult> {
    try {
      const response = await authService.verifyOtp(formData);
      if (response.status === 'success') {
        return { success: true, message: extractMessage(response, 'Verified successfully!') };
      }
      return { success: false, error: extractMessage(response, 'Invalid OTP code') };
    } catch (err: any) {
      return { success: false, error: err.response?.data?.message || 'Verification failed' };
    }
  },

  // লগইন হ্যান্ডলার
  async onLogin(formData: FormData): Promise<AuthResult> {
    try {
      const response = await authService.login(formData);
      if (response.status === 'success') {
        return {
          success: true,
          message: extractMessage(response, 'Login successful!'),
        };
      }
      return { success: false, error: extractMessage(response, 'Invalid credentials') };
    } catch (err: any) {
      return { success: false, error: err.response?.data?.message || 'Login failed' };
    }
  },

  // লগআউট হ্যান্ডলার
  async onLogout(): Promise<AuthResult> {
    try {
      const response = await authService.logout();
      return { success: true, message: 'Logged out' };
    } catch {
      return { success: false, error: 'Logout failed' };
    }
  }
};
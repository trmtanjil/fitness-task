/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'https://apitest.thewarriors.team/api';

export interface ApiResponse<T = unknown> {
  status: string | number;
  message?: string;
  data?: T;
  otp?: string;
  token?: string;
}

const getAuthHeaders = () => {
  
  

  if (typeof window === 'undefined') return undefined;
  const token = Cookies.get('token');
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

export const authService = {

  async resendOtp(formData: FormData): Promise<ApiResponse> {
    // এপিআই-তে ইমেইল পাঠিয়ে নতুন ওটিপি রিকোয়েস্ট করা
    const response = await axios.post<ApiResponse>(`${API_URL}/resend_otp`, formData);

    // যদি নতুন ওটিপি রেসপন্সে আসে, তবে সেটা লোকাল স্টোরেজে আপডেট করে দেওয়া
    if (typeof window !== 'undefined' && response.data?.status === 'success' && response.data?.otp) {
      localStorage.setItem('temp_otp', String(response.data.otp));
    }

    return response.data;
  },
  // ১. রেজিস্ট্রেশন
async register(formData: FormData): Promise<ApiResponse> {
  const response = await axios.post<ApiResponse>(`${API_URL}/register`, formData);

  // API রেসপন্স চেক: status যদি 201 হয়
  if (typeof window !== 'undefined' && response.data?.status === 201) {
    const apiData = response.data.data as any; // আপনার রেসপন্স অনুযায়ী ডাটা অবজেক্ট

    if (apiData) {
      // ১. ওটিপি সেভ করা (রেসপন্স ডাটা থেকে)
      if (apiData.otp) {
        localStorage.setItem('temp_otp', String(apiData.otp));
      }
      
      // ২. ইমেইল সেভ করা (রেসপন্স থেকে অথবা সরাসরি ফর্ম ডাটা থেকে)
      const email = apiData.email || formData.get('email');
      if (email) {
        localStorage.setItem('temp_email', String(email));
      }
    }
  }
  
  return response.data;
},

  // ২. ওটিপি ভেরিফাই
  async verifyOtp(formData: FormData): Promise<ApiResponse> {
    const response = await axios.post<ApiResponse>(`${API_URL}/verify_otp`, formData);
    return response.data;
  },

  // ৩. লগইন
  async login(formData: FormData): Promise<ApiResponse> {
    const response = await axios.post<ApiResponse>(`${API_URL}/login`, formData);
    
    if (typeof window !== 'undefined' && response.data?.token) {
      // সফল লগইনে টোকেন কুকিতে সেট করা
      Cookies.set('token', response.data.token, { expires: 7, secure: true, sameSite: 'strict' });
    }
    return response.data;
  },

  // ৪. লগআউট
  async logout(): Promise<ApiResponse> {
    const headers = getAuthHeaders();
    const response = await axios.post<ApiResponse>(`${API_URL}/logout`, {}, { headers });

    if (typeof window !== 'undefined') {
      Cookies.remove('token');
      localStorage.removeItem('temp_email');
      localStorage.removeItem('temp_otp');
    }
    return response.data;
  }
};
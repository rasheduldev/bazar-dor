"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const SignInPage = () => {
    const onSubmit = async(e)=>{
           e.preventDefault()
           const formData = new FormData(e.target)
           const user = Object.fromEntries(formData.entries())
           const {data, error} = await authClient.signIn.email({
            ...user,
            callbackURL:"/"
           })
           if(data){
            toast.success("সফলভাবে সাইন ইন হয়েছে!")
            console.log(data)
            redirect("/")
           }
           if(error){
            toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে!")
            console.log(error)
           }
        }

        const handleGoogleSignIn=async()=>{
            const data = await authClient.signIn.social({
            provider: "google",
            });
        }
        const handleGithubSignIn=async()=>{
            const data = await authClient.signIn.social({
            provider: "github",
            });
        }

    return (
        <div className="container mx-auto flex flex-col justify-center items-center mt-5 space-y-2">
            <h2 className="font-bold text-xl text-[#1D271F]">সাইন ইন</h2>
            <p className="text-sm mb-2 text-gray-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <form onSubmit={onSubmit}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm sm:max-w-md border p-4">

  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-full" placeholder="you@example.com" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />

  <button type='submit' className="btn bg-[#05893E] text-white mt-4 w-full">সাইন ইন</button>

  <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-3 text-gray-400 text-sm">অথবা</span>
      <div className="flex-grow border-t border-gray-300"></div>
  </div>

  <div className="flex gap-2">
      <button type="button" onClick={handleGoogleSignIn} className="btn btn-sm sm:btn-md flex-1 flex items-center justify-center gap-1.5 px-2 text-xs sm:text-sm whitespace-nowrap">
          <FaGoogle className="shrink-0" /> Google দিয়ে চালিয়ে যান
      </button>
      <button type="button" onClick={handleGithubSignIn} className="btn btn-sm sm:btn-md flex-1 flex items-center justify-center gap-1.5 px-2 text-xs sm:text-sm whitespace-nowrap">
          <IoLogoGithub className="shrink-0" /> GitHub দিয়ে চালিয়ে যান
      </button>
  </div>

  <div className="text-center mt-4">
      <p className="text-sm text-gray-500">
          অ্যাকাউন্ট নেই? <Link href="/sign-up" className="text-[#05893E] font-semibold">সাইন আপ করুন</Link>
      </p>
  </div>
</fieldset>
            </form>
            <div className="mt-4">
                <Link href="/" className="text-sm text-gray-500 hover:underline">← হোম পেজে ফিরে যান</Link>
            </div>
        </div>
    );
};

export default SignInPage;
"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const SignUpPage = () => {
    const onSubmit = async(e)=>{
       e.preventDefault()
       const formData = new FormData(e.target)
       const user = Object.fromEntries(formData.entries())
       const {data, error} = await authClient.signUp.email({
        ...user,
        callbackURL:"/"
       })
       if(data){
        console.log(data)
        redirect("/")
       }
       if(error){
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
            <h2 className="font-bold text-xl text-[#1D271F]">অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="text-sm mb-2 text-gray-500">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            <form onSubmit={onSubmit}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm sm:max-w-md border p-4">

  <label className="label ">নাম</label>
  <input name="name" type="text" className="input w-full" placeholder="যেমন: রহিম উদ্দিন" />

  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-full" placeholder="you@example.com" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />

  <button type="submit" className="btn bg-[#05893E] text-white w-full mt-4">অ্যাকাউন্ট তৈরি করুন</button>
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
          অ্যাকাউন্ট আছে? <Link href="/sign-in" className="text-[#05893E] font-semibold">সাইন ইন করুন</Link>
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

export default SignUpPage;
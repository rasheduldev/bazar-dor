"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
    const {data:session} = authClient.useSession()
        const user = session?.user

        const handleUpdateProfile=async(e)=>{
          e.preventDefault()
          const formData = new FormData(e.target)
          const newUserData = Object.fromEntries(formData.entries())
          
          await authClient.updateUser({
            ...newUserData,
          })
      }

      const handleSignOut = async()=>{
              await authClient.signOut()
          }
    return (
        <div className="container mx-auto flex flex-col justify-center items-center mt-5 space-y-4 max-w-2xl px-4">
            <div className="w-full text-start">
                <h2 className="font-bold text-2xl text-[#1D271F]">আমার প্রোফাইল</h2>
                <p className="text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>

            <div className="bg-base-200 border border-base-300 rounded-box w-full p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    {user?.image ? (
                        <Image src={user.image} alt={user?.name} className="w-16 h-16 rounded-2xl object-cover" />
                    ) : (
                        <div className="w-16 h-16 rounded-2xl bg-[#05893E] text-white flex items-center justify-center font-bold text-2xl">
                            {user?.name?.charAt(0)}
                        </div>
                    )}
                    <div>
                        <h3 className="font-bold text-lg text-[#1D271F]">{user?.name}</h3>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                </div>
                <Link href={"/"}>
                <button 
                    onClick={handleSignOut} 
                    className="btn btn-outline border-red-500 text-red-500 hover:bg-red-50 hover:border-red-500"
                >
                    <span>↪</span> সাইন আউট
                </button>
                </Link>
            </div>

            <div className="bg-base-200 border border-base-300 rounded-box w-full p-6 shadow-sm">
                <h3 className="font-bold text-lg text-[#1D271F] mb-4">তথ্য</h3>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                        <label className="label text-sm font-medium">নাম</label>
                        <input 
                            name="name" 
                            type="text" 
                            defaultValue={user?.name || ""} 
                            className="input w-full bg-white border border-gray-300" 
                            placeholder="আপনার নাম লিখুন" 
                        />
                    </div>
                    <button type="submit" className="btn bg-[#05893E] text-white w-full mt-2 hover:bg-[#046e31]">
                        আপডেট
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
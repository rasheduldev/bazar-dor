"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
    const {data:session} = authClient.useSession()
    const user = session?.user
    

    const handleSignOut = async()=>{
        await authClient.signOut()
    }
    return (
        <div>
            {
                user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer m-1">
                            {user.image ? (
                                <Image src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-[#05893E] text-white flex items-center justify-center font-bold">
                                    {user.name?.charAt(0)}
                                </div>
                            )}
                            <span className="font-medium">{user.name}</span>
                            <span className="text-xs">▼</span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-white rounded-box w-64 border border-gray-100 text-black">
                            <li className="px-4 py-2 border-b border-gray-100 pointer-events-none">
                                <p className="font-bold text-base text-black">{user.name}</p>
                                <p className="text-sm text-gray-500 truncate">{user.email}</p>
                            </li>
                            <li className="mt-1">
                                <Link href="/profile" className="flex items-center gap-2 py-2 text-black hover:bg-gray-100 rounded-lg">
                                    <span>👤</span> আমার প্রোফাইল
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleSignOut} className="flex items-center gap-2 py-2 text-red-500 hover:bg-red-50 rounded-lg text-left w-full">
                                    <span>↪</span> সাইন আউট
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link href={"/sign-in"}><button className='btn py-2'>সাইন ইন</button></Link>
                        <Link href={"/sign-up"}><button className='btn py-2 bg-[#05893E] text-white'>সাইন আপ</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default UserInfo;
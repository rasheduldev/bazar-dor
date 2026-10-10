"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const {data:session} = authClient.useSession()
    const user = session?.user
    

    const handleSignOut = async()=>{
        await authClient.signOut()
    }
    return (
        <div >
            {
                user ? <div className="flex items-center gap-3">
                    <h2>{user?.name}</h2>
                    <button onClick={handleSignOut} className='btn bg-[#05893E] text-white'>সাইন আউট</button>
                </div> : 
            <div className="flex items-center gap-2">
                <Link href={"/sign-in"}><button className='btn'>সাইন ইন</button></Link>
                <Link href={"/sign-up"}><button className='btn bg-[#05893E] text-white'>সাইন আপ</button></Link>
              </div>
            }
            
        </div>
    );
};

export default UserInfo;
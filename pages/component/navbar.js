import Link from 'next/link'
import React from 'react'
import '../../configureAmplify'
import { useState, useEffect } from 'react'
import {Auth, Hub} from "aws-amplify"

const Navbar = () => {
//     const [signedUser, setsignedUser] = useState(false)

// useEffect(() => {
//     authListener()
// }, [])

//     async function authListener() {
//         Hub.listen("auth", (data) => {
//             switch (data.payload.event){
//             case "signin":
//                 return setsignedUser(true)
//                 case "signOut": 
//                 return setsignedUser(false)
//             }
//         })
//         try {
//             await Auth .currentAuthenticatedUser()
//             setsignedUser(true)
//         }catch(err) {}
//     }


    return (
        <nav className='flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gray-300'>
            <Link href="/">home </Link>
            <Link href="/create-post">Create Post </Link>
            <Link href="/profile">Profile</Link>

            {/* {
                signedUser && (
                    <Link className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slage-100 hover:text-slate-900' href='/my-posts'>my post</Link>
                )
            } */}
        </nav>
    )
}
export default Navbar

// 1973
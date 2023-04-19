import Link from 'next/link'
import React from 'react'
import '../../configureAmplify'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [signedUser, setsignedUser] = useState(false)

    return (
        <nav className='flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gray-300'>
            <Link href="">home </Link>
            <Link href="/create-post">Create Post </Link>
            <Link href="/profile">Profile</Link>
        </nav>
    )
}
export default Navbar

// 1973
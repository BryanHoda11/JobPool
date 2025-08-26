'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoChevronDownSharp } from "react-icons/io5";

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
    const [Companies, setCompanies] = useState(false);
    const [Profile, setProfile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [resNav, setresNav] = useState(false);

    const { user, isSignedIn } = useUser();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
                <div className='flex items-center justify-between px-5 py-3'>
                    <Link href='/'> <div className="logo text-xl sm:text-2xl font-bold">JobPool</div> </Link>

                    <ul className='hidden md:flex items-center font-semibold gap-3'>
                        <Link href='/Jobs' className='cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-full'>Jobs</Link>
                        <li onMouseOver={() => setCompanies(true)}
                            onMouseLeave={() => setTimeout(() => setCompanies(false), 3000)} className='cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-full'>Companies
                            {Companies && <div className="absolute right-0 px-4 py-4 top-full group-hover:block bg-white shadow-lg min-w-[250px] z-50">
                                <div className="grid grid-cols-2 gap-6">
                                    <ul className="flex flex-col gap-5">
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at TCS</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Infosys</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at IBM</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Google</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Myntra</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at DEPT</li></Link>
                                    </ul>
                                    <ul className="flex flex-col gap-5">
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Accenture</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Wipro</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Microsoft</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Amazon</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Flipkart</li></Link>
                                        <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Goldman Sachs</li></Link>
                                    </ul>
                                </div>
                            </div>}
                        </li>
                        <li onMouseOver={() => setProfile(true)}
                            onMouseLeave={() => setTimeout(() => setProfile(false), 3000)} className='cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-full'>You
                            {Profile && <div className="absolute right-0 px-4 py-4 top-full group-hover:block bg-white shadow-lg min-w-[250px] z-50">
                                <ul className="flex flex-col gap-5">
                                    {isSignedIn && (
                                        <li className='flex items-center gap-2 border-b pb-3'>
                                            <SignedIn>
                                                <UserButton />
                                            </SignedIn>
                                            Hello,{" "} {user.firstName ? `${user.firstName}` : user.username || user.primaryEmailAddress?.emailAddress}!
                                        </li>
                                    )}
                                    <Link href='/Applications'><li className="hover:text-blue-600">Your Applications</li></Link>
                                    <Link href='/Resume'><li className="hover:text-blue-600">Resume / CV</li></Link>
                                    <Link href='/Savedjobs'><li className="hover:text-blue-600">Saved Jobs</li></Link>
                                    <li className="hover:text-blue-600">Privacy Policy</li>
                                    <li className="hover:text-blue-600">Help Center &copy; JobPool</li>
                                </ul>
                            </div>}
                        </li>

                        <SignedOut>
                            <SignInButton>
                                <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white max-sm:text-xs text-sm font-medium rounded-lg hover:bg-blue-700 transition"> Sign in </button>
                            </SignInButton>
                        </SignedOut>
                    </ul>

                    <div className="hamburger block md:hidden cursor-pointer">
                        {resNav ? (<RxCross2 onClick={() => setresNav(false)} />) : (<RxHamburgerMenu onClick={() => setresNav(true)} />)}
                    </div>
                </div>

                {resNav && <div className="res-Nav absolute right-0 px-4 py-4 top-full h-[300px] overflow-y-scroll group-hover:block bg-white shadow-lg w-full h- z-50">
                    <ul className='flex flex-col gap-7 px-3 py-3'>
                        <Link href='/Jobs'><li>Jobs</li></Link>
                        <li className='flex w-full items-center justify-between'>Companies <IoChevronDownSharp onClick={() => setCompanies(prev => !prev)} /></li>
                        {Companies && <div className="px-4 min-w-[250px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <ul className="flex flex-col gap-5">
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at TCS</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Infosys</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at IBM</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Google</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Myntra</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at DEPT</li></Link>
                                </ul>
                                <ul className="flex flex-col gap-5">
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Accenture</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Wipro</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Microsoft</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Amazon</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Flipkart</li></Link>
                                    <Link href='/Jobs'><li className="hover:text-blue-600">Jobs at Goldman Sachs</li></Link>
                                </ul>
                            </div>
                        </div>}
                        <li className='flex w-full items-center justify-between'>Me <IoChevronDownSharp onClick={() => setProfile(prev => !prev)} /></li>
                        {Profile && <div className="px-4 min-w-[250px]">
                            <ul className="flex flex-col gap-5">
                                <li>Hello, User123@gmail.com!</li>
                                <hr className='mb-1 h-[1px] w-full' />
                                <Link href='/Applications'><li className="hover:text-blue-600">My Applications</li></Link>
                                <li className="hover:text-blue-600">Saved Jobs</li>
                                <Link href='/Resume'><li className="hover:text-blue-600">Resume / CV</li></Link>
                                <li className="hover:text-blue-600">Privacy Policy</li>
                                <li className="hover:text-blue-600">Help Center &copy; JobPool</li>
                            </ul>
                        </div>}
                        <select name="country" id="country" className='cursor-pointer w-fit'>
                            <option value="Ind"> IND</option>
                            <option value="Usa">USA</option>
                        </select>
                    </ul>
                </div>}
            </nav>
        </>
    )
}

export default Navbar

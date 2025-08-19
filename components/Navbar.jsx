'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [Companies, setCompanies] = useState(false);
    const [Profile, setProfile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            <nav className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? "shadow-lg" : "" }`}>
                <div className='flex items-center justify-between px-5 py-3'>
                    <Link href='/'> <div className="logo text-2xl font-bold">JobPool</div> </Link>

                    <ul className='flex items-center font-semibold gap-3'>
                        <Link href='/Jobs' className='cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-full'>Jobs</Link>
                        <li onMouseOver={() => setCompanies(true)}
                            onMouseLeave={() => setCompanies(false)} className='cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-full'>Companies
                            {Companies && <div className="absolute right-0 px-4 py-4 top-full group-hover:block bg-white shadow-lg min-w-[250px] z-50">
                                <div className="grid grid-cols-2 gap-6">
                                    <ul className="flex flex-col gap-5">
                                        <li className="hover:text-blue-600">Jobs at TCS</li>
                                        <li className="hover:text-blue-600">Jobs at Infosys</li>
                                        <li className="hover:text-blue-600">Jobs at IBM</li>
                                        <li className="hover:text-blue-600">Jobs at Google</li>
                                        <li className="hover:text-blue-600">Jobs at Myntra</li>
                                        <li className="hover:text-blue-600">Jobs at DEPT</li>
                                    </ul>
                                    <ul className="flex flex-col gap-5">
                                        <li className="hover:text-blue-600">Jobs at Accenture</li>
                                        <li className="hover:text-blue-600">Jobs at Wipro</li>
                                        <li className="hover:text-blue-600">Jobs at Microsoft</li>
                                        <li className="hover:text-blue-600">Jobs at Amazon</li>
                                        <li className="hover:text-blue-600">Jobs at Flipkart</li>
                                        <li className="hover:text-blue-600">Jobs at Goldman Sachs</li>
                                    </ul>
                                </div>
                            </div>}
                        </li>
                        <li onMouseOver={() => setProfile(true)}
                            onMouseLeave={() => setProfile(false)} className='cursor-pointer hover:bg-gray-100 px-4 py-4 rounded-full'>Me
                            {Profile && <div className="absolute right-0 px-4 py-4 top-full group-hover:block bg-white shadow-lg min-w-[250px] z-50">
                                <ul className="flex flex-col gap-5">
                                    <li>Hello, User123@gmail.com!</li>
                                    <hr className='mb-3 h-[1px] w-full' />
                                    <li className="hover:text-blue-600">My Applications</li>
                                    <li className="hover:text-blue-600">Saved Jobs</li>
                                    <li className="hover:text-blue-600">Resume / CV</li>
                                    <li className="hover:text-blue-600">Privacy Policy</li>
                                    <li className="hover:text-blue-600">Help Center &copy; JobPool</li>
                                </ul>
                            </div>}
                        </li>

                        <select name="country" id="country" className='cursor-pointer'>
                            <option value="Ind"> IND</option>
                            <option value="Usa">USA</option>
                        </select>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Footer = () => {
    const Pathname = usePathname()

    if (Pathname === "/") {
        return null;
    }

    return (
        <>
            <footer className="w-full h-auto relative mt-7 bg-white">
                <div className="links flex flex-col lg:flex-row max-lg:px-7 max-lg:gap-7 justify-around w-full mx-auto py-6">
                    <div className='flex flex-col gap-2'>
                        <Link href='/'> <div className="logo text-3xl font-bold">JobPool</div> </Link>
                        <p>Email us at : <a href='mailto:Jobpool@careers.com' className='hover:underline'>Jobpool@careers.com</a></p>
                    </div>

                    <div>
                        <h3 className='font-semibold text-lg sm:text-xl'>Jobs by Categories</h3>
                        <ul className='flex flex-col gap-3 pt-3 max-sm:text-xs'>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>IT/Technology</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Sales</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Designing</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>DevOps & Cloud</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Human Resource (HR)</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>View all Jobs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg sm:text-xl'>Jobs by Companies</h3>
                        <ul className='flex flex-col gap-3 pt-3 max-sm:text-xs'>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Infosys</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>IBM</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Wipro</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>TCS</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Microsoft</Link></li>
                            <li className='cursor-pointer hover:underline'><Link href='/Jobs'>View all Companies</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg sm:text-xl'>Company</h3>
                        <ul className='flex flex-col gap-3 pt-3 max-sm:text-xs'>
                            <li className='cursor-pointer hover:underline'>About Us</li>
                            <li className='cursor-pointer hover:underline'>Careers</li>
                            <li className='cursor-pointer hover:underline'>Contact Us</li>
                            <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                            <li className='cursor-pointer hover:underline'>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center max-sm:text-xs justify-center text-center mt-5 py-5 border-t w-[85%] mx-auto">
                    <span>JobPool &copy; All Rights Reserved 2025.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer

'use client'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto relative mt-7 bg-white">
       <div className="links flex justify-around w-full mx-auto py-6">
        <div className='flex flex-col gap-2'>
            <Link href='/'> <div className="logo text-4xl font-bold">JobPool</div> </Link>
            <p>Email us at : <a href='mailto:Jobpool@careers.com' className='hover:underline'>Jobpool@careers.com</a></p>
        </div>

        <div>
            <h3 className='font-semibold text-xl border-b pb-3'>Jobs by Categories</h3>
            <ul className='flex flex-col gap-3 pt-3'>
                <li className='cursor-pointer hover:underline'><Link href='/Jobs'>IT/Technology</Link></li>
                <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Sales</Link></li>
                <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Designing</Link></li>
                <li className='cursor-pointer hover:underline'><Link href='/Jobs'>DevOps & Cloud</Link></li>
                <li className='cursor-pointer hover:underline'><Link href='/Jobs'>Human Resource (HR)</Link></li>
                <li className='cursor-pointer hover:underline'><Link href='/Jobs'>View all Jobs</Link></li>
            </ul>
        </div>
        <div>
            <h3 className='font-semibold text-xl border-b pb-3'>Jobs by Companies</h3>
            <ul className='flex flex-col gap-3 pt-3'>
                <li className='cursor-pointer hover:underline'>Infosys</li>
                <li className='cursor-pointer hover:underline'>IBM</li>
                <li className='cursor-pointer hover:underline'>Wipro</li>
                <li className='cursor-pointer hover:underline'>TCS</li>
                <li className='cursor-pointer hover:underline'>Microsoft</li>
                <li className='cursor-pointer hover:underline'>View all Companies</li>
            </ul>
        </div>
        <div>
            <h3 className='font-semibold text-xl border-b pb-3'>JobPool</h3>
            <ul className='flex flex-col gap-3 pt-3'>
                <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                <li className='cursor-pointer hover:underline'>Careers</li>
                <li className='cursor-pointer hover:underline'>Contact Us</li>
                <li className='cursor-pointer hover:underline'>Terms & Conditions</li>
            </ul>
        </div>
       </div>
      </footer>
    </>
  )
}

export default Footer


import Image from "next/image"
import Item from "./Item"

import logoWhite from '../../assets/svg/logo-white.svg'
import Link from "next/link"


const Navbar = () => {
    return (


        <nav className="bg-[#201142] ">
            <div className=" flex flex-wrap items-center justify-center mx-auto p-7">

                <Link href="/home" className="flex items-center">
                    <Image src={logoWhite} className="h-8" alt="Flowbite Logo" width={100} height={100} />
                        <span className="text-2xl font-bold  text-white">Noticias México</span>
                    <Image src={logoWhite} className="h-8" alt="Flowbite Logo" width={100} height={100} />
                </Link>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                
            </div>
        </nav>

    )
}

export default Navbar
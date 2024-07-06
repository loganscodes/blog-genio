
import Image from "next/image"

import logoWhite from '../assets/svg/logo-white.svg'

import { Link } from 'next-view-transitions';



const Navbar = () => {
    return (


        <nav className="bg-[#201142] ">
            <div className=" flex flex-wrap items-center justify-center mx-auto p-7">

                <Link href="/home" className="flex items-center">
                    <Image src={logoWhite} className="h-8" alt="Flowbite Logo" width={100} height={100} />
                        <span className="text-2xl font-bold  text-white">Noticias México</span>
                    <Image src={logoWhite} className="h-8" alt="Flowbite Logo" width={100} height={100} />
                </Link>

                
                
            </div>
        </nav>

    )
}

export default Navbar
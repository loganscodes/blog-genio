

import { Link } from 'next-view-transitions';

const Navbar = () => {
    return (
        <nav className="bg-[#201142] ">
            <div className=" flex flex-wrap items-center justify-center mx-auto p-7">

                <Link href="/home" className="flex items-center">
                    <span className="text-2xl font-bold  text-white">Noticias México</span>
                </Link>    
            </div>
        </nav>

    )
}

export default Navbar
import UIPar from "./UI/UIPar"
import Image from "next/image"
import UITitle from "./UI/UITitle"

import logoWhite from '../assets/svg/logo-white.svg'

import { LOGOS_ENTRY } from "../constants/logos"



const Footer = () => {

    const logos = LOGOS_ENTRY

    return (
        <footer className="bg-[#201142] flex items-center justify-around mt-16">

            <div className="flex items-center gap-5 ">
                <Image src={logoWhite} className="w-20" width={100} height={100} alt="logo" />
                <UIPar className="text-white" useDangerous={true} content="2024 Noticias México, Inc, <br/> All rights reserved." />
            </div>

            <div>
                <UITitle className="text-white font-bold text-xl mb-2" title="Redes Sociales" />

                <ul className="flex text-white gap-2 items-center justify-center">
                    {
                        logos.map((log, k) => (
                            <li key={k}>
                                <Image src={log.logo} className="w-7" width={100} height={100} alt="social-logo" />
                            </li>
                        ))
                    }
                </ul>


            </div>

            <div>
                <UIPar className="text-white" content="Subscribete" />
            </div>

        </footer>
    )
}

export default Footer 
'use client'
import { useEffect } from 'react'
import UITitle from './UI/UITitle'
import UIPar from './UI/UIPar'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className='my-16' data-aos="fade-right">
                <UITitle  className='text-5xl font-bold text-center w-[80%] m-auto ' title='Las ultimas noticias al rededor de México y del mundo.' />
            </div>

            <div data-aos="fade-left">
                <UIPar useDangerous={true} className='mt-5 text-3xl text-center' content='Bienvenido al blog de México, donde encontraras las noticias <br/> y eventos que estan pasando en México.' />
            </div>
        </>
    )
}

export default Home
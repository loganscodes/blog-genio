import React from 'react'
import UITitle from './UI/UITitle'
import UIPar from './UI/UIPar'

const Home = () => {
    return (
        <>
            <div className='my-16'>

                <UITitle className='text-5xl font-bold text-center ' title='Las ultimas noticias al rededor de México y del mundo.' />

                <UIPar useDangerous={true} className='mt-5 text-3xl text-center' content='Bienvenido al blog de México, donde encontraras las noticias <br/> y eventos que estan pasando en México.' />

            </div>

        </>
    )
}

export default Home
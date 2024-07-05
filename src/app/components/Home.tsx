import React from 'react'
import UITitle from './UI/UITitle'
import UIPar from './UI/UIPar'

const Home = () => {
    return (
        <>
            <div className='my-16'>

                <UITitle className='text-5xl font-bold w-[70%] text-start ' title='Las ultimas noticias al rededor de México y del mundo.' />

                <UIPar useDangerous={false} className='mt-5 text-3xl w-[40%] text-start' content='Bienvenido al blog de México, donde encontraras las noticias y eventos que estan pasando en México.' />

            </div>

        </>
    )
}

export default Home
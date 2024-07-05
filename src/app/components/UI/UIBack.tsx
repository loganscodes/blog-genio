'use client'
import Image from 'next/image'
import arrowBack from '../../assets/svg/arrow-back.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const UIBack = () => {
    return (
        <Link href='/home'>
            <Image src={arrowBack} width={50} height={50} alt='arrow' className='mt-10'/>
        </Link>
    )
}

export default UIBack
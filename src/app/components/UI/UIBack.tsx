import Image from 'next/image'
import arrowBack from '../../assets/svg/arrow-back.svg'
import { Link } from 'next-view-transitions'

const UIBack = () => {
    return (
        <Link href='/home'>
            <Image src={arrowBack} width={50} height={50} alt='arrow' className='mb-5 ml-5 mt-10  xl:ml-36'/>
        </Link>
    )
}

export default UIBack
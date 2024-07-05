import Image from 'next/image';
import ViewMoreButton from '../components/ViewMoreButton';
import UITitle from '../components/UI/UITitle';
import UIPar from '../components/UI/UIPar';
import { PostResponse } from '../interfaces/post-response';
import { useDate } from '../hooks/useDate';
import Link from 'next/link';

interface Props {
    post?: PostResponse
    className?: string,
    sizeImg: string;
}

const CardNews = ({ post, className, sizeImg }: Props) => {

    const { formatDate } = useDate()

    if(!post) return

    return (
        // <div className={`border-2 border-[#201142]   shadow-xl bg-gray-100 ${className}`}>
        //     <UITitle className='font-bold text-center  m-auto text-lg p-3' title={post.title.rendered} />
        //     <Image src={post.jetpack_featured_media_url} alt="img" className={`${sizeImg}`} width={500} height={500} />
        //     <UIPar className='text-end mr-2 font-bold text-sm mt-1' content={formatDate(post.date)} />
        //     <UIPar className='line-clamp-3 text-justify mx-3' useDangerous={true} content={post.excerpt.rendered} />
        //     <ViewMoreButton slug={`home/${post.slug}`}/>
        // </div>

        <Link href={`home/${post.slug}`}>
        <div className="relative w-full ">
            <Image src={post.jetpack_featured_media_url} width={500} height={500} alt='' className={`${sizeImg}`} />
            <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2 w-full">
                <UITitle className='font-bold text-end  m-auto text-lg p-3' title={post.title.rendered} />
                <UIPar className='text-end mr-2 font-bold text-sm mt-1' content={formatDate(post.date)} />
            </div>
        </div>
    </Link>
    )
}

export default CardNews
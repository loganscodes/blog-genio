import Image from 'next/image';
import ViewMoreButton from '../components/ViewMoreButton';
import UITitle from '../components/UI/UITitle';
import UIPar from '../components/UI/UIPar';
import { PostResponse } from '../interfaces/post-response';
import { useDate } from '../hooks/useDate';

interface Props {
    post: PostResponse
}

const CardNews = ({ post }: Props) => {

    const { formatDate } = useDate()

    return (
        <div className='border-2 border-[#201142] w-[450px] rounded-xl shadow-xl bg-gray-100'>
            <UITitle className='font-bold text-center  m-auto text-lg p-3' title={post.title.rendered} />
            <Image src={post.jetpack_featured_media_url} alt="img" className='h-72 object-cover' width={500} height={500} />
            <UIPar className='text-end mr-2 font-bold text-sm mt-1' content={formatDate(post.date)} />
            <UIPar className='line-clamp-3 text-justify mx-3' useDangerous={true} content={post.excerpt.rendered} />
            <ViewMoreButton slug={`home/${post.slug}`}/>
        </div>
    )
}

export default CardNews
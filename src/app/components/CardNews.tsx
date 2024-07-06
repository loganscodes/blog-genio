import Image from 'next/image';
import ViewMoreButton from '../components/ViewMoreButton';
import UITitle from '../components/UI/UITitle';
import UIPar from '../components/UI/UIPar';
import { PostResponse } from '../interfaces/post-response';
import { useDate } from '../hooks/useDate';
import { Link } from 'next-view-transitions';

interface Props {
    post?: PostResponse
    fontSize?: string,
    dateSize?: string
    sizeImg: string;
}

const CardNews = ({ post, fontSize = 'text-lg', dateSize = 'text-sm', sizeImg }: Props) => {

    const { formatDate } = useDate()

    if(!post) return

    return (
        <Link href={`home/${post.slug}`}>
            <div className="relative w-full ">
                <Image src={post.jetpack_featured_media_url} width={500} height={500} alt='' className={`${sizeImg}`} />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2 w-full">
                    <UITitle className={`${fontSize} font-bold text-center m-auto p-3`} title={post.title.rendered} />
                    <UIPar className={`text-end mr-2 font-bold ${dateSize} mt-1`} content={formatDate(post.date)} />
                </div>
            </div>
        </Link>
    )
}

export default CardNews
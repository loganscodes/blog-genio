import Image from "next/image"
import { PostResponse } from "../interfaces/post-response"
import UITitle from "./UI/UITitle"
import UIPar from "./UI/UIPar"
import { useDate } from "../hooks/useDate"
import Link from "next/link"

interface Props {
    post: PostResponse;
    sizeImg: string;
}

const RecentsNews = ({ post, sizeImg }: Props) => {

    const { formatDate } = useDate()

    return (
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

export default RecentsNews
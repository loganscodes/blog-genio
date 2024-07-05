import Image from 'next/image'
import UIPar from './UI/UIPar'
import UITitle from './UI/UITitle'
import { PostResponse } from '../interfaces/post-response'
import UIBack from './UI/UIBack'

interface Props {
    post: PostResponse
}

const ContentDetail = ({ post }: Props) => {
    return (
        <div className='max-w-[1440px] m-auto'>
            <UIBack/>
            <UITitle className='uppercase font-bold text-4xl text-center p-10' title={post.title.rendered} />
            <Image src={post.jetpack_featured_media_url} alt="" width={1000} height={1000} className='m-auto my-10 object-cover' />
            <UIPar useDangerous={true} className='leading-8 text-justify' content={post.content.rendered} />
        </div>
    )
}

export default ContentDetail
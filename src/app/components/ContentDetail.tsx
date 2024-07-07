import Image from 'next/image'
import UITitle from './UI/UITitle'
import { PostResponse } from '../interfaces/post-response'
import UIBack from './UI/UIBack'
import CustomContent from './CustomContent'

interface Props {
    post: PostResponse
}

const ContentDetail = ({ post }: Props) => {
    return (
        <div className='max-w-[1440px] m-auto' data-aos="zoom-out" data-aos-duration="800" >
            <UIBack/>
                
            <UITitle className='uppercase font-bold lg:text-4xl text-center lg:p-10' title={post.title.rendered} />
            <div className='mx-2'>
                <Image src={post.jetpack_featured_media_url} alt="" width={1000} height={1000} className='m-auto my-10 object-cover' />
                <CustomContent content={post.content.rendered}/>
            </div>
        </div>
    )
}

export default ContentDetail
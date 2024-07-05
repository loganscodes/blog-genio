import React from 'react'
import { usePosts } from '../context/PostContext'
import UITitle from './UI/UITitle'
import UILoading from './UI/UILoading'
import { useLoading } from '../hooks/useLoading'
import RecentsNews from './RecentsNews'
import CardNews from './CardNews'

const News = () => {

    const posts = usePosts()
    const { loading } = useLoading({ posts })


    const recentsPosts = posts.slice(0, 3)

    return (
        <div className='max-w-[1440px] m-auto'>
            <UITitle className='font-bold text-3xl' title='Noticias Recientes' />

            {
                loading ? (
                    <UILoading />
                ) : (
                    <div className='grid grid-cols-3 mt-5'>
                        <div className='col-span-2 row-span-2 border'>
                            {/* <RecentsNews post={recentsPosts[0]} sizeImg='w-full min-h-[639px] object-cover '/> */}
                            <CardNews post={recentsPosts[0]} sizeImg='w-full min-h-[639px] object-cover'/>
                        </div>
                        <div className='flex flex-col'>
                            {recentsPosts.slice(1).map((post, k) => (
                                // <RecentsNews key={k + 1} post={post} sizeImg='w-full h-80 object-cover border'/>
                                <CardNews key={k + 1} post={post} sizeImg='w-full h-80 object-cover border'/>
                            ))}
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default News

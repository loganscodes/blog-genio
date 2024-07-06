import React from 'react'
import { usePosts } from '../context/PostContext'
import { useLoading } from '../hooks/useLoading'
import CardNews from './CardNews'
import UITitle from './UI/UITitle'
import UILoading from './UI/UILoading'

const LatestNews = () => {

    const posts = usePosts()
    const { loading } = useLoading({ posts })


    const latestPosts = posts.slice(3)

    console.log(latestPosts)

    return (
        <div className='max-w-[1440px] m-auto mx-5 mt-10'>

            <UITitle className='font-bold text-3xl mb-5' title='Noticias Pasadas' />

            {
                loading ? (
                    <UILoading />
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5' >
                        {latestPosts.map((post, k) => (
                            <CardNews key={k} post={post} fontSize='text-sm' dateSize='text-xs' sizeImg='w-full h-80 object-cover border' />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default LatestNews
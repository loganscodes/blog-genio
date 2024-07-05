import React from 'react'
import { usePosts } from '../context/PostContext'
import { useLoading } from '../hooks/useLoading'
import CardNews from './CardNews'
import UITitle from './UI/UITitle'

const LatestNews = () => {

    const posts = usePosts()
    const { loading } = useLoading({ posts })


    const latestPosts = posts.slice(3)

    console.log(latestPosts)

    return (
        <div className='max-w-[1440px] m-auto'>
            
            <UITitle className='' title='Noticias Pasadas'/>

            {
                <div className='flex flex-wrap justify-center gap-5'>
                    {latestPosts.map((post, k) => (
                        <CardNews key={k} post={post} sizeImg='w-80 h-80 object-cover border' />
                    ))}
                </div>
            }

        </div>
    )
}

export default LatestNews
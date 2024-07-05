import React, { Suspense, useEffect, useState } from 'react'
import CardNews from './CardNews'
import { usePosts } from '../context/PostContext'
import { useDate } from '../hooks/useDate'
import UITitle from './UI/UITitle'
import UILoading from './UI/UILoading'
import { useLoading } from '../hooks/useLoading'

const News = () => {

    const posts = usePosts()
    const { loading } = useLoading({posts})

    return (
        <div className='max-w-[1440px] m-auto'>
            <UITitle className='font-bold text-3xl' title='Ultimas Noticias' />

            {
                loading ? (
                    <UILoading />
                ) : (
                    <div className='flex flex-wrap justify-center items-center gap-10 mt-5  '>
                        {
                            posts.map((post, k) => (
                                <CardNews key={k} post={post}  />
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default News
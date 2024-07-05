import Image from 'next/image'
import { useParams } from 'next/navigation'
import { usePosts } from '../context/PostContext'
import UITitle from './UI/UITitle'
import UIPar from './UI/UIPar'
import { useLoading } from '../hooks/useLoading'
import UILoading from './UI/UILoading'
import { Suspense } from 'react'
import ContentDetail from './ContentDetail'
import UIBack from './UI/UIBack'

const DetailsNews = () => {

    const posts = usePosts()
    const { slug } = useParams()
    const { loading } = useLoading({posts})
    const post = posts.find((p) => p.slug === slug)

    if (!post) return

    return (
        <>
            {
                loading ? (
                    <UILoading/>
                )  : (
                    <ContentDetail post={post} />
                )
            }
        </>
    )
}

export default DetailsNews
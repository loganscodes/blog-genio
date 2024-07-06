import { useParams } from 'next/navigation'
import { usePosts } from '../context/PostContext'
import ContentDetail from './ContentDetail'

const DetailsNews = () => {

    const { posts }  = usePosts()
    const { slug } = useParams()
    const post = posts.find((p) => p.slug === slug)

    if (!post) return

    return <ContentDetail post={post} />

}

export default DetailsNews
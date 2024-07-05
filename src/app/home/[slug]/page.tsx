'use client'
import { useParams } from 'next/navigation'
import { usePosts } from '@/app/context/PostContext'

const DynamicPage = () => {
  
  const  posts = usePosts()
  const { slug } = useParams()

  const post = posts.find((p) => p.slug === slug)

  console.log(post)

  if(!post) return

  return (
    <>
      <h1 className='uppercase font-bold text-4xl text-center p-10'>{post.title.rendered}</h1>
      <div className='leading-7 text-justify' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  )
}

export default DynamicPage

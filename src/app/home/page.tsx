'use client'
import Link from 'next/link';
import { usePosts } from '../context/PostContext';
import Image from 'next/image';
import ViewMoreButton from '../components/ViewMoreButton';
import UITitle from '../components/UI/UITitle';
import UIPar from '../components/UI/UIPar';
import CardNews from '../components/CardNews';
import { useDate } from '../hooks/useDate';
import Home from '../components/Home';

const HomePage = () => {

  const posts = usePosts()
  const { formatDate } = useDate()

  console.log(posts)

  const latestPost = posts.slice(0, 3)



  return (


    <>
      <Home />

      <UITitle className='font-bold text-3xl' title='Ultimas Noticias'/>

      <div className='flex flex-wrap justify-center items-center gap-10 mt-5  '>
        {
          latestPost.map((post, k) => (
            <CardNews key={k} title={post.title.rendered} urlImg={post.jetpack_featured_media_url} date={formatDate(post.date)} content={post.excerpt.rendered} slug={`home/${post.slug}`} />
          ))
        }
      </div>
    </>

  )
}

export default HomePage

'use client'
import { Suspense, useEffect } from 'react';
import Home from '../components/Home';
import LatestNews from '../components/LatestNews';
import News from '../components/News';
import { usePosts } from '../context/PostContext';
import UILoading from '../components/UI/UILoading';

const HomePage = () => {
  
  const {  loading } = usePosts()

  if (loading) {
      return <UILoading/>;
    }


  return (
    <>
      <Home />
      <News />
      <LatestNews/>
    </>
  )
}

export default HomePage

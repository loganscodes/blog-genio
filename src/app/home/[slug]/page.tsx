'use client'
import DetailsNews from '@/app/components/DetailsNews'
import UILoading from '@/app/components/UI/UILoading';
import { usePosts } from '@/app/context/PostContext';



const DynamicPage = () => {

  const {  loading } = usePosts()

  if (loading) {
      return <UILoading/>;
    }

  return <DetailsNews/>
}

export default DynamicPage

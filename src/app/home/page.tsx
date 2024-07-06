import Home from '../components/Home';
import LatestNews from '../components/LatestNews';
import News from '../components/News';
import { PostResponse } from '../interfaces/post-response';


  
const getPosts = async() => {
  const data: PostResponse[] = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts')
  .then( res => res.json())

  return data
}


const HomePage = async () => {

  const posts = await getPosts()

  console.log(posts)

  return (
    

    <>
      <Home />
      <News posts={posts} />
      <LatestNews posts={posts}/>
    </>
  )
}

export default HomePage

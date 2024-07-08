import DetailsNews from '@/app/components/DetailsNews';
import UILoading from '@/app/components/UI/UILoading';
import { PostResponse } from '@/app/interfaces/post-response';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}


export async function generateStaticParams() {
  const data: PostResponse[] = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts')
    .then(res => res.json());

  const staticPosts = data.map(post => ({
    slug: post.slug,
  }));

  return staticPosts.map(({ slug }) => ({
    slug: slug
  }));
}



const getPost = async (slug: string): Promise<PostResponse> => {
  try {
    const posts = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts?slug=${slug}`, {
      next: {
        revalidate: 60 * 60 * 24 
      }
    }).then(resp => resp.json());

    if (posts.length === 0) {
      notFound();
    }

    return posts[0];
  } catch (error) {
    notFound();
  }
}

const DynamicPage = async ({ params }: Props) => {
  const post = await getPost(params.slug);


  return <DetailsNews post={post} />;
}

export default DynamicPage;

import { PostResponse } from '@/app/interfaces/post-response';
import ContentDetail from './ContentDetail';

interface Props {
    post: PostResponse;
}

const DetailsNews = ({ post }:Props) => {
    return <ContentDetail post={post} />;
};

export default DetailsNews;

import { PostResponse } from '@/app/interfaces/post-response';
import ContentDetail from './ContentDetail';

interface DetailsNewsProps {
    post: PostResponse;
}

const DetailsNews: React.FC<DetailsNewsProps> = ({ post }) => {
    return <ContentDetail post={post} />;
};

export default DetailsNews;

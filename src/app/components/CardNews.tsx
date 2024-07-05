import Image from 'next/image';
import ViewMoreButton from '../components/ViewMoreButton';
import UITitle from '../components/UI/UITitle';
import UIPar from '../components/UI/UIPar';

interface Props {

    title: string
    urlImg: string
    date: string
    content: string
    slug: string
}

const CardNews = ({ title, urlImg, date, content, slug }: Props) => {
    return (
        <div className='border-2 border-gray-400 w-[450px] rounded-xl shadow-xl bg-gray-100'>

            <UITitle className='font-bold text-center  m-auto text-lg p-3' title={title} />
            <Image src={urlImg} alt="img" className='h-72 object-cover' width={500} height={500} />

            <UIPar className='text-end mr-2 font-bold text-sm mt-1' content={date} />
            <UIPar className='line-clamp-3 text-justify mx-3' useDangerous={true} content={content} />


            <ViewMoreButton slug={slug}/>

        </div>
    )
}

export default CardNews
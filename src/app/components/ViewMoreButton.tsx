import Link from 'next/link'

interface Props {
    slug: string
}

const ViewMoreButton = ({ slug }: Props) => {
    return (
        <div className='flex justify-end mr-2 m-5'>
            <Link href={slug} className='text-white bg-[#201142] p-2 rounded-lg hover:underline' >
                Ver más...
            </Link>
        </div>
    )
}

export default ViewMoreButton
import { usePosts } from "@/app/context/PostContext"
import Image from "next/image"

const PageLabs = () => {
    return (
        <div>
            <div className="relative w-1/2 border border-red-500">
                <Image src='https://www.egames.news/img/2021/11/08/sasuke-uchiha.jpg?__scale=w:1200,h:900,t:2' width={500} height={500} alt='' className=" w-full object-cover" />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    text
                </div>
            </div>
        </div>
    )
}

export default PageLabs
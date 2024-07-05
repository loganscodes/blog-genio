'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { PostResponse } from "../interfaces/blog-response";

const PostContext = createContext<PostResponse[]>([])
export const usePosts = () => useContext(PostContext)

export const PostProvider = ({ children }: { children: React.ReactNode }) => {

    const [posts, setPosts] = useState<PostResponse[]>([]);

    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts')
                const data: PostResponse[] = await res.json()

                setPosts(data)
            } catch (error) {
                console.log('fetching data:', error)
            }


        }

        fetchPosts()

    }, []);

    return (
        <PostContext.Provider value={posts}>
            {children}
        </PostContext.Provider>
    )




}
'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { PostResponse } from "../interfaces/post-response";

interface Props{
    posts: PostResponse[]
    loading: boolean
}

const PostContext = createContext<Props>({ posts:[] , loading: true })
export const usePosts = () => useContext(PostContext)

export const PostProvider = ({ children }: { children: React.ReactNode }) => {

    const [posts, setPosts] = useState<PostResponse[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts')
                const data: PostResponse[] = await res.json()
                setPosts(data)
            } catch (error) {
                console.log('fetching data:', error)
            } finally {
                setLoading(false)
            }

        }

        fetchPosts()

    }, []);

    return (
        <PostContext.Provider value={{ posts, loading }}>
            {children}
        </PostContext.Provider>
    )




}
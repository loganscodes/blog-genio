import { useState, useEffect } from "react";

interface Props{
    posts?: any
}

export const useLoading = ({posts}:Props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (posts) {
            setLoading(false);
        }
    }, [posts]);

    return{
        loading
    }
}
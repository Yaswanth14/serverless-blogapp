import axios from "axios"
import { BACKEND_URL } from "../config"
import { useEffect, useState } from "react"


export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
    }, []);

    return {
        loading,
        blogs
    }
}
import {useState,useEffect} from 'react'
import axios from 'axios'


const useFetch = (url) => {
    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get(url).then((res) => {
            setLoading(false)
            setData(res.data)
        })
        .catch((error) => setError(error.message))
    }, [url])

    return {loading,data}
}

export default useFetch
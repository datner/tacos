import { useState, useEffect } from 'react'
import Unsplash, { toJson } from 'unsplash-js'
import { NO_RESPONSE } from 'utils/useFetch';

const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS,
    secret: process.env.REACT_APP_UNSPLASH_SECRET
})

const useUnsplash = () => {
    const [data, setData] = useState(NO_RESPONSE);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const res = await unsplash.photos.getRandomPhoto({query: "taco"});
                const json = await toJson(res)
                setData(json);
                setLoading(false)
            } catch (error) {
                setError(error);
            }
        })();
    }, []);
    return { data, loading, error };
}

export default useUnsplash
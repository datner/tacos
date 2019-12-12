import { useState, useEffect } from 'react'


export const NO_RESPONSE = Symbol("No Response")

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(NO_RESPONSE);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setData(json);
                setLoading(false)
            } catch (error) {
                setError(error);
            }
        })();
    }, []);
    return { data, loading, error };
};

export default useFetch
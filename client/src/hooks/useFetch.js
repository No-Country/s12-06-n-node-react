import { useState, useEffect } from "react";

export const useFetch = (fetcher) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            try {

                const response = await fetcher();
                if (response) {
                    setData(response.data);
                    setLoading(false);
                }

            } catch (error) {
                setError(error);
                setLoading(false);

                console.error("Error fetching restaurant data:", error);

            }
        }

        fetchData();

    }, [setData, setLoading, setError]);

    return { data, loading, error }
}
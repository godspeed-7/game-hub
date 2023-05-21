import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';
import { AxiosRequestConfig } from 'axios';


interface FetchResponse<T> {
    count: number;
    results: T[];
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any) {
    const [error, setError] = useState();
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, {
                signal: controller.signal,
                ...requestConfig
            })
            .then((res) => {
                setLoading(false);
                setData(res.data.results)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
}

export default useData;
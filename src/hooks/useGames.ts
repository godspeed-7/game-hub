import React, { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';


interface Game {
    id: number;
    name: string;
}
interface FetchGamesResponse {
    count: number;
    results: Game[];
}

function useGames() {
    const [error, setError] = useState();
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {

        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>('/games', {
                signal: controller.signal
            })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();
    }, []);

    return { games, error };
}

export default useGames
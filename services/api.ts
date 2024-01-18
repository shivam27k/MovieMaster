import { MediaType, TrendingResult } from 'interfaces/apiResults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=1`
    );

    const jsonResult = await response.json();
    return jsonResult;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    const jsonResult = await response.json();
    return jsonResult;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
    );
    const jsonResult = await response.json();
    return jsonResult;
};

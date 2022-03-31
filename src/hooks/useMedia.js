import axios from 'axios';
import { useCallback } from 'react';

export const useMedia = () => {
    const getMedia = useCallback(async ({ trending, movie, tvseries, bookmark }) => {
        try {
            const { data } = await axios.post('/media', {
                trending,
                movie,
                tvseries,
                bookmark,
            });
            return data.media;
        } catch (e) {
            console.log(e);
        }
    }, []);
    const findMedia = useCallback(async (value, pathname) => {
        const { data } = await axios.post('/search', {
            searchValue: value.inputValue,
            pathname,
        });
        return data.media;
    }, []);
    return {
        getMedia,
        findMedia,
    };
};

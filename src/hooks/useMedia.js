import axios from 'axios';
import { useCallback } from 'react';

export const useMedia = () => {
    const getMedia = useCallback(async (searchValue) => {
        try {
            const { data } = await axios.post('/media', {
                searchValue,
            });
            return data.media;
        } catch (e) {
            console.log(e);
        }
    }, []);
    const findMedia = useCallback(async (searchValue, pathname) => {
        const { data } = await axios.post('/search', {
            searchValue,
            pathname,
        });
        return data.media;
    }, []);
    return {
        getMedia,
        findMedia,
    };
};

import axios from 'axios';
import { useCallback } from 'react';

export const useMedia = () => {
    const getMedia = useCallback(async (trending = false) => {
        try {
            const { data } = await axios.post('/media', {
                trending,
            });
            return data.media;
        } catch (e) {
            console.log(e);
        }
    }, []);
    const findMedia = useCallback(async (searchValue) => {
        const { data } = await axios.post('/search', {
            searchValue,
        });
        return data.media;
    }, []);
    return {
        getMedia,
        findMedia,
    };
};

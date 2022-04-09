import axios from 'axios';
import { useCallback } from 'react';

export const useMedia = () => {
    const getMedia = useCallback(async (item = null, pathname) => {
        try {
            const { data } = await axios.post('/media', {
                item,
                pathname,
            });
            return data.media;
        } catch (e) {
            console.log(e);
        }
    }, []);
    const findMedia = useCallback(async (inputValue, pathname) => {
        const { data } = await axios.post('/search', {
            inputValue,
            pathname,
        });
        return data.media;
    }, []);
    return {
        getMedia,
        findMedia,
    };
};

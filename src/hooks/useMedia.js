import axios from 'axios';
import { useCallback } from 'react';

export const useMedia = () => {
    const getMedia = useCallback(async () => {
        const { data } = await axios.get('/media');
        return data.media;
    }, []);
    return {
        getMedia,
    };
};

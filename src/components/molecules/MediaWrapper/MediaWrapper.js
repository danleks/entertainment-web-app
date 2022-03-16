import React from 'react';
import { Wrapper } from './MediaWrapper.style';

const MediaWrapper = ({ trending, children }) => {
    return <Wrapper trending={trending}>{children}</Wrapper>;
};

export default MediaWrapper;

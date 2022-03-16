import React from 'react';
import { SectionTitleStyles } from './SectionTitle.style';

const SectionTitle = ({ trending, children }) => {
    return <SectionTitleStyles trending={trending}>{children}</SectionTitleStyles>;
};

export default SectionTitle;

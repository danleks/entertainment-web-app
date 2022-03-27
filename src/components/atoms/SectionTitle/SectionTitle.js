import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitleStyles } from './SectionTitle.style';

const SectionTitle = ({ trending, children }) => {
    return <SectionTitleStyles trending={trending}>{children}</SectionTitleStyles>;
};

SectionTitle.propTypes = {
    trending: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default SectionTitle;

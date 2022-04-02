import React, { useContext } from 'react';
import Section from 'components/organisms/Section/Section';
import { useSection } from 'hooks/useSection';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { SearchContext } from 'providers/SearchProvider';

const Home = () => {
    const { getSectionProps } = useSection();
    const { searchValue } = useContext(SearchContext);
    return (
        <ViewWrapper>
            {searchValue ? null : <Section {...getSectionProps(true)} />}
            <Section {...getSectionProps()} />
        </ViewWrapper>
    );
};

export default Home;

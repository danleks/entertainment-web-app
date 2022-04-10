import React, { useContext } from 'react';
import Section from 'components/organisms/Section/Section';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { AppContext } from 'providers/AppProvider';

const Home = () => {
    const { searchResult } = useContext(AppContext);

    return (
        <ViewWrapper>
            {searchResult.length === 0 ? <Section trending /> : null}
            <Section />
        </ViewWrapper>
    );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

export default {
    title: 'Components/Organisms/Navigation',
    component: Navigation,
};

const Wrapper = styled.div`
    @media (min-width: 1440px) {
        width: 9.6rem;
        height: 100%;
    }
`;

const Template = (args) => (
    <MemoryRouter>
        <Navigation {...args} />
    </MemoryRouter>
);

export const Main = Template.bind({});
Main.decorators = [
    (Story) => (
        <Wrapper>
            <Story />
        </Wrapper>
    ),
];
Main.args = {};

import { useEffect } from 'react';
import { handlers } from 'mocks/handlers';
import AppProvider from './AppProvider';
import { MemoryRouter } from 'react-router-dom';

export const MSWProvider = ({ children }) => {
    const { worker } = window.msw;
    useEffect(() => () => worker.resetHandlers());
    worker.use(...handlers);
    return (
        <MemoryRouter>
            <AppProvider>{children}</AppProvider>
        </MemoryRouter>
    );
};

import { useEffect } from 'react';
import { handlers } from 'mocks/handlers';

export const MSWProvider = ({ children }) => {
    const { worker } = window.msw;
    useEffect(() => () => worker.resetHandlers());
    worker.use(...handlers);
    return <>{children}</>;
};

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root';
import { BrowserRouter } from 'react-router-dom';

import { worker } from 'mocks/browser';

worker.start().then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'),
    );
});

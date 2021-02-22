import React from 'react';
import { Helmet } from 'react-helmet';

import './bootstrap.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;900&display=swap" rel="stylesheet" /> 
            </Helmet>
            {children}
        </>
    )
};

export default Layout;

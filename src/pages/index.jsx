import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Home from '../components/home';

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Hi, I'm Nick Narsing.</title>
            </Helmet>
            <Home />
        </Layout>
    );
}

export default IndexPage;

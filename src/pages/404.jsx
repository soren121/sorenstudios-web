import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import Layout from '../components/layout';
import styles from '../components/layout/layout.module.scss';

const NotFoundPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Not found</title>
            </Helmet>
            <Container className={styles.container}>
                <h1>Not found.</h1>
                <p className="h4">
                    There's really not a lot here to see.
                </p>
                <p>
                    <Link to="/">Go home</Link>.
                </p>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;

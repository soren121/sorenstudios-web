import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import clsx from 'clsx';

import styles from './home.module.scss';
import { ReactComponent as GithubIcon } from 'bootstrap-icons/icons/github.svg';
import { ReactComponent as EnvelopeIcon } from 'bootstrap-icons/icons/envelope-open-fill.svg';

const Home = () => {
    return (
        <Container className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.pageHeading}>Hi, I'm Nick Narsing.</h1>
                <h2>
                    I'm a full-stack web developer based in Portland, Oregon.<br />
                    I go by soren121 on the web.
                </h2>
                <ul className={styles.headerSocial}>
                    <li>
                        <a href="https://github.com/soren121" target="_blank" rel="noreferrer">
                            <GithubIcon viewBox="0 0 16 16" className={styles.headerSocialIcon} />
                            <span>@soren121</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:soren121@sorenstudios.com">
                            <EnvelopeIcon viewBox="0 0 16 16" className={styles.headerSocialIcon} />
                            <span>soren121@sorenstudios.com</span>
                        </a>
                    </li>
                </ul>
            </header>

            <main>
                <Row>
                    <Col md={8}>
                        <section className={styles.introLead}>
                            <p>
                                I have 7+ years of professional experience building 
                                scalable APIs and webapps, using PHP, Node.js, and React,
                                to realize the potential of the next big idea.
                            </p>
                            <p>
                                I graduated with a B.Sc. in Computer Science from 
                                the University of Georgia, class of 2018.
                            </p>
                        </section>

                        <section className={clsx(styles.section, styles.projectSection)}>
                            <h3>Current and Past Projects</h3>

                            <section className={styles.project}>
                                <h4>Yodel</h4>
                                <p className={styles.sectionDesc}>
                                    A discontinued third-party Yik Yak app for Windows Phone, written in WinJS. At its 
                                    peak, the app had more than 30,000 users.
                                </p>
                            </section>
                            <section className={styles.project}>
                                <h4>
                                    <a href="https://github.com/soren121/lightblog" target="_blank" rel="noreferrer">
                                        LightBlog <GithubIcon />
                                    </a>
                                </h4>
                                <p className={styles.sectionDesc}>
                                    A lightweight PHP/MySQL blogging platform, intended as an alternative to WordPress 
                                    on free or shared hosting.
                                </p>
                            </section>
                            <section className={styles.project}>
                                <h4>
                                    <a href="https://github.com/soren121/wgamemode" target="_blank" rel="noreferrer">
                                        WGamemode2 <GithubIcon />
                                    </a>
                                </h4>
                                <p className={styles.sectionDesc}>
                                    A plugin for Spigot Minecraft servers that allows server operators to define 
                                    WorldGuard regions with automatic gamemode enforcement, such as creative-only zones.
                                </p>
                            </section>
                        </section>

                        <section className={clsx(styles.section, styles.experienceSection)}>
                            <h3>Work Experience</h3>

                            <section className={styles.experience}>
                                <h4>Senior Developer at <span className={styles.experienceCompany}>Wit Labs</span> <small>(June 2018 - present)</small></h4>
                                <p className={styles.sectionDesc}>
                                    We make <a href="https://witcontests.com/" target="_blank" rel="noreferrer">Wit</a>, a white-labeled 
                                    video contest platform for fan engagement activations in sports and entertainment.
                                </p>

                                <ul>
                                    <li>
                                        I lead development on the entire Wit platform, including the core API, the webapp, 
                                        and the management console for brands. 
                                    </li>
                                    <li>
                                        On the direct-to-consumer side of Wit, I also maintain the Wit Android app.
                                    </li>
                                </ul>
                            </section>
                            <section className={styles.experience}>
                                <h4>Senior Developer at <span className={styles.experienceCompany}>Manki Business</span> <small>(June 2017 - present)</small></h4>
                                <p className={styles.sectionDesc}>
                                    Manki Business is a small, versatile consulting firm that specializes in iOS and 
                                    web development.
                                </p>

                                <ul>
                                    <li>
                                        I specialize in making efficient web applications in both PHP and 
                                        Node.js &amp; React to meet our clients' exacting specifications.
                                    </li>
                                    <li>
                                        I've realized products for clients such as DonorUP, The Vendry, LeadRank ML, 
                                        Bedtime, and Tote, among others. For The Vendry, I singularly took over early
                                        development from an overseas team and built a full-fledged directory for events 
                                        professionals.
                                    </li>
                                </ul>
                            </section>
                            <section className={styles.experience}>
                                <h4>Lead Backend Developer at <span className={styles.experienceCompany}>Friendsy</span> <small>(June 2015 - May 2017)</small></h4>
                                <p className={styles.sectionDesc}>
                                    <a href="https://friendsyapp.com" target="_blank" rel="noreferrer">Friendsy</a> is a social networking 
                                    app exclusive to college students.
                                </p>

                                <ul>
                                    <li>
                                        Duties included developing new API features for our mobile apps, maintaining 
                                        &amp; scaling our infrastructure on AWS, and optimizing existing server-side code.
                                    </li>
                                    <li>
                                        In two weeks, I overhauled the devops infrastructure and optimized core parts of 
                                        the backend, resulting in a 4.5x increase in application performance.
                                    </li>
                                    <li>
                                        I developed a number of internal tools to help my coworkers and myself manage the 
                                        Friendsy platform easily and more efficiently.
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
            </main>
            <footer>
                <p>(c) {(new Date()).getFullYear()} Nick Narsing. Built with <a href="https://gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>.</p>
            </footer>
        </Container>
    );
};

export default Home;

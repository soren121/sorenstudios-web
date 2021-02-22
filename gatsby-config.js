module.exports = {
    siteMetadata: {
        title: "Hi, I'm Nick Narsing.",
    },
    plugins: [
        'gatsby-plugin-preact',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                useResolveUrlLoader: true,
                sassOptions: {
                    precision: 6,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-YJRZH1SS65',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-svgr',
    ],
};

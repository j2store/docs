const queries = require('./src/utils/algolia')

require("dotenv").config({
  path: `./env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `J2store`,
        description: `Sell more by sending targetted, data-driven marketing emails to your customers`,
        author: `J2store`,
        siteUrl: `https://www.j2store.org`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content/docs`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        {
          resolve: `gatsby-plugin-canonical-urls`,
          options: {
            siteUrl: `https://www.j2store.org`,
          },
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            tableOfContents: {
              heading: null,
              maxDepth: 4,
              className: `toc-scroll-down`,
            },
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1200,
                },
              },
              {
                resolve: `gatsby-remark-responsive-iframe`,
                options: {
                  wrapperStyle: `margin-bottom: 1.0725rem`,
                },
              },
              {
                resolve: `gatsby-remark-autolink-headers`,
                options: {
                  offsetY: `100`,
                  icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                  className: `toc-title-icon`,
                  maintainCase: false,
                  removeAccents: true,
                },
              },
              `gatsby-remark-prismjs`,
              `gatsby-remark-copy-linked-files`,
              `gatsby-remark-smartypants`,
              `gatsby-remark-component`
            ],
          },
        },
        {
          resolve: `gatsby-plugin-algolia`,
          options: {
            appId: process.env.GATSBY_ALGOLIA_APP_ID,
            apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
            queries,
            chunkSize: 10000, // default: 1000
          },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Quattrocento+Sans\:400,400i,700,700i`,
                    `Cabin\:400,500,600,700`,
                    `Hind\:300,400,500,600,700`
                ]
            }
        },
        // {
        //     resolve: `gatsby-plugin-typography`,
        //     options: {
        //         pathToConfigModule: `${__dirname}/src/utils/typography.js`,
        //     },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `J2store`,
                short_name: `J2store`,
                start_url: `/`,
                background_color: `#6772e5`,
                theme_color: `#6772e5`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            }
        },
        {
          resolve: `gatsby-plugin-canonical-urls`,
          options: {
            siteUrl: `https://www.j2store.org`,
          },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                sitemapSize: 5000,
                output: `/sitemap.xml`,
            }
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                sitemapPath: `/sitemap.xml`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
}

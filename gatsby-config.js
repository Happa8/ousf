/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://ousf-dev.netlify.com"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Roboto:100i,100,300,300i,700",
            "Noto Sans JP:400,500",
            "Raleway:200i",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/posts/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book`,
        path: `${__dirname}/posts/book`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        }, ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/layout.jsx")
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: "https://ousf-dev.netlify.com",
        policy: [{
          userAgent: '*',
          disallow: '/'
        }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `大阪大学SF研究会公式サイト`,
        short_name: `阪大SF研`,
        description: `大阪大学SF研究会の公式サイトです`,
        lang: `jp`,
        icon: `static/logo1.jpg`,
        start_url: `/`,
        background_color: `#edeef1`,
        theme_color: `#21B7F8`
      }
    }
  ],
}
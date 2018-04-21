module.exports = {
  siteMetadata: {
    title: 'Expertisedag Nieuw Media 2018',
  },
  plugins: ['gatsby-plugin-react-helmet',
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `src`,
                path: `${__dirname}/src/content`,
              }
            },
            {
              resolve: `gatsby-plugin-favicon`,
              options: {
                logo: "./src/images/favicon.png",
                injectHTML: true,
                icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  twitter: false,
                  yandex: true,
                  windows: true
                }
              }
            },
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: "Expertisedag Nieuw Media 2018",
                short_name: "GENM18",
                start_url: "/",
                background_color: "#d7bda5",
                theme_color: "#5e358c",
                display: "minimal-ui",
                icon: "src/images/favicon.png", // This path is relative to the root of the site.
              }
            },

            'gatsby-transformer-remark',
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
            `gatsby-plugin-netlify` // make sure to put last in the array
          ]
};

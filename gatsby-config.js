module.exports = {
  siteMetadata: {
    title: 'React-Contexify'
  },
  pathPrefix: '/react-contexify',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components'
    }
  ]
};

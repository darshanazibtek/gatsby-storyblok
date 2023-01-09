/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [ {
    resolve: 'gatsby-source-storyblok',
    options: {
      accessToken: '4zrdapJsNzjceBEEfXBr4wtt',
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
      // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
    }
  },  
],
}

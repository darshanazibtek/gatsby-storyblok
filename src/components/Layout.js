import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './Teaser'
import configuration from '../../gatsby-config'
 
const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')
 
storyblokInit({
  accessToken: sbConfig.options.accessToken,
  apiOptions: {
    region: "us", // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
    teaser: Teaser
  }
});
 
const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 
export default Layout
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import bowser from 'bowser';

import Dialog from "../components/Dialog"

{/* Global CSS */}
import './index.css'
import './typography.css'

{/* Modular CSS */}
import styles from "./index.module.css";

const TemplateWrapper = ({ data, children }) => {
  let frontmatter = data.meta.edges[3].node.frontmatter
  return (<main className={styles.main} >
    <Helmet
      title={frontmatter.title}
      meta={[
        { name: 'description', content: frontmatter.description },
        { name: 'keywords', content: frontmatter.metaTags.join(", ") },
        { name: 'theme-color', content: '#d7bda5' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: frontmatter.twitterHandle },
        { name: 'twitter:creator', content: frontmatter.author },
        { name: 'twitter:title', content: frontmatter.title },
        { name: 'twitter:description', content: frontmatter.description },
        { name: 'twitter:image', content: frontmatter.socialMediaImage.childImageSharp.resolutions.src },
      ]}
    />
    {bowser.msie && <Dialog text="Deze website ondersteunt Internet Explorer niet optimaal. U wordt aangeraden uw browser te updaten." position="top"/> }
    {children()}
  </main>
)}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query layoutQuery {
    meta: allMarkdownRemark(
      filter: {id: {regex: "//home/general//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            author
            socialMediaImage {
              childImageSharp {
                resolutions(width: 2048) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
            metaTags
            twitterHandle
          }
        }
      }
    }
  }
`;

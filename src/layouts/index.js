import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import bowser from 'bowser';

import Dialog from "../components/Dialog"

import imageobject from './socialmedia.png';

{/* Global CSS */}
import './index.css'
import './typography.css'

{/* Modular CSS */}
import styles from "./index.module.css";

const TemplateWrapper = ({ children }) => {
  return (<main className={styles.main} >
    <Helmet
      title="Expertisedag Nieuwe Media 2018"
      meta={[
        { name: 'description', content: 'Met trots presenteert het Expertisecentrum Journalistiek op dinsdag 19 juni 2018 voor de achtste achtereenvolgende keer: De Grote Expertisedag Nieuwe Media #8' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'theme-color', content: '#d7bda5' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ecjournalistiek' },
        { name: 'twitter:creator', content: '' },
        { name: 'twitter:title', content: 'Grote Expertisedag Nieuwe Media 2018' },
        { name: 'twitter:description', content: 'Waarheid en vertrouw – Journalistiek die terugvecht' },
        { name: 'twitter:image', content: imageobject },
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

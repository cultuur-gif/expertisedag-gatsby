import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import bowser from 'bowser';

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
      ]}
    />
    {bowser.msie && <div className={styles.browserCatch}><h1>Deze website ondersteunt Internet Explorer niet. U wordt aangeraden uw browser te updaten. Of klik <a href="http://www.expertisecentrumjournalistiek.nl/grote-expertisedag-nieuwe-media-2018/">hier</a> om het programma op de website van het Expertisecentrum Journalistiek te bekijken.</h1></div> }
    {!bowser.msie && children()}
  </main>
)}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

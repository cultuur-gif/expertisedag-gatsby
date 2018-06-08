import React from 'react'
import Img from 'gatsby-image'
import classNames from 'classnames'
import slugify from 'slugify'

import styles from './index.module.css'

const Card = props => {
  return (
    <div className={styles.crumb}>
      <p
        className={classNames(
          styles.crumbText,
          props.blackText && styles.crumbTextBlack
        )}
      >
        {props.text}
      </p>
    </div>
  )
}

export default Card

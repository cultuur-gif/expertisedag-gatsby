import React from 'react'
import classNames from 'classnames'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from "./index.module.css";

const Button = (props) => {
  return (<OutboundLink href={props.link} className={classNames(styles.container, props.alternative && styles.alternative)} download={props.download && props.download}>
    <h4 className={styles.text}>{props.text}</h4>
  </OutboundLink>)
}

export default Button

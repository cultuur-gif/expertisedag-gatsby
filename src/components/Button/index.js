import React from 'react'
import classNames from 'classnames'

import styles from "./index.module.css";

const Button = (props) => {
  return (<a href={props.link} className={classNames(styles.container, props.alternative && styles.alternative)} download={props.download && props.download}>
    <h4 className={styles.text}>{props.text}</h4>
  </a>)
}

export default Button

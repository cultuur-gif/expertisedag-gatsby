import React from 'react'
import Button from "../Button";

import styles from "./index.module.css";

const Dialog = (props) => (
  <section className={styles.container}>
    <h4 className={styles.text}>{props.children}</h4>
    <Button text="Bestellen" alternative="true" />
  </section>
)

export default Dialog

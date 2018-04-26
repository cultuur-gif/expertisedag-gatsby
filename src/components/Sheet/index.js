import React from 'react'
import Img from "gatsby-image";

import styles from './index.module.css';

const Sheet = (props) => {
  const frontmatter = props.data.node.frontmatter;
  const html = props.data.node.html;
  return (<div className={styles.container}>
    <div className={styles.imageWrapper}>
      <Img sizes={frontmatter.largeImage.childImageSharp.sizes} />
    </div>
    <div className={styles.contentWrapper}>
      <h2 className={styles.title}>{frontmatter.name}</h2>
      <h3 className={styles.subtitle}>{frontmatter.function}</h3>
      <div className={styles.columns}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{__html: html}}
        />
      </div>
    </div>
  </div>);
}

export default Sheet

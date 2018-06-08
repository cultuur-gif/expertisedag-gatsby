import React from 'react'
import Img from 'gatsby-image'
import classNames from 'classnames'
import slugify from 'slugify'

import styles from './index.module.css'

const Card = props => {
  const frontmatter = props.data.node.frontmatter
  const html = props.data.node.html
  return (
    <div
      id={slugify(frontmatter.name)}
      className={classNames(styles.card, frontmatter.blur && styles.blur)}
    >
      {!frontmatter.special && (
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{frontmatter.name}</h2>
          <h3 className={styles.subtitle}>{frontmatter.function}</h3>
        </div>
      )}
      {frontmatter.special && (
        <div className={styles.titleWrapper}>
          <h3 className={styles.subtitle}>{frontmatter.title}</h3>
          <h2 className={styles.title}>{frontmatter.subtitle}</h2>
          <h2 className={styles.title}>{frontmatter.name}</h2>
        </div>
      )}
      {frontmatter.smallImage && (
        <div className={styles.profilePic}>
          <Img
            className={styles.profilePic}
            resolutions={frontmatter.smallImage.childImageSharp.resolutions}
          />
        </div>
      )}
      {html && (
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      {frontmatter.quote && <q className={styles.quote}>{frontmatter.quote}</q>}
    </div>
  )
}

export default Card

import React from 'react'
import Img from "gatsby-image";
import classNames from 'classnames'
import slugify from 'slugify'

import styles from "./index.module.css";

import imgSmouter from "../../content/home/viewpoints/smouter.png";

const Card = (props) => {
  const data = props.data.node;
  return (
  <div id={slugify(data.frontmatter.name)} className={classNames(styles.card, data.frontmatter.blur && styles.blur)}>
    {!data.frontmatter.leader && (<div className={styles.titleWrapper}>
      <h2 className={styles.title}>{data.frontmatter.name}</h2>
      <h3 className={styles.subtitle}>{data.frontmatter.function}</h3>
    </div>)}
    {data.frontmatter.leader && (<div className={styles.titleWrapper}>
        <h3 className={styles.subtitle}>Stelling</h3>
        <h2 className={styles.title}>Gespreksleider:</h2>
        <h2 className={styles.title}>{data.frontmatter.name}</h2>
      </div>)}
    {data.frontmatter.featuredImage && (<div className={styles.profilePic}>
      <Img className={styles.profilePic} resolutions={data.frontmatter.featuredImage.childImageSharp.resolutions} />
    </div>)}
    {data.html && <div className={styles.text} dangerouslySetInnerHTML={{__html: data.html}} />}
    {data.frontmatter.quote && <q className={styles.quote}>{data.frontmatter.quote}</q>}
  </div>)
};

export default Card

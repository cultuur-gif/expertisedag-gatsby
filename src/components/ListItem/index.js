import React from 'react'
import Img from 'gatsby-image'
import classNames from 'classnames'
import moment from 'moment'

import styles from './index.module.css'
import Crumb from '../Crumb'

const ListItem = props => {
  const data = props.data.node
  return (
    <div
      className={classNames(styles.list, data.frontmatter.blur && styles.blur)}
    >
      <h3>
        {moment(data.frontmatter.startTime).format('H.mm')} -{' '}
        {moment(data.frontmatter.endTime).format('H.mm')} UUR
        <Crumb text={data.frontmatter.title} />
      </h3>
      <div className={styles.text}>
        <p>{data.frontmatter.description}</p>
      </div>
    </div>
  )
}

export default ListItem

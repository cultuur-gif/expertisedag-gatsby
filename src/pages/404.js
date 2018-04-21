import React from 'react'
import classNames from 'classnames'
import Link from "gatsby-link"

import logo from "./landingpage/logo.svg"

import stylesGrid from "./landingpage/grid.module.css"
import stylesHeader from "./landingpage/header.module.css"
const styles = {
  ...stylesGrid,
  ...stylesHeader
}

const NotFoundPage = () => {
  return (
    <div className={styles.screen}>
      <div
        className={styles.page}
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <header
          className={classNames(styles.grid, styles.header)}
          style={{
            flexGrow: 0
          }}>
          <img className={styles.logo} src={logo}/>
        </header>
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '10rem'
          }}
        >
          <h1>404 - NOT FOUND</h1>
          <h1>Deze pagina bestaat helaas niet, klik <Link to="">hier</Link></h1>
        </div>
      </div>
    </div>)}

export default NotFoundPage

import React from 'react'
import classNames from 'classnames'
import Link from "gatsby-link"
import bowser from "bowser"

import logoSVG from "../../images/logo.svg"
import logoPNG from "../../images/logo.png"

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
          <Link
            to="/"
            >
            {bowser.msie ?
              <img className={styles.logo} src={logoPNG}/> :
              <img className={styles.logo} src={logoSVG}/>}
          </Link>
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

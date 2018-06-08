import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import { Link } from 'react-scroll'
const ScrollLink = Link
import GatsbyLink from 'gatsby-link'
import bowser from 'bowser'
import slugify from 'slugify'

// Custom scripts
import generateCalendar from '../components/ical.js'

// Components
import Dialog from '../components/Dialog'
import Card from '../components/Card'
import Crumb from '../components/Crumb'
import Sheet from '../components/Sheet'
import Map from '../components/Map'
import Marquee from '../components/Marquee'
import Button from '../components/Button'
import ListItem from '../components/ListItem'

// Styles
import stylesGrid from './landingpage/grid.module.css'
import stylesHeader from './landingpage/header.module.css'
import stylesLanding from './landingpage/landing.module.css'
import stylesProgramma from './landingpage/programma.module.css'
import stylesLocationcost from './landingpage/locationcost.module.css'
import stylesFooter from './landingpage/footer.module.css'
const styles = {
  ...stylesGrid,
  ...stylesHeader,
  ...stylesLanding,
  ...stylesProgramma,
  ...stylesLocationcost,
  ...stylesFooter,
}

// Images
import logoSVG from '../../images/logo.svg'
import logoPNG from '../../images/logo.png'
import nose from '../../images/nose.svg'

const IndexPage = ({ data }) => {
  const headerData = data.general.edges[0].node
  const locCostData = data.general.edges[1].node
  const footerData = data.general.edges[2].node
  return (
    <div className={styles.screen}>
      <div className={styles.page}>
        {/* Page header  */}
        <header className={classNames(styles.grid, styles.header)}>
          <GatsbyLink to="/">
            {bowser.msie ? (
              <img className={styles.logo} src={logoPNG} />
            ) : (
              <img className={styles.logo} src={logoSVG} />
            )}
          </GatsbyLink>
          <div className={styles.nav}>
            {headerData.frontmatter.navigation.map((navItem, key) => (
              <ScrollLink
                className={styles.navItem}
                key={key}
                to={slugify(navItem)}
                smooth={true}
                hashSpy={true}
              >
                {navItem}
              </ScrollLink>
            ))}
          </div>
        </header>

        {/* Landing */}
        <section className={styles.grid}>
          <img src={nose} className={styles.headerImg} />
          <div className={styles.headerRight}>
            <h2 className={styles.subtitle}>
              {headerData.frontmatter.dateLoc}
            </h2>
            <h1 className={styles.title}>{headerData.frontmatter.title}</h1>
            <Button
              text={headerData.frontmatter.button}
              color="purple"
              link="http://www.expertisecentrumjournalistiek.nl/agenda/19-juni-2018-de-grote-expertisedag-nieuwe-media/"
            />
            {headerData.frontmatter.details.map((detail, key) => {
              return <Crumb key={key} text={detail} blackText={true} />
            })}
          </div>
          <div
            className={styles.landingText}
            dangerouslySetInnerHTML={{ __html: headerData.html }}
          />
        </section>

        {/* Speakers */}
        <section
          className={styles.grid}
          id={slugify(headerData.frontmatter.navigation[0])}
          name={slugify(headerData.frontmatter.navigation[0])}
        >
          <div className={styles.grid24}>
            <Marquee title="Sprekers" />
          </div>
          {data.persons.edges.map((person, key) => {
            return (
              person.node.frontmatter.personType == 'speaker' && (
                <div className={styles.grid24} key={key}>
                  <Sheet data={person} />
                </div>
              )
            )
          })}
        </section>

        {/* CaseStudies */}
        <section
          className={styles.grid}
          id={slugify(headerData.frontmatter.navigation[1])}
          name={slugify(headerData.frontmatter.navigation[1])}
        >
          <div className={styles.grid24}>
            <Marquee title="Case studies" />
          </div>
          {data.persons.edges.map((person, key) => {
            return (
              person.node.frontmatter.personType == 'casestudy' && (
                <div className={styles.grid6} key={key}>
                  <Card data={person} key={key} />
                </div>
              )
            )
          })}
        </section>

        {/* Viewpoints */}
        <section
          className={classNames(styles.grid, styles.gridPaddingLarge)}
          id={slugify(headerData.frontmatter.navigation[2])}
          name={slugify(headerData.frontmatter.navigation[2])}
        >
          <div className={styles.grid24}>
            <Marquee title="Debat" />
          </div>
          {data.persons.edges.map((person, key) => {
            return (
              person.node.frontmatter.personType == 'debate' && (
                <div className={styles.grid6} key={key}>
                  <Card data={person} key={key} />
                </div>
              )
            )
          })}
        </section>

        {/* Masterclasses */}
        <section
          className={classNames(styles.grid, styles.gridPaddingLarge)}
          id={slugify(headerData.frontmatter.navigation[3])}
          name={slugify(headerData.frontmatter.navigation[3])}
        >
          <div className={styles.grid24}>
            <Marquee title="Masterclass" />
          </div>
          {data.persons.edges.map((person, key) => {
            return (
              person.node.frontmatter.personType == 'masterclass' && (
                <div className={styles.grid6} key={key}>
                  <Card data={person} key={key} />
                </div>
              )
            )
          })}
        </section>

        {/* Agenda en Twitter */}
        <section
          className={styles.grid}
          id={slugify(headerData.frontmatter.navigation[4])}
          name={slugify(headerData.frontmatter.navigation[4])}
        >
          <div className={styles.grid24}>
            <Marquee title="Agenda" />
          </div>
          <div className={classNames(styles.grid24, styles.gridColumns)}>
            {data.agenda.edges.map((event, key) => {
              return <ListItem data={event} key={key} />
            })}
          </div>
        </section>

        {/* Location and costs */}
        <section
          className={classNames(styles.grid, styles.location)}
          id={slugify(headerData.frontmatter.navigation[5])}
          name={slugify(headerData.frontmatter.navigation[5])}
        >
          <div className={classNames(styles.grid12, styles.map)}>
            <Map
              isMarkerShown
              apiKey={locCostData.frontmatter.locationApiKey}
              zoom={parseFloat(locCostData.frontmatter.locationZoom)}
              location={{
                lat: parseFloat(locCostData.frontmatter.location.lat),
                lng: Number(locCostData.frontmatter.location.lng),
              }}
            />
          </div>
          <div className={classNames(styles.grid12, styles.costs)}>
            <Marquee title="Locatie & Kosten &" secundary={true} />
            <div dangerouslySetInnerHTML={{ __html: locCostData.html }} />
          </div>
        </section>

        {/* Footer  */}
        <section className={classNames(styles.grid, styles.footer)}>
          <div className={classNames(styles.grid12, styles.affiliates)}>
            <h3 className={styles.affiliatesHeader}>Organisatie</h3>
            {footerData.frontmatter.logosOrganisatie.map((logo, key) => {
              return (
                <div className={styles.affiliateLogo} key={key}>
                  <Img sizes={logo.childImageSharp.sizes} />
                </div>
              )
            })}
            <h3 className={styles.affiliatesHeader}>Ondersteund door</h3>
            {footerData.frontmatter.logosOndersteuning.map((logo, key) => {
              return (
                <div className={styles.affiliateLogo} key={key}>
                  <Img sizes={logo.childImageSharp.sizes} />
                </div>
              )
            })}
          </div>
          <div className={classNames(styles.grid12, styles.footerInfo)}>
            <div dangerouslySetInnerHTML={{ __html: footerData.html }} />
            <div>
              <p>
                <GatsbyLink to="/blog/privacy/">Privacy Statement</GatsbyLink> -
                <a href="javascript:gaOptout();">Deactiveer Google Analytics</a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={classNames(styles.centerer)}>
        <Dialog
          button="Bestellen"
          text={headerData.frontmatter.dialog}
          buttonLink="http://www.expertisecentrumjournalistiek.nl/agenda/19-juni-2018-de-grote-expertisedag-nieuwe-media/"
        />
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query indexQuery {
    general: allMarkdownRemark(
      filter: { id: { regex: "//content/home/general//" } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            dateLoc
            button
            details
            navigation
            dialog
            marqueeTitle
            logosOrganisatie {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            logosOndersteuning {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            location {
              lat
              lng
            }
            locationZoom
          }
          html
        }
      }
    }
    persons: allMarkdownRemark(
      filter: { id: { regex: "//content/home/persons//" } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            title
            subtitle
            blur
            function
            special
            quote
            personType
            largeImage {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            smallImage {
              childImageSharp {
                resolutions(width: 110) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
          html
        }
      }
    }
    agenda: allMarkdownRemark(
      filter: { id: { regex: "//content/home/agenda//" } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            startTime
            showTime
            endTime
            title
            description
            room
            url
          }
          html
        }
      }
    }
  }
`

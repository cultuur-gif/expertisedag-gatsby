import React from 'react'
import classNames from 'classnames'
import Img from "gatsby-image"
import { Link } from "react-scroll"
// import { Timeline, Hashtag } from 'react-twitter-widgets'
import bowser from 'bowser';

// Custom scripts
import generateCalendar from "../components/ical.js"

// Components
import Dialog from "../components/Dialog"
import Card from "../components/Card"
import Sheet from "../components/Sheet"
import Map from "../components/Map"
import Marquee from "../components/Marquee"
import Button from "../components/Button"
import ListItem from "../components/ListItem"

// Styles
import stylesGrid from "./landingpage/grid.module.css"
import stylesHeader from "./landingpage/header.module.css"
import stylesLanding from "./landingpage/landing.module.css"
import stylesProgramma from "./landingpage/programma.module.css"
import stylesLocationcost from "./landingpage/locationcost.module.css"
import stylesFooter from "./landingpage/footer.module.css"
const styles = {
  ...stylesGrid,
  ...stylesHeader,
  ...stylesLanding,
  ...stylesProgramma,
  ...stylesLocationcost,
  ...stylesFooter
}

// Images
import logoSVG from "./landingpage/logo.svg"
import logoPNG from "./landingpage/logo.png"
import nose from "./landingpage/nose.svg"

const IndexPage = ({data}) => {
  const headerData = data.general.edges[0].node;
  const locCostData = data.general.edges[1].node;
  const footerData = data.general.edges[2].node;
  return (
    <div className={styles.screen}>
      <div className={styles.page}>
        {/* Page header  */}
        <header className={classNames(styles.grid, styles.header)}>
          {bowser.msie ?
            <img className={styles.logo} src={logoPNG}/> :
            <img className={styles.logo} src={logoPNG}/>
          }
          <div className={styles.nav}>
            { headerData.frontmatter.navigation.map((navItem, key) => (
              <Link
                className={styles.navItem}
                key={key}
                to={navItem}
                smooth={true}>
                {navItem}
              </Link>)
            )}
          </div>
        </header>

        {/* Landing */}
        <section className={styles.grid}>
          <img src={nose} className={styles.headerImg}></img>
          <div className={styles.headerRight}>
            <h2 className={styles.subtitle}>{headerData.frontmatter.dateLoc}</h2>
            <h1 className={styles.title}>{headerData.frontmatter.title}</h1>
            <Button text={headerData.frontmatter.button} color="purple" link="http://www.expertisecentrumjournalistiek.nl/agenda/19-juni-2018-de-grote-expertisedag-nieuwe-media/"/>
            { headerData.frontmatter.details.map((detail, key) => {
              return (<div className={styles.crumb} key={key}>
                <p className={styles.crumbText}>{detail}</p>
              </div>)
            })}
          </div>
          <div className={styles.landingText} dangerouslySetInnerHTML={{ __html: headerData.html }}></div>
        </section>

        {/* Speakers */}
        <section className={styles.grid} name={headerData.frontmatter.navigation[0]}>
          <div className={styles.grid24}>
            <Marquee title="Sprekers"/>
          </div>
          { data.speakers.edges.map((speaker, key) => {
            return (<div className={styles.grid24} key={key}>
              <Sheet speaker={speaker}/>
            </div>);
          })}
        </section>

        {/* CaseStudies */}
        <section className={styles.grid} name={headerData.frontmatter.navigation[1]}>
          <div className={styles.grid24}>
            <Marquee title="Case studies"/>
          </div>
          { data.caseStudies.edges.map((caseStudy, key) => {
            return (<div className={styles.grid6} key={key}>
              <Card data={caseStudy} key={key}/>
            </div>);
          })}
        </section>

        {/* Viewpoints */}
        <section className={classNames(styles.grid, styles.gridPaddingLarge)} name={headerData.frontmatter.navigation[2]}>
          <div className={styles.grid24}>
            <Marquee title="Debat"/>
          </div>
          { data.viewpoints.edges.map((viewpoint, key) => {
            return (<div className={styles.grid6} key={key}>
              <Card data={viewpoint} key={key}/>
            </div>);
          })}
        </section>

        {/* Agenda en Twitter */}
        {/* <section className={styles.grid} name={headerData.frontmatter.navigation[2]}>
          <div className={styles.grid24}>
            <Marquee title="Agenda"/>
          </div>
          <div className={styles.grid12}>
            { data.agenda.edges.map((event, key) => {
              return (
                <ListItem data={event} key={key}/>
              );
            })}
            <Button text="Export als iCal" alternative="true" link={generateCalendar(data.agenda.edges)} download={'calendar-genm18.ics'}/>
          </div>
          <div className={classNames(styles.grid12, styles.twitter)}>
            <Timeline
              dataSource={{
                sourceType: 'widget',
                widgetId: '986523764660883456'
              }}
              options={{
                height: '600',
                chrome: 'noheader nofooter noscrollbar transparent',
                borderColor: '#d7bda5',
                linkColor: '#5E358C',
                dnt: 'true', // Don't collect or use any data from our site.
                omitScript: 1 // Really, well, don't do anything. Disables updates.
              }}
            />
          </div>
        </section> */}


        {/* Location and costs */}
        <section className={classNames(styles.grid, styles.location)} name={headerData.frontmatter.navigation[3]}>
          <div className={classNames(styles.grid12, styles.map)}>
            <Map
              isMarkerShown
              apiKey={locCostData.frontmatter.locationApiKey}
              zoom={parseFloat(locCostData.frontmatter.locationZoom)}
              location={{
                lat: parseFloat(locCostData.frontmatter.location[0]),
                lng: Number(locCostData.frontmatter.location[1])}}
            />
          </div>
          <div className={classNames(styles.grid12, styles.costs)}>
            <Marquee title="Locatie & Kosten &" secundary={true} />
            <div dangerouslySetInnerHTML={{ __html: locCostData.html }}></div>
          </div>
        </section>


      {/* Footer  */}
        <section className={classNames(styles.grid, styles.footer)}>
          <div className={classNames(styles.grid12, styles.affiliates)}>
            <h3 className={styles.affiliatesHeader}>Organisatie</h3>
            { footerData.frontmatter.logosOrganisatie.map((logo, key) => {
              return (<div className={styles.affiliateLogo} key={key}>
                <Img sizes={logo.childImageSharp.sizes} />
              </div>);
            })}
            <h3 className={styles.affiliatesHeader}>Ondersteund door</h3>
            { footerData.frontmatter.logosOndersteuning.map((logo, key) => {
              return (<div className={styles.affiliateLogo} key={key}>
                <Img sizes={logo.childImageSharp.sizes} />
              </div>);
            })}
          </div>
          <div className={classNames(styles.grid12, styles.footerInfo)} dangerouslySetInnerHTML={{__html: footerData.html}} />
        </section>
      </div>

      <div className={classNames(styles.centerer)}>
        <Dialog button="Bestellen" text={headerData.frontmatter.dialog} buttonLink="http://www.expertisecentrumjournalistiek.nl/agenda/19-juni-2018-de-grote-expertisedag-nieuwe-media/"/>
      </div>

    </div>);
};

export default IndexPage

export const query = graphql`
  query indexQuery {
    general: allMarkdownRemark(
      filter: {id: {regex: "//home/general//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
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
            location
            locationZoom
          }
          html
        }
      }
    }
    speakers: allMarkdownRemark(
      filter: {id: {regex: "//home/speakers//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          html
        }
      }
    }
    caseStudies: allMarkdownRemark(
      filter: {id: {regex: "//home/casestudies//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            blur
            featuredImage {
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
    viewpoints: allMarkdownRemark(
      filter: {id: {regex: "//home/viewpoints//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            blur
            leader
            quote
            featuredImage {
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
      filter: {id: {regex: "//home/agenda//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            startTime
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
`;

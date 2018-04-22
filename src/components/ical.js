import { Component, Property } from 'immutable-ics'

const generateCalendar = (events) => {
  console.log(events)
  // Calendar setup
  let calendar
  const versionProperty = new Property({ name: 'VERSION', value: 2 })
  const prodid = new Property({
    name: 'PRODID',
    parameters: { VALUE: 'TEXT' },
    value: 'https://www.genm18.nl - met immutable-ics'
  })
  calendar = new Component({ name: 'VCALENDAR' })
  calendar = calendar.pushProperty(versionProperty)
  calendar = calendar.pushProperty(prodid)

  // Events setup and push
  events.map((eventData, key)=>{
    let event
    event = new Component({ name: 'VEVENT' })
    const properties = [
      new Property({
        name: 'DESCRIPTION',
        parameters: { VALUE: 'TEXT' },
        value: eventData.node.frontmatter.description
      }),
      new Property({
        name: 'SUMMARY',
        parameters: { VALUE: 'TEXT' },
        value: eventData.node.frontmatter.title
      }),
      new Property({
        name: 'LOCATION',
        parameters: { VALUE: 'TEXT' },
        value: eventData.node.frontmatter.room
      }),
      new Property({
        name: 'URL',
        parameters: { VALUE: 'TEXT' },
        value: eventData.node.frontmatter.url
      }),
      new Property({
        name: 'DTSTAMP',
        parameters: { VALUE: 'DATETIME' },
        value: new Date()
      }),
      new Property({
        name: 'DTSTART',
        parameters: { VALUE: 'DATETIME' },
        value: new Date(eventData.node.frontmatter.startTime)
      }),
      new Property({
        name: 'DTEND',
        parameters: { VALUE: 'DATETIME' },
        value: new Date(eventData.node.frontmatter.endTime)
      }),
      new Property({
        name: 'UID',
        parameters: { VALUE: 'TEXT' },
        value: (function guid() {
                  function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                      .toString(16)
                      .substring(1);
                  }
                  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
                })()
      })];

    properties.map((value, key)=>{
      event = event.pushProperty(value);
    })

    calendar = calendar.pushComponent(event)

  })
  console.log(calendar.toString());
  // Conversion to file
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(calendar.toString());
}

export default generateCalendar

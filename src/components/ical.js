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
    const description = new Property({
      name: 'DESCRIPTION',
      parameters: { VALUE: 'TEXT' },
      value: eventData.node.frontmatter.description
    })
    const summery = new Property({
      name: 'SUMMARY',
      parameters: { VALUE: 'TEXT' },
      value: eventData.node.frontmatter.title
    })
    const location = new Property({
      name: 'LOCATION',
      parameters: { VALUE: 'TEXT' },
      value: eventData.node.frontmatter.room
    })
    const url = new Property({
      name: 'URL',
      parameters: { VALUE: 'TEXT' },
      value: eventData.node.frontmatter.url
    })
    const createTimeProperty = new Property({
      name: 'DTSTAMP',
      parameters: { VALUE: 'DATETIME' },
      value: new Date()
    })
    const startTimeProperty = new Property({
      name: 'DTSTART',
      parameters: { VALUE: 'DATETIME' },
      value: new Date(eventData.node.frontmatter.startTime)
    })
    const endTimeProperty = new Property({
      name: 'DTEND',
      parameters: { VALUE: 'DATETIME' },
      value: new Date(eventData.node.frontmatter.endTime)
    })
    const uid = new Property({
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
    })
    event = new Component({ name: 'VEVENT' })
    event = event.pushProperty(description);
    event = event.pushProperty(summery);
    event = event.pushProperty(location);
    event = event.pushProperty(url);
    event = event.pushProperty(createTimeProperty);
    event = event.pushProperty(startTimeProperty);
    event = event.pushProperty(endTimeProperty);
    event = event.pushProperty(uid);
    calendar = calendar.pushComponent(event)
  })
  console.log(calendar.toString());
  // Conversion to file
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(calendar.toString());
}

export default generateCalendar

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { DateTime } from 'luxon'

const parseFormatList = ['ha', 'hha', 'h:mm', 'h:mma', 'hh:mma']

const parseArgv = argv => {
  if (!isNaN(argv)) {
    const unixTime = DateTime.fromMillis(parseFloat(argv))

    if (!unixTime.invalidReason) {
      return unixTime
    }
    console.log('failed unixtest', unixTime)
  }

  const parsedTimeList = parseFormatList
    .map(f => DateTime.fromFormat(argv, f))
    .filter(dt => !dt.invalidReason)

  if (parsedTimeList.length > 0) {
    return parsedTimeList[0]
  }

  console.log('failed isotest')

  return DateTime.local()
}

const pathname = sessionStorage.redirect || ''

const decodedPathname = decodeURI(pathname)

const argv = decodedPathname.substr(1)

console.log(argv)

const inputTime = parseArgv(argv)

console.log(inputTime)

console.log(parseFloat(argv))

const outputTime = inputTime.toFormat('hh:mma Z')

window.document.title = outputTime

if (inputTime.toMillis() !== parseFloat(argv)) {
  window.history.replaceState(null, null, '/' + inputTime.toMillis().toString())
}

ReactDOM.render(<App showTime={outputTime} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()

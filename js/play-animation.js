import $ from 'jquery'
import last from 'lodash.last'
import Tock from 'tocktimer'

function handleChar (obj, replayChars) {
  switch(obj.key) {
    case 'Backspace':
      let char = replayChars.pop()
      if (char.includes('</span>')) {
        replayChars.pop()
      } else {
        if (last(replayChars).includes('<span')) {
          replayChars.pop()
        }
      }
      break
    case 'Enter': replayChars.push('\n'); break
    default: replayChars.push(obj.key); break
  }
}

function handleSpanWrapStart (obj, replayChars) {
  replayChars.push(`<span id=${obj.spanId}>`)
}

function handleSpanWrapEnd (obj, replayChars) {
  replayChars.push('</span>')
}

export default function playAnimation (selector, json) {
  var $element = $(selector)
  $element.html('')
  var json = json.slice(), replayChars = []
  var timeElapsed = last(json).ms
  var inSpan = false

  return new Promise((resolve, reject) => {
    var timer = new Tock({
      countdown: true,
      interval: 10,
      callback: () => {
        var currentMs = timeElapsed - timer.lap()
        if (json[0] && currentMs > json[0].ms) {
          let obj = json.shift()

          console.log('replayChars: ', replayChars)

          switch (obj.eventType) {
            case 'keydown':
              handleChar(obj, replayChars); break
            case 'spanWrapStart':
              handleSpanWrapStart(obj, replayChars); break
            case 'spanWrapEnd':
              handleSpanWrapEnd(obj, replayChars); break
          }

          $element.html(replayChars.join(''))
        }
      },
      complete: resolve
    })

    timer.start(timeElapsed)
  })
}

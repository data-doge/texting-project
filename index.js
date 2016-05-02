import $ from 'jquery'
import KeystrokeRecorder from './../npm/keystroke-recorder/index.js'
import jsonMarkup from 'json-markup'
import copy from 'copy-to-clipboard'
import loop from 'raf-loop'
import Tock from 'tocktimer'

var keystrokeRecorder = new KeystrokeRecorder({
  omittedKeys: ['Tab', 'Meta', 'Control', 'Alt', 'Shift']
})

$('#record').click(function () {
  $('#record-pad').val('')
  keystrokeRecorder.record()
  $(this).hide()
  $('#stop').show()
  $('#recording-indicator').show()
  $('#record-pad').focus()
})

$('#stop').click(function () {
  $('#record-pad').val('')
  keystrokeRecorder.stop()
  $(this).hide()
  $('#record').show()
  $('#recording-indicator').hide()
  var json = keystrokeRecorder.json
  var jsonFormatted = jsonMarkup(json)
  $('#json-data').html(jsonFormatted)

  // clear replay pad
  $('#replay-pad').val('')
  var replayChars = []

  var timer = new Tock({
    countdown: true,
    interval: 10,
    callback: function () {
      var currentMs = keystrokeRecorder.timeElapsed() - timer.lap()
      if (json[0] && currentMs > json[0].ms) {
        var obj = json.shift()
        if (obj.key === 'Backspace') {
          replayChars.pop()
        } else if (obj.key === 'Enter') {
          replayChars.push('\n')
        } else {
          replayChars.push(obj.key)
        }
        $('#replay-pad').val(replayChars.join(''))
      }
    }
  })

  timer.start(keystrokeRecorder.timeElapsed())
})

$('#copy-to-clipboard-btn').click(() => {
  var json = $('#json-data').text()
  copy(json)
})

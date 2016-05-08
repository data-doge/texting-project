import $ from 'jquery'
// import KeystrokeRecorder from 'keystroke-recorder'
import KeystrokeRecorder from './../npm/keystroke-recorder/index.js'

import jsonMarkup from 'json-markup'
import copy from 'copy-to-clipboard'
import loop from 'raf-loop'
import Tock from 'tocktimer'
import exampleJSON from './example-json/i-miss-u.js'

import playAnimation from './js/play-animation.js'

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

  $('#replay').click()
})

$('#replay').click(function () {
  $('#replay').hide()
  $('#replaying-indicator').show()
  keystrokeRecorder.replay('#replay-pad').then(() => {
    $('#replay').show()
    $('#replaying-indicator').hide()
  })
})

$('#copy-to-clipboard-btn').click(() => {
  var json = $('#json-data').text()
  copy(json)
})

// $('#see-animation-example-link').click((e) => {
//   e.preventDefault()
  $('#record-pane').hide()
  $('#animation-example-pane').show()
// })

$('#play-animation-example').click(() => {
  $('#play-animation-example').hide()
  $('#playing-animation-indicator').show()
  playAnimation('#animation-example-text', exampleJSON).then(() => {
    $('#play-animation-example').show()
    $('#playing-animation-indicator').hide()
  })
})

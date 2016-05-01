import keystrokeRecorder from './../npm/keystroke-recorder/index.js'
import json2html from 'json-to-html'
import jsonMarkup from 'json-markup'
import $ from 'jquery'

$('#record').click(() => {
  $('#record-pad').val('')
  keystrokeRecorder.record()
})

$('#stop').click(() => {
  $('#record-pad').val('')
  keystrokeRecorder.stop()
  var json = keystrokeRecorder.json
  var jsonFormatted = jsonMarkup(json)
  $('#json-data').html(jsonFormatted)
})

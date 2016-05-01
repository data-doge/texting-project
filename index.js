import $ from 'jquery'
import keystrokeRecorder from './../npm/keystroke-recorder/index.js'
import jsonMarkup from 'json-markup'
import copy from 'copy-to-clipboard'

$('#record').click(function () {
  $('#record-pad').val('')
  keystrokeRecorder.record()
  $(this).hide()
  $('#stop').show()
  $('#recording-indicator').show()
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
})

$('#copy-to-clipboard-btn').click(() => {
  var json = $('#json-data').text()
  copy(json)
})

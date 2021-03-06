import $ from 'jquery'
import TWEEN from 'tween.js'
import Color from 'color'

requestAnimationFrame(function animate (ms) {
  requestAnimationFrame(animate)
  TWEEN.update(ms)
})

export default [
  {
    eventType: 'keydown',
    keyCode: 72,
    key: "h",
    ms: 1008
  },
  {
    eventType: 'keydown',
    keyCode: 73,
    key: "i",
    ms: 1586
  },
  {
    eventType: 'keydown',
    keyCode: 188,
    key: ",",
    ms: 2038
  },
  {
    eventType: 'keydown',
    keyCode: 32,
    key: " ",
    ms: 2206
  },
  {
    eventType: 'spanWrapStart',
    spanId: 'i-miss-u',
    ms: 2206
  },
  {
    eventType: 'animation',
    callback: () => {
      var hsl = {h: 310, s: 100, l: 0}
      var tween = new TWEEN.Tween(hsl)
        .to({l: 53}, 11062 - 2206)
        .onUpdate(() => {
          var hslString = Color(hsl).hslString()
          $('#i-miss-u').css('color', hslString)
        })
        .easing(TWEEN.Easing.Quintic.Out)
        .start()
    },
    ms: 2206
  },
  {
    eventType: 'keydown',
    keyCode: 73,
    key: "i",
    ms: 3189
  },
  {
    eventType: 'keydown',
    keyCode: 32,
    key: " ",
    ms: 3412
  },
  {
    eventType: 'keydown',
    keyCode: 77,
    key: "m",
    ms: 3700
  },
  {
    eventType: 'keydown',
    keyCode: 73,
    key: "i",
    ms: 4124
  },
  {
    eventType: 'keydown',
    keyCode: 83,
    key: "s",
    ms: 4409
  },
  {
    eventType: 'keydown',
    keyCode: 83,
    key: "s",
    ms: 4748
  },
  {
    eventType: 'keydown',
    keyCode: 32,
    key: " ",
    ms: 4994
  },
  {
    eventType: 'keydown',
    keyCode: 89,
    key: "y",
    ms: 5232
  },
  {
    eventType: 'keydown',
    keyCode: 79,
    key: "o",
    ms: 5334
  },
  {
    eventType: 'keydown',
    keyCode: 85,
    key: "u",
    ms: 5488
  },
  {
    eventType: 'spanWrapEnd',
    spanId: 'i-miss-u',
    ms: 5488
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 8668
  },
  {
    eventType: 'animation',
    callback: () => {
      var hsl = {h: 194, s: 100, l: 100}
      var tween = new TWEEN.Tween(hsl)
        .to({l: 80}, 12012 - 8868)
        .onUpdate(() => {
          var hslString = Color(hsl).hslString()
          $('body').css('background', hslString)
        })
        .easing(TWEEN.Easing.Quintic.In)
        .start()
    },
    ms: 8868
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 9234
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 9397
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 9562
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 9716
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 9887
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 10081
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 10392
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 10546
  },
  {
    eventType: 'keydown',
    keyCode: 8,
    key: "Backspace",
    ms: 11062
  },
  {
    eventType: 'animation',
    callback: () => {
      var hsl = {h: 194, s: 100, l: 80}
      var tween = new TWEEN.Tween(hsl)
        .to({l: 100}, 18000 - 12012)
        .onUpdate(() => {
          var hslString = Color(hsl).hslString()
          $('body').css('background', hslString)
        })
        .easing(TWEEN.Easing.Quintic.Out)
        .start()
    },
    ms: 12012
  },
  {
    eventType: 'keydown',
    keyCode: 72,
    key: "h",
    ms: 12012
  },
  {
    eventType: 'keydown',
    keyCode: 79,
    key: "o",
    ms: 12317
  },
  {
    eventType: 'keydown',
    keyCode: 87,
    key: "w",
    ms: 12376
  },
  {
    eventType: 'keydown',
    keyCode: 32,
    key: " ",
    ms: 12782
  },
  {
    eventType: 'keydown',
    keyCode: 65,
    key: "a",
    ms: 12850
  },
  {
    eventType: 'keydown',
    keyCode: 82,
    key: "r",
    ms: 12922
  },
  {
    eventType: 'keydown',
    keyCode: 69,
    key: "e",
    ms: 12998
  },
  {
    eventType: 'keydown',
    keyCode: 32,
    key: " ",
    ms: 13141
  },
  {
    eventType: 'keydown',
    keyCode: 89,
    key: "y",
    ms: 13613
  },
  {
    eventType: 'keydown',
    keyCode: 79,
    key: "o",
    ms: 13690
  },
  {
    eventType: 'keydown',
    keyCode: 85,
    key: "u",
    ms: 13843
  },
  {
    eventType: 'keydown',
    keyCode: 191,
    key: "?",
    ms: 14591
  },
  {
    eventType: 'keydown',
    keyCode: 13,
    key: "Enter",
    ms: 19476
  }
]

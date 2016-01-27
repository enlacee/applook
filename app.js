var app = require('app')
var BrowserWindow = require('browser-window')
var ipc = require('ipc')

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 500,
    height: 500
  })
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
  mainWindow.openDevTools()

  var prefsWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  })
  prefsWindow.loadUrl('file://' + __dirname + '/window.html')

  ipc.on('toggle-prefs', function () {
    if (prefsWindow.isVisible())
      prefsWindow.hide()
    else
      prefsWindow.show()
  })
})


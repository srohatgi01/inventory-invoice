const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        closable: true,
        icon: 'assets/bds-icon.ico',
        title: true,
        fullscreenable: true,
    });
    mainWindow.loadFile('html/index.html')
})
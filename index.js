const { app, BrowserWindow } = require('electron')
const config = require('./config.js')
const { createTables } = require('./backend')

let mainWindow
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            // enableRemoteModule: true,
            contextIsolation: false
        },
        icon: 'assets/bds-icon.ico',
        title: true,
        fullscreenable: true,
    });
    mainWindow.loadFile('html/index.html')
})

createTables()

config.all('SELECT * FROM clients', (err, rows) => { err ? console.log(err) : console.log(rows) })
const electron = require('electron')
const {app} = electron
const {BrowserWindow} = electron

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800
  })
  // mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL(`http://localhost:8080`)
  mainWindow.webContents.openDevTools()
  BrowserWindow.addDevToolsExtension('/Users/zhaowei/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('active', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

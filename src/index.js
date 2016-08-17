const electron = require('electron');
const app = electron.app;
const { join } = require('path');

let mainWindow;

function activate() {
  const win = new electron.BrowserWindow({
    width: 600,
    height: 400,
  });

  win.loadURL(`file://${join(__dirname, '/index.html')}`);
  win.openDevTools();
}

app.on('activate', activate);
app.on('ready', activate);

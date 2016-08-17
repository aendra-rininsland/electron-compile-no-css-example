const electron = require('electron');
const app = electron.app;

let mainWindow;

function activate() {
  const win = new electron.BrowserWindow({
    width: 600,
    height: 400,
  });

  win.loadURL(`file://${__dirname}/renderer/index.html`);

  win.openDevTools();
}

app.on('activate', activate);
app.on('ready', activate);

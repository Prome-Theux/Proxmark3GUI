const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadURL('data:text/html;charset=UTF-8,<h1>你好世界</h1>');
}

app.whenReady().then(() => {
  console.log('Hello from Electron 你好世界');
  createWindow();
}); 
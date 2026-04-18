const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    // The icon for the window top-left corner
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL('https://lms-adeeb-technology-lab.vercel.app/');
}

// THIS IS THE PART YOU ASKED ABOUT
app.whenReady().then(() => {
  // Add this line here. Use the exact appId from your package.json
  app.setAppUserModelId("com.adeebtechlab.lms");

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
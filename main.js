const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

function createWindow() {
  const iconPath = path.join(__dirname, 'assets', 'icon.ico');
  const appIcon = nativeImage.createFromPath(iconPath);

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    // Using nativeImage with .ico for best quality across all sizes
    icon: appIcon,
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
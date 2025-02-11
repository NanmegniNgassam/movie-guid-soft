const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Movie Guid',
        autoHideMenuBar: true,
        minHeight: 800,
        minWidth: 1000,
        icon: './public/assets/logo.png'
    });

    mainWindow.maximize()

    const startUrl = url.format({
        pathname: path.join(__dirname, './public/build/index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL(startUrl)
}


app.whenReady().then(createMainWindow)
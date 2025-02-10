const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');


function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Movie Guid',
        width: 3000,
        height: 1200,
        autoHideMenuBar: true,
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, './index.html'),
    });

    mainWindow.loadFile(startUrl);
}


app.whenReady().then(createMainWindow)
/**
 * Created by herrb on 25.10.2016.
 */
const {app, BrowserWindow, ipcMain} = require('electron');
const Debug = require('debug');
const mainDebug = Debug('Main');
const ipcDebug = Debug('ipcMain');

app.on('ready', () => {
    mainDebug(`App is ready.`);
    const {screen} = require('electron');
    const display = screen.getPrimaryDisplay();
    mainDebug(`Primary Display: ${JSON.stringify(display.workAreaSize)}`);
    const Window = new BrowserWindow({width: display.workAreaSize.width, height: display.workAreaSize.height});
    Window.on('closed', () => {
        app.quit();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

ipcMain.on('quit', (event, arg) => {
    ipcDebug(arg ? `Received quit event with code ${arg}.` : `Received quit event.`);
    if (arg){
        app.exit(arg);
    } else {
        app.quit();
    }
});
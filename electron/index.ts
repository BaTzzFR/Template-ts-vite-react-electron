import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';

let mainWindow: BrowserWindow;

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title: 'Template TS + Vite + React + Electron',
        width: 800,
        height: 600,
        show: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#242424',
            symbolColor: '#FFFFFF',
            height: 40,
        },
        webPreferences: {
            devTools: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            nodeIntegrationInSubFrames: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            disableBlinkFeatures: 'Auxclick',
        },
    });

    ipcMain.on('change-title-window',(event, title: string) => {
        mainWindow.setTitle(title);
    });

    mainWindow.on('ready-to-show',() => {
        mainWindow.show();
    });

    mainWindow.loadURL('http://localhost:5173');
};

app.whenReady().then(() => {
    createMainWindow();
});
import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electron', {
    setTitle: (title: string) => ipcRenderer.send('change-title-window', title),
});
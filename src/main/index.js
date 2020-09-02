const { app, BrowserWindow } = require("electron");
const path = require('path');
const URL = require('url');

// 软件窗口对象
let mainWindow = null;
let url = '';

if (process.env.NODE_ENV !== 'prod') {
    url = 'http://localhost:' + process.env.ELECTRON_WEBPACK_WDS_PORT;
} else {
    url = URL.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file'
    })
}

app.on("ready", function () {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    // 加载初始界面
    mainWindow.loadURL(url);

    // 打开开发者工具。
    mainWindow.webContents.openDevTools();

    // 关闭窗口
    mainWindow.on("closed", () => {
        mainWindow = null;
    });

});

// 当全部窗口关闭时退出
app.on("window-all-closed", () => {
    app.quit();
});


// 主进程添加的消息处理代码
let { ipcMain } = require('electron')
ipcMain.on('msg_renderUsers', (event, param1, param2) => {
    console.log("param1：", param1);
    console.log("param2：", param2);
    param2.age += 100
    mainWindow.webContents.send('msg_main2View', param1, param2)
})
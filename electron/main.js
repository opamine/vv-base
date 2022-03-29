const { app, BrowserWindow, Menu: _Menu, Notification } = require('electron');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

// 在windows OS 隐藏菜单
// Menu.setApplicationMenu(null);

function showNotification({ title = '通知', body = '通知内容' }) {
  new Notification({ title, body }).show();
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './scripts/preload.js'),
      // 开启node
      nodeIntegration: true,
      // 取消上下文隔离
      contextIsolation: false,
      // 开启remote
      enableRemoteModule: true,
    },
  });

  // win.loadFile('./dist/index.html');
  win.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'file://' + path.join(__dirname, '../dist/index.html')
  );

  if (NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();
  showNotification({
    title: '您好！',
    body: '主进程启动成功!',
  });

  // app 被激活，如果没有打开的窗口，则打开一个新窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 窗口全部关闭以后 mac OS 需要手动退出 app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

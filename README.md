## 说明
该cli用于不需要Vue/React/Angular框架，但需要Webpack集成的Electron项目。

使用方式：
```
git clone git@github.com:ruyuejun/cli-electron-webpack.git
cd electron-webpack
npm i
npm run serve
```

## 目录简单说明
```
├── .vscode                     // vscode的Electron开发环境配置
│   ├── default.json
├── dist                        // 打包目录
├── src                         // 源码目录
│   ├── common                  // 主进程与渲染进程通用目录
│   ├── main                    // 主进程目录
│   ├── renderer                // 渲染进程目录
│   ├── static                  // 不会被webpack打包的目录
```
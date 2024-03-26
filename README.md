# 音樂專輯管理系統

項目簡介

音樂專輯管理系統是一個基於Angular框架開發的前端應用程序，它允許用戶瀏覽、管理和播放音樂專輯及其曲目。 此應用程式透過提供一個清晰、直觀的使用者介面，讓音樂管理變得簡單便捷

  ![螢幕擷取畫面 2024-03-22 111853](https://github.com/9270123a/my-music-player/assets/157206678/0a178e47-6c63-4460-b7ac-8fa85e8a2521)

## 功能特點

專輯瀏覽：用戶可以查看所有可用的音樂專輯，包括專輯封面、曲目清單和藝術家資訊。

音樂播放：整合音樂播放器，支援線上播放專輯中的音樂曲目，包括播放、暫停、跳過等功能。

響應式佈局：採用響應式設計，確保應用在手機、平板和桌面端上都能提供良好的使用者體驗。




## 技術棧

Angular：利用Angular框架構建應用的主體和組件。

TypeScript：使用TypeScript進行應用開發，提高代碼的可靠性和維護性。

CSS：自定義樣式和佈局，以實現響應式介面和美觀的視覺效果。



## 項目結構


『`bash
   src/
|-- app/
| |-- app.component.css // 應用的全域樣式文件
| |-- app.component.html // 應用的主組件範本文件
| |-- app.component.spec.ts // 主組件的單元測試文件
| |-- album-service.service.ts // 專輯服務，用於處理專輯資料的載入和管理
| |-- album-service.service.spec.ts// 專輯服務的單元測試文件
| |-- app.component.ts // 應用的根組件
| |-- app.module.ts // 應用的根模塊，定義了應用中使用的組件和服務
| |-- app-routing.module.ts // 應用的路由模塊，定義了路由配置
| |-- app.routes.ts // 定義應用中的路由路徑
| |-- app.config.ts // 應用的設定文件，可用於定義全域變數和設定項
| |-- app.config.server.ts // 伺服器端配置，適用於需要與後端服務互動的場景

```


## 開發環境搭建

克隆項目到本地：

```bash
git clone <項目Git倉庫位址>

```
## 安裝項目依賴

```bash
cd <項目名稱>
npm install
```
## 啟動開發服務器


```bash
ng serve

```
在瀏覽器中開啟 http://localhost:4200/ 查看應用程式。
## 貢獻指南

歡迎任何形式的貢獻，無論是新功能、代碼改進還是問

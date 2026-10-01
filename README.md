# 🥕 Orange Rabbit 橘兔英文教室 — 官方靜態網站

> **Slogan**: *Hop into Confident English!* 陪你輕鬆跳出英文舒適圈，自信開口說。  
> 專為個人獨立英文家教打造的高質感響應式（RWD）多頁靜態網站，專為 **GitHub Pages** 最佳化設計。

---

## 🌟 網站特色與架構

1. **五大多頁式結構**：
   - 🏠 [index.html](file:///D:/專案設計/英文教室靜態網頁設計/index.html)：品牌形象 Hero、三大教學亮點、**首頁程度快測小工具**、精選課程、學員見證與 CTA。
   - 👩‍🏫 [about.html](file:///D:/專案設計/英文教室靜態網頁設計/about.html)：師資背景、國際 TESOL/CELTA 證照、TOEIC 990 實績與「三階自然輸出」教學哲學。
   - 📚 [courses.html](file:///D:/專案設計/英文教室靜態網頁設計/courses.html)：生活英語、職場商務、檢定專案與 1-on-1 客製方案，含堂數包透明費用對比與上課 4 步驟。
   - ❓ [faq.html](file:///D:/專案設計/英文教室靜態網頁設計/faq.html)：上課設備、請假補課、教材提供與退費機制的手風琴折疊問答。
   - 📩 [contact.html](file:///D:/專案設計/英文教室靜態網頁設計/contact.html)：LINE 官方帳號綠色醒目卡片、線上預約試聽表單（自動帶入測驗評估結果）。

2. **核心互動：程度快測小工具 (`js/quiz.js`)**：
   - 4 題真實日常與職場情境互動，即時動態計分。
   - 智慧產出學習痛點剖析與推薦方案。
   - 支援「一鍵將測驗結果帶入預約表單」，大幅提升轉換率。
   - **未來擴充性**：模組化設計，未來可無縫升級為多題型（聽力、閱讀、語法）獨立專業測驗系統。

3. **零打包建置（Zero Build Step）**：
   - 原生 HTML5 + Tailwind CSS (CDN) + Vanilla JS。
   - 所有資源均採相對路徑，無須安裝 Node.js 或執行任何 build 動作，直接推上 GitHub 即可在 GitHub Pages 上線！

---

## 🚀 如何部署至 GitHub Pages（超詳細步驟）

### 步驟 1：建立 GitHub Repository
1. 登入 [GitHub](https://github.com/)。
2. 點擊右上角 **+** ➔ **New repository**。
3. 輸入 Repository 名稱（例如：`orange-rabbit-english`），設定為 **Public**。
4. 點擊 **Create repository**。

### 步驟 2：將本機專案推送至 GitHub
在專案根目錄（`D:\專案設計\英文教室靜態網頁設計`）開啟 PowerShell 或 Terminal，執行以下指令：

```bash
git init
git add .
git commit -m "feat: complete Orange Rabbit website with quiz widget"
git branch -M main
git remote add origin https://github.com/<你的GitHub帳號>/<你的Repository名稱>.git
git push -u origin main
```

### 步驟 3：開啟 GitHub Pages
1. 進入該 GitHub 專案頁面，點擊上方選單的 **Settings**。
2. 在左側選單點擊 **Pages**。
3. 在 **Build and deployment** 下方的 **Source** 選擇 **Deploy from a branch**。
4. **Branch** 選擇 `main`，資料夾選擇 `/ (root)`，點擊 **Save**。
5. 等待 1~2 分鐘後重新整理頁面，上方就會出現你的網站專屬網址：  
   👉 `https://<你的GitHub帳號>.github.io/<你的Repository名稱>/`

---

## 💻 本機預覽測試方式

若想在推上 GitHub 前於電腦本機預覽：

- **方法 1（推薦）**：直接雙擊任何 `.html` 檔案（例如 `index.html`），即可用瀏覽器打開。
- **方法 2（使用 VS Code Live Server）**：右鍵點擊 `index.html` 選擇 `Open with Live Server`。
- **方法 3（使用 Python 本地伺服器）**：
  ```powershell
  python -m http.server 8000
  ```
  在瀏覽器開啟 `http://localhost:8000` 即可預覽。

---

## 📂 檔案目錄結構

```text
英文教室靜態網頁設計/
├── index.html         # 首頁 (含程度測驗互動小工具)
├── about.html         # 關於師資與品牌故事
├── courses.html       # 課程方案與費用說明
├── faq.html           # 常見問題 FAQ (手風琴)
├── contact.html       # 預約試聽與 LINE 諮詢
├── DESIGN.md          # 完整設計規範文件
├── README.md          # 部署與專案說明
├── css/
│   └── style.css      # 自訂樣式、Google Fonts 與微動效
└── js/
    ├── main.js        # 導覽列漢堡選單、FAQ 手風琴、表單自動填入
    └── quiz.js        # 程度測驗小工具互動邏輯與動態計分
```

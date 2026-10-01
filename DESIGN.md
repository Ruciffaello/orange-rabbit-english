# Ferryman English 英語教室 — 網站設計規格書 (Design Specification)

> **專案定位**：個人獨立線上英語家教品牌官方網站  
> **發佈環境**：GitHub Pages（純靜態 HTML5 + Tailwind CSS + Vanilla JS）  
> **品牌名稱**：擺渡人英文教室 (Ferryman English)  

---

## 1. 品牌定位與核心理念 (Brand Identity)

- **Slogan**：*Navigate into Confident English! 渡你跨越英語汪洋，自信開口說* 陪你輕鬆跳出英文舒適圈，自信開口說。
- **品牌調性**：親切、活力、專業、不嚴肅，消除學員對「開口說英文」的心理恐慌。
- **目標客群**：
  - 想提升職場口說、商務簡報與外商面試的上班族
  - 準備 TOEIC、IELTS 等國際英檢需要一對一衝刺的高效學習者
  - 想擺脫台式文法、培養自然語感與生活會話的自學者

---

## 2. 視覺系統與風格規範 (Design System)

### 2.1 色彩調色盤 (Color Palette)
- **主色 (Primary Accent)**：活力亮橘 `Orange-500` (`#F97316` / `#FF7A00`) — 代表積極、躍動、溫暖。
- **副色 (Secondary Accent)**：暖陽金黃 `Amber-400` (`#FBBF24`) — 用於高光提示、徽章（Badge）與星等評價。
- **中性色 - 深色 (Dark Slate)**：曜石灰 `Slate-900` (`#0F172A`) 與 `Slate-800` (`#1E293B`) — 內文標準文字、高對比標題與深色區塊。
- **中性色 - 淺色 (Warm Light)**：柔和灰白 `Slate-50` (`#F8FAFC`) 與 純白 (`#FFFFFF`) — 乾淨明亮的閱讀背景。
- **品牌功能色 (Status & Actions)**：
  - LINE 綠：`#06C755`（官方 LINE 專屬 CTA 按鈕）
  - 成功綠：`Emerald-500` (`#10B981`)

### 2.2 字體系統 (Typography)
- **英文字體**：`Poppins`, `Plus Jakarta Sans` 或系統 Sans-Serif
- **中文字體**：`Noto Sans TC`（思源黑體）
- **標題風格**：字重 Bold/ExtraBold，搭配亮橘重點標記

### 2.3 UI 元件風格
- **圓角規格**：大圓角卡片 `rounded-2xl`、按鈕 `rounded-full` 或 `rounded-xl`
- **陰影與層次**：柔和立體投影 `shadow-sm` / `shadow-lg hover:shadow-xl transition-all`
- **圖示風格**：現代線條圖示（Lucide SVG icons）

---

## 3. 網站架構與頁面規劃 (Sitemap)

- **首頁 (`index.html`)**：Hero 視覺區、三大教學亮點、精選方案預覽、程度測驗互動小工具、試聽影音／體驗流程、CTA
- **關於老師 (`about.html`)**：教學背景與證照、創辦 Ferryman English 故事、教學哲學
- **課程方案與費用 (`courses.html`)**：生活口說、商務實戰、檢定衝刺等方案卡片、價格透明化、上課 4 步驟
- **常見問題 (`faq.html`)**：折疊式手風琴（設備需求、請假退費、教材等）
- **預約試聽與聯絡 (`contact.html`)**：預約表單、官方 LINE 一鍵加入、社群資訊

---

## 4. 目錄結構規劃 (GitHub Pages 相容)

```text
英文教室靜態網頁設計/
├── index.html         # 首頁
├── about.html         # 師資與品牌故事
├── courses.html       # 課程方案與費用
├── faq.html           # 常見問題
├── contact.html       # 預約試聽與聯絡
├── css/
│   └── style.css      # 自訂樣式與微調動畫
├── js/
│   ├── main.js        # 導覽列漢堡選單、FAQ 展開手風琴
│   └── quiz.js        # 程度測驗互動邏輯
└── images/            # Logo、吉祥物插圖、教師示意圖
```


/**
 * Ferryman English - Quiz Widget (首頁程度快測小工具)
 * 架構預留日後升級為專業多題型獨立測驗模組 (Extended Quiz Module)
 */

const QUIZ_DATA = [
  {
    id: 1,
    question: "情境題 1：當你遇到外國人問路或同事突然用英文向你請教問題時，你的第一直覺是？",
    desc: "請選擇最貼近你平日真實反應的選項：",
    options: [
      { text: "腦袋一片空白、心跳加速，只能笑笑用單字或比手畫腳應對", score: 1 },
      { text: "腦中開始拼湊中文句子再翻譯成英文，需要思考幾秒才能斷續講出", score: 2 },
      { text: "能大致理解並能用基本句型溝通，但覺得詞彙偏簡單、偶爾會卡詞", score: 3 },
      { text: "能自然切換英文模式並快速回應，但希望用詞更道地精準或更具專業度", score: 4 }
    ]
  },
  {
    id: 2,
    question: "情境題 2：在全英文工作會議、演講或影集中，你的聽力理解狀況是？",
    desc: "關於「即時聽力理解度」：",
    options: [
      { text: "只要語速稍快或有連音就完全抓不到關鍵字，必須看中文字幕", score: 1 },
      { text: "如果對方講得很慢很清楚能聽懂一半，但遇到專用片語或長句容易掉線", score: 2 },
      { text: "日常對話能聽懂 7-8 成，但專業商務討論或檢定長篇演說較吃力", score: 3 },
      { text: "基本無障礙，想進一步掌握英美文化隱喻、幽默感或深層商業溝通策略", score: 4 }
    ]
  },
  {
    id: 3,
    question: "情境題 3：如果要你寫一封全英文商業 Email，或在社交場合介紹自己的專業？",
    desc: "關於「英文組織與書寫/表達能力」：",
    options: [
      { text: "幾乎依賴翻譯軟體整篇直翻，常常不確定文法是否奇怪或失禮", score: 1 },
      { text: "能自己拼寫基礎句子，但常用同樣那幾句公式，且害怕出現台式文法 (Chinglish)", score: 2 },
      { text: "可以完整交代事情，但語氣比較平淡單調，想學更有說服力與專業質感的句式", score: 3 },
      { text: "表達已很流暢，重點在提升談判溝通技巧、精準修辭與高階簡報感染力", score: 4 }
    ]
  },
  {
    id: 4,
    question: "目標題 4：未來 3 個月內，你最渴望在 Ferryman English 達成的核心突破是？",
    desc: "幫助我們為你推薦最精準的學習計畫：",
    options: [
      { text: "建立開口自信，敢於出國旅遊自由行、點餐問路不恐懼", target: "基礎生活", score: 1 },
      { text: "擺脫台式文法與中翻英思維，流暢進行日常聊天與社交談話", target: "生活口說", score: 2 },
      { text: "能在職場英文會議主動發言、流暢主持討論或應對外商面試", target: "職場商務", score: 3 },
      { text: "高效突破國際英檢（TOEIC / IELTS 高分）或達成高階商務談判目標", target: "檢定商務衝刺", score: 4 }
    ]
  }
];

const RESULT_PROFILES = {
  beginner: {
    levelCode: "Level A",
    title: "🌱 自信萌芽兔 (Beginner & Confidence)",
    badge: "自信養成期",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    summary: "你的主要瓶頸在於「開口焦慮」與「台式思考轉換時間過長」。這不是你的英文不好，而是缺乏安全無壓力的沉浸式開口環境。",
    strengths: "學習動機強烈，一旦建立核心發音與 20 組常用直覺句型，進步幅度會非常驚人！",
    recommendCourse: "生活英語自由說 (Daily Conversational English)",
    recommendReason: "無壓力 1-on-1 陪伴式引導，從生活場景帶你建立肌肉記憶，告別死背單字。",
    targetParam: "生活英語自由說",
    levelParam: "基礎 (A1-A2)"
  },
  intermediate: {
    levelCode: "Level B",
    title: "⚡ 實戰躍進兔 (Intermediate & Fluency)",
    badge: "流暢突破期",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    summary: "你具備基礎詞彙與文法觀念，但在遇到突發對話或較複雜的主題時，容易卡在「中翻英」的猶豫期，缺乏母語人士的道地片語與語意連結。",
    strengths: "已經有基礎輸入量，只要針對思維慣性做刻意練習，就能快速切換成英文腦！",
    recommendCourse: "職場商務實戰班 (Business & Workplace English)",
    recommendReason: "聚焦職場高頻會議、書信與溝通情境，清除台式英文語病，讓你開口專業又俐落。",
    targetParam: "職場商務實戰班",
    levelParam: "中階 (B1-B2)"
  },
  advanced: {
    levelCode: "Level C",
    title: "🚀 精準領航兔 (Advanced & Mastery)",
    badge: "高階精進期",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    summary: "你的英文已經相當有實力！現在你需要的是「語氣的細膩掌握」、「商務溝通的說服力」以及「國際檢定的高分戰術」。",
    strengths: "理解速度快，能進行高階思維探討，適合挑戰高階商務談判或英檢滿分衝刺。",
    recommendCourse: "高階溝通與檢定衝刺 (Exam Prep & High-Level Speech)",
    recommendReason: "針對 TOEIC / IELTS 或高階外商簡報進行客製化弱點打磨，追求精準與感染力。",
    targetParam: "高階溝通與檢定衝刺",
    levelParam: "中高階 (B2-C1)"
  }
};

let currentQuestionIndex = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-widget-card');
  if (!quizContainer) return;

  renderQuestion();
});

function renderQuestion() {
  const qData = QUIZ_DATA[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / QUIZ_DATA.length) * 100);

  // 更新進度條
  const progressBar = document.getElementById('quiz-progress-bar');
  const progressText = document.getElementById('quiz-progress-text');
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.innerText = `第 ${currentQuestionIndex + 1} 題 / 共 ${QUIZ_DATA.length} 題`;

  // 渲染問題內容
  const questionEl = document.getElementById('quiz-question-title');
  const descEl = document.getElementById('quiz-question-desc');
  const optionsContainer = document.getElementById('quiz-options-container');

  if (questionEl) questionEl.innerText = qData.question;
  if (descEl) descEl.innerText = qData.desc;

  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    qData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start space-x-3 group
        hover:border-orange-500 hover:bg-orange-50/50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500
        ${userAnswers[currentQuestionIndex]?.score === opt.score ? 'border-orange-500 bg-orange-50' : 'border-slate-200 bg-white'}`;
      
      const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
      btn.innerHTML = `
        <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
          ${optionLetter}
        </span>
        <span class="text-slate-700 font-medium text-sm md:text-base leading-relaxed pt-0.5">
          ${opt.text}
        </span>
      `;

      btn.addEventListener('click', () => {
        selectOption(opt);
      });

      optionsContainer.appendChild(btn);
    });
  }

  // 上一步按鈕狀態
  const prevBtn = document.getElementById('quiz-prev-btn');
  if (prevBtn) {
    if (currentQuestionIndex === 0) {
      prevBtn.classList.add('invisible');
    } else {
      prevBtn.classList.remove('invisible');
    }
  }
}

function selectOption(option) {
  userAnswers[currentQuestionIndex] = option;

  // 短暫動畫回饋後前進下一題
  setTimeout(() => {
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showCalculatingState();
    }
  }, 220);
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function showCalculatingState() {
  const quizCard = document.getElementById('quiz-widget-card');
  if (!quizCard) return;

  quizCard.innerHTML = `
    <div class="py-16 text-center space-y-4">
      <div class="inline-block p-4 rounded-full bg-orange-100 text-orange-500 animate-spin">
        <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-slate-800">Ferryman English 正在為你綜合分析語感與學習痛點...</h3>
      <p class="text-slate-500 text-sm">依據對話直覺、聽力理解、職場需求綜合評估中</p>
    </div>
  `;

  setTimeout(() => {
    renderResult();
  }, 900);
}

function renderResult() {
  const quizCard = document.getElementById('quiz-widget-card');
  if (!quizCard) return;

  // 計算平均得分
  const totalScore = userAnswers.reduce((sum, item) => sum + (item.score || 2), 0);
  const avgScore = totalScore / userAnswers.length;

  let profile;
  if (avgScore <= 1.8) {
    profile = RESULT_PROFILES.beginner;
  } else if (avgScore <= 3.0) {
    profile = RESULT_PROFILES.intermediate;
  } else {
    profile = RESULT_PROFILES.advanced;
  }

  // 儲存至 sessionStorage，方便 contact 頁面直接取用
  sessionStorage.setItem('ferryman_quiz_result', JSON.stringify({
    levelCode: profile.levelCode,
    course: profile.recommendCourse,
    score: avgScore.toFixed(1)
  }));

  const contactUrl = `./contact.html?level=${encodeURIComponent(profile.levelParam)}&target=${encodeURIComponent(profile.targetParam)}`;

  quizCard.innerHTML = `
    <div class="p-6 md:p-10 space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border ${profile.badgeColor} mb-2">
            ${profile.levelCode} • ${profile.badge}
          </span>
          <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900">${profile.title}</h3>
        </div>
        <button onclick="resetQuiz()" class="text-sm font-semibold text-slate-500 hover:text-orange-600 transition flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重新測驗
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
          <h4 class="font-bold text-slate-800 flex items-center text-sm md:text-base gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            目前核心痛點剖析
          </h4>
          <p class="text-slate-600 text-sm leading-relaxed">${profile.summary}</p>
        </div>

        <div class="bg-amber-50/70 rounded-2xl p-5 border border-amber-100 space-y-3">
          <h4 class="font-bold text-amber-900 flex items-center text-sm md:text-base gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            你的突破潛力
          </h4>
          <p class="text-amber-800 text-sm leading-relaxed">${profile.strengths}</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-1">
          <div class="text-xs uppercase tracking-wider font-bold text-orange-100">為你推薦的學習方案</div>
          <div class="text-xl font-black">${profile.recommendCourse}</div>
          <div class="text-orange-100 text-sm">${profile.recommendReason}</div>
        </div>
        <a href="${contactUrl}" class="flex-shrink-0 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3.5 rounded-xl shadow hover:bg-orange-50 transition transform hover:-translate-y-0.5">
          <span>帶入結果，預約免費試聽</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div class="text-center pt-2">
        <p class="text-xs text-slate-400">
          💡 此結果為初步評估，在 25 分鐘免費一對一試聽中，老師將為你進行更精準的口說與聽力弱點盤點。
        </p>
      </div>
    </div>
  `;
}

function resetQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  location.reload();
}


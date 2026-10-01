/**
 * Ferryman English - GEPT Level Test (全民英檢文法與單字檢測 Demo 版)
 * 專為獨立 quiz.html 設計，專注評測單字 (Vocabulary) 與文法 (Grammar)
 */

const GEPT_QUESTIONS = [
  {
    id: 1,
    type: "單字題 (Vocabulary) • 初級",
    question: "Although the flight encountered strong turbulence, it still arrived on _______ without any serious delay.",
    options: [
      { text: "clock", isCorrect: false },
      { text: "schedule", isCorrect: true },
      { text: "moment", isCorrect: false },
      { text: "station", isCorrect: false }
    ],
    explanation: "【正確答案：B】「on schedule」為固定片語，表示「按時、準時」。整句意為：雖然班機遇到強烈亂流，仍按時抵達無嚴重延誤。"
  },
  {
    id: 2,
    type: "文法題 (Grammar) • 初級",
    question: "Emily _______ in Taipei for over five years, so she knows the city and its MRT system very well.",
    options: [
      { text: "lived", isCorrect: false },
      { text: "has lived", isCorrect: true },
      { text: "is living", isCorrect: false },
      { text: "will live", isCorrect: false }
    ],
    explanation: "【正確答案：B】句中有「for over five years」，表示從過去持續到現在的狀態，應用現在完成式（has/have + p.p.）。"
  },
  {
    id: 3,
    type: "單字題 (Vocabulary) • 中級",
    question: "The director asked the project team to _______ the client proposal carefully before sending out the quotation.",
    options: [
      { text: "neglect", isCorrect: false },
      { text: "review", isCorrect: true },
      { text: "disguise", isCorrect: false },
      { text: "celebrate", isCorrect: false }
    ],
    explanation: "【正確答案：B】「review」意為「仔細審查、複查」；neglect (忽視)、disguise (偽裝)。依句意需在報價前仔細審查提案。"
  },
  {
    id: 4,
    type: "文法題 (Grammar) • 中級",
    question: "The comprehensive marketing report _______ was compiled by Teacher Peter received unanimous praise from the board.",
    options: [
      { text: "who", isCorrect: false },
      { text: "which", isCorrect: true },
      { text: "whose", isCorrect: false },
      { text: "what", isCorrect: false }
    ],
    explanation: "【正確答案：B】先行詞為「The comprehensive marketing report (行銷報告)」，指事物，且在關係子句中當主詞，故使用關係代名詞「which」（或 that）。"
  },
  {
    id: 5,
    type: "文法題 (Grammar) • 中級",
    question: "To prevent electronic interference, all mobile devices must _______ during takeoff and landing.",
    options: [
      { text: "be turned off", isCorrect: true },
      { text: "turn off", isCorrect: false },
      { text: "being turned off", isCorrect: false },
      { text: "have turned off", isCorrect: false }
    ],
    explanation: "【正確答案：A】主詞「mobile devices (行動裝置)」與動詞 turn off 為被動關係（被關閉），情態助動詞 must 後接原形被動式「be + p.p.」。"
  },
  {
    id: 6,
    type: "單字題 (Vocabulary) • 中高級",
    question: "Due to the economic uncertainty, the executive board decided to _______ non-essential operational expenses this quarter.",
    options: [
      { text: "curtail", isCorrect: true },
      { text: "originate", isCorrect: false },
      { text: "tolerate", isCorrect: false },
      { text: "hesitate", isCorrect: false }
    ],
    explanation: "【正確答案：A】「curtail」為中高級進階單字，意為「削減、縮減（開支/預算）」；originate (起源)、tolerate (容忍)。"
  },
  {
    id: 7,
    type: "文法題 (Grammar) • 中高級",
    question: "If our engineering team _______ the system glitch yesterday, the website wouldn't be crashing right now.",
    options: [
      { text: "fixed", isCorrect: false },
      { text: "had fixed", isCorrect: true },
      { text: "has fixed", isCorrect: false },
      { text: "would fix", isCorrect: false }
    ],
    explanation: "【正確答案：B】混合假設語氣（與過去事實相反的條件句）：昨日（yesterday）若有修復好，if 子句須用「had + p.p.」。"
  },
  {
    id: 8,
    type: "文法題 (Grammar) • 中高級",
    question: "_______ by the sudden technical questions raised by the client, the junior presenter took a deep breath before responding.",
    options: [
      { text: "Surprising", isCorrect: false },
      { text: "Surprised", isCorrect: true },
      { text: "Having surprised", isCorrect: false },
      { text: "Surprise", isCorrect: false }
    ],
    explanation: "【正確答案：B】分詞構句。主詞 the junior presenter 感到驚訝，為被動心理感受狀態（was surprised 簡化為過去分詞 Surprised）。"
  }
];

const GEPT_LEVEL_PROFILES = {
  elementary: {
    levelTag: "全民英檢初級 (GEPT Elementary) / CEFR A2",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    title: "🌱 基礎養成階段 (建議加強核心句構與日常單字)",
    description: "您目前具備基礎的單字辨識力，但在遇到完成式、被動語態或稍具長度的從屬子句時，容易憑直覺猜測。此階段最需要的是「建立英語核心骨幹架構」，不再依賴零碎單字拼湊。",
    recommendCourse: "生活英語自由說 (Daily Conversational English)",
    targetParam: "生活英語自由說",
    levelParam: "全民英檢初級 (A2)"
  },
  intermediate: {
    levelTag: "全民英檢中級 (GEPT Intermediate) / CEFR B1",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    title: "⚡ 中級突破階段 (具備穩固文法，正處於流暢度跳躍期)",
    description: "恭喜！您具備扎實的高中文法與常用單字基礎，能理解多數商務與生活語境。目前主要的瓶頸在於「高階詞彙精準度」以及「開口時的中翻英轉換速度」。只要打通直覺思維，就能大幅提升職場競爭力！",
    recommendCourse: "職場商務實戰班 (Business & Workplace English)",
    targetParam: "職場商務實戰班",
    levelParam: "全民英檢中級 (B1)"
  },
  highIntermediate: {
    levelTag: "全民英檢中高級 (GEPT High-Intermediate) / CEFR B2+",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    title: "🚀 高階精通階段 (具備優異語感，直攻托福/雅思/高階溝通)",
    description: "非常出色！您在進階假設語氣、分詞構句與正式學術書面單字上展現了極高的準確率，已達大學外語水準或跨國專業人士要求。現在您可以直接挑戰托福破百、雅思 7.5+，或精修高階商務談判說服力！",
    recommendCourse: "托福 / 雅思專案 或 高階顧問 1-on-1 VIP",
    targetParam: "托福或雅思檢定專案",
    levelParam: "全民英檢中高級 (B2+)"
  }
};

let currentQIdx = 0;
let userSelections = new Array(GEPT_QUESTIONS.length).fill(null);

document.addEventListener('DOMContentLoaded', () => {
  const quizApp = document.getElementById('gept-quiz-app');
  if (!quizApp) return;

  renderGeptQuestion();
});

function renderGeptQuestion() {
  const q = GEPT_QUESTIONS[currentQIdx];
  const total = GEPT_QUESTIONS.length;
  const progressPercent = Math.round(((currentQIdx + 1) / total) * 100);

  // 更新進度條與標題
  const progressBar = document.getElementById('gept-progress-bar');
  const progressText = document.getElementById('gept-progress-text');
  const typeBadge = document.getElementById('gept-question-type');
  const questionTitle = document.getElementById('gept-question-title');
  const optionsBox = document.getElementById('gept-options-box');
  const prevBtn = document.getElementById('gept-prev-btn');

  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.innerText = `第 ${currentQIdx + 1} 題 / 共 ${total} 題`;
  if (typeBadge) typeBadge.innerText = q.type;
  if (questionTitle) questionTitle.innerText = q.question;

  if (prevBtn) {
    if (currentQIdx === 0) {
      prevBtn.classList.add('invisible');
    } else {
      prevBtn.classList.remove('invisible');
    }
  }

  // 渲染選項
  if (optionsBox) {
    optionsBox.innerHTML = '';
    const selectedOptionIdx = userSelections[currentQIdx];

    q.options.forEach((opt, idx) => {
      const letter = String.fromCharCode(65 + idx);
      const isSelected = selectedOptionIdx === idx;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3.5 group
        ${isSelected ? 'border-brand-500 bg-orange-50/80 ring-2 ring-brand-500 shadow-sm' : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50'}`;
      
      btn.innerHTML = `
        <span class="w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center flex-shrink-0 transition-colors
          ${isSelected ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-brand-100 group-hover:text-brand-700'}">
          ${letter}
        </span>
        <span class="text-sm sm:text-base font-semibold text-slate-800 pt-0.5 leading-relaxed">
          ${opt.text}
        </span>
      `;

      btn.addEventListener('click', () => {
        userSelections[currentQIdx] = idx;
        renderGeptQuestion(); // 重新渲染高亮選中狀態
        
        // 延遲 250ms 自動進入下一題
        setTimeout(() => {
          if (currentQIdx < total - 1) {
            currentQIdx++;
            renderGeptQuestion();
          } else {
            showGeptCalculating();
          }
        }, 220);
      });

      optionsBox.appendChild(btn);
    });
  }
}

function geptPrevQuestion() {
  if (currentQIdx > 0) {
    currentQIdx--;
    renderGeptQuestion();
  }
}

function showGeptCalculating() {
  const quizCard = document.getElementById('gept-quiz-card');
  if (!quizCard) return;

  quizCard.innerHTML = `
    <div class="py-16 text-center space-y-4">
      <div class="inline-block p-4 rounded-full bg-brand-100 text-brand-600 animate-spin">
        <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-slate-900">正在依據全民英檢 (GEPT) 標竿對照您的文法與單字落點...</h3>
      <p class="text-slate-500 text-xs sm:text-sm">系統正在結算答對題數並整理題目解析報告</p>
    </div>
  `;

  setTimeout(() => {
    renderGeptFinalResult();
  }, 850);
}

function renderGeptFinalResult() {
  const quizCard = document.getElementById('gept-quiz-card');
  if (!quizCard) return;

  // 計算答對題數
  let correctCount = 0;
  GEPT_QUESTIONS.forEach((q, idx) => {
    const selectedIdx = userSelections[idx];
    if (selectedIdx !== null && q.options[selectedIdx]?.isCorrect) {
      correctCount++;
    }
  });

  const total = GEPT_QUESTIONS.length;
  const scorePercent = Math.round((correctCount / total) * 100);

  // 判定全民英檢程度落點
  let profile;
  if (correctCount <= 3) {
    profile = GEPT_LEVEL_PROFILES.elementary;
  } else if (correctCount <= 6) {
    profile = GEPT_LEVEL_PROFILES.intermediate;
  } else {
    profile = GEPT_LEVEL_PROFILES.highIntermediate;
  }

  const contactUrl = `./contact.html?level=${encodeURIComponent(profile.levelParam)}&target=${encodeURIComponent(profile.targetParam)}`;

  // 生成解析 HTML
  let reviewHtml = '';
  GEPT_QUESTIONS.forEach((q, idx) => {
    const selectedIdx = userSelections[idx];
    const userPick = selectedIdx !== null ? q.options[selectedIdx] : null;
    const isUserCorrect = userPick && userPick.isCorrect;
    const correctOption = q.options.find(o => o.isCorrect);

    reviewHtml += `
      <div class="p-4 sm:p-5 rounded-2xl border ${isUserCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/30'} space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold ${isUserCorrect ? 'text-emerald-700' : 'text-rose-700'}">
            第 ${idx + 1} 題：${isUserCorrect ? '✓ 答對' : '✗ 答錯'} (${q.type})
          </span>
          <span class="text-slate-400">你的選擇：${userPick ? userPick.text : '未作答'}</span>
        </div>
        <div class="font-bold text-slate-800 text-sm">${q.question}</div>
        <div class="text-xs text-slate-600 bg-white/80 p-2.5 rounded-xl border border-slate-100">
          ${q.explanation}
        </div>
      </div>
    `;
  });

  quizCard.innerHTML = `
    <div class="p-6 sm:p-10 space-y-8">
      
      <!-- 得分與全民英檢落點卡片 -->
      <div class="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
          <div>
            <span class="text-xs font-bold text-brand-400 uppercase tracking-wider block">GEPT LEVEL ASSESSMENT RESULT</span>
            <h3 class="text-2xl sm:text-3xl font-black text-white mt-1">${profile.title}</h3>
          </div>
          <div class="text-right">
            <span class="text-3xl sm:text-4xl font-black text-amber-400">${correctCount} / ${total}</span>
            <span class="block text-xs text-slate-400">答對率 ${scorePercent}%</span>
          </div>
        </div>

        <div class="inline-block px-3.5 py-1 rounded-full text-xs font-bold border ${profile.badgeColor}">
          ${profile.levelTag}
        </div>

        <p class="text-slate-300 text-sm leading-relaxed">
          ${profile.description}
        </p>

        <!-- CTA 帶入此程度至預約單 -->
        <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div class="text-xs text-amber-200">
            推薦方案：<strong>${profile.recommendCourse}</strong>
          </div>
          <a href="${contactUrl}" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-md transition">
            <span>帶入【${profile.levelParam}】預約試聽</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <!-- 題目覆盤與詳細解析專區 -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>📝 本次測驗題目解析與錯題覆盤</span>
          </h4>
          <button onclick="location.reload()" class="text-xs font-semibold text-brand-600 hover:text-brand-700 transition">
            重新測驗 ↻
          </button>
        </div>

        <div class="space-y-3">
          ${reviewHtml}
        </div>
      </div>

      <div class="text-center pt-2">
        <p class="text-xs text-slate-400">
          💡 此 Demo 版檢測聚焦於單字與文法結構。在 25 分鐘免費一對一試聽中，Peter 老師將進一步為您進行聽力連音與口說反應測試！
        </p>
      </div>

    </div>
  `;
}


// Reading Web Object - Generated JavaScript (FIXED for Phrases)

const vocabularyData = {
    "meet": "conocer",
    "new partner": "nuevo compañero",
    "meeting": "reunión",
    "ship": "barco",
    "introduce myself": "presentarme",
    "country": "país",
    "age": "edad",
    "job": "trabajo",
    "sailor": "marinero",
    "ask a question": "hacer una pregunta",
    "speak english": "hablar inglés",
    "happy to meet you": "feliz de conocerte"
};

const quizQuestions = [
    {
        "id": 1,
        "type": "tf",
        "text": "Luis meets his new partner on the ship.",
        "correct": "true",
        "feedback": "Correct! The text says 'I meet my new partner at a meeting on the ship.'"
    },
    {
        "id": 2,
        "type": "tf",
        "text": "Luis is 25 years old.",
        "correct": "false",
        "feedback": "Incorrect. The text says Luis is 22 years old."
    },
    {
        "id": 3,
        "type": "mc",
        "text": "What is Luis's job?",
        "options": [
            "Sailor",
            "Teacher",
            "Doctor",
            "Cook"
        ],
        "correct": "Sailor",
        "feedback": "Correct! The text says 'My job is a sailor; I am a sailor.'"
    },
    {
        "id": 4,
        "type": "mc",
        "text": "Where is Luis from?",
        "options": [
            "Colombia",
            "Mexico",
            "Spain",
            "Brazil"
        ],
        "correct": "Colombia",
        "feedback": "Correct! Luis says he is from Colombia, his country."
    },
    {
        "id": 5,
        "type": "mc",
        "text": "What language do they speak together?",
        "options": [
            "English",
            "Spanish",
            "French",
            "Italian"
        ],
        "correct": "English",
        "feedback": "Correct! The text says 'my partner can speak English. We speak a new language together.'"
    },
    {
        "id": 6,
        "type": "mr",
        "text": "What information does Luis share about himself? (Select all that apply)",
        "options": [
            "His name",
            "His age",
            "His country",
            "His job",
            "His favorite food"
        ],
        "correct": [
            "His name",
            "His age",
            "His country",
            "His job"
        ],
        "feedback": "Correct! Luis shares his name, age, country, and job, but not his favorite food."
    },
    {
        "id": 7,
        "type": "fb",
        "text": "Hello! My name is _____.",
        "correct": "Luis",
        "feedback": "Correct! The text starts with 'My name is Luis.'"
    },
    {
        "id": 8,
        "type": "fb",
        "text": "I am _____ years old.",
        "correct": "22",
        "feedback": "Correct! Luis says 'I am 22 years old.'"
    },
    {
        "id": 9,
        "type": "fb",
        "text": "Luis asks: What is your _____.",
        "correct": "name",
        "feedback": "Correct! The text says 'What is your name?'"
    },
    {
        "id": 10,
        "type": "matching",
        "text": "Match the word with the correct information about Luis:",
        "pairs": [
            {
                "left": "Name",
                "right": "Luis"
            },
            {
                "left": "Age",
                "right": "22"
            },
            {
                "left": "Country",
                "right": "Colombia"
            },
            {
                "left": "Job",
                "right": "Sailor"
            }
        ],
        "feedback": {
            "correct": "Excellent! All matches are correct.",
            "incorrect": "Not quite right. Review the text for Luis's details."
        }
    }
];

const App = {
    currentMode: 'study',
    audio: null,
    isPlaying: false
};

document.addEventListener('DOMContentLoaded', () => {
    initAudio();
    initModes();
    initStudyMode();
    initPracticeMode();
    initQuizMode();
    initReadingImage();
    window.addEventListener('scroll', trackStudyProgress);
    updateProgressUI(0, 'Progress');
});

function initReadingImage() {
    const imgContainer = document.getElementById('readingImageContainer');
    const img = document.getElementById('readingImage');
    
    if (!img || !imgContainer) return;
    
    img.addEventListener('error', function() {
        imgContainer.classList.add('hidden');
    });
    
    img.addEventListener('load', function() {
        imgContainer.classList.remove('hidden');
    });
    
    if (img.complete && img.naturalHeight === 0) {
        imgContainer.classList.add('hidden');
    }
}

function initAudio() {
    App.audio = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const seekBar = document.getElementById('seekBar');
    const currTime = document.getElementById('currentTime');
    const durTime = document.getElementById('duration');
    playBtn.addEventListener('click', () => { if (App.audio.paused) { App.audio.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; } else { App.audio.pause(); playBtn.innerHTML = '<i class="fas fa-play"></i>'; } });
    App.audio.addEventListener('timeupdate', () => { const val = (App.audio.currentTime / App.audio.duration) * 100 || 0; seekBar.value = val; currTime.textContent = formatTime(App.audio.currentTime); seekBar.style.background = `linear-gradient(to right, var(--theme-accent) ${val}%, #e9ecef ${val}%)`; });
    App.audio.addEventListener('loadedmetadata', () => { durTime.textContent = formatTime(App.audio.duration); });
    App.audio.addEventListener('ended', () => { playBtn.innerHTML = '<i class="fas fa-play"></i>'; seekBar.value = 0; seekBar.style.background = '#e9ecef'; });
    seekBar.addEventListener('input', () => { App.audio.currentTime = (seekBar.value / 100) * App.audio.duration; });
}
function formatTime(s) { const mins = Math.floor(s / 60); const secs = Math.floor(s % 60); return `${mins}:${secs < 10 ? '0' : ''}${secs}`; }

function initModes() {
    const buttons = document.querySelectorAll('.btn-mode');
    const sections = document.querySelectorAll('.view-section');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active')); sections.forEach(s => s.classList.remove('active'));
            btn.classList.add('active'); const mode = btn.dataset.mode;
            document.getElementById(`view-${mode}`).classList.add('active'); App.currentMode = mode;
            window.scrollTo({ top: 100, behavior: 'smooth' });
            if (mode === 'study') { updateProgressLabel('Progress'); trackStudyProgress(); } else { updateProgressLabel('Success'); updateProgressUI(0); }
        });
    });
}
function updateProgressLabel(text) { document.getElementById('progressLabel').textContent = text; }
function updateProgressUI(percentage) {
    percentage = Math.min(100, Math.max(0, percentage));
    const progressRing = document.getElementById('progressRing');
    const desktopText = document.getElementById('desktopProgressText');
    const circumference = 2 * Math.PI * 54; const offset = circumference - (percentage / 100) * circumference;
    if(progressRing) progressRing.style.strokeDashoffset = offset;
    if(desktopText) desktopText.textContent = Math.round(percentage) + '%';
    const progressBarFill = document.getElementById('progressBarFill');
    const mobileText = document.getElementById('mobileProgressText');
    if(progressBarFill) progressBarFill.style.width = percentage + '%';
    if(mobileText) mobileText.textContent = Math.round(percentage) + '%';
}
function trackStudyProgress() {
    if (App.currentMode !== 'study') return;
    const textContainer = document.querySelector('#view-study .content-box');
    if (!textContainer) return;
    const rect = textContainer.getBoundingClientRect(); const windowHeight = window.innerHeight; const scrolledPast = windowHeight - rect.top;
    let percentage = (scrolledPast / rect.height) * 100;
    if (rect.height < windowHeight && rect.top > 0) percentage = 100;
    updateProgressUI(percentage);
}

// FIXED: Uses data-key attribute for robust lookup
function initStudyMode() {
    document.querySelectorAll('.vocab-highlight').forEach(span => {
        const key = span.getAttribute('data-key');
        if (key && vocabularyData[key]) {
            span.setAttribute('data-translation', `🔍 ${vocabularyData[key]}`);
        }
    });
}

// FIXED: Uses data-key attribute for validation
function initPracticeMode() {
    const source = document.getElementById('sourceText').innerHTML;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = source;
    const vocabKeys = Object.keys(vocabularyData);
    tempDiv.querySelectorAll('.vocab-highlight').forEach((span) => {
        const key = span.getAttribute('data-key');
        if(!key) return; // Skip if no key found
        
        const select = document.createElement('select');
        select.className = 'practice-select'; select.dataset.correctKey = key;
        
        // Correct answer is the key itself (conceptually)
        // Options are keys
        let options = [key];
        const distractors = vocabKeys.filter(v => v !== key).sort(() => 0.5 - Math.random()).slice(0, 3);
        options = options.concat(distractors).sort(() => 0.5 - Math.random());
        
        select.insertAdjacentHTML('afterbegin', '<option value="" selected>...</option>');
        options.forEach(opt => { 
            const o = document.createElement('option'); 
            o.value = opt; 
            o.textContent = opt; // Display key as text
            select.appendChild(o); 
        });
        span.replaceWith(select);
    });
    
    document.getElementById('practiceContainer').innerHTML = tempDiv.innerHTML;
    
    document.getElementById('checkPracticeBtn').addEventListener('click', () => {
        let score = 0; const sels = document.querySelectorAll('.practice-select');
        sels.forEach(s => {
            const correctKey = s.dataset.correctKey;
            s.classList.remove('correct', 'incorrect');
            if (s.value === correctKey) { s.classList.add('correct'); score++; } else { s.classList.add('incorrect'); }
        });
        const fb = document.getElementById('practiceFeedback'); fb.style.display = 'block'; fb.className = 'feedback-box';
        fb.innerHTML = `<strong>Results:</strong> You identified ${score} out of ${sels.length} words correctly.`;
        fb.style.marginTop = '20px'; fb.style.padding = '15px'; fb.style.background = '#e3f2fd'; fb.style.borderRadius = '8px';
        updateProgressUI((score / sels.length) * 100);
    });
    document.getElementById('resetPracticeBtn').addEventListener('click', () => {
        document.querySelectorAll('.practice-select').forEach(s => { s.value = ""; s.classList.remove('correct', 'incorrect'); });
        document.getElementById('practiceFeedback').style.display = 'none'; showToast("Practice reset"); updateProgressUI(0);
    });
}

function initQuizMode() {
    document.getElementById('quizTextContent').innerHTML = document.getElementById('sourceText').innerHTML;
    const toggleBtn = document.getElementById('mobileTextToggle');
    toggleBtn.addEventListener('click', () => {
        const content = document.querySelector('.reference-content'); content.classList.toggle('show');
        const icon = toggleBtn.querySelector('.arrow');
        content.classList.contains('show') ? icon.classList.replace('fa-chevron-down', 'fa-chevron-up') : icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    });
    const container = document.getElementById('questionsContainer');
    quizQuestions.forEach(q => {
        const card = document.createElement('div'); card.className = 'question-card';
        let html = `<div class="question-text">${q.id}. ${q.text}</div>`;
        if (q.type === 'tf') {
            html += `<label class="option-label"><input type="radio" name="q${q.id}" value="true"> True</label><label class="option-label"><input type="radio" name="q${q.id}" value="false"> False</label>`;
        } else if (q.type === 'mc') {
            q.options.forEach(opt => html += `<label class="option-label"><input type="radio" name="q${q.id}" value="${opt}"> ${opt}</label>`);
        } else if (q.type === 'fb') {
            html += `<input type="text" class="fb-input" id="fb-${q.id}" placeholder="Type answer...">`;
        } else if (q.type === 'mr') {
            q.options.forEach(opt => html += `<label class="option-label"><input type="checkbox" name="q${q.id}" value="${opt}"> ${opt}</label>`);
        } else if (q.type === 'matching') {
            html += `<div class="matching-container">`;
            let rightOptions = q.pairs.map(p => p.right); shuffleArray(rightOptions);
            q.pairs.forEach((pair, idx) => {
                html += `<div class="matching-row" data-index="${idx}"><div class="matching-left">${pair.left}</div><select class="matching-select"><option value="">Select...</option>${rightOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}</select></div>`;
            });
            html += `</div>`;
        }
        html += `<div id="feedback-${q.id}" class="feedback"></div>`; card.innerHTML = html; container.appendChild(card);
    });
    document.getElementById('submitQuizBtn').addEventListener('click', () => {
        let score = 0;
        quizQuestions.forEach(q => {
            let isCorrect = false;
            if (q.type === 'fb') {
                const val = document.getElementById(`fb-${q.id}`).value.trim().toLowerCase(); isCorrect = val === q.correct.toLowerCase();
            } else if (q.type === 'mr') {
                const checked = Array.from(document.querySelectorAll(`input[name="q${q.id}"]:checked`)).map(i => i.value);
                isCorrect = checked.length === q.correct.length && q.correct.every(val => checked.includes(val));
            } else if (q.type === 'matching') {
                const card = document.getElementById(`feedback-${q.id}`).parentNode;
                const selects = card.querySelectorAll('.matching-select');
                let allMatch = true;
                selects.forEach((sel, idx) => { if (sel.value !== q.pairs[idx].right) allMatch = false; });
                isCorrect = allMatch;
            } else {
                const checked = document.querySelector(`input[name="q${q.id}"]:checked`); isCorrect = checked && checked.value === q.correct;
            }
            const fbEl = document.getElementById(`feedback-${q.id}`); fbEl.style.display = 'block';
            let fbText = typeof q.feedback === 'object' ? (isCorrect ? q.feedback.correct : q.feedback.incorrect) : q.feedback;
            if (isCorrect) { score++; fbEl.className = 'feedback correct'; fbEl.innerHTML = `<i class="fas fa-check"></i> ${fbText || 'Correct!'}`; } 
            else { fbEl.className = 'feedback incorrect'; fbEl.innerHTML = `<i class="fas fa-times"></i> ${fbText || 'Incorrect'}`; }
        });
        document.getElementById('quizScore').textContent = `${score}/${quizQuestions.length}`;
        const resultsPanel = document.getElementById('quizResults'); resultsPanel.style.display = 'block';
        let msg = score === quizQuestions.length ? "Perfect Score! Outstanding work! 🎖️" : score >= (quizQuestions.length * 0.7) ? "Great job! You passed. ⭐" : "Review the text and try again. ⚓";
        resultsPanel.innerHTML = `<div>${msg}</div><div style="font-size:2em; margin-top:10px">${Math.round((score/quizQuestions.length)*100)}%</div>`;
        document.getElementById('submitQuizBtn').style.display = 'none'; document.getElementById('resetQuizBtn').style.display = 'inline-flex';
        resultsPanel.scrollIntoView({ behavior: 'smooth' }); updateProgressUI((score / quizQuestions.length) * 100);
    });
    document.getElementById('resetQuizBtn').addEventListener('click', () => {
        document.querySelectorAll('#questionsContainer input[type="radio"], #questionsContainer input[type="checkbox"]').forEach(el => el.checked = false);
        document.querySelectorAll('#questionsContainer input[type="text"]').forEach(el => el.value = '');
        document.querySelectorAll('#questionsContainer select').forEach(el => el.value = '');
        document.querySelectorAll('.feedback').forEach(el => el.style.display = 'none');
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('submitQuizBtn').style.display = 'inline-flex'; document.getElementById('resetQuizBtn').style.display = 'none';
        document.getElementById('quizScore').textContent = "0/" + quizQuestions.length; updateProgressUI(0);
        document.querySelector('.quiz-questions-panel').scrollIntoView({ behavior: 'smooth' }); showToast("Quiz reset. Good luck!");
    });
}

function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
function escapeHtml(text) { return text; }
function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }

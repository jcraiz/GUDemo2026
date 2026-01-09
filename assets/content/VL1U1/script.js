document.addEventListener('DOMContentLoaded', () => {

    // ===== DATA =====
    const vocabularyParts = [
    [
        {
            "word": "hello",
            "definition": "a word you say when you meet someone.",
            "example": "Hello, nice to meet you.",
            "translation": "hola",
            "synonyms": [
                "hi"
            ]
        },
        {
            "word": "name",
            "definition": "the word people use to call a person.",
            "example": "My name is Carlos.",
            "translation": "nombre",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "meet",
            "definition": "to see someone for the first time.",
            "example": "I meet my new partner today.",
            "translation": "conocer",
            "synonyms": [
                "see"
            ]
        },
        {
            "word": "introduce",
            "definition": "to tell someone your name or another person’s name.",
            "example": "I introduce myself to the teacher.",
            "translation": "presentar",
            "synonyms": [
                "present"
            ]
        },
        {
            "word": "from",
            "definition": "used to say the place where someone comes from.",
            "example": "I am from Colombia.",
            "translation": "de",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "country",
            "definition": "a place where people live with one government.",
            "example": "Colombia is my country.",
            "translation": "país",
            "synonyms": [
                "nation"
            ]
        },
        {
            "word": "age",
            "definition": "the number of years a person has lived.",
            "example": "My age is 30.",
            "translation": "edad",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "job",
            "definition": "the work a person does.",
            "example": "My job is teacher.",
            "translation": "trabajo",
            "synonyms": [
                "work"
            ]
        },
        {
            "word": "call",
            "definition": "to use a name for someone.",
            "example": "My friends call me Juan.",
            "translation": "llamar",
            "synonyms": [
                "name"
            ]
        },
        {
            "word": "ask",
            "definition": "to say a question to get information.",
            "example": "I ask my partner a question.",
            "translation": "preguntar",
            "synonyms": [
                "—"
            ]
        }
    ],
    [
        {
            "word": "question",
            "definition": "words you say to get information.",
            "example": "I have a question for you.",
            "translation": "pregunta",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "what",
            "definition": "a word used to ask about things or information.",
            "example": "What is your name?",
            "translation": "qué",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "know",
            "definition": "to have information about something or someone.",
            "example": "I know her name.",
            "translation": "saber / conocer",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "say",
            "definition": "to speak words.",
            "example": "I say hello to my commanding officer.",
            "translation": "decir",
            "synonyms": [
                "tell"
            ]
        },
        {
            "word": "speak",
            "definition": "to use words in a language.",
            "example": "I speak English at the naval base.",
            "translation": "hablar",
            "synonyms": [
                "talk"
            ]
        },
        {
            "word": "personal",
            "definition": "about one person, not public.",
            "example": "This is personal information.",
            "translation": "personal",
            "synonyms": [
                "private"
            ]
        },
        {
            "word": "meeting",
            "definition": "a time when people come together to talk.",
            "example": "We have a meeting on the ship.",
            "translation": "reunión",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "partner",
            "definition": "a person you work or study with.",
            "example": "My partner is in my English class.",
            "translation": "compañero",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "new",
            "definition": "not old; just starting or recent.",
            "example": "I meet a new officer today.",
            "translation": "nuevo",
            "synonyms": [
                "—"
            ]
        },
        {
            "word": "language",
            "definition": "words people use to speak to each other.",
            "example": "English is a new language for me.",
            "translation": "idioma",
            "synonyms": [
                "—"
            ]
        }
    ]
];
    const quizQuestions = [
    {
        "question": "Which word means later than a time or event?",
        "options": [
            "after",
            "through",
            "close",
            "future"
        ],
        "answer": "after",
        "correct": 0
    },
    {
        "question": "Which word means the words you say to reply to a question?",
        "options": [
            "answer",
            "email",
            "chart",
            "phone"
        ],
        "answer": "answer",
        "correct": 0
    },
    {
        "question": "You put your books in this when you go to class.",
        "options": [
            "bag",
            "glass",
            "wall",
            "pencil"
        ],
        "answer": "bag",
        "correct": 0
    },
    {
        "question": "On the naval base, you look at information on this on the wall.",
        "options": [
            "chart",
            "email",
            "future",
            "station"
        ],
        "answer": "chart",
        "correct": 0
    },
    {
        "question": "Which word means near, not far away?",
        "options": [
            "close",
            "nice",
            "after",
            "through"
        ],
        "answer": "close",
        "correct": 0
    },
    {
        "question": "You send this to your instructor on the computer.",
        "options": [
            "email",
            "answer",
            "phone",
            "taxi"
        ],
        "answer": "email",
        "correct": 0
    },
    {
        "question": "Be careful on the ship so you do not do this.",
        "options": [
            "fall",
            "wash",
            "travel",
            "close"
        ],
        "answer": "fall",
        "correct": 0
    },
    {
        "question": "Which word means the time after now?",
        "options": [
            "future",
            "after",
            "station",
            "street"
        ],
        "answer": "future",
        "correct": 0
    },
    {
        "question": "You drink water from this.",
        "options": [
            "glass",
            "bag",
            "wall",
            "pencil"
        ],
        "answer": "glass",
        "correct": 0
    },
    {
        "question": "Which word means kind and friendly?",
        "options": [
            "nice",
            "close",
            "future",
            "after"
        ],
        "answer": "nice",
        "correct": 0
    },
    {
        "question": "You write your name with this.",
        "options": [
            "pencil",
            "phone",
            "chart",
            "taxi"
        ],
        "answer": "pencil",
        "correct": 0
    },
    {
        "question": "After duty, you use this to call your family.",
        "options": [
            "phone",
            "email",
            "station",
            "wall"
        ],
        "answer": "phone",
        "correct": 0
    },
    {
        "question": "At the naval base, the bus stops at this place.",
        "options": [
            "station",
            "street",
            "taxi",
            "future"
        ],
        "answer": "station",
        "correct": 0
    },
    {
        "question": "Your house is on this in the city.",
        "options": [
            "street",
            "wall",
            "station",
            "chart"
        ],
        "answer": "street",
        "correct": 0
    },
    {
        "question": "You take this car to go to the base.",
        "options": [
            "taxi",
            "phone",
            "bag",
            "glass"
        ],
        "answer": "taxi",
        "correct": 0
    },
    {
        "question": "This device is in the office to make calls.",
        "options": [
            "telephone",
            "phone",
            "email",
            "chart"
        ],
        "answer": "telephone",
        "correct": 0
    },
    {
        "question": "Walk ___ the door, please.",
        "options": [
            "through",
            "after",
            "close",
            "future"
        ],
        "answer": "through",
        "correct": 0
    },
    {
        "question": "Officers do this when they go to another city.",
        "options": [
            "travel",
            "fall",
            "wash",
            "answer"
        ],
        "answer": "travel",
        "correct": 0
    },
    {
        "question": "The chart is on this in the classroom.",
        "options": [
            "wall",
            "bag",
            "glass",
            "station"
        ],
        "answer": "wall",
        "correct": 0
    },
    {
        "question": "Before guard duty, you do this to your hands.",
        "options": [
            "wash",
            "fall",
            "travel",
            "close"
        ],
        "answer": "wash",
        "correct": 0
    }
];

    // ===== STATE MANAGEMENT =====
    let currentMode = 'study';
    let currentPart = { study: 0, practice: 0 };
    let progress = {
        study: [new Set(), new Set()],
        practice: [new Set(), new Set()]
    };

    // ===== DOM ELEMENTS =====
    const sections = {
        study: document.getElementById('study-section'),
        practice: document.getElementById('practice-section'),
        quiz: document.getElementById('quiz-section')
    };
    const navButtons = {
        study: document.getElementById('study-mode-btn'),
        practice: document.getElementById('practice-mode-btn'),
        quiz: document.getElementById('quiz-mode-btn')
    };
    const progressElements = {
        desktopText: document.getElementById('desktopProgressText'),
        ring: document.getElementById('progressRing'),
        mobileText: document.getElementById('mobileProgressText'),
        barFill: document.getElementById('progressBarFill'),
        container: document.querySelector('.floating-progress')
    };
    const studyDOM = {
        vocabContainer: document.getElementById('vocab-container'),
        partIndicator: document.getElementById('study-part-indicator'),
        loadMoreBtn: document.getElementById('load-more-study'),
        detailsContainer: document.getElementById('word-details'),
        detailsPanel: document.getElementById('word-details-panel'),
        mobileModal: document.getElementById('mobile-details-modal'),
        mobileDetailsContainer: document.getElementById('mobile-word-details'),
        closeModalBtn: document.getElementById('close-details-modal-btn')
    };

    // ===== INITIALIZATION =====
    function init() {
        navButtons.study.addEventListener('click', () => switchMode('study'));
        navButtons.practice.addEventListener('click', () => switchMode('practice'));
        navButtons.quiz.addEventListener('click', () => switchMode('quiz'));
        document.getElementById('reset-progress').addEventListener('click', resetCurrentModeProgress);
        initStudyMode();
        initPracticeMode();
        initQuizMode();
        switchMode('study');
    }

    // ===== MODE SWITCHING =====
    function switchMode(newMode) {
        if (currentMode === newMode && document.body.dataset.initialized) {
            return;
        }
        if (!document.body.dataset.initialized) {
            document.body.dataset.initialized = "true";
        }

        currentMode = newMode;

        Object.values(sections).forEach(s => s.classList.add('hidden'));
        sections[currentMode].classList.remove('hidden');

        Object.values(navButtons).forEach(b => b.classList.remove('active'));
        navButtons[currentMode].classList.add('active');

        if (currentMode === 'quiz') {
            progressElements.container.classList.add('hidden');
            startQuiz();
        } else {
            progressElements.container.classList.remove('hidden');
            updateProgress();
        }

        if (currentMode === 'practice') {
            checkMicrophonePermission();
        }
    }

    // ===== PROGRESS MANAGEMENT =====
    function updateProgress() {
        if (currentMode === 'quiz') return;
        const partIndex = currentPart[currentMode];
        const currentVocab = vocabularyParts[partIndex];
        const currentViewed = progress[currentMode][partIndex];
        const percentage = currentVocab.length > 0 ? (currentViewed.size / currentVocab.length) * 100 : 0;
        const roundedPercentage = Math.round(percentage);
        progressElements.desktopText.textContent = `${roundedPercentage}%`;
        progressElements.mobileText.textContent = `${roundedPercentage}%`;
        progressElements.barFill.style.width = `${percentage}%`;
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (percentage / 100) * circumference;
        progressElements.ring.style.strokeDashoffset = offset;
    }

    function resetCurrentModeProgress() {
        if (currentMode === 'quiz') return;
        const partIndex = currentPart[currentMode];
        progress[currentMode][partIndex].clear();
        updateProgress();
        if (currentMode === 'study') {
            document.querySelectorAll('#vocab-container .vocab-card').forEach(c => c.classList.remove('active'));
            studyDOM.detailsContainer.innerHTML = `<p class="text-gray-500">Select a word to see its details</p>`;
        }
        if (currentMode === 'practice') {
            document.querySelectorAll('#practice-vocab-container .vocab-card').forEach(el => el.classList.remove('active'));
            if (practiceDOM.statusDiv) practiceDOM.statusDiv.textContent = 'Select a word to start practicing.';
            if (practiceDOM.resultDiv) {
                practiceDOM.resultDiv.textContent = 'Your result will appear here.';
                practiceDOM.resultDiv.className = 'result-box';
            }
            if (practiceDOM.transcriptText) practiceDOM.transcriptText.textContent = 'No speech detected yet.';
        }
    }

    // ===== AUDIO HELPERS =====
    function formatFileName(text) {
        return text.toLowerCase().replace(/'/g, '').replace(/[?.]/g, '').trim().replace(/\s+/g, '_');
    }
    function playAudio(filePath) {
        return new Promise((resolve, reject) => {
            const audio = new Audio(filePath);
            audio.onended = resolve;
            audio.onerror = reject;
            audio.play().catch(e => reject(e));
        });
    }
    function playWord(word) { return playAudio(`sound/${formatFileName(word)}.mp3`); }
    function playExample(word) { return playAudio(`sound/ex_${formatFileName(word)}.mp3`); }

    // ===================================
    // =========== STUDY MODE ============
    // ===================================
    function initStudyMode() {
        loadStudyPart(currentPart.study);
        studyDOM.loadMoreBtn.addEventListener('click', toggleStudyPart);
        studyDOM.closeModalBtn.addEventListener('click', hideMobileDetails);
        studyDOM.mobileModal.addEventListener('click', (e) => {
            if (e.target === studyDOM.mobileModal) { // Click on backdrop
                hideMobileDetails();
            }
        });
    }

    function hideMobileDetails() {
        studyDOM.mobileModal.classList.add('hidden');
    }

    function loadStudyPart(partIndex) {
        studyDOM.vocabContainer.innerHTML = '';
        if (!vocabularyParts[partIndex]) return;
        vocabularyParts[partIndex].forEach((word, index) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'vocab-card bg-white p-4 rounded-lg shadow border border-gray-100';
            wordElement.addEventListener('click', () => handleStudyWordClick(word, index, wordElement));
            wordElement.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-semibold text-lg text-indigo-700">${word.word}</h3>
                    <span class="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">${word.translation}</span>
                </div>
                <p class="text-gray-600">${word.definition}</p>`;
            studyDOM.vocabContainer.appendChild(wordElement);
        });
        updateStudyPartIndicator();
        updateProgress();
    }

    function handleStudyWordClick(word, index, element) {
        const isMobile = window.innerWidth < 768;
        if (!progress.study[currentPart.study].has(index)) {
            progress.study[currentPart.study].add(index);
            updateProgress();
        }

        document.querySelectorAll('#vocab-container .vocab-card').forEach(el => el.classList.remove('active'));
        element.classList.add('active');

        // Calculate Global Image Index for naming convention (img01.jpg, img02.jpg...)
        // Count all words in previous parts
        let totalPreviousWords = 0;
        for (let i = 0; i < currentPart.study; i++) {
            totalPreviousWords += vocabularyParts[i].length;
        }

        const globalIndex = totalPreviousWords + index + 1;
        const paddedIndex = String(globalIndex).padStart(2, '0');
        const imagePath = `images/img${paddedIndex}.jpg`;

        if (isMobile) {
            showWordDetails(word, studyDOM.mobileDetailsContainer, imagePath);
            studyDOM.mobileModal.classList.remove('hidden');
        } else {
            studyDOM.detailsPanel.classList.remove('hidden');
            showWordDetails(word, studyDOM.detailsContainer, imagePath);
        }
    }

    function showWordDetails(word, container, imagePath) {
        container.innerHTML = `
            <div class="w-full bg-indigo-50 rounded-lg p-6">
                <img src="${imagePath}" alt="${word.word}" class="vocab-image" onerror="this.style.display='none'">
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center">
                        <h2 class="text-2xl font-bold text-indigo-800">${word.word}</h2>
                        <i class="fas fa-volume-up sound-icon" data-sound-type="word" data-word="${word.word}"></i>
                    </div>
                    <span class="text-sm px-2 py-1 bg-indigo-200 text-indigo-800 rounded-full">${word.translation}</span>
                </div>
                <div class="mb-4"><h3 class="font-semibold text-gray-700 mb-1">Definition</h3><p class="text-gray-800">${word.definition}</p></div>
                <div class="mb-4"><h3 class="font-semibold text-gray-700 mb-1 flex items-center">Example <i class="fas fa-volume-up sound-icon ml-2" data-sound-type="example" data-word="${word.word}"></i></h3><p class="text-gray-800 italic">"${word.example}"</p></div>
                <div><h3 class="font-semibold text-gray-700 mb-1">Synonyms</h3><div class="flex flex-wrap gap-2">${word.synonyms.map(syn => `<span class="text-sm px-2 py-1 bg-gray-200 text-gray-800 rounded-full">${syn}</span>`).join('')}</div></div>
            </div>`;
        container.querySelectorAll('.sound-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const type = e.target.dataset.soundType;
                const word = e.target.dataset.word;
                if (type === 'word') playWord(word); else playExample(word);
            });
        });
    }

    function toggleStudyPart() {
        currentPart.study = (currentPart.study + 1) % vocabularyParts.length;
        loadStudyPart(currentPart.study);
        studyDOM.detailsContainer.innerHTML = `<p class="text-gray-500">Select a word to see its details</p>`;
        studyDOM.detailsPanel.classList.add('hidden');
    }

    function updateStudyPartIndicator() {
        studyDOM.partIndicator.textContent = `Part ${currentPart.study + 1} of ${vocabularyParts.length}`;
        studyDOM.loadMoreBtn.textContent = currentPart.study === 0 ? 'Load More Words' : 'Back to Part 1';
        studyDOM.loadMoreBtn.classList.remove('hidden'); // Ensure button is visible if logic dictates
    }

    // ===================================
    // ======== SPEECH PRACTICE MODE =====
    // ===================================
    const practiceDOM = {
        vocabContainer: document.getElementById('practice-vocab-container'),
        partIndicator: document.getElementById('practice-part-indicator'),
        loadMoreBtn: document.getElementById('load-more-practice'),
        detailsPanel: document.getElementById('practice-details-panel'),
        detailsPanelContainer: document.getElementById('practice-panel-desktop-container'), // The new desktop wrapper
        targetPhrase: document.getElementById('targetPhrase'),
        playTargetSoundBtn: document.getElementById('playTargetSoundBtn'),
        micBtn: document.getElementById('micBtn'),
        statusDiv: document.getElementById('status'),
        resultDiv: document.getElementById('result'),
        transcriptText: document.getElementById('transcriptText'),
        permissionSection: document.getElementById('permissionSection'),
        mobileModal: document.getElementById('mobile-practice-modal'),
        mobileContent: document.getElementById('mobile-practice-content'),
        closeModalBtn: document.getElementById('close-practice-modal-btn')
    };
    let recognition;
    let currentPracticeWord = null;
    let isListening = false;

    function initPracticeMode() {
        loadPracticePart(currentPart.practice);
        practiceDOM.loadMoreBtn.addEventListener('click', togglePracticePart);
        practiceDOM.closeModalBtn.addEventListener('click', hideMobilePractice);
        practiceDOM.mobileModal.addEventListener('click', (e) => {
            if (e.target === practiceDOM.mobileModal) {
                hideMobilePractice();
            }
        });

        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Sorry, your browser does not support the Web Speech API.'); return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false; recognition.interimResults = false; recognition.lang = 'en-US';
        practiceDOM.micBtn.addEventListener('click', toggleListening);
        practiceDOM.playTargetSoundBtn.addEventListener('click', async () => {
            if (currentPracticeWord && !isListening) {
                practiceDOM.micBtn.disabled = true;
                await playWord(currentPracticeWord.word);
                practiceDOM.micBtn.disabled = false;
            }
        });
        recognition.onstart = () => { isListening = true; updateMicButtonUI(); };
        recognition.onresult = handleRecognitionResult;
        recognition.onerror = handleRecognitionError;
        recognition.onend = () => {
            isListening = false; updateMicButtonUI();
            if (!practiceDOM.statusDiv.textContent.includes('Error')) {
                practiceDOM.statusDiv.textContent = "Finished. Click mic to try again.";
            }
        };
    }

    function hideMobilePractice() {
        practiceDOM.mobileModal.classList.add('hidden');
        if (isListening) {
            recognition.stop();
        }
        // Move content back to its original desktop container to restore the layout
        practiceDOM.detailsPanelContainer.appendChild(practiceDOM.detailsPanel);
    }

    function loadPracticePart(partIndex) {
        practiceDOM.vocabContainer.innerHTML = '';
        if (!vocabularyParts[partIndex]) return;
        vocabularyParts[partIndex].forEach((word, index) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'vocab-card bg-white p-4 rounded-lg shadow border border-gray-100';
            wordElement.addEventListener('click', () => selectPracticeWord(word, index, wordElement));
            wordElement.innerHTML = `<h3 class="font-semibold text-lg text-indigo-700">${word.word}</h3>`;
            practiceDOM.vocabContainer.appendChild(wordElement);
        });
        updatePracticePartIndicator();
        updateProgress();
    }

    function selectPracticeWord(word, index, element) {
        currentPracticeWord = word;
        practiceDOM.targetPhrase.textContent = word.word;
        practiceDOM.playTargetSoundBtn.classList.remove('hidden');
        practiceDOM.micBtn.disabled = false;
        practiceDOM.statusDiv.textContent = 'Click the mic to begin.';

        // Reset result box
        practiceDOM.resultDiv.innerHTML = 'Your result will appear here.';
        practiceDOM.resultDiv.className = 'result-box';

        // FIX 1: Reset transcript when selecting a new word
        practiceDOM.transcriptText.textContent = 'No speech detected yet.';

        document.querySelectorAll('#practice-vocab-container .vocab-card').forEach(el => el.classList.remove('active'));
        element.classList.add('active');

        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            // Move the panel into the modal and show it
            practiceDOM.mobileContent.appendChild(practiceDOM.detailsPanel);
            practiceDOM.mobileModal.classList.remove('hidden');
        }
    }

    async function checkMicrophonePermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach(track => track.stop());
            practiceDOM.permissionSection.style.display = 'none';
            if (currentPracticeWord) practiceDOM.micBtn.disabled = false;
            return true;
        } catch (error) {
            practiceDOM.permissionSection.style.display = 'block';
            practiceDOM.micBtn.disabled = true;
            return false;
        }
    }

    async function toggleListening() {
        if (!currentPracticeWord) return;
        const hasPermission = await checkMicrophonePermission();
        if (!hasPermission) return;
        if (isListening) { recognition.stop(); }
        else {
            try {
                recognition.start();
                practiceDOM.statusDiv.textContent = '🎤 Listening...';
                practiceDOM.resultDiv.innerHTML = '';
                practiceDOM.resultDiv.className = 'result-box';
            } catch (e) { console.error("Error starting recognition: ", e); }
        }
    }

    function updateMicButtonUI() {
        const icon = practiceDOM.micBtn.querySelector('i');
        const text = practiceDOM.micBtn.querySelector('span');
        if (isListening) {
            practiceDOM.micBtn.classList.add('listening');
            icon.className = 'fas fa-stop'; text.textContent = 'Stop';
        } else {
            practiceDOM.micBtn.classList.remove('listening');
            icon.className = 'fas fa-microphone'; text.textContent = 'Start Listening';
        }
    }

    function handleRecognitionResult(event) {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript.trim().toLowerCase().replace(/[.,!?]/g, '');
        const originalTranscript = result[0].transcript.trim();
        const target = currentPracticeWord.word.trim().toLowerCase().replace(/[.,!?]/g, '');
        practiceDOM.transcriptText.textContent = originalTranscript;

        if (transcript === target) {
            practiceDOM.resultDiv.innerHTML = `
            <h3><i class="fas fa-check-circle"></i> Perfect!</h3>
            <p class="feedback-transcript">You said: "<strong>${originalTranscript}</strong>"</p>`;
            practiceDOM.resultDiv.className = 'result-box success';
            const wordIndex = vocabularyParts[currentPart.practice].findIndex(w => w.word === currentPracticeWord.word);
            if (wordIndex !== -1 && !progress.practice[currentPart.practice].has(wordIndex)) {
                progress.practice[currentPart.practice].add(wordIndex);
                updateProgress();
            }
        } else {
            practiceDOM.resultDiv.innerHTML = `
            <h3><i class="fas fa-times-circle"></i> Not Quite Right</h3>
            <p class="feedback-transcript">You said: "<strong>${originalTranscript}</strong>"</p>`;
            practiceDOM.resultDiv.className = 'result-box failure';
        }
    }

    function handleRecognitionError(event) {
        console.error('Recognition error:', event.error);
        let errorMessage = `Error: ${event.error}`;
        if (event.error === 'not-allowed') errorMessage = '🚫 Mic access denied.';
        if (event.error === 'no-speech') {
            errorMessage = '🔇 No speech detected.';
            practiceDOM.resultDiv.innerHTML = `<p>No speech recognized. Please try again.</p>`;
            practiceDOM.resultDiv.className = 'result-box failure';
        }
        practiceDOM.statusDiv.textContent = errorMessage;
    }

    function togglePracticePart() {
        currentPart.practice = (currentPart.practice + 1) % vocabularyParts.length;
        loadPracticePart(currentPart.practice);
    }

    function updatePracticePartIndicator() {
        practiceDOM.partIndicator.textContent = `Part ${currentPart.practice + 1} of ${vocabularyParts.length}`;
        practiceDOM.loadMoreBtn.textContent = currentPart.practice === 0 ? 'Load More Words' : 'Back to Part 1';
        practiceDOM.loadMoreBtn.classList.remove('hidden');
    }

    // ===================================
    // =========== QUIZ MODE =============
    // ===================================
    const quizDOM = {
        container: document.getElementById('quiz-container'),
        results: document.getElementById('quiz-results'),
        counter: document.getElementById('question-counter'),
        text: document.getElementById('question-text'),
        options: document.getElementById('options-container'),
        feedback: document.getElementById('feedback'),
        nextBtn: document.getElementById('next-question-btn'),
        restartBtn: document.getElementById('restart-quiz-btn'),
        scoreDisplay: document.getElementById('score-display'),
        totalDisplay: document.getElementById('total-questions-display')
    };
    let currentQuestionIndex = 0, score = 0, selectedQuestions = [];

    function initQuizMode() {
        quizDOM.nextBtn.addEventListener('click', () => { currentQuestionIndex++; displayQuestion(); });
        quizDOM.restartBtn.addEventListener('click', startQuiz);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startQuiz() {
        currentQuestionIndex = 0; score = 0;
        selectedQuestions = shuffleArray([...quizQuestions]).slice(0, 10);
        quizDOM.container.classList.remove('hidden');
        quizDOM.results.classList.add('hidden');
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex >= selectedQuestions.length) {
            showResults();
            return;
        }
        const questionData = selectedQuestions[currentQuestionIndex];
        quizDOM.counter.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
        quizDOM.text.textContent = questionData.question;
        quizDOM.options.innerHTML = '';
        quizDOM.feedback.textContent = '';
        quizDOM.feedback.className = 'mt-4 font-semibold text-center h-6';
        quizDOM.nextBtn.classList.add('hidden');
        shuffleArray([...questionData.options]).forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => checkAnswer(option, questionData.answer, button));
            quizDOM.options.appendChild(button);
        });
    }

    function checkAnswer(selectedOption, correctAnswer, button) {
        const options = document.querySelectorAll('.option-btn');
        options.forEach(opt => {
            opt.disabled = true;
            if (opt.textContent === correctAnswer) opt.classList.add('correct');
        });
        if (selectedOption === correctAnswer) {
            quizDOM.feedback.textContent = "Correct!";
            quizDOM.feedback.classList.add('correct');
            score++;
        } else {
            button.classList.add('incorrect');
            quizDOM.feedback.textContent = `Incorrect. The answer is highlighted.`;
            quizDOM.feedback.classList.add('incorrect');
        }
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            quizDOM.nextBtn.classList.remove('hidden');
        } else {
            setTimeout(showResults, 1500);
        }
    }

    function showResults() {
        quizDOM.container.classList.add('hidden');
        quizDOM.results.classList.remove('hidden');
        quizDOM.scoreDisplay.textContent = score;
        quizDOM.totalDisplay.textContent = selectedQuestions.length;
    }

    // ===== START THE APP =====
    init();
});
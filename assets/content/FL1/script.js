// DOM Elements - Navigation and Sections
const studyNavBtn = document.getElementById('study-nav-btn');
const practiceNavBtn = document.getElementById('practice-nav-btn');
const studySection = document.getElementById('study-section');
const practiceSection = document.getElementById('practice-section');

// DOM Elements - Practice Mode
const enableMicBtn = document.getElementById('enable-mic-btn');
const micNotice = document.getElementById('mic-notice');
const practiceCardsContainer = document.getElementById('practice-cards-container');

// DOM Elements - Progress (Single for both modes)
const progressRingCircle = document.querySelector('.progress-ring-circle');
const progressPercentage = document.querySelector('.progress-percentage');
const mobileProgressFill = document.querySelector('.mobile-progress-fill');
const mobileProgressText = document.querySelector('.mobile-progress-text');

// DOM Elements - Study Mode Controls
const expandAllBtn = document.getElementById('expand-all-btn');
const collapseAllBtn = document.getElementById('collapse-all-btn');
const functionCards = document.querySelectorAll('.function-card');

// State Management
let currentAudio = null;
let recognition = null;
let microphoneEnabled = false;
let currentMode = 'study'; // 'study' or 'practice'

// Practice Items (12 most important phrases - 8-10 words each, no proper nouns)
const practiceItems = [
    {
        text: "Good morning. How are you doing today?",
        audio: "sound/audio01.mp3",
        acceptedVariants: [
            "good morning how are you doing today",
            "good morning how are you",
            "morning how are you doing today"
        ]
    },
    {
        text: "What is your name and rank?",
        audio: "sound/audio02.mp3",
        acceptedVariants: [
            "what is your name and rank",
            "whats your name and rank",
            "what's your name and rank"
        ]
    },
    {
        text: "Where are you from?",
        audio: "sound/audio03.mp3",
        acceptedVariants: [
            "where are you from",
            "where do you come from",
            "where are you coming from"
        ]
    },
    {
        text: "I start my watch at eight hundred hours.",
        audio: "sound/audio04.mp3",
        acceptedVariants: [
            "i start my watch at eight hundred hours",
            "i start my watch at 8 hundred hours",
            "i start my watch at 800 hours",
            "i start my watch at zero eight hundred hours"
        ]
    },
    {
        text: "It's eight thirty in the morning.",
        audio: "sound/audio05.mp3",
        acceptedVariants: [
            "its eight thirty in the morning",
            "it's eight thirty in the morning",
            "its 8 thirty in the morning",
            "its eight 30 in the morning"
        ]
    },
    {
        text: "Could I speak to the chief officer please?",
        audio: "sound/audio06.mp3",
        acceptedVariants: [
            "could i speak to the chief officer please",
            "could i speak to the chief officer",
            "can i speak to the chief officer please",
            "may i speak to the chief officer please"
        ]
    },
    {
        text: "Please check the oil pressure gauge.",
        audio: "sound/audio07.mp3",
        acceptedVariants: [
            "please check the oil pressure gauge",
            "check the oil pressure gauge",
            "please check the oil pressure gage"
        ]
    },
    {
        text: "Understood. I will do that right away.",
        audio: "sound/audio08.mp3",
        acceptedVariants: [
            "understood i will do that right away",
            "understood i'll do that right away",
            "understood ill do that right away",
            "understood i will do it right away"
        ]
    },
    {
        text: "Can we schedule a meeting for tomorrow afternoon?",
        audio: "sound/audio09.mp3",
        acceptedVariants: [
            "can we schedule a meeting for tomorrow afternoon",
            "can we schedule a meeting tomorrow afternoon",
            "could we schedule a meeting for tomorrow afternoon"
        ]
    },
    {
        text: "I would like to book a berth for three crew members.",
        audio: "sound/audio10.mp3",
        acceptedVariants: [
            "i would like to book a berth for three crew members",
            "i'd like to book a berth for three crew members",
            "id like to book a berth for three crew members",
            "i would like to book a berth for 3 crew members"
        ]
    },
    {
        text: "I will have the grilled chicken please.",
        audio: "sound/audio11.mp3",
        acceptedVariants: [
            "i will have the grilled chicken please",
            "i'll have the grilled chicken please",
            "ill have the grilled chicken please",
            "i will have the grilled chicken"
        ]
    },
    {
        text: "Could you help me with this please?",
        audio: "sound/audio12.mp3",
        acceptedVariants: [
            "could you help me with this please",
            "could you help me with this",
            "can you help me with this please",
            "would you help me with this please"
        ]
    }
];

// Progress tracking
let practiceProgress = new Set();

// ==================== PROGRESS UPDATE ====================
function updateProgress() {
    let percentage = 0;
    
    if (currentMode === 'study') {
        // Count open details
        const openDetails = Array.from(functionCards).filter(card => card.open);
        percentage = functionCards.length > 0 
            ? Math.round((openDetails.length / functionCards.length) * 100)
            : 0;
    } else if (currentMode === 'practice') {
        // Count completed practice items
        percentage = practiceItems.length > 0
            ? Math.round((practiceProgress.size / practiceItems.length) * 100)
            : 0;
    }
    
    // Update all progress displays
    progressPercentage.textContent = `${percentage}%`;
    mobileProgressText.textContent = `${percentage}%`;
    mobileProgressFill.style.width = `${percentage}%`;
    
    // Update progress ring
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (percentage / 100) * circumference;
    progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRingCircle.style.strokeDashoffset = offset;
}

// ==================== NAVIGATION ====================
studyNavBtn.addEventListener('click', () => {
    studyNavBtn.classList.add('active');
    practiceNavBtn.classList.remove('active');
    studySection.classList.add('active');
    practiceSection.classList.remove('active');
    currentMode = 'study';
    updateProgress();
});

practiceNavBtn.addEventListener('click', () => {
    practiceNavBtn.classList.add('active');
    studyNavBtn.classList.remove('active');
    practiceSection.classList.add('active');
    studySection.classList.remove('active');
    currentMode = 'practice';
    updateProgress();
});

// ==================== STUDY MODE ====================
// Track progress when sections are opened/closed
functionCards.forEach(card => {
    card.addEventListener('toggle', () => {
        updateProgress();
    });
});

// Expand All button
expandAllBtn.addEventListener('click', () => {
    functionCards.forEach(card => {
        card.open = true;
    });
    updateProgress();
});

// Collapse All button
collapseAllBtn.addEventListener('click', () => {
    functionCards.forEach(card => {
        card.open = false;
    });
    updateProgress();
});

// ==================== PRACTICE MODE ====================
// Initialize Practice Mode
function initializePracticeMode() {
    practiceCardsContainer.innerHTML = '';
    
    practiceItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'practice-card';
        card.innerHTML = `
            <div class="practice-text">${item.text}</div>
            <div class="practice-actions">
                <button class="practice-btn listen-btn" data-index="${index}">
                    <i class="fas fa-volume-up"></i>
                    <span>Listen</span>
                </button>
                <button class="practice-btn record-btn" data-index="${index}">
                    <i class="fas fa-microphone"></i>
                    <span>Record</span>
                </button>
            </div>
            <div class="practice-result"></div>
        `;
        
        practiceCardsContainer.appendChild(card);
    });
    
    // Add event listeners
    document.querySelectorAll('.listen-btn').forEach(btn => {
        btn.addEventListener('click', handleListen);
    });
    
    document.querySelectorAll('.record-btn').forEach(btn => {
        btn.addEventListener('click', handleRecord);
    });
}

// Handle Listen Button - FIXED VERSION
function handleListen(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    const item = practiceItems[index];
    const card = e.currentTarget.closest('.practice-card');
    
    // Stop any currently playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
        // Remove playing class from all cards
        document.querySelectorAll('.practice-card').forEach(c => c.classList.remove('playing'));
    }
    
    // Disable all buttons
    disableAllButtons();
    
    // Create and play new audio
    currentAudio = new Audio(item.audio);
    card.classList.add('playing');
    
    // Use onended instead of addEventListener to avoid multiple listeners
    currentAudio.onended = () => {
        card.classList.remove('playing');
        currentAudio = null;
        enableAllButtons();
    };
    
    // Handle all possible errors
    currentAudio.onerror = (error) => {
        console.error('Audio error:', error);
        card.classList.remove('playing');
        
        // Determine error type
        let errorMessage = 'Audio file error. ';
        if (currentAudio.error) {
            switch(currentAudio.error.code) {
                case 1: // MEDIA_ERR_ABORTED
                    errorMessage += 'Playback was aborted.';
                    break;
                case 2: // MEDIA_ERR_NETWORK
                    errorMessage += 'Network error while loading audio.';
                    break;
                case 3: // MEDIA_ERR_DECODE
                    errorMessage += 'Audio file is corrupted or format not supported.';
                    break;
                case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                    errorMessage += `Audio file not found: ${item.audio}`;
                    break;
                default:
                    errorMessage += 'Unknown error occurred.';
            }
        }
        
        alert(errorMessage + '\n\nPlease ensure audio files are in the sound/ folder.');
        currentAudio = null;
        enableAllButtons();
    };
    
    // Start playing
    currentAudio.play().catch(err => {
        console.error('Play error:', err);
        card.classList.remove('playing');
        alert('Could not play audio. Please check the file and try again.');
        currentAudio = null;
        enableAllButtons();
    });
}

// Handle Record Button
function handleRecord(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    const item = practiceItems[index];
    const card = e.currentTarget.closest('.practice-card');
    const resultDiv = card.querySelector('.practice-result');
    const recordBtn = e.currentTarget;
    
    // Stop any playing audio before recording
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
        document.querySelectorAll('.practice-card').forEach(c => c.classList.remove('playing'));
    }
    
    if (!microphoneEnabled) {
        alert('Please enable microphone access first.');
        return;
    }
    
    // Disable all buttons during recording
    disableAllButtons();
    card.classList.add('recording');
    recordBtn.innerHTML = '<i class="fas fa-circle"></i><span>Recording...</span>';
    
    // Start recognition
    recognition.start();
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const normalizedTranscript = normalizeText(transcript);
        
        // Check if any variant matches
        const isCorrect = item.acceptedVariants.some(variant => 
            calculateSimilarity(normalizedTranscript, variant) >= 0.85
        );
        
        if (isCorrect) {
            practiceProgress.add(index);
            resultDiv.className = 'practice-result success';
            resultDiv.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <div>Excellent! You said: "${transcript}"</div>
            `;
        } else {
            resultDiv.className = 'practice-result error';
            resultDiv.innerHTML = `
                <i class="fas fa-times-circle"></i>
                <div>
                    <div>You said: "${transcript}"</div>
                    <div class="expected">Expected: "${item.text}"</div>
                    <button class="retry-btn" onclick="this.closest('.practice-card').querySelector('.record-btn').click()">
                        <i class="fas fa-redo"></i> Try Again
                    </button>
                </div>
            `;
        }
        
        // Reset button and re-enable all
        card.classList.remove('recording');
        recordBtn.innerHTML = '<i class="fas fa-microphone"></i><span>Record</span>';
        enableAllButtons();
        updateProgress();
    };
    
    recognition.onerror = (event) => {
        console.error('Recognition error:', event.error);
        card.classList.remove('recording');
        recordBtn.innerHTML = '<i class="fas fa-microphone"></i><span>Record</span>';
        
        if (event.error === 'no-speech') {
            resultDiv.className = 'practice-result error';
            resultDiv.innerHTML = `
                <i class="fas fa-exclamation-circle"></i>
                <div>No speech detected. Please try again.</div>
            `;
        } else {
            alert(`Recognition error: ${event.error}`);
        }
        
        enableAllButtons();
    };
    
    recognition.onend = () => {
        card.classList.remove('recording');
        recordBtn.innerHTML = '<i class="fas fa-microphone"></i><span>Record</span>';
    };
}

// Disable all buttons (anti-cheat system)
function disableAllButtons() {
    document.querySelectorAll('.listen-btn, .record-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });
}

// Enable all buttons
function enableAllButtons() {
    document.querySelectorAll('.listen-btn, .record-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
    });
}

// Normalize text (remove punctuation, lowercase, trim extra spaces)
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove all punctuation
        .replace(/\s+/g, ' ')    // Replace multiple spaces with single space
        .trim();
}

// Calculate similarity between two strings
function calculateSimilarity(str1, str2) {
    if (str1 === str2) return 1;
    
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

// Levenshtein distance algorithm
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Enable Microphone
enableMicBtn.addEventListener('click', async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Initialize Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        microphoneEnabled = true;
        micNotice.classList.add('hidden');
        practiceCardsContainer.classList.remove('hidden');
        
        // Initialize practice cards
        initializePracticeMode();
        updateProgress();
        
    } catch (error) {
        console.error('Microphone access error:', error);
        alert('Could not access microphone. Please check your browser settings.');
    }
});

// Initialize on page load
updateProgress();
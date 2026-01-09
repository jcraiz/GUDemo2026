/* ============================================ */
/* NAVY ENGLISH LEARNING PLATFORM - JAVASCRIPT */
/* Colombian Navy Theme */
/* ============================================ */

/* ============================================ */
/* SECTION 1: GRAMMAR CONTENT FUNCTIONS */
/* ============================================ */

// Toggle fullscreen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error enabling full-screen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Collapse all accordion sections
function collapseAll() {
    const details = document.querySelectorAll('details');
    details.forEach(detail => detail.removeAttribute('open'));
    updateProgress();
}

// Expand all accordion sections
function expandAll() {
    const details = document.querySelectorAll('details');
    details.forEach(detail => detail.setAttribute('open', ''));
    updateProgress();
}

// Update progress indicator (circle and bar)
function updateProgress() {
    const details = document.querySelectorAll('details');
    const openDetails = document.querySelectorAll('details[open]');
    const progress = (openDetails.length / details.length) * 100;
    
    // Desktop Circle Progress
    const progressRing = document.getElementById('progressRing');
    const desktopProgressText = document.getElementById('desktopProgressText');
    const circumference = 2 * Math.PI * 54; // 2πr where r=54
    const offset = circumference - (progress / 100) * circumference;
    
    if (progressRing) progressRing.style.strokeDashoffset = offset;
    if (desktopProgressText) desktopProgressText.textContent = Math.round(progress) + '%';

    // Mobile Bar Progress
    const progressBarFill = document.getElementById('progressBarFill');
    const mobileProgressText = document.getElementById('mobileProgressText');

    if (progressBarFill) progressBarFill.style.width = progress + '%';
    if (mobileProgressText) mobileProgressText.textContent = Math.round(progress) + '%';
}

// Initialize progress tracking on page load
document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
        detail.addEventListener('toggle', updateProgress);
    });
    updateProgress();

    // Smooth scroll when opening details
    details.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
});


/* ============================================ */
/* SECTION 2: PRACTICE MODE - QUESTION BANK */
/* TO UPDATE QUESTIONS: Edit the allQuestions array below */
/* ============================================ */

const allQuestions = [
    // ===== MULTIPLE CHOICE QUESTIONS (20 questions) =====
    {
        type: "multiple-choice",
        question: "Complete the sentence: I _____ a member of the Colombian Navy.",
        options: ["am", "is", "are", "be"],
        answer: "am"
    },
    {
        type: "multiple-choice",
        question: "Select the correct article: She is _____ admiral.",
        options: ["a", "an", "the", "- (no article)"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct question for this answer: 'My name is Andrés.'",
        options: ["Where is Andrés?", "Who is Andrés?", "How is Andrés?", "What is your name?"],
        answer: "What is your name?"
    },
    {
        type: "multiple-choice",
        question: "Replace the subject with a pronoun: 'The sailors are on the deck.'",
        options: ["He is", "She is", "It is", "They are"],
        answer: "They are"
    },
    {
        type: "multiple-choice",
        question: "Make this sentence negative: 'The ship is in port.'",
        options: ["The ship not in port.", "The ship not is in port.", "The ship isn't in port.", "The ship not to be in port"],
        answer: "The ship isn't in port."
    },
    {
        type: "multiple-choice",
        question: "Choose the correct yes/no question.",
        options: ["You are the captain?", "Are you the captain?", "You are the captain?", "Do you are the captain?"],
        answer: "Are you the captain?"
    },
    {
        type: "multiple-choice",
        question: "Complete with the correct 'Wh-' word: '_____ is the headquarters? In Cartagena.'",
        options: ["What", "Who", "Where", "How"],
        answer: "Where"
    },
    {
        type: "multiple-choice",
        question: "Select the correct sentence.",
        options: ["He are a lieutenant.", "He is a lieutenant.", "He am a lieutenant.", "He be a lieutenant."],
        answer: "He is a lieutenant."
    },
    {
        type: "multiple-choice",
        question: "What is the contracted form of 'is not'?",
        options: ["isn't", "aren't", "not's", "isnt"],
        answer: "isn't"
    },
    {
        type: "multiple-choice",
        question: "Complete: 'My brothers _____ engineers in Barranquilla.'",
        options: ["am", "is", "are", "be"],
        answer: "are"
    },
    // Contexto Naval (30%) - Preguntas 11 a 16
    {
        type: "multiple-choice",
        question: "On board, the commanding officer _____ on the bridge right now.",
        options: ["am", "is", "are", "be"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "The ARC 'Gloria' _____ a training ship of the Colombian Navy.",
        options: ["am", "is", "are", "be"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "We _____ sailors from the Pacific Fleet.",
        options: ["am", "is", "are", "be"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "_____ is your assigned rank? - I am a Petty Officer.",
        options: ["What", "Who", "Where", "How"],
        answer: "What"
    },
    {
        type: "multiple-choice",
        question: "The patrol boats _____ not in Covenas; they are at sea.",
        options: ["am", "is", "are", "be"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "Is the doctor on the base? - No, _____ .",
        options: ["he isn't", "she isn't", "it isn't", "they aren't"],
        answer: "he isn't"
    },
    // Contexto Civil (70%) - Preguntas 17 a 20
    {
        type: "multiple-choice",
        question: "My sister _____ a university student in Bogotá.",
        options: ["am", "is", "are", "be"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "Where _____ my shoes? I can't find them.",
        options: ["am", "is", "are", "be"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "Carlos and Maria _____ at the cinema tonight.",
        options: ["am", "is", "are", "be"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "This is my house. _____ big and comfortable.",
        options: ["He is", "She is", "It is", "They are"],
        answer: "It is"
    },

    // ===== TRUE/FALSE QUESTIONS (20 questions) =====
    {
        type: "true-false",
        question: "We use 'am' with the pronouns 'I', 'you', and 'we'.",
        answer: false,
        comment: "False. We use 'am' ONLY with 'I'. 'You' and 'we' use 'are'."
    },
    {
        type: "true-false",
        question: "The correct question for 'He is from Cali.' is 'Is he from Cali?'",
        answer: true
    },
    {
        type: "true-false",
        question: "We say 'a officer' because 'officer' starts with the letter 'o'.",
        answer: false,
        comment: "False. We say 'an officer' because it starts with a vowel SOUND /ɒ/."
    },
    {
        type: "true-false",
        question: "'Who' is used to ask about a person or people.",
        answer: true
    },
    {
        type: "true-false",
        question: "The pronoun for 'mi mamá y yo' is 'we'.",
        answer: true
    },
    {
        type: "true-false",
        question: "'They isn't happy' is a correct negative sentence.",
        answer: false,
        comment: "False. The correct form is 'They aren't happy' or 'They are not happy'."
    },
    {
        type: "true-false",
        question: "'What is your mission?' is a correct 'Wh-' question in a military context.",
        answer: true
    },
    {
        type: "true-false",
        question: "We can use 'it' to talk about an animal, a ship, or a city.",
        answer: true
    },
    // Contexto Naval (30%) - Preguntas 29 a 34
    {
        type: "true-false",
        question: "In the Navy, 'You are at your post' is a correct sentence.",
        answer: true
    },
    {
        type: "true-false",
        question: "The sentence 'The recruits am in training' is grammatically correct.",
        answer: false,
        comment: "False. 'Recruits' is plural (they), so it should be 'The recruits are in training'."
    },
    {
        type: "true-false",
        question: "'Where is the mess deck?' is a question about location on a ship.",
        answer: true
    },
    {
        type: "true-false",
        question: "The contracted form of 'The ship is not ready' is 'The ship isn't ready'.",
        answer: true
    },
    {
        type: "true-false",
        question: "We ask 'Who is on watch?' to know the time.",
        answer: false,
        comment: "False. 'Who is on watch?' asks for the person, not the time."
    },
    {
        type: "true-false",
        question: "The pronoun for 'the frigate' is 'she' in traditional nautical English.",
        answer: true
    },
    // Contexto Civil (70%) - Preguntas 35 a 40
    {
        type: "true-false",
        question: "'My parents is at work' is a correct sentence.",
        answer: false,
        comment: "False. 'Parents' is plural, so it should be 'My parents are at work'."
    },
    {
        type: "true-false",
        question: "We say 'an uniform' because 'uniform' starts with 'u'.",
        answer: false,
        comment: "False. We say 'a uniform' because it starts with a consonant sound /j/ (like 'you')."
    },
    {
        type: "true-false",
        question: "'How are you?' is a common greeting in everyday English.",
        answer: true
    },
    {
        type: "true-false",
        question: "The question for the answer 'It is 10 o'clock' is 'What time is it?'",
        answer: true
    },
    {
        type: "true-false",
        question: "'I'm not Colombian, I'm Peruvian' is a correct use of contractions.",
        answer: true
    },
    {
        type: "true-false",
        question: "We use 'he' or 'she' for a pet dog if we know its gender.",
        answer: true
    }
];

/* ============================================ */
/* SECTION 3: PRACTICE MODE LOGIC */
/* ============================================ */

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const NUMBER_OF_QUESTIONS = 20;

// DOM Elements
const grammarContent = document.getElementById('grammarContent');
const practiceModeDiv = document.getElementById('practiceMode');
const quizContainer = document.getElementById('quizContainer');
const quizResultsDiv = document.getElementById('quizResults');
const questionText = document.getElementById('questionText');
const questionCounter = document.getElementById('questionCounter');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackDiv = document.getElementById('feedback');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const scoreDisplay = document.getElementById('scoreDisplay');
const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');
const performanceMessage = document.getElementById('performanceMessage');
const practiceModeBtn = document.getElementById('practiceModeBtn');

// Shuffle array utility
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Select random questions (balanced mix)
function selectRandomQuestions() {
    const mcQuestions = allQuestions.filter(q => q.type === "multiple-choice");
    const tfQuestions = allQuestions.filter(q => q.type === "true-false");

    const shuffledMc = shuffleArray(mcQuestions);
    const shuffledTf = shuffleArray(tfQuestions);

    const numMc = Math.min(NUMBER_OF_QUESTIONS / 2, shuffledMc.length);
    const numTf = Math.min(NUMBER_OF_QUESTIONS - numMc, shuffledTf.length);

    let chosenQuestions = [];
    chosenQuestions.push(...shuffledMc.slice(0, numMc));
    chosenQuestions.push(...shuffledTf.slice(0, numTf));

    // Fill remaining if needed
    if (chosenQuestions.length < NUMBER_OF_QUESTIONS) {
        const remainingNeeded = NUMBER_OF_QUESTIONS - chosenQuestions.length;
        const remainingMc = shuffledMc.slice(numMc);
        const remainingTf = shuffledTf.slice(numTf);
        chosenQuestions.push(...shuffleArray([...remainingMc, ...remainingTf]).slice(0, remainingNeeded));
    }

    selectedQuestions = shuffleArray(chosenQuestions);
}

// Display current question
function displayQuestion() {
    nextQuestionBtn.style.display = 'none';
    feedbackDiv.textContent = '';
    optionsContainer.innerHTML = '';

    if (currentQuestionIndex < selectedQuestions.length) {
        const questionData = selectedQuestions[currentQuestionIndex];
        
        // Update question counter
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
        
        questionText.textContent = questionData.question;

        if (questionData.type === "multiple-choice") {
            shuffleArray(questionData.options).forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn');
                button.onclick = () => checkAnswer(option, questionData.answer, button);
                optionsContainer.appendChild(button);
            });
        } else if (questionData.type === "true-false") {
            const trueButton = document.createElement('button');
            trueButton.textContent = "True ✓";
            trueButton.classList.add('option-btn');
            trueButton.onclick = () => checkAnswer(true, questionData.answer, trueButton);
            optionsContainer.appendChild(trueButton);

            const falseButton = document.createElement('button');
            falseButton.textContent = "False ✗";
            falseButton.classList.add('option-btn');
            falseButton.onclick = () => checkAnswer(false, questionData.answer, falseButton);
            optionsContainer.appendChild(falseButton);
        }
    } else {
        showResults();
    }
}

// Check user's answer
function checkAnswer(selectedOption, correctAnswer, clickedButton) {
    // Disable all buttons
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        
        // Highlight correct answer
        if (button.textContent.includes(String(correctAnswer)) || 
            (correctAnswer === true && button.textContent.includes("True")) ||
            (correctAnswer === false && button.textContent.includes("False"))) {
            button.classList.add('correct-answer-highlight');
        }
    });

    const isCorrect = String(selectedOption) === String(correctAnswer);
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    if (isCorrect) {
        feedbackDiv.innerHTML = '<strong style="color:#28a745;">✓ Correct! ¡Correcto!</strong>';
        feedbackDiv.style.background = 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)';
        score++;
        clickedButton.classList.add('correct-answer');
    } else {
        let feedbackHTML = '<strong style="color:#dc3545;">✗ Incorrect. ¡Incorrecto!</strong>';
        
        // Show explanatory comment only for wrong true/false answers
        if (currentQuestion.type === "true-false" && currentQuestion.comment) {
            feedbackHTML += '<div style="margin-top: 15px; padding: 12px; background: rgba(255,255,255,0.8); border-radius: 8px; font-style: italic; line-height: 1.5;">' +
                            currentQuestion.comment + '</div>';
        }
        
        feedbackDiv.innerHTML = feedbackHTML;
        feedbackDiv.style.background = 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)';
        clickedButton.classList.add('wrong-answer');
    }
    
    nextQuestionBtn.style.display = 'block';
}

// Show quiz results
function showResults() {
    quizContainer.style.display = 'none';
    quizResultsDiv.style.display = 'block';
    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = selectedQuestions.length;

    // Performance message
    const percentage = (score / selectedQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = "🎖️ Outstanding! You're ready for the next level!";
    } else if (percentage >= 75) {
        message = "⭐ Great job! Keep practicing to master it!";
    } else if (percentage >= 60) {
        message = "👍 Good effort! Review the material and try again!";
    } else {
        message = "📚 Keep studying! Practice makes perfect!";
    }
    
    performanceMessage.textContent = message;
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizResultsDiv.style.display = 'none';
    quizContainer.style.display = 'block';
    selectRandomQuestions();
    displayQuestion();
}

// Toggle between Practice and Study modes
function togglePracticeStudyMode() {
    if (grammarContent.style.display === 'none') {
        hidePracticeMode();
    } else {
        showPracticeMode();
    }
}

// Show Practice Mode
function showPracticeMode() {
    grammarContent.style.display = 'none';
    practiceModeDiv.classList.remove('practice-mode-hidden');
    practiceModeDiv.classList.add('practice-mode-visible');
    
    // Update button
    practiceModeBtn.innerHTML = '<i class="fas fa-book-open"></i> Study Mode';
    practiceModeBtn.classList.add('study-mode-btn');

    selectRandomQuestions();
    restartQuiz();
}

// Hide Practice Mode (return to Study Mode)
function hidePracticeMode() {
    practiceModeDiv.classList.remove('practice-mode-visible');
    practiceModeDiv.classList.add('practice-mode-hidden');
    grammarContent.style.display = 'block';

    // Update button
    practiceModeBtn.innerHTML = '<i class="fas fa-dumbbell"></i> Practice Mode';
    practiceModeBtn.classList.remove('study-mode-btn');
}

// Next Question button event
nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    practiceModeDiv.classList.add('practice-mode-hidden');
    quizResultsDiv.style.display = 'none';
});
// PHQ-9 Questions (Depression Screening)
const phq9Questions = [
    {
        question: "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by feeling bad about yourself or that you are a failure or have let yourself or your family down?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
        category: "Depression Screening (PHQ-9)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by thoughts that you would be better off dead, or of hurting yourself?",
        category: "Depression Screening (PHQ-9)",
        crisis: true
    }
];

// GAD-7 Questions (Anxiety Screening)
const gad7Questions = [
    {
        question: "Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
        category: "Anxiety Screening (GAD-7)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by not being able to stop or control worrying?",
        category: "Anxiety Screening (GAD-7)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by worrying too much about different things?",
        category: "Anxiety Screening (GAD-7)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by trouble relaxing?",
        category: "Anxiety Screening (GAD-7)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by being so restless that it is hard to sit still?",
        category: "Anxiety Screening (GAD-7)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by becoming easily annoyed or irritable?",
        category: "Anxiety Screening (GAD-7)"
    },
    {
        question: "Over the last 2 weeks, how often have you been bothered by feeling afraid, as if something awful might happen?",
        category: "Anxiety Screening (GAD-7)"
    }
];

// Response options
const responseOptions = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" }
];

// Chatbot responses
const chatbotResponses = [
    {
        keywords: ["anxious", "anxiety", "nervous", "panic", "worry", "worried", "afraid", "scared"],
        reply: "I hear that you are feeling anxious. That is completely valid. Try this: Take a deep breath in for 4 counts, hold for 7, and exhale for 8. Repeat this 3 times. Remember, anxiety is temporary and you have gotten through difficult moments before. You are stronger than you know. ??"
    },
    {
        keywords: ["sad", "depressed", "depression", "unhappy", "cry", "crying", "hopeless", "empty"],
        reply: "I am really sorry you are feeling this way. Please know that your feelings are valid and you do not have to go through this alone. Consider reaching out to a trusted friend, family member, or professional. If you are in crisis, please contact Sumithrayo at +94 11 269 2909. You matter, and there is hope even when it does not feel like it. ??"
    },
    {
        keywords: ["exam", "test", "study", "viva", "project", "deadline", "presentation", "academic", "school", "college", "university"],
        reply: "Academic stress can feel overwhelming. Remember: Your grades do not define your worth. Try breaking your work into small, manageable chunks. Take regular breaks, stay hydrated, and be kind to yourself. You are doing your best, and that is enough. One step at a time! ??"
    },
    {
        keywords: ["lonely", "alone", "isolated", "no friends", "nobody cares", "friendless"],
        reply: "Feeling lonely is painful, and I want you to know that your feelings are valid. It takes courage to admit loneliness. Consider joining a club, volunteering, or reaching out to an old friend. Sometimes just saying hello can open doors. You are worthy of connection and companionship. ??"
    },
    {
        keywords: ["homesick", "miss home", "missing family", "family", "parents", "mom", "dad"],
        reply: "Homesickness is a sign of the love you have for your family. It is completely natural. Try video calling them, looking at photos, or cooking a meal that reminds you of home. Stay connected - technology makes it easier than ever. This feeling will ease with time. ??"
    },
    {
        keywords: ["tired", "exhausted", "fatigue", "no energy", "burnout", "sleepy"],
        reply: "Your body is asking for rest, and that is okay. Prioritize sleep, even if it means saying no to other things. Try to establish a bedtime routine and limit screen time before bed. Self-care is not selfish - it is necessary. Rest is productive too. ??"
    },
    {
        keywords: ["angry", "mad", "frustrated", "annoyed", "irritated", "furious"],
        reply: "Anger is a valid emotion. It is telling you that something matters to you. Try taking a walk, doing some physical exercise, or writing down your feelings. Give yourself permission to feel angry, but also give yourself space to process it healthily. This feeling will pass. ??"
    },
    {
        keywords: ["stressed", "stress", "overwhelmed", "pressure", "too much", "cannot cope"],
        reply: "When everything feels like too much, pause. You do not have to solve everything right now. Focus on just the next small step. Take 5 deep breaths with me right now. You are capable, and you will get through this. One moment at a time. ??"
    },
    {
        keywords: ["help", "advice", "tip", "suggestion", "what should i do", "how to"],
        reply: "Here are some evidence-based coping strategies: 1) Practice mindfulness meditation, 2) Write in a journal, 3) Exercise regularly, 4) Connect with loved ones, 5) Get quality sleep, 6) Limit social media, 7) Practice gratitude daily. Which one would you like to try first? ??"
    },
    {
        keywords: ["happy", "good", "great", "awesome", "amazing", "better", "grateful", "thankful"],
        reply: "That is wonderful to hear! Celebrate these moments. Consider journaling about what is going well - it can help during tougher times. Keep spreading that positivity, and remember this feeling when things get challenging. You deserve happiness! ??"
    },
    {
        keywords: ["hurt myself", "self harm", "suicide", "kill myself", "end it all", "not worth living"],
        reply: "I am deeply concerned about what you have shared. Please know that you are not alone and help is available right now. Please contact Sumithrayo immediately at +94 11 269 2909 or CCCline at 1333. They are available 24/7 and want to help. You matter, and this pain is temporary even though it feels permanent right now. Please reach out. ??"
    }
];

// Affirmations
const affirmations = [
    "You are enough, just as you are.",
    "This feeling is temporary. You have survived 100% of your bad days.",
    "Your mental health is just as important as your physical health.",
    "It is okay to not be okay. You are still worthy of love and care.",
    "You are stronger than you think, and braver than you believe.",
    "Progress, not perfection. Every small step counts.",
    "You deserve compassion, especially from yourself.",
    "Your feelings are valid, even if they are difficult.",
    "You are not a burden. You are a human being deserving of support.",
    "Healing is not linear. Be patient with yourself.",
    "You have the strength to get through this, one moment at a time.",
    "Your best is enough. You are doing better than you think."
];

// Quiz state
let currentQuestion = 0;
let quizAnswers = [];
let allQuestions = [];

// Mood tracking
let selectedMood = null;
let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

// Theme
let currentTheme = localStorage.getItem("theme") || "dark";

// Timer
let timerInterval = null;
let timerSeconds = 300;
let isTimerRunning = false;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    initMoodTracker();
    initChatbot();
    updateMoodStats();
    initMoodChart();
    checkOnboarding();
});

// Onboarding
function checkOnboarding() {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
        document.getElementById("onboarding-modal").classList.remove("hidden");
    }
}

function nextOnboarding() {
    const currentStep = document.querySelector(".onboarding-step.active");
    const nextStep = currentStep.nextElementSibling;
    
    if (nextStep && nextStep.classList.contains("onboarding-step")) {
        currentStep.classList.remove("active");
        nextStep.classList.add("active");
        
        const dots = document.querySelectorAll(".dot");
        const currentIndex = parseInt(currentStep.dataset.step);
        dots[currentIndex].classList.add("active");
    }
}

function closeOnboarding() {
    document.getElementById("onboarding-modal").classList.add("hidden");
    localStorage.setItem("hasSeenOnboarding", "true");
}

// Theme
function initTheme() {
    document.documentElement.setAttribute("data-theme", currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
}

// Navigation
function initNavigation() {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const section = btn.dataset.section;
            showSection(section);
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    
    document.querySelector(`[data-section="${sectionId}"]`)?.classList.add("active");
    document.getElementById(`${sectionId}-section`)?.classList.add("active");
}

// Quiz
function startQuiz() {
    allQuestions = [...phq9Questions, ...gad7Questions];
    currentQuestion = 0;
    quizAnswers = [];
    
    document.getElementById("quiz-start").classList.add("hidden");
    document.getElementById("quiz-questions").classList.remove("hidden");
    document.getElementById("quiz-results").classList.add("hidden");
    
    document.getElementById("total-q").textContent = allQuestions.length;
    showQuestion();
}

function showQuestion() {
    const question = allQuestions[currentQuestion];
    document.getElementById("current-q").textContent = currentQuestion + 1;
    document.getElementById("question-category").textContent = question.category;
    document.getElementById("question-text").textContent = question.question;
    
    const optionsContainer = document.getElementById("question-options");
    optionsContainer.innerHTML = "";
    
    responseOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option.label;
        btn.onclick = () => selectAnswer(option.value);
        optionsContainer.appendChild(btn);
    });
    
    // Update progress
    const progress = ((currentQuestion) / allQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
    
    // Hide feedback
    document.getElementById("section-feedback").classList.add("hidden");
}

function selectAnswer(value) {
    quizAnswers.push(value);
    
    // Check for crisis question
    const question = allQuestions[currentQuestion];
    if (question.crisis && value > 0) {
        showCrisisModal();
    }
    
    currentQuestion++;
    
    if (currentQuestion < allQuestions.length) {
        // Show feedback between sections
        if (currentQuestion === phq9Questions.length) {
            showSectionFeedback("Depression section complete. Next: Anxiety screening.");
            setTimeout(showQuestion, 1500);
        } else {
            showQuestion();
        }
    } else {
        showResults();
    }
}

function showSectionFeedback(text) {
    const feedback = document.getElementById("section-feedback");
    document.getElementById("feedback-text").textContent = text;
    feedback.classList.remove("hidden");
}

function showResults() {
    document.getElementById("quiz-questions").classList.add("hidden");
    document.getElementById("quiz-results").classList.remove("hidden");
    
    // Calculate scores
    const phq9Score = quizAnswers.slice(0, 9).reduce((a, b) => a + b, 0);
    const gad7Score = quizAnswers.slice(9).reduce((a, b) => a + b, 0);
    
    // Display PHQ-9 results
    document.getElementById("phq9-score").textContent = phq9Score;
    const phq9Level = getPHQ9Level(phq9Score);
    document.getElementById("phq9-level").textContent = phq9Level.label;
    document.getElementById("phq9-level").className = `result-level ${phq9Level.class}`;
    document.getElementById("phq9-fill").style.width = `${(phq9Score / 27) * 100}%`;
    document.getElementById("phq9-fill").className = `result-fill ${phq9Level.class}`;
    document.getElementById("phq9-desc").textContent = phq9Level.desc;
    
    // Display GAD-7 results
    document.getElementById("gad7-score").textContent = gad7Score;
    const gad7Level = getGAD7Level(gad7Score);
    document.getElementById("gad7-level").textContent = gad7Level.label;
    document.getElementById("gad7-level").className = `result-level ${gad7Level.class}`;
    document.getElementById("gad7-fill").style.width = `${(gad7Score / 21) * 100}%`;
    document.getElementById("gad7-fill").className = `result-fill ${gad7Level.class}`;
    document.getElementById("gad7-desc").textContent = gad7Level.desc;
    
    // Generate recommendations
    const recommendations = generateRecommendations(phq9Score, gad7Score);
    document.getElementById("recommendations-list").innerHTML = recommendations;
    
    // Show crisis warning if needed
    const crisisWarning = document.getElementById("crisis-warning");
    if (phq9Score >= 20 || gad7Score >= 15 || quizAnswers[8] > 0) {
        crisisWarning.classList.remove("hidden");
    } else {
        crisisWarning.classList.add("hidden");
    }
}

function getPHQ9Level(score) {
    if (score <= 4) return { label: "Minimal", class: "low", desc: "Your depression symptoms are minimal. Continue practicing self-care." };
    if (score <= 9) return { label: "Mild", class: "mild", desc: "You may be experiencing mild depression. Consider talking to someone." };
    if (score <= 14) return { label: "Moderate", class: "moderate", desc: "Moderate depression symptoms detected. Professional support may help." };
    if (score <= 19) return { label: "Moderately Severe", class: "severe", desc: "Significant symptoms present. Please consider professional help." };
    return { label: "Severe", class: "severe", desc: "Severe depression symptoms. Please reach out to a mental health professional immediately." };
}

function getGAD7Level(score) {
    if (score <= 4) return { label: "Minimal", class: "low", desc: "Your anxiety levels are minimal. Keep up your wellness practices!" };
    if (score <= 9) return { label: "Mild", class: "mild", desc: "Mild anxiety detected. Try relaxation techniques and self-care." };
    if (score <= 14) return { label: "Moderate", class: "moderate", desc: "Moderate anxiety present. Consider speaking with a counselor." };
    return { label: "Severe", class: "severe", desc: "Severe anxiety symptoms. Professional support is recommended." };
}

function generateRecommendations(phq9, gad7) {
    let recs = "<ul>";
    
    if (phq9 >= 10 || gad7 >= 10) {
        recs += `<li><strong>Consider Professional Help:</strong> Your scores suggest significant symptoms. A mental health professional can provide personalized support.</li>`;
    }
    
    recs += `<li><strong>Practice Self-Care:</strong> Ensure you are getting 7-9 hours of sleep, eating well, and exercising regularly.</li>`;
    recs += `<li><strong>Try Breathing Exercises:</strong> Use our 4-7-8 breathing tool to manage anxiety in the moment.</li>`;
    recs += `<li><strong>Stay Connected:</strong> Reach out to friends or family. Social support is crucial for mental health.</li>`;
    recs += `<li><strong>Track Your Mood:</strong> Use our mood tracker to identify patterns and triggers.</li>`;
    
    if (phq9 >= 15 || gad7 >= 10) {
        recs += `<li><strong>Crisis Resources:</strong> Save Sumithrayo (+94 11 269 2909) and CCCline (1333) in your contacts.</li>`;
    }
    
    recs += "</ul>";
    return recs;
}

function retakeQuiz() {
    document.getElementById("quiz-results").classList.add("hidden");
    startQuiz();
}

// Crisis Modal
function showCrisisModal() {
    document.getElementById("crisis-modal").classList.remove("hidden");
}

function closeCrisisModal() {
    document.getElementById("crisis-modal").classList.add("hidden");
}

// Mood Tracker
function initMoodTracker() {
    document.querySelectorAll(".mood-face").forEach(face => {
        face.addEventListener("click", () => {
            document.querySelectorAll(".mood-face").forEach(f => f.classList.remove("selected"));
            face.classList.add("selected");
            selectedMood = {
                mood: face.dataset.mood,
                score: parseInt(face.dataset.score)
            };
        });
    });
}

function saveMood() {
    if (!selectedMood) {
        alert("Please select a mood first");
        return;
    }
    
    const note = document.getElementById("mood-note-input").value;
    const entry = {
        ...selectedMood,
        note,
        date: new Date().toISOString()
    };
    
    moodHistory.unshift(entry);
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
    
    // Reset
    document.querySelectorAll(".mood-face").forEach(f => f.classList.remove("selected"));
    document.getElementById("mood-note-input").value = "";
    selectedMood = null;
    
    updateMoodStats();
    updateMoodHistoryChart();
    renderMoodEntries();
    
    alert("Mood saved! Keep tracking to see patterns.");
}

function updateMoodStats() {
    const total = moodHistory.length;
    const positive = moodHistory.filter(m => m.score >= 4).length;
    const positivePercent = total > 0 ? Math.round((positive / total) * 100) : 0;
    
    // Calculate streak
    let streak = 0;
    const today = new Date().toDateString();
    const hasEntryToday = moodHistory.some(m => new Date(m.date).toDateString() === today);
    
    if (hasEntryToday || moodHistory.length === 0) {
        streak = calculateStreak();
    }
    
    document.getElementById("mood-total").textContent = total;
    document.getElementById("mood-streak").textContent = streak;
    document.getElementById("mood-positive").textContent = `${positivePercent}%`;
    
    // Update home stats
    document.getElementById("total-checkins").textContent = total;
    document.getElementById("current-streak").textContent = streak;
    document.getElementById("positive-days").textContent = positive;
}

function calculateStreak() {
    if (moodHistory.length === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(today.getDate() - i);
        const dateStr = checkDate.toDateString();
        
        const hasEntry = moodHistory.some(m => new Date(m.date).toDateString() === dateStr);
        if (hasEntry) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }
    
    return streak;
}

function renderMoodEntries() {
    const container = document.getElementById("mood-entries-list");
    if (!container) return;
    
    container.innerHTML = moodHistory.slice(0, 10).map(entry => {
        const date = new Date(entry.date);
        const emojiMap = {
            happy: "??", calm: "??", neutral: "??", sad: "??", anxious: "??", angry: "??"
        };
        
        return `
            <div class="mood-entry">
                <span style="font-size: 1.5rem">${emojiMap[entry.mood]}</span>
                <div class="mood-entry-info">
                    <div style="text-transform: capitalize; font-weight: 500">${entry.mood}</div>
                    <div class="mood-entry-date">${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}</div>
                    ${entry.note ? `<div class="mood-entry-note">${entry.note}</div>` : ""}
                </div>
            </div>
        `;
    }).join("");
}

// Charts
function initMoodChart() {
    const ctx = document.getElementById("moodChart");
    if (!ctx) return;
    
    updateMoodHistoryChart();
}

function updateMoodHistoryChart() {
    const ctx = document.getElementById("moodChart");
    const ctx2 = document.getElementById("moodHistoryChart");
    
    // Prepare data for last 7 days
    const labels = [];
    const data = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString("en", { weekday: "short" }));
        
        const dayEntry = moodHistory.find(m => {
            const mDate = new Date(m.date);
            return mDate.toDateString() === date.toDateString();
        });
        
        data.push(dayEntry ? dayEntry.score : null);
    }
    
    const chartConfig = {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: "Mood Score",
                data,
                borderColor: "#6366f1",
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: "#6366f1",
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    min: 1,
                    max: 5,
                    ticks: {
                        callback: function(value) {
                            const labels = {1: "Angry", 2: "Sad", 3: "Okay", 4: "Calm", 5: "Happy"};
                            return labels[value] || "";
                        },
                        color: getComputedStyle(document.body).getPropertyValue("--text-muted")
                    },
                    grid: { color: getComputedStyle(document.body).getPropertyValue("--border") }
                },
                x: {
                    ticks: { color: getComputedStyle(document.body).getPropertyValue("--text-muted") },
                    grid: { display: false }
                }
            }
        }
    };
    
    if (ctx) {
        if (window.moodChartInstance) window.moodChartInstance.destroy();
        window.moodChartInstance = new Chart(ctx, chartConfig);
    }
    
    if (ctx2) {
        if (window.moodHistoryChartInstance) window.moodHistoryChartInstance.destroy();
        window.moodHistoryChartInstance = new Chart(ctx2, chartConfig);
    }
}

// Chatbot
function initChatbot() {
    const input = document.getElementById("chat-input");
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendChatMessage();
    });
}

function sendChatMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (!message) return;
    
    addChatMessage(message, "user");
    input.value = "";
    
    setTimeout(() => {
        const response = getChatbotResponse(message);
        addChatMessage(response, "bot");
    }, 500);
}

function sendQuickReply(message) {
    addChatMessage(message, "user");
    setTimeout(() => {
        const response = getChatbotResponse(message);
        addChatMessage(response, "bot");
    }, 500);
}

function addChatMessage(text, sender) {
    const container = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function getChatbotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    for (const response of chatbotResponses) {
        if (response.keywords.some(keyword => lowerMsg.includes(keyword))) {
            return response.reply;
        }
    }
    
    const defaults = [
        "Thank you for sharing. I am here to listen. Remember, it is okay to take things one day at a time.",
        "I hear you. Your feelings are valid. Consider what small step you could take today for your well-being.",
        "That sounds challenging. Be gentle with yourself. Would you like to try a breathing exercise?",
        "I appreciate you opening up. Remember, seeking support is a sign of strength, not weakness."
    ];
    
    return defaults[Math.floor(Math.random() * defaults.length)];
}

// Breathing Exercise
function openBreathing() {
    document.getElementById("breathing-modal").classList.remove("hidden");
    animateBreathing();
}

function closeBreathing() {
    document.getElementById("breathing-modal").classList.add("hidden");
}

function animateBreathing() {
    const text = document.getElementById("breathing-text");
    const circle = document.getElementById("breathing-circle");
    
    let phase = 0;
    const phases = ["Breathe In", "Hold", "Breathe Out", "Hold"];
    const durations = [4000, 2000, 4000, 2000];
    
    const cycle = () => {
        if (document.getElementById("breathing-modal").classList.contains("hidden")) return;
        
        text.textContent = phases[phase];
        
        if (phase === 0) {
            circle.style.animation = "breathe 4s ease-in-out";
        } else if (phase === 2) {
            circle.style.animation = "none";
            circle.style.transform = "scale(1.3)";
            setTimeout(() => {
                circle.style.transition = "transform 4s ease-in-out";
                circle.style.transform = "scale(1)";
            }, 50);
        }
        
        setTimeout(() => {
            phase = (phase + 1) % 4;
            cycle();
        }, durations[phase]);
    };
    
    cycle();
}

// Journal
function openJournal() {
    document.getElementById("journal-modal").classList.remove("hidden");
}

function closeJournal() {
    document.getElementById("journal-modal").classList.add("hidden");
}

function saveJournal() {
    const entry = document.getElementById("journal-entry").value;
    if (!entry.trim()) {
        alert("Please write something before saving");
        return;
    }
    
    const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
    entries.unshift({
        text: entry,
        date: new Date().toISOString()
    });
    localStorage.setItem("journalEntries", JSON.stringify(entries));
    
    document.getElementById("journal-entry").value = "";
    alert("Journal entry saved!");
    closeJournal();
}

// Affirmations
function showAffirmation() {
    document.getElementById("affirmation-modal").classList.remove("hidden");
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("affirmation-text").textContent = random;
}

function closeAffirmation() {
    document.getElementById("affirmation-modal").classList.add("hidden");
}

// Timer
function openTimer() {
    document.getElementById("timer-modal").classList.remove("hidden");
}

function closeTimer() {
    document.getElementById("timer-modal").classList.add("hidden");
    resetTimer();
}

function setTimer(minutes) {
    timerSeconds = minutes * 60;
    updateTimerDisplay();
    
    document.querySelectorAll(".timer-controls button").forEach(btn => {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById("timer-display").textContent = 
        `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById("timer-start").innerHTML = "<i class=\"fas fa-play\"></i> Start";
        return;
    }
    
    isTimerRunning = true;
    document.getElementById("timer-start").innerHTML = "<i class=\"fas fa-pause\"></i> Pause";
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            alert("Meditation complete! Great job taking time for yourself. ??");
            document.getElementById("timer-start").innerHTML = "<i class=\"fas fa-play\"></i> Start";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 300;
    updateTimerDisplay();
    document.getElementById("timer-start").innerHTML = "<i class=\"fas fa-play\"></i> Start";
}

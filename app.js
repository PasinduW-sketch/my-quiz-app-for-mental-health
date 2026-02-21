// Mood data with expanded content
const moodData = {
    "Happy": {
        "message": "That is wonderful! Your positive energy is contagious. Keep spreading joy and remember to savor these beautiful moments.",
        "songs": [
            { "text": "Happy - Pharrell Williams", "url": "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
            { "text": "Good as Hell - Lizzo", "url": "https://www.youtube.com/watch?v=vuq-VAiW9kw" },
            { "text": "Walking on Sunshine", "url": "https://www.youtube.com/watch?v=iPUmE-tne5U" }
        ],
        "activities": [
            "Share your joy with someone you care about",
            "Write down 3 things you are grateful for",
            "Do something creative - draw, write, or dance",
            "Go outside and enjoy nature"
        ],
        "quote": "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama"
    },
    "Calm": {
        "message": "What a peaceful state to be in. Embrace this tranquility and let it recharge your spirit.",
        "songs": [
            { "text": "Weightless - Marconi Union", "url": "https://www.youtube.com/watch?v=UfcAVejslrU" },
            { "text": "River Flows in You", "url": "https://www.youtube.com/watch?v=7maJOI3QMu0" },
            { "text": "Clair de Lune", "url": "https://www.youtube.com/watch?v=WNcsUNKlOKw" }
        ],
        "activities": [
            "Practice mindful breathing for 5 minutes",
            "Read a book in your favorite spot",
            "Enjoy a warm cup of tea",
            "Do some gentle stretching"
        ],
        "quote": "Peace comes from within. Do not seek it without. - Buddha"
    },
    "Sad": {
        "message": "It is completely okay to feel sad. Your feelings are valid. Allow yourself to process these emotions with kindness and patience.",
        "songs": [
            { "text": "Fix You - Coldplay", "url": "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
            { "text": "Someone Like You - Adele", "url": "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
            { "text": "The Scientist - Coldplay", "url": "https://www.youtube.com/watch?v=RB-RcX5DS5A" }
        ],
        "activities": [
            "Reach out to a trusted friend or family member",
            "Write your feelings in a journal",
            "Take a warm bath or shower",
            "Watch your favorite comfort movie"
        ],
        "quote": "This too shall pass. The pain you feel today is the strength you will feel tomorrow."
    },
    "Stressed": {
        "message": "You are carrying a heavy load right now. Take a deep breath - you have handled difficult things before, and you will get through this too.",
        "songs": [
            { "text": "Lo-fi Study Beats", "url": "https://www.youtube.com/watch?v=jfKfPfyJRdk" },
            { "text": "Weightless - Marconi Union", "url": "https://www.youtube.com/watch?v=UfcAVejslrU" },
            { "text": "Relaxing Piano Music", "url": "https://www.youtube.com/watch?v=lFcSrYw-ARY" }
        ],
        "activities": [
            "Try the 4-7-8 breathing exercise",
            "Take a 10-minute walk outside",
            "Make a to-do list and prioritize",
            "Listen to calming music"
        ],
        "quote": "You do not have to see the whole staircase, just take the first step. - Martin Luther King Jr."
    },
    "Angry": {
        "message": "Your anger is valid. It is signaling that something matters to you. Let us find healthy ways to process and release this energy.",
        "songs": [
            { "text": "Break Stuff - Limp Bizkit", "url": "https://www.youtube.com/watch?v=ZpUYjpKg9KY" },
            { "text": "In the End - Linkin Park", "url": "https://www.youtube.com/watch?v=eVTXPUF4Oz4" },
            { "text": "Before I Forget - Slipknot", "url": "https://www.youtube.com/watch?v=qw2LU1yS7aw" }
        ],
        "activities": [
            "Do a high-intensity workout",
            "Write an angry letter (do not send it)",
            "Scream into a pillow",
            "Go for a run to release energy"
        ],
        "quote": "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson"
    },
    "Anxious": {
        "message": "Anxiety can feel overwhelming, but you are safe right now. Let us ground ourselves in this present moment together.",
        "songs": [
            { "text": "Anxiety - Julia Michaels", "url": "https://www.youtube.com/watch?v=LdfeO6Ym8yM" },
            { "text": "Breathe Me - Sia", "url": "https://www.youtube.com/watch?v=ghPcYurJyIg" },
            { "text": "1-800-273-8255 - Logic", "url": "https://www.youtube.com/watch?v=Kb24RrHIbFk" }
        ],
        "activities": [
            "Name 5 things you can see right now",
            "Practice box breathing",
            "Hold ice cubes in your hands",
            "Call a supportive friend"
        ],
        "quote": "You have survived 100% of your worst days. You are stronger than you know."
    },
    "Tired": {
        "message": "Your body and mind are asking for rest. Honor that need. Rest is not laziness - it is essential for your wellbeing.",
        "songs": [
            { "text": "Rain Sounds for Sleep", "url": "https://www.youtube.com/watch?v=q76bMs-NwRk" },
            { "text": "Deep Sleep Music", "url": "https://www.youtube.com/watch?v=1ZYbU82GVz4" },
            { "text": "Delta Waves Sleep Music", "url": "https://www.youtube.com/watch?v=tpiybEAWUA8" }
        ],
        "activities": [
            "Take a 20-minute power nap",
            "Drink water and eat a healthy snack",
            "Do some light stretching",
            "Set a bedtime alarm"
        ],
        "quote": "Rest when you are weary. Refresh and renew yourself, your body, your mind, your spirit."
    },
    "Excited": {
        "message": "What wonderful energy! Channel this excitement into something meaningful. Your enthusiasm can move mountains!",
        "songs": [
            { "text": "Eye of the Tiger - Survivor", "url": "https://www.youtube.com/watch?v=btPJPFnesV4" },
            { "text": "Can not Stop the Feeling - Justin Timberlake", "url": "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
            { "text": "Uptown Funk - Mark Ronson", "url": "https://www.youtube.com/watch?v=OPf0YbXqDm0" }
        ],
        "activities": [
            "Set a new goal and plan your first step",
            "Share your excitement with someone",
            "Start that project you have been thinking about",
            "Dance it out!"
        ],
        "quote": "Enthusiasm is the sparkle in your eyes, the swing in your gait, the grip of your hand. - Henry Ford"
    }
};

// Expanded chatbot responses
const chatbotResponses = [
    {
        keywords: ["exam", "viva", "project", "deadline", "presentation", "test", "study", "grade", "school", "college", "university"],
        reply: "Academic pressure can be intense. Remember: your grades do not define your worth. Try breaking tasks into smaller chunks, using the Pomodoro technique (25 min work, 5 min break), and being kind to yourself. You are doing your best, and that is enough. ??"
    },
    {
        keywords: ["lonely", "alone", "nobody", "friend", "isolated", "isolation", "by myself"],
        reply: "Feeling lonely is painful, but it does not mean you are unlovable. Consider joining a club, volunteering, or reaching out to an old friend. Sometimes just saying hello to a stranger can help. You matter, and connection is possible. ??"
    },
    {
        keywords: ["homesick", "miss home", "missing home", "family", "parents", "mom", "dad"],
        reply: "Missing home is completely natural. Try video calling family, cooking a meal that reminds you of home, or creating a small comfort corner with familiar items. Home lives in your heart, and this feeling will ease with time. ??"
    },
    {
        keywords: ["anxious", "panic", "afraid", "worry", "nervous", "scared", "fear"],
        reply: "Let us ground you right now: Name 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste. You are safe in this moment. Anxiety lies to you - you have survived every hard day so far. ??"
    },
    {
        keywords: ["sad", "depressed", "unhappy", "cry", "crying", "depression", "hopeless"],
        reply: "I am really sorry you are feeling this way. Please know that seeking help is a sign of strength, not weakness. Consider talking to a counselor, therapist, or trusted person. If you are in crisis, please call 988 (Suicide & Crisis Lifeline). You do not have to go through this alone. ??"
    },
    {
        keywords: ["tired", "exhausted", "sleep", "rest", "fatigue", "burnout", "burned out"],
        reply: "Your body is asking for rest, and that is okay. Try to prioritize sleep tonight - aim for 7-9 hours. Consider what you can postpone or delegate. Remember: you cannot pour from an empty cup. Rest is productive. ??"
    },
    {
        keywords: ["angry", "mad", "furious", "rage", "hate", "annoyed", "irritated"],
        reply: "Anger is a valid emotion - it often signals that a boundary has been crossed. Try channeling this energy into exercise, writing, or art. Take deep breaths: in for 4, hold for 4, out for 4. You are in control of how you respond. ??"
    },
    {
        keywords: ["breakup", "heartbreak", "ex", "relationship", "love", "dating", "crush"],
        reply: "Heartbreak is one of the hardest pains to endure. Allow yourself to grieve - this loss is real. Surround yourself with supportive people, avoid contact with your ex for now, and remember: healing is not linear. You will love again. ??????"
    },
    {
        keywords: ["motivation", "unmotivated", "lazy", "procrastinate", "procrastination", "start"],
        reply: "Motivation often follows action, not the other way around. Try the 2-minute rule: commit to just 2 minutes of the task. Often, you will keep going once you start. Be gentle with yourself - you are human, not a machine. ??"
    },
    {
        keywords: ["self harm", "hurt myself", "cutting", "suicide", "kill myself", "end it all", "die"],
        reply: "I am deeply concerned about you. Please reach out for help right now. Call or text 988 (Suicide & Crisis Lifeline) - they are available 24/7. Or text HOME to 741741. You matter, and these feelings, while intense, will pass. Please stay. ??"
    },
    {
        keywords: ["tip", "help", "support", "advice", "cope", "coping", "strategy"],
        reply: "Here are some evidence-based coping strategies: 1) Practice gratitude daily 2) Move your body 3) Connect with others 4) Limit social media 5) Get sunlight 6) Practice mindfulness. Small steps create big changes. You have got this! ??"
    },
    {
        keywords: ["meditation", "mindfulness", "breathe", "breathing", "calm", "relax"],
        reply: "Mindfulness is powerful! Try this: Breathe in for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 5 times. Or try a guided meditation app like Headspace or Calm. Even 5 minutes can make a difference. ??"
    },
    {
        keywords: ["exercise", "workout", "gym", "fitness", "run", "running", "yoga"],
        reply: "Movement is medicine! Exercise releases endorphins that boost mood. You do not need an intense workout - a 20-minute walk, some stretching, or dancing to your favorite song all count. What sounds doable right now? ??"
    },
    {
        keywords: ["eat", "eating", "food", "hungry", "diet", "weight", "body"],
        reply: "Your body deserves nourishment. Try to eat something balanced today - protein, vegetables, and complex carbs. Avoid skipping meals, as this affects mood and energy. Remember: food is fuel, not the enemy. ??"
    },
    {
        keywords: ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"],
        reply: "Hello there! I am so glad you reached out. How are you feeling today? I am here to listen and support you through whatever you are experiencing. ??"
    },
    {
        keywords: ["thank", "thanks", "appreciate", "grateful"],
        reply: "You are so welcome! It is my purpose to support you. Remember to also thank yourself - for showing up, for trying, for being you. You are doing better than you think. ??"
    },
    {
        keywords: ["bye", "goodbye", "see you", "talk later"],
        reply: "Take care of yourself! Remember, I am always here when you need to talk. You matter, and you are stronger than you know. Until next time! ??"
    }
];

// Journal prompts
const journalPrompts = [
    { category: "Gratitude", prompt: "What are 3 things you are grateful for today, no matter how small?" },
    { category: "Self-Reflection", prompt: "What emotion have you been avoiding? What might it be trying to tell you?" },
    { category: "Growth", prompt: "What is one challenge you overcame recently? How did you do it?" },
    { category: "Compassion", prompt: "Write a kind letter to yourself as if you were writing to a dear friend." },
    { category: "Future", prompt: "Where do you see yourself in 5 years? What steps can you take today?" },
    { category: "Release", prompt: "What are you holding onto that you need to let go of?" },
    { category: "Joy", prompt: "What activities make you lose track of time? How can you do more of that?" },
    { category: "Strength", prompt: "What is something difficult you have survived? What did it teach you?" },
    { category: "Connection", prompt: "Who are the people that lift you up? How can you nurture those relationships?" },
    { category: "Values", prompt: "What are your top 3 values? Are your current actions aligned with them?" }
];

// Mood history storage
let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("i");
    icon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
}

// Navigation
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const section = btn.dataset.section;
        document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
        document.getElementById(`${section}-section`).classList.add("active");
        
        if (section === "history") {
            updateHistoryDisplay();
        }
    });
});

// Mood selection
document.querySelectorAll(".mood-card").forEach(card => {
    card.addEventListener("click", () => {
        const mood = card.dataset.mood;
        showMoodResult(mood);
        saveMoodEntry(mood);
    });
});

function showMoodResult(mood) {
    const data = moodData[mood];
    const resultDiv = document.getElementById("mood-result");
    const emojiEl = document.getElementById("result-emoji");
    const titleEl = document.getElementById("result-title");
    const messageEl = document.getElementById("result-message");
    const songsList = document.getElementById("songs-list");
    const activitiesList = document.getElementById("activities-list");
    const quoteEl = document.getElementById("daily-quote");
    
    emojiEl.textContent = document.querySelector(`[data-mood="${mood}"] .mood-emoji`).textContent;
    titleEl.textContent = `You are feeling ${mood}`;
    messageEl.textContent = data.message;
    
    songsList.innerHTML = data.songs.map(song => `
        <a href="${song.url}" target="_blank" class="song-link">
            <i class="fas fa-play"></i> ${song.text}
        </a>
    `).join("");
    
    activitiesList.innerHTML = data.activities.map(activity => `
        <div class="activity-item">
            <i class="fas fa-check-circle"></i> ${activity}
        </div>
    `).join("");
    
    quoteEl.textContent = data.quote;
    
    resultDiv.classList.remove("hidden");
    resultDiv.scrollIntoView({ behavior: "smooth" });
}

function resetQuiz() {
    document.getElementById("mood-result").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveMoodEntry(mood) {
    const entry = {
        mood: mood,
        timestamp: new Date().toISOString(),
        emoji: document.querySelector(`[data-mood="${mood}"] .mood-emoji`).textContent
    };
    
    moodHistory.unshift(entry);
    if (moodHistory.length > 30) moodHistory = moodHistory.slice(0, 30);
    
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
}

// History display
function updateHistoryDisplay() {
    updateStats();
    renderChart();
    renderRecentEntries();
}

function updateStats() {
    const totalCheckins = moodHistory.length;
    const positiveMoods = ["Happy", "Calm", "Excited"];
    const positiveDays = moodHistory.filter(e => positiveMoods.includes(e.mood)).length;
    
    // Calculate streak
    let streak = 0;
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (moodHistory.length > 0) {
        const lastEntry = new Date(moodHistory[0].timestamp);
        if (lastEntry.toDateString() === today || lastEntry.toDateString() === yesterday) {
            streak = 1;
            for (let i = 1; i < moodHistory.length; i++) {
                const current = new Date(moodHistory[i].timestamp);
                const prev = new Date(moodHistory[i-1].timestamp);
                const diffDays = Math.floor((prev - current) / 86400000);
                if (diffDays === 1) streak++;
                else break;
            }
        }
    }
    
    // Find dominant mood
    const moodCounts = {};
    moodHistory.forEach(e => moodCounts[e.mood] = (moodCounts[e.mood] || 0) + 1);
    const dominantMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0];
    
    document.getElementById("total-checkins").textContent = totalCheckins;
    document.getElementById("positive-days").textContent = positiveDays;
    document.getElementById("current-streak").textContent = streak;
    document.getElementById("dominant-mood").textContent = dominantMood ? dominantMood[0] : "-";
}

function renderChart() {
    const ctx = document.getElementById("mood-chart");
    if (!ctx) return;
    
    const last7Days = moodHistory.slice(0, 7).reverse();
    const labels = last7Days.map(e => new Date(e.timestamp).toLocaleDateString("en-US", { weekday: "short" }));
    const data = last7Days.map(e => {
        const moodScores = { "Happy": 5, "Excited": 5, "Calm": 4, "Tired": 3, "Sad": 2, "Stressed": 2, "Anxious": 1, "Angry": 1 };
        return moodScores[e.mood] || 3;
    });
    
    if (window.moodChart) window.moodChart.destroy();
    
    window.moodChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Mood Level",
                data: data,
                borderColor: "#6366f1",
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                fill: true,
                tension: 0.4,
                pointBackgroundColor: "#6366f1",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 6
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
                    beginAtZero: true,
                    max: 6,
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue("--text-muted"),
                        callback: value => ["", "Low", "", "Medium", "", "High"][value] || ""
                    },
                    grid: { color: getComputedStyle(document.documentElement).getPropertyValue("--border") }
                },
                x: {
                    ticks: { color: getComputedStyle(document.documentElement).getPropertyValue("--text-muted") },
                    grid: { display: false }
                }
            }
        }
    });
}

function renderRecentEntries() {
    const container = document.getElementById("entries-list");
    if (moodHistory.length === 0) {
        container.innerHTML = '<p class="empty-state">No entries yet. Start tracking your mood today!</p>';
        return;
    }
    
    container.innerHTML = moodHistory.slice(0, 10).map(entry => `
        <div class="entry-item">
            <span class="entry-emoji">${entry.emoji}</span>
            <div class="entry-info">
                <span class="entry-mood">${entry.mood}</span>
                <span class="entry-date">${new Date(entry.timestamp).toLocaleString()}</span>
            </div>
        </div>
    `).join("");
}

// Chatbot
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addMessage(message, "user");
    chatInput.value = "";
    
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, "bot");
    }, 600);
}

function sendQuickReply(message) {
    addMessage(message, "user");
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, "bot");
    }, 600);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === "bot" ? "robot" : "user"}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">${time}</span>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    for (const response of chatbotResponses) {
        if (response.keywords.some(keyword => lowerMsg.includes(keyword))) {
            return response.reply;
        }
    }
    
    const defaults = [
        "I hear you. Thank you for sharing with me. Remember, it is okay to take things one day at a time. ??",
        "That sounds challenging. Be kind to yourself and remember that seeking support is a sign of strength. ??",
        "I understand. Your feelings are completely valid. Consider taking a moment for self-care today. ??",
        "Thank you for opening up. You do not have to go through this alone - help is always available. ??",
        "I am here for you. Sometimes just talking about what is on your mind can help. What else would you like to share?"
    ];
    
    return defaults[Math.floor(Math.random() * defaults.length)];
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Breathing exercise
let breathingInterval;
function startBreathing() {
    document.getElementById("breathing-modal").classList.remove("hidden");
    animateBreathing();
}

function closeBreathing() {
    document.getElementById("breathing-modal").classList.add("hidden");
    clearInterval(breathingInterval);
}

function animateBreathing() {
    const text = document.getElementById("breathing-text");
    const timer = document.getElementById("breathing-timer");
    const progressFill = document.querySelector(".progress-fill");
    const progressText = document.querySelector(".progress-text");
    
    let cycle = 1;
    let phase = 0;
    
    const phases = [
        { text: "Breathe In", duration: 4000 },
        { text: "Hold", duration: 2000 },
        { text: "Breathe Out", duration: 4000 },
        { text: "Hold", duration: 2000 }
    ];
    
    function runPhase() {
        if (document.getElementById("breathing-modal").classList.contains("hidden")) return;
        
        const current = phases[phase];
        text.textContent = current.text;
        progressText.textContent = `Cycle ${cycle} of 5`;
        progressFill.style.width = `${(cycle / 5) * 100}%`;
        
        let timeLeft = current.duration / 1000;
        timer.textContent = timeLeft;
        
        const countdown = setInterval(() => {
            timeLeft--;
            timer.textContent = timeLeft;
            if (timeLeft <= 0) clearInterval(countdown);
        }, 1000);
        
        setTimeout(() => {
            phase = (phase + 1) % 4;
            if (phase === 0) cycle++;
            if (cycle <= 5) runPhase();
            else {
                text.textContent = "Well done!";
                timer.textContent = "?";
            }
        }, current.duration);
    }
    
    runPhase();
}

// Journal prompts
function showJournalPrompts() {
    document.getElementById("journal-modal").classList.remove("hidden");
    generateNewPrompts();
}

function closeJournalModal() {
    document.getElementById("journal-modal").classList.add("hidden");
}

function generateNewPrompts() {
    const container = document.getElementById("prompts-container");
    const shuffled = [...journalPrompts].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    container.innerHTML = selected.map(p => `
        <div class="prompt-item">
            <h4>${p.category}</h4>
            <p>${p.prompt}</p>
        </div>
    `).join("");
}

// Crisis info
function showCrisisInfo() {
    document.getElementById("crisis-modal").classList.remove("hidden");
}

function closeCrisisModal() {
    document.getElementById("crisis-modal").classList.add("hidden");
}

// Resource filtering
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const category = btn.dataset.category;
        document.querySelectorAll(".resource-card").forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Close modals on outside click
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});

// Mood data
const moodData = {
    "Happy": {
        "message": "That is wonderful! Keep spreading the positivity and enjoy your day.",
        "songs": [
            { "text": "Upbeat Chill Vibes", "url": "https://www.youtube.com/watch?v=iqg3-OXz0dY" },
            { "text": "Happy Pop Mix", "url": "https://www.youtube.com/watch?v=ZbZSe6N_BXs" }
        ]
    },
    "Sad": {
        "message": "It is okay to feel sad sometimes. Allow yourself to process these emotions. Consider talking to someone you trust.",
        "songs": [
            { "text": "Healing Piano Music", "url": "https://www.youtube.com/watch?v=yN5G-hnD2Cw" },
            { "text": "Comforting Chill Mix", "url": "https://www.youtube.com/watch?v=rUxyKA_-grg" }
        ]
    },
    "Stressed": {
        "message": "You are under pressure. Take a moment to breathe deeply and remember - you have got this! Break tasks into smaller steps.",
        "songs": [
            { "text": "Lo-fi Study Beats", "url": "https://www.youtube.com/watch?v=jfKfPfyJRdk" },
            { "text": "Mindfulness Music", "url": "https://www.youtube.com/watch?v=c7B9bZyH_Q0" }
        ]
    },
    "Angry": {
        "message": "Try deep breathing or a short walk. It is okay to take space and process your feelings. This feeling will pass.",
        "songs": [
            { "text": "Cool Down Instrumental", "url": "https://www.youtube.com/watch?v=2OEL4P1Rz04" },
            { "text": "Peaceful Guitar", "url": "https://www.youtube.com/watch?v=VtKbi0M91Dg" }
        ]
    },
    "Anxious": {
        "message": "Try grounding yourself in the present moment. You are not alone, and this feeling is temporary. You are safe.",
        "songs": [
            { "text": "Relaxing Forest Sounds", "url": "https://www.youtube.com/watch?v=OdIJ2x3nxzQ" },
            { "text": "Calm Ocean Waves", "url": "https://www.youtube.com/watch?v=1ZYbU82GVz4" }
        ]
    }
};

// Chatbot responses
const chatbotResponses = [
    {
        keywords: ["exam", "viva", "project", "deadline", "presentation", "test", "study"],
        reply: "Academic stress is tough. Try planning your time and taking regular breaks. Remember, your worth is not defined by grades. You are doing your best, and that is enough."
    },
    {
        keywords: ["lonely", "alone", "nobody", "friend", "isolated"],
        reply: "Feeling lonely is hard. Try reaching out to someone or joining an activity group. You matter, and there are people who care about you."
    },
    {
        keywords: ["homesick", "miss home", "missing home", "family"],
        reply: "It is natural to miss home. Try talking with family or looking at photos for comfort. Home is always with you in your heart."
    },
    {
        keywords: ["tip", "help", "support", "advice"],
        reply: "Try journaling your feelings, getting fresh air, and practicing self-compassion. Small steps matter. You are stronger than you know."
    },
    {
        keywords: ["anxious", "panic", "afraid", "worry", "nervous"],
        reply: "Take deep breaths, count backwards from 10, and remind yourself: this will pass. You are safe, and you have gotten through difficult moments before."
    },
    {
        keywords: ["sad", "depressed", "unhappy", "cry"],
        reply: "I am sorry you are feeling this way. It is okay to not be okay. Consider talking to a trusted friend, family member, or professional. Your feelings are valid."
    },
    {
        keywords: ["tired", "exhausted", "sleep", "rest"],
        reply: "Rest is important. Try to get quality sleep and take breaks. Your body and mind need time to recharge. Be gentle with yourself."
    }
];

// Navigation
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const section = btn.dataset.section;
        document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
        document.getElementById(`${section}-section`).classList.add("active");
    });
});

// Mood selection
document.querySelectorAll(".mood-card").forEach(card => {
    card.addEventListener("click", () => {
        const mood = card.dataset.mood;
        showMoodResult(mood);
    });
});

function showMoodResult(mood) {
    const data = moodData[mood];
    const resultDiv = document.getElementById("mood-result");
    const titleEl = document.getElementById("result-title");
    const messageEl = document.getElementById("result-message");
    const songsList = document.getElementById("songs-list");
    
    titleEl.textContent = `You are feeling ${mood}`;
    messageEl.textContent = data.message;
    
    songsList.innerHTML = data.songs.map(song => `
        <a href="${song.url}" target="_blank" class="song-link">${song.text}</a>
    `).join("");
    
    resultDiv.classList.remove("hidden");
    resultDiv.scrollIntoView({ behavior: "smooth" });
}

function resetQuiz() {
    document.getElementById("mood-result").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Chatbot
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, "user");
    chatInput.value = "";
    
    // Get bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, "bot");
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `
        <div class="message-avatar">${sender === "bot" ? "??" : "??"}</div>
        <div class="message-content">
            <p>${text}</p>
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
        "I hear you. Thank you for sharing. Remember, it is okay to take things one day at a time.",
        "That sounds challenging. Be kind to yourself and remember that seeking help is a sign of strength.",
        "I understand. Your feelings are valid. Consider taking a moment for self-care today.",
        "Thank you for opening up. Remember, you do not have to go through this alone."
    ];
    
    return defaults[Math.floor(Math.random() * defaults.length)];
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Breathing exercise
function startBreathing() {
    document.getElementById("breathing-modal").classList.remove("hidden");
    animateBreathing();
}

function closeBreathing() {
    document.getElementById("breathing-modal").classList.add("hidden");
}

function animateBreathing() {
    const text = document.getElementById("breathing-text");
    let phase = 0;
    
    const cycle = () => {
        if (document.getElementById("breathing-modal").classList.contains("hidden")) return;
        
        const phases = ["Breathe In", "Hold", "Breathe Out", "Hold"];
        const durations = [4000, 2000, 4000, 2000];
        
        text.textContent = phases[phase];
        setTimeout(() => {
            phase = (phase + 1) % 4;
            cycle();
        }, durations[phase]);
    };
    
    cycle();
}

// Close modal on outside click
document.getElementById("breathing-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeBreathing();
});

// ==========================================
// FIREBASE CONFIGURATION
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyDummyKeyForDemo-ReplaceWithYourOwn",
    authDomain: "youthguard-pro.firebaseapp.com",
    projectId: "youthguard-pro",
    storageBucket: "youthguard-pro.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ==========================================
// GLOBAL STATE
// ==========================================
let currentUser = null;
let userData = null;
let moodHistory = [];

// ==========================================
// AUTHENTICATION FUNCTIONS
// ==========================================

// Show login or signup tab
function showAuthTab(tab) {
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));
    
    event.target.classList.add("active");
    document.getElementById(`${tab}-form`).classList.add("active");
}

// Login with email/password
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const errorEl = document.getElementById("login-error");
    
    if (!email || !password) {
        errorEl.textContent = "Please enter email and password";
        return;
    }
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Logged in:", userCredential.user.email);
        })
        .catch((error) => {
            errorEl.textContent = error.message;
        });
}

// Sign up new user
function signup() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;
    const errorEl = document.getElementById("signup-error");
    
    if (!name || !email || !password) {
        errorEl.textContent = "Please fill all fields";
        return;
    }
    
    if (password !== confirm) {
        errorEl.textContent = "Passwords do not match";
        return;
    }
    
    if (password.length < 6) {
        errorEl.textContent = "Password must be at least 6 characters";
        return;
    }
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Create user profile in Firestore
            return db.collection("users").doc(user.uid).set({
                name: name,
                email: email,
                level: 1,
                xp: 0,
                streak: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            console.log("User created successfully");
        })
        .catch((error) => {
            errorEl.textContent = error.message;
        });
}

// Login with Google
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            // Check if user exists in Firestore
            return db.collection("users").doc(user.uid).get();
        })
        .then((doc) => {
            if (!doc.exists) {
                // Create new user profile
                const user = auth.currentUser;
                return db.collection("users").doc(user.uid).set({
                    name: user.displayName || "User",
                    email: user.email,
                    level: 1,
                    xp: 0,
                    streak: 0,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        })
        .catch((error) => {
            console.error("Google login error:", error);
            document.getElementById("login-error").textContent = error.message;
        });
}

// Logout
function logout() {
    auth.signOut().then(() => {
        console.log("Logged out");
        location.reload();
    });
}

// Auth state listener
auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        document.getElementById("auth-modal").classList.add("hidden");
        document.getElementById("app-container").classList.remove("hidden");
        loadUserData();
        loadMoodHistory();
        updateUIForUser();
    } else {
        document.getElementById("auth-modal").classList.remove("hidden");
        document.getElementById("app-container").classList.add("hidden");
    }
});

// ==========================================
// USER DATA FUNCTIONS
// ==========================================

// Load user data from Firestore
function loadUserData() {
    if (!currentUser) return;
    
    db.collection("users").doc(currentUser.uid).onSnapshot((doc) => {
        if (doc.exists) {
            userData = doc.data();
            updateUserStats();
        }
    });
}

// Update UI with user data
function updateUIForUser() {
    if (!currentUser) return;
    
    document.getElementById("footer-email").textContent = currentUser.email;
    document.getElementById("profile-email").textContent = currentUser.email;
    
    if (userData) {
        document.getElementById("user-name-display").textContent = userData.name || "Friend";
        document.getElementById("profile-name").textContent = userData.name || "User";
    }
}

// Update user stats display
function updateUserStats() {
    if (!userData) return;
    
    document.getElementById("user-level").textContent = userData.level || 1;
    document.getElementById("user-xp").textContent = userData.xp || 0;
    document.getElementById("user-streak").textContent = userData.streak || 0;
    
    document.getElementById("profile-level").textContent = `Level ${userData.level || 1}`;
    document.getElementById("profile-xp").textContent = userData.xp || 0;
    document.getElementById("profile-streak").textContent = userData.streak || 0;
}

// Add XP to user
async function addXP(amount) {
    if (!currentUser || !userData) return;
    
    const newXP = (userData.xp || 0) + amount;
    const newLevel = Math.floor(newXP / 100) + 1;
    
    await db.collection("users").doc(currentUser.uid).update({
        xp: newXP,
        level: newLevel
    });
}

// ==========================================
// MOOD TRACKING (FIREBASE)
// ==========================================

let selectedMood = null;

// Load mood history from Firebase
function loadMoodHistory() {
    if (!currentUser) return;
    
    db.collection("users").doc(currentUser.uid)
        .collection("moods")
        .orderBy("date", "desc")
        .limit(50)
        .onSnapshot((snapshot) => {
            moodHistory = [];
            snapshot.forEach((doc) => {
                moodHistory.push({ id: doc.id, ...doc.data() });
            });
            updateMoodStats();
            renderMoodEntries();
            initMoodChart();
        });
}

// Save mood to Firebase
async function saveMood() {
    if (!currentUser) {
        alert("Please login first");
        return;
    }
    
    if (!selectedMood) {
        alert("Please select a mood first");
        return;
    }
    
    const note = document.getElementById("mood-note-input").value;
    const entry = {
        ...selectedMood,
        note,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        userId: currentUser.uid
    };
    
    try {
        await db.collection("users").doc(currentUser.uid)
            .collection("moods").add(entry);
        
        // Add XP
        await addXP(10);
        
        // Update streak
        await updateStreak();
        
        // Reset form
        document.querySelectorAll(".mood-face").forEach(f => f.classList.remove("selected"));
        document.getElementById("mood-note-input").value = "";
        selectedMood = null;
        
        alert("Mood saved! +10 XP");
    } catch (error) {
        console.error("Error saving mood:", error);
        alert("Error saving mood. Please try again.");
    }
}

// Update user streak
async function updateStreak() {
    if (!currentUser || !userData) return;
    
    const today = new Date().toDateString();
    const lastEntry = userData.lastEntryDate;
    
    let newStreak = userData.streak || 0;
    
    if (lastEntry) {
        const lastDate = new Date(lastEntry).toDateString();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate === today) {
            // Already logged today
            return;
        } else if (lastDate === yesterday.toDateString()) {
            // Continued streak
            newStreak++;
        } else {
            // Streak broken
            newStreak = 1;
        }
    } else {
        newStreak = 1;
    }
    
    await db.collection("users").doc(currentUser.uid).update({
        streak: newStreak,
        lastEntryDate: today
    });
}

// Update mood statistics
function updateMoodStats() {
    const total = moodHistory.length;
    const positive = moodHistory.filter(m => m.score >= 4).length;
    const positivePercent = total > 0 ? Math.round((positive / total) * 100) : 0;
    
    document.getElementById("mood-total").textContent = total;
    document.getElementById("mood-positive").textContent = `${positivePercent}%`;
    document.getElementById("profile-entries").textContent = total;
}

// Render mood entries
function renderMoodEntries() {
    const container = document.getElementById("mood-entries-list");
    if (!container) return;
    
    const emojiMap = {
        happy: "??", calm: "??", neutral: "??", 
        sad: "??", anxious: "??", angry: "??"
    };
    
    container.innerHTML = moodHistory.slice(0, 10).map(entry => {
        const date = entry.date ? entry.date.toDate() : new Date();
        return `
            <div class="mood-entry">
                <span style="font-size: 1.5rem">${emojiMap[entry.mood]}</span>
                <div class="mood-entry-info">
                    <div style="text-transform: capitalize; font-weight: 500">${entry.mood}</div>
                    <div class="mood-entry-date">${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}</div>
                    ${entry.note ? `<div class="mood-entry-note">${entry.note}</div>` : ""}
                </div>
            </div>
        `;
    }).join("");
}

// Initialize mood chart
function initMoodChart() {
    const ctx = document.getElementById("moodChart");
    const ctx2 = document.getElementById("moodHistoryChart");
    
    if (!ctx && !ctx2) return;
    
    // Prepare data
    const labels = [];
    const data = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString("en", { weekday: "short" }));
        
        const dayEntry = moodHistory.find(m => {
            if (!m.date) return false;
            const mDate = m.date.toDate();
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
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { min: 1, max: 5 },
                x: { grid: { display: false } }
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

// ==========================================
// PROFILE MODAL
// ==========================================

function showProfileModal() {
    document.getElementById("profile-modal").classList.remove("hidden");
}

function closeProfileModal() {
    document.getElementById("profile-modal").classList.add("hidden");
}

// Export user data
function exportUserData() {
    if (!currentUser || !userData) return;
    
    const data = {
        user: {
            name: userData.name,
            email: currentUser.email,
            level: userData.level,
            xp: userData.xp,
            streak: userData.streak
        },
        moodHistory: moodHistory.map(m => ({
            mood: m.mood,
            score: m.score,
            note: m.note,
            date: m.date ? m.date.toDate().toISOString() : null
        }))
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `youthguard-data-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
}

// ==========================================
// NAVIGATION
// ==========================================

function showSection(sectionId) {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    
    document.querySelector(`[data-section="${sectionId}"]`)?.classList.add("active");
    document.getElementById(`${sectionId}-section`)?.classList.add("active");
}

// Initialize navigation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            showSection(btn.dataset.section);
        });
    });
    
    // Initialize mood face selection
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
});

// ==========================================
// THEME TOGGLE
// ==========================================

let currentTheme = localStorage.getItem("theme") || "dark";

function initTheme() {
    document.documentElement.setAttribute("data-theme", currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
}

initTheme();

// ==========================================
// QUIZ FUNCTIONS (Simplified)
// ==========================================

function startQuiz() {
    document.getElementById("quiz-start").classList.add("hidden");
    document.getElementById("quiz-questions").classList.remove("hidden");
}

function retakeQuiz() {
    document.getElementById("quiz-results").classList.add("hidden");
    document.getElementById("quiz-start").classList.remove("hidden");
}

async function saveQuizResults() {
    await addXP(50);
    alert("Results saved! +50 XP");
}

// ==========================================
// CHATBOT FUNCTIONS
// ==========================================

function sendChatMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (!message) return;
    
    addChatMessage(message, "user");
    input.value = "";
    
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, "bot");
    }, 500);
}

function sendQuickReply(message) {
    addChatMessage(message, "user");
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, "bot");
    }, 500);
}

function addChatMessage(text, sender) {
    const container = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<div class="message-content"><p>${text}</p></div>`;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function getBotResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes("anxious") || lower.includes("anxiety")) {
        return "I hear you are feeling anxious. Try taking 5 deep breaths with me. Inhale for 4 counts, hold for 7, exhale for 8. You have got this! ??";
    }
    if (lower.includes("sad") || lower.includes("depressed")) {
        return "I am sorry you are feeling this way. Your feelings are valid. Consider reaching out to Sumithrayo at +94 11 269 2909. You matter. ??";
    }
    if (lower.includes("exam") || lower.includes("stress")) {
        return "Academic stress is tough. Remember: Your grades do not define your worth. Take breaks and be kind to yourself. ??";
    }
    return "Thank you for sharing. I am here to listen. Remember, it is okay to take things one day at a time. ??";
}

// Chat input listener
document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendChatMessage();
        });
    }
});

// ==========================================
// TOOLS FUNCTIONS
// ==========================================

function openBreathing() {
    document.getElementById("breathing-modal").classList.remove("hidden");
}

function closeBreathing() {
    document.getElementById("breathing-modal").classList.add("hidden");
}

function openJournal() {
    document.getElementById("journal-modal").classList.remove("hidden");
}

function closeJournal() {
    document.getElementById("journal-modal").classList.add("hidden");
}

async function saveJournal() {
    const entry = document.getElementById("journal-entry").value;
    if (!entry.trim()) {
        alert("Please write something");
        return;
    }
    
    if (!currentUser) {
        alert("Please login first");
        return;
    }
    
    await db.collection("users").doc(currentUser.uid)
        .collection("journals").add({
            text: entry,
            date: firebase.firestore.FieldValue.serverTimestamp()
        });
    
    await addXP(15);
    document.getElementById("journal-entry").value = "";
    alert("Journal saved! +15 XP");
    closeJournal();
}

function showAffirmation() {
    document.getElementById("affirmation-modal").classList.remove("hidden");
    const affirmations = [
        "You are enough, just as you are.",
        "This feeling is temporary. You have survived 100% of your bad days.",
        "You are stronger than you think.",
        "Progress, not perfection. Every small step counts."
    ];
    document.getElementById("affirmation-text").textContent = 
        affirmations[Math.floor(Math.random() * affirmations.length)];
}

function closeAffirmation() {
    document.getElementById("affirmation-modal").classList.add("hidden");
}

function openTimer() {
    document.getElementById("timer-modal").classList.remove("hidden");
}

function closeTimer() {
    document.getElementById("timer-modal").classList.add("hidden");
}

let timerInterval = null;
let timerSeconds = 300;

function setTimer(minutes) {
    timerSeconds = minutes * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById("timer-display").textContent = 
        `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("timer-start").textContent = "Start";
        return;
    }
    
    document.getElementById("timer-start").textContent = "Pause";
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Meditation complete! ??");
            document.getElementById("timer-start").textContent = "Start";
        }
    }, 1000);
}

// ==========================================
// CRISIS MODAL
// ==========================================

function closeCrisisModal() {
    document.getElementById("crisis-modal").classList.add("hidden");
}

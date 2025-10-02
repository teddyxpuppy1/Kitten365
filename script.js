// State management
let currentSection = 'home';
let unlockedSections = new Set(['home']);
let currentlyPlayingAudio = null;

// Welcome page logic
function checkWelcomeAnswer() {
    const answer = document.getElementById('nicknameAnswer').value.trim().toLowerCase();
    const correctAnswers = ['kitten', 'my kitten', 'beautiful kitten', 'kittu', 'my kittu'];

    if (correctAnswers.some(correct => answer.includes(correct))) {
        document.getElementById('welcomeSuccess').style.display = 'block';
        document.getElementById('welcomeError').style.display = 'none';

        setTimeout(() => {
            document.getElementById('welcomePage').classList.remove('active');
            document.getElementById('mainSite').classList.add('active');
            updateLoveCounter();
            createFloatingHearts();
            createRosePetals();
            setTimeout(showSecretMessage, 4000);
        }, 2500);
    } else {
        document.getElementById('welcomeError').style.display = 'block';
        document.getElementById('welcomeSuccess').style.display = 'none';
    }
}

// Section navigation (made robust to accept event or fallback)
function showSection(sectionName, evt) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const el = document.getElementById(sectionName);
    if (el) el.style.display = 'block';

    // Add active class to clicked nav link
    const target = (evt && evt.target) || window.event && window.event.target;
    if (target) target.classList.add('active');

    currentSection = sectionName;
}

// Unlock Memories
function unlockMemories() {
    const answer = document.getElementById('memoriesAnswer').value.trim().toLowerCase();
    if (answer === "freshers") {
        unlockedSections.add('memories');
        document.getElementById('memoriesContent').innerHTML = `
            <div class="section-header">
                <h2>Our Precious Memories ✨</h2>
                <p>Every photograph captures a moment of our beautiful love story</p>
            </div>

            <div class="gallery-grid">
                ${generateGalleryItems()}
            </div>
        `;
        document.getElementById('memoriesError').style.display = 'none'; // hide error if shown earlier
    } else {
        document.getElementById('memoriesError').style.display = 'block';
    }
}

function generateGalleryItems() {
    let galleryHTML = '';
    for (let i = 1; i <= 16; i++) {
        galleryHTML += `
            <div class="gallery-item">
                <img src="${i}.jpg" alt="Memory ${i}" 
                     onerror="this.src='https://images.unsplash.com/photo-${500 + i}x${500 + i}?w=500&h=500&fit=crop'">
                <div class="gallery-caption">
                    <h4>${getMemoryTitle(i)} 💕</h4>
                    <p>${getMemoryDescription(i)}</p>
                </div>
            </div>
        `;
    }
    return galleryHTML;
}

function getMemoryTitle(index) {
    const titles = [
        'Picture in Free Fire 🎮',
        'Holding Hands 🤝',
        'Our Shadow 🌙',
        'Hands Raised to the Sky 🌌',
        'Kitten Drawing 🐾',
        'First Booyah 🎉',
        'Spending Time in Free Fire ⏳',
        'Eyes Together 👀',
        'Riding Bike 🏍️',
        'Riding Horse 🐎',
        'First Rose 🌹',
        'Giving a Flower 🌸',
        'Promise to Stay 🤞',
        'Flower Dedicated to You 💐',
        'Bunch of Flowers 🌷',
        'Bouquet Gift 🌺',
    ];
    return titles[index - 1] || `Beautiful Memory ${index}`;
}

function getMemoryDescription(index) {
    const descriptions = [
        'Our very first picture captured in Free Fire 🎮',
        'The moment our hands came together 🤝',
        'A shadow showing us as one 🌙',
        'Raising hands high towards the endless sky 🌌',
        'A small kitten drawing kept close 🐾',
        'The first Booyah we celebrated 🎉',
        'Special time spent together in Free Fire ⏳',
        'Eyes that spoke without words 👀',
        'Riding a bike side by side 🏍️',
        'A horse ride in Minecraft felt magical 🐎',
        'The first rose I gave 🌹',
        'A simple flower given with care 🌸',
        'A promise made to never go away 🤞',
        'A flower kept only for you 💐',
        'A bunch of flowers given with a smile 🌷',
        'A bouquet gifted straight from the heart 🌺',
    ];
    return descriptions[index - 1] || 'A precious moment in time';
}

// Unlock Dates
function unlockDates() {
    const answer = document.getElementById('datesAnswer').value.trim().toLowerCase();
    if (answer.includes('march 7') || answer.includes('7 march') || answer.includes('march7') || answer.includes('7th march')) {
        unlockedSections.add('dates');
        document.getElementById('datesContent').innerHTML = `
            <div class="section-header">
                <h2>Our Romantic Timeline 💖</h2>
                <p>Precious milestones that mark our incredible journey of love</p>
            </div>

            <div class="timeline">
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">24-09-2024</div><h4>The Day We First Met 🌟</h4><p>The magical day when our paths crossed for the first time, marking the start of our journey together.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">18-10-2024</div><h4>First Meeting at NIT 🤝</h4><p>The day my heart knew it had found its home at NIT.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">25-11-2024</div><h4>First Call 📞</h4><p>When our voices first connected, bridging the distance between us.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">07-02-2025</div><h4>NIT Moments ⏳</h4><p>Precious memories that defined our connection and made it stronger.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">07-03-2025</div><h4>First Movie Together 🎬</h4><p>Our first cinematic adventure, side by side, sharing popcorn and smiles.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">20-03-2025</div><h4>College Memories 🎓</h4><p>Beautiful moments that will forever be etched in our love story.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">02-04-2025</div><h4>Kitten's Birthday 🎂</h4><p>The day my world's brightest star was born — celebrating my Kitten's special day with love.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">31-05-2025</div><h4>Kittu's Birthday 🎉</h4><p>A day full of joy and laughter, celebrating the love of my life — my Kittu.</p></div></div>
                <div class="timeline-item"><div class="timeline-content"><div class="timeline-date">24-09-2025</div><h4>One Year of Forever ❤️</h4><p>Celebrating 365 days of pure love, laughter, and being each other's everything.</p></div></div>
            </div>
        `;
    } else {
        document.getElementById('datesError').style.display = 'block';
    }
}

// Unlock Songs
function unlockSongs() {
    const answer = document.getElementById('songsAnswer').value.trim().toLowerCase();
    if (answer.includes('sooseki') || answer.includes('suseki') || answer.includes('souseki')) {
        unlockedSections.add('songs');
        document.getElementById('songsContent').innerHTML = `
            <div class="section-header">
                <h2>Kitten's Love Playlist 🎵</h2>
                <p>Melodies that remind me of your beautiful soul and our romantic journey</p>
            </div>
            <div class="music-player">
                <div class="playlist">
                    <div class="song-item" data-special="true">
                        <button class="play-btn" onclick="toggleSong(this)">
                            <i class="fas fa-heart"></i>
                        </button>
                        <div class="song-info">
                            <h4>🎵 "Sooseki" - Your Favorite Song</h4>
                            <p style="color: var(--romantic-red); font-weight: 600;">The melody that makes your heart sing, my love ✨</p>
                        </div>
                        <audio class="song-audio" preload="metadata">
                            <source src="Sooseki.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                            <div class="song-item" data-special="true">
            <button class="play-btn" onclick="toggleSong(this)">
                <i class="fas fa-heart"></i>
            </button>
            <div class="song-info">
                <h4>🎵 "Yedhi Mana Sakhi" - Another Favorite</h4>
                <p style="color: var(--romantic-red); font-weight: 600;">The song that holds my heart right after Sooseki 💖</p>
            </div>
            <audio class="song-audio" preload="metadata">
                <source src="yedhi.mp3" type="audio/mp4">
            </audio>
        </div>
                    <div class="song-item">
                        <button class="play-btn" onclick="toggleSong(this)">
                            <i class="fas fa-play"></i>
                        </button>
                        <div class="song-info">
                            <h4>"Inkem Inkem" - Beautiful Melody</h4>
                            <p>A song that speaks to our hearts</p>
                        </div>
                        <audio class="song-audio" preload="metadata">
                            <source src="inkem.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="song-item">
                        <button class="play-btn" onclick="toggleSong(this)">
                            <i class="fas fa-play"></i>
                        </button>
                        <div class="song-info">
                            <h4>"Evare" - Romantic Tune</h4>
                            <p>Every note reminds me of you</p>
                        </div>
                        <audio class="song-audio" preload="metadata">
                            <source src="Evare.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="song-item">
                        <button class="play-btn" onclick="toggleSong(this)">
                            <i class="fas fa-play"></i>
                        </button>
                        <div class="song-info">
                            <h4>"Uppenantha" - Love Song</h4>
                            <p>Music that celebrates our bond</p>
                        </div>
                        <audio class="song-audio" preload="metadata">
                            <source src="uppenantha.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="song-item">
                        <button class="play-btn" onclick="toggleSong(this)">
                            <i class="fas fa-play"></i>
                        </button>
                        <div class="song-info">
                            <h4>"Love Your Voice" - Sweet Serenade</h4>
                            <p>Because your voice is music to my ears</p>
                        </div>
                        <audio class="song-audio" preload="metadata">
                            <source src="loveyourvoice.mp3" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 25px; padding: 20px; background: linear-gradient(135deg, rgba(255,107,157,0.1), rgba(196,69,105,0.1)); border-radius: 20px; border: 2px solid rgba(255,107,157,0.2);">
                    <p style="font-style: italic; color: var(--text-secondary); font-size: 1.1rem;">🎵 Click any song to feel the love! Each melody was chosen to express how much you mean to me, my dearest Kitten 💕</p>
                </div>
            </div>
        `;
    } else {
        document.getElementById('songsError').style.display = 'block';
    }
}
// Unlock Letter with Image
function unlockLetter() {
    const answer = document.getElementById('letterAnswer').value.trim().toLowerCase();
    if (answer === "time") {
        unlockedSections.add('letter');
        document.getElementById('letterContent').innerHTML = `
            <div class="section-header">
                <h2>A Special Letter For You 💌</h2>
                <p>A heartfelt message written with all my love</p>
            </div>
            <div class="letter-container">
                <div class="letter-wrapper">
                    <img src="h.jpg" alt="Special Letter" class="letter-image" 
                         onerror="this.src='https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=1000&fit=crop'">
                </div>
                <div class="letter-message">
                    <p style="text-align: center; font-style: italic; color: var(--romantic-red); font-size: 1.2rem; margin-top: 20px;">
                        💝 This letter contains all the words my heart wants to say to you, my dearest Kitten 💝
                    </p>
                </div>
            </div>
        `;
        document.getElementById('letterError').style.display = 'none'; // hide error if shown before
    } else {
        document.getElementById('letterError').style.display = 'block';
    }
}


// NEW: Unlock Commitment (shows c.jpg)
function unlockCommitment() {
    const answer = document.getElementById('commitmentAnswer').value.trim().toLowerCase();
    // Accept 'importance' or 'priority' (partial matches allowed)
    if (answer.includes('importance') || answer.includes('priority')) {
        unlockedSections.add('commitment');
        document.getElementById('commitmentContent').innerHTML = `
            <div class="section-header">
                <h2>My Commitment to You 🤝</h2>
                <p>This is my promise — saved in a little image just for you</p>
            </div>
            <div class="letter-container">
                <div class="letter-wrapper">
                    <img src="c.jpg" alt="Commitment Image" class="letter-image"
                         onerror="this.src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'">
                </div>
                <div class="letter-message">
                    <p style="text-align: center; font-style: italic; color: var(--romantic-red); font-size: 1.15rem; margin-top: 20px;">
                        🤍 I connected to you because you are my priority and hold great importance in my life.
                    </p>
                </div>
            </div>
        `;
    } else {
        document.getElementById('commitmentError').style.display = 'block';
    }
}

// NEW: Unlock Thank You (shows t.jpg) - answer must be "hair"
function unlockThankYou() {
    const answer = document.getElementById('thankyouAnswer').value.trim().toLowerCase();
    if (answer === "hair") {
        unlockedSections.add('thankyou');
        document.getElementById('thankyouContent').innerHTML = `
            <div class="section-header">
                <h2>Thank You Kittyy 💝</h2>
                <p>For being you — a small token of gratitude</p>
            </div>
            <div class="letter-container">
                <div class="letter-wrapper">
                    <img src="t.jpg" alt="Thank You Image" class="letter-image"
                         onerror="this.src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop'">
                </div>
                <div class="letter-message">
                    <p style="text-align: center; font-style: italic; color: var(--romantic-red); font-size: 1.15rem; margin-top: 20px;">
                        💝 Thank you for filling my life with warmth and unforgettable moments.
                    </p>
                </div>
            </div>
        `;
        document.getElementById('thankyouError').style.display = 'none'; // hide error if previously shown
    } else {
        document.getElementById('thankyouError').style.display = 'block';
    }
}


// Improved Music player functionality
function toggleSong(button) {
    const songItem = button.closest('.song-item');
    const audio = songItem.querySelector('.song-audio');
    const icon = button.querySelector('i');
    const isSpecial = songItem.dataset.special === 'true';

    // Stop all other playing songs
    if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;

        // Reset all other buttons
        document.querySelectorAll('.song-item').forEach(item => {
            if (item !== songItem) {
                item.classList.remove('playing');
                const btn = item.querySelector('.play-btn');
                const ico = btn.querySelector('i');
                const isItemSpecial = item.dataset.special === 'true';

                ico.className = isItemSpecial ? 'fas fa-heart' : 'fas fa-play';
                btn.style.background = '';
            }
        });
    }

    // Toggle current song
    if (audio.paused) {
        // Play
        audio.play().then(() => {
            currentlyPlayingAudio = audio;
            songItem.classList.add('playing');
            icon.className = 'fas fa-pause';
            button.style.background = isSpecial ? 'var(--romantic-red)' : 'var(--secondary-purple)';
        }).catch(error => {
            console.log('Playback failed:', error);
            alert('Could not play this song. Please make sure the audio file exists.');
        });
    } else {
        // Pause
        audio.pause();
        songItem.classList.remove('playing');
        icon.className = isSpecial ? 'fas fa-heart' : 'fas fa-play';
        button.style.background = '';
        currentlyPlayingAudio = null;
    }

    // Handle song end
    audio.onended = () => {
        songItem.classList.remove('playing');
        icon.className = isSpecial ? 'fas fa-heart' : 'fas fa-play';
        button.style.background = '';
        currentlyPlayingAudio = null;
    };
}

// Love Counter - Fixed calculation
function updateLoveCounter() {
    const startDate = new Date('2024-09-24');
    startDate.setHours(0, 0, 0, 0); // Reset time to start of day

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day

    // Calculate difference in milliseconds
    const timeDiff = today.getTime() - startDate.getTime();

    // Convert to days (no +1 needed)
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    document.getElementById('daysCounter').textContent = daysDiff;
}

// Floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💘', '🌹'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 8 + 's';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.getElementById('floatingHearts').appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}

function createFloatingHearts() {
    setInterval(createFloatingHeart, 1500);
}

// Rose petals
function createRosePetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 8 + 's';
    petal.style.animationDuration = (Math.random() * 4 + 6) + 's';
    const colors = ['var(--primary-pink)', 'var(--romantic-red)', 'var(--rose-gold)', 'var(--lavender)'];
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('rosePetals').appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}

function createRosePetals() {
    setInterval(createRosePetal, 3000);
}

// Secret Message
function showSecretMessage() {
    document.getElementById('popupBackdrop').classList.add('show');
    document.getElementById('secretPopup').classList.add('show');
}

function closeSecretMessage() {
    document.getElementById('popupBackdrop').classList.remove('show');
    document.getElementById('secretPopup').classList.remove('show');
}

// Enter key handler
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.id === 'nicknameAnswer') checkWelcomeAnswer();
        else if (activeElement.id === 'memoriesAnswer') unlockMemories();
        else if (activeElement.id === 'datesAnswer') unlockDates();
        else if (activeElement.id === 'songsAnswer') unlockSongs();
        else if (activeElement.id === 'letterAnswer') unlockLetter();
        else if (activeElement.id === 'commitmentAnswer') unlockCommitment();
        else if (activeElement.id === 'thankyouAnswer') unlockThankYou();
    }
});

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartBurst {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
            100% { transform: scale(0.5) rotate(360deg); opacity: 0; }
        }
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);

    setInterval(() => {
        if (Math.random() > 0.6) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '-1';
            sparkle.innerHTML = '✨';
            sparkle.style.animation = 'sparkle 3s ease-in-out';
            sparkle.style.color = 'var(--rose-gold)';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 3000);
        }
    }, 2000);
});

// Update counter on page load and daily
updateLoveCounter();
setInterval(updateLoveCounter, 3600000); // Update every hour to catch day changes

// Update counter on page load and daily
updateLoveCounter();
setInterval(updateLoveCounter, 3600000); // Update every hour to catch day changes

// Catch the Hearts Game
let gameCanvas, gameCtx, gameScore, gameTime, gameInterval, gameRunning;
let hearts = [];
let basket = { x: 250, y: 360, width: 100, height: 40 };

function initGame() {
    gameCanvas = document.getElementById('heartsCanvas');
    if (!gameCanvas) return;
    gameCtx = gameCanvas.getContext('2d');
    
    // Mouse movement for basket
    gameCanvas.addEventListener('mousemove', (e) => {
        if (gameRunning) {
            const rect = gameCanvas.getBoundingClientRect();
            basket.x = e.clientX - rect.left - basket.width / 2;
            basket.x = Math.max(0, Math.min(gameCanvas.width - basket.width, basket.x));
        }
    });
}

function startGame() {
    gameScore = 0;
    gameTime = 30;
    hearts = [];
    gameRunning = true;
    
    document.getElementById('gameScore').textContent = gameScore;
    document.getElementById('gameTime').textContent = gameTime;
    document.getElementById('startGameBtn').disabled = true;
    
    // Timer countdown
    const timer = setInterval(() => {
        gameTime--;
        document.getElementById('gameTime').textContent = gameTime;
        if (gameTime <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    
    // Spawn hearts
    const heartSpawner = setInterval(() => {
        if (!gameRunning) {
            clearInterval(heartSpawner);
            return;
        }
        hearts.push({
            x: Math.random() * (gameCanvas.width - 30),
            y: -30,
            speed: 2 + Math.random() * 2,
            emoji: ['❤️', '💕', '💖', '💗', '💓'][Math.floor(Math.random() * 5)]
        });
    }, 800);
    
    gameLoop();
}

function gameLoop() {
    if (!gameRunning) return;
    
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    // Draw basket
    gameCtx.fillStyle = '#ff6b9d';
    gameCtx.fillRect(basket.x, basket.y, basket.width, basket.height);
    gameCtx.fillStyle = 'white';
    gameCtx.font = '20px Arial';
    gameCtx.textAlign = 'center';
    gameCtx.fillText('🧺', basket.x + basket.width / 2, basket.y + 30);
    
    // Update and draw hearts
    for (let i = hearts.length - 1; i >= 0; i--) {
        const heart = hearts[i];
        heart.y += heart.speed;
        
        gameCtx.font = '30px Arial';
        gameCtx.fillText(heart.emoji, heart.x, heart.y);
        
        // Check collision with basket
        if (heart.y + 30 >= basket.y && 
            heart.y <= basket.y + basket.height &&
            heart.x >= basket.x && 
            heart.x <= basket.x + basket.width) {
            hearts.splice(i, 1);
            gameScore++;
            document.getElementById('gameScore').textContent = gameScore;
        }
        // Remove if off screen
        else if (heart.y > gameCanvas.height) {
            hearts.splice(i, 1);
        }
    }
    
    requestAnimationFrame(gameLoop);
}

function endGame() {
    gameRunning = false;
    document.getElementById('startGameBtn').disabled = false;
    alert(`Game Over! Your score: ${gameScore} hearts caught! 💕`);
}

// Gift Box Flip Function
function flipGift(card) {
    card.classList.toggle('flipped');
}

// Countdown to September 24, 2026
function updateCountdown() {
    const targetDate = new Date('2026-09-24T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    } else {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
    }
}

// Initialize game and countdown
document.addEventListener('DOMContentLoaded', function() {
    initGame();
    updateCountdown();
    setInterval(updateCountdown, 1000);
});


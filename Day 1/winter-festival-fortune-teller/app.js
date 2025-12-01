// Main application logic
let fortuneCount = 0;

// Particle system for magical effects
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle(x, y) {
        const colors = ['#ffd700', '#9d4edd', '#ffffff', '#6b46c1'];
        return {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3 - 2,
            life: 1.0,
            decay: 0.01 + Math.random() * 0.02,
            size: 2 + Math.random() * 3,
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    }

    burst(x, y, count = 30) {
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle(x, y));
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // Gravity
            p.life -= p.decay;
            
            if (p.life <= 0) return false;
            
            this.ctx.save();
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
            
            return true;
        });
    }

    animate() {
        this.update();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
const canvas = document.getElementById('particles');
const particleSystem = new ParticleSystem(canvas);
particleSystem.animate();

// DOM elements
const crystalBall = document.getElementById('crystalBall');
const fortuneText = document.getElementById('fortuneText');
const revealButton = document.getElementById('revealButton');
const instruction = document.getElementById('instruction');
const musicToggle = document.getElementById('musicToggle');
const fortuneCounter = document.getElementById('fortuneCount');

// Music control
musicToggle.addEventListener('click', () => {
    const isPlaying = musicPlayer.toggle();
    musicToggle.textContent = isPlaying ? '🎵 Music: ON' : '🔇 Music: OFF';
    
    // Store preference
    localStorage.setItem('musicEnabled', isPlaying);
});

// Restore music preference
window.addEventListener('load', () => {
    const musicEnabled = localStorage.getItem('musicEnabled');
    if (musicEnabled === 'false') {
        musicToggle.textContent = '🔇 Music: OFF';
    } else {
        // Auto-start music on first interaction
        setTimeout(() => {
            if (!musicPlayer.isPlaying) {
                musicPlayer.start();
            }
        }, 1000);
    }
});

// Load fortune count from localStorage
window.addEventListener('load', () => {
    const saved = localStorage.getItem('fortuneCount');
    if (saved) {
        fortuneCount = parseInt(saved);
        fortuneCounter.textContent = fortuneCount;
    }
});

// Reveal fortune function
function revealFortune() {
    // Get random fortune
    const fortune = getRandomFortune();
    
    // Add animation to button
    revealButton.classList.add('revealing');
    setTimeout(() => revealButton.classList.remove('revealing'), 500);
    
    // Hide any existing fortune
    fortuneText.classList.add('hidden');
    
    // Play sound effect (mystical chime)
    playRevealSound();
    
    // Create particle burst at crystal ball
    const rect = crystalBall.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    particleSystem.burst(centerX, centerY, 50);
    
    // Show fortune after animation
    setTimeout(() => {
        fortuneText.querySelector('.fortune-content').textContent = fortune.text;
        fortuneText.querySelector('.fortune-icons').textContent = fortune.icons;
        fortuneText.classList.remove('hidden');
        
        // Update instruction
        instruction.textContent = "Your destiny has been revealed...";
        
        // Update counter
        fortuneCount++;
        fortuneCounter.textContent = fortuneCount;
        localStorage.setItem('fortuneCount', fortuneCount);
        
        // Change button text
        revealButton.textContent = '🔮 Seek Another Fortune 🔮';
    }, 800);
}

// Sound effect for revealing fortune
function playRevealSound() {
    if (!musicPlayer.audioContext) return;
    
    const ctx = musicPlayer.audioContext;
    const now = ctx.currentTime;
    
    // Create a mystical ascending chime
    const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    frequencies.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        const startTime = now + (index * 0.1);
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 0.3);
    });
}

// Event listeners
revealButton.addEventListener('click', revealFortune);

crystalBall.addEventListener('click', () => {
    // Create small particle burst on click
    const rect = crystalBall.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    particleSystem.burst(x, y, 20);
});

// Touch support for mobile
crystalBall.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    particleSystem.burst(touch.clientX, touch.clientY, 20);
});

// Easter egg: Konami code or secret gesture
let secretSequence = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    secretSequence.push(e.key);
    if (secretSequence.length > secretCode.length) {
        secretSequence.shift();
    }
    
    if (JSON.stringify(secretSequence) === JSON.stringify(secretCode)) {
        // Secret activated!
        fortuneText.querySelector('.fortune-content').textContent = 
            "It's dangerous to go alone! Take this: The courage to follow your dreams! ⚔️";
        fortuneText.querySelector('.fortune-icons').textContent = "⚔️✨👑";
        fortuneText.classList.remove('hidden');
        
        // Massive particle burst
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                particleSystem.burst(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight,
                    30
                );
            }, i * 100);
        }
        
        secretSequence = [];
    }
});

// PWA install prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button
    const installPrompt = document.createElement('div');
    installPrompt.className = 'install-prompt';
    installPrompt.innerHTML = `
        <span>Install Madame Zelda's Crystal Ball</span>
        <button id="installBtn">Install</button>
        <button id="dismissBtn">Later</button>
    `;
    installPrompt.style.display = 'block';
    document.body.appendChild(installPrompt);
    
    document.getElementById('installBtn').addEventListener('click', async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        installPrompt.remove();
        deferredPrompt = null;
    });
    
    document.getElementById('dismissBtn').addEventListener('click', () => {
        installPrompt.remove();
    });
});

// Welcome message on first load
window.addEventListener('load', () => {
    const isFirstVisit = !localStorage.getItem('hasVisited');
    if (isFirstVisit) {
        setTimeout(() => {
            instruction.textContent = "✨ Welcome, seeker! Touch the crystal ball to begin... ✨";
            localStorage.setItem('hasVisited', 'true');
        }, 500);
    }
});

// Zelda-inspired music generator using Web Audio API
// This creates an original composition inspired by the style, not using copyrighted material

class MysticMusicPlayer {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
        this.mainGainNode = null;
        this.currentNotes = [];
    }

    init() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.mainGainNode = this.audioContext.createGain();
        this.mainGainNode.connect(this.audioContext.destination);
        this.mainGainNode.gain.value = 0.15; // Gentle volume
    }

    // Musical notes frequencies (in Hz)
    notes = {
        'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
        'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
        'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46,
        'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
        'C6': 1046.50, 'D6': 1174.66, 'E6': 1318.51
    };

    // Zelda-inspired mystical melody (original composition)
    melody = [
        // Opening mystical phrase
        { note: 'A4', duration: 0.4 },
        { note: 'D5', duration: 0.4 },
        { note: 'F5', duration: 0.6 },
        { note: 'E5', duration: 0.4 },
        { note: 'D5', duration: 0.4 },
        { note: 'A4', duration: 0.8 },
        
        // Rising motif
        { note: 'E5', duration: 0.4 },
        { note: 'F5', duration: 0.4 },
        { note: 'A5', duration: 0.6 },
        { note: 'G5', duration: 0.4 },
        { note: 'F5', duration: 0.4 },
        { note: 'D5', duration: 0.8 },
        
        // Peaceful resolution
        { note: 'F5', duration: 0.4 },
        { note: 'E5', duration: 0.4 },
        { note: 'D5', duration: 0.4 },
        { note: 'A4', duration: 1.2 },
    ];

    // Ambient harmony notes
    harmony = ['A3', 'D4', 'F4'];

    playNote(frequency, startTime, duration, volume = 0.3) {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        // Use sine wave for mystical, ethereal sound
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        
        // ADSR envelope for natural sound
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(volume * 0.7, startTime + duration * 0.7);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.mainGainNode);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
        
        return oscillator;
    }

    playMelody() {
        if (!this.audioContext) return;
        
        let currentTime = this.audioContext.currentTime;
        const melodyVolume = 0.25;
        
        // Play main melody
        this.melody.forEach(({ note, duration }) => {
            this.playNote(this.notes[note], currentTime, duration, melodyVolume);
            currentTime += duration;
        });
        
        return currentTime - this.audioContext.currentTime;
    }

    playHarmony(duration) {
        if (!this.audioContext) return;
        
        const startTime = this.audioContext.currentTime;
        const harmonyVolume = 0.1;
        
        // Play soft harmonic background
        this.harmony.forEach(note => {
            const freq = this.notes[note];
            this.playNote(freq, startTime, duration, harmonyVolume);
        });
    }

    async start() {
        if (!this.audioContext) {
            this.init();
        }
        
        // Resume audio context (needed for some browsers)
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
        
        this.isPlaying = true;
        this.loop();
    }

    loop() {
        if (!this.isPlaying) return;
        
        const melodyDuration = this.playMelody();
        this.playHarmony(melodyDuration);
        
        // Schedule next loop with a slight pause
        setTimeout(() => {
            if (this.isPlaying) {
                this.loop();
            }
        }, (melodyDuration + 1) * 1000); // +1 second pause between loops
    }

    stop() {
        this.isPlaying = false;
        // The notes will naturally fade out
    }

    toggle() {
        if (this.isPlaying) {
            this.stop();
            return false;
        } else {
            this.start();
            return true;
        }
    }
}

// Create global music player instance
const musicPlayer = new MysticMusicPlayer();

// Auto-start music (will require user interaction on some browsers)
window.addEventListener('load', () => {
    // Start on first user interaction
    document.addEventListener('click', () => {
        if (!musicPlayer.isPlaying) {
            musicPlayer.start();
        }
    }, { once: true });
});

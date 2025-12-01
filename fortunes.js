// Fortune database with multiple categories
const fortunes = {
    adventure: [
        { text: "A grand adventure awaits you beyond the horizon. Pack light, but bring courage.", icons: "⚔️🗡️🛡️" },
        { text: "Three sacred trials lie ahead. Face them with wisdom, courage, and power.", icons: "▲✨🔥" },
        { text: "A mysterious dungeon will reveal itself when you least expect it. Bring a map.", icons: "🗺️🔑🏰" },
        { text: "Your quest will require seven hearts of courage. Begin collecting them now.", icons: "❤️❤️❤️" },
        { text: "The master sword of opportunity is waiting. You must prove yourself worthy first.", icons: "⚔️✨👑" },
        { text: "A wise owl will share ancient knowledge with you this week. Listen carefully.", icons: "🦉📜💫" },
        { text: "Hidden treasures lie beneath the ordinary. Look for secret passages in your daily life.", icons: "💎🗝️✨" },
        { text: "Your fairy companion brings a message: Trust your instincts when the path splits.", icons: "🧚‍♀️💫🌟" }
    ],
    
    love: [
        { text: "A kindred spirit approaches from the direction you least expect. Keep your heart open.", icons: "💖💫🌹" },
        { text: "The song of love plays strongest when two hearts harmonize. Your melody is about to find its match.", icons: "🎵💕🎶" },
        { text: "Like the moon and sun, you will soon meet your celestial counterpart.", icons: "🌙☀️💝" },
        { text: "A bond stronger than iron will form through shared laughter and adventure.", icons: "💑✨🌈" },
        { text: "The red thread of fate is pulling you toward a destined encounter. Follow it.", icons: "❤️🧵💫" },
        { text: "Love blooms in the garden of patience. Tend to it daily and watch it flourish.", icons: "🌺💐💕" }
    ],
    
    wealth: [
        { text: "Rupees of opportunity are scattered in your path. Green, blue, and red fortunes await.", icons: "💚💙❤️" },
        { text: "A treasure chest is about to unlock. The key is your dedication and skill.", icons: "📦🔑💰" },
        { text: "Your wallet will soon upgrade. Prepare for abundance beyond your current capacity.", icons: "👛✨💎" },
        { text: "The spirit of prosperity smiles upon you. Plant seeds now for a golden harvest.", icons: "🌱💛🌟" },
        { text: "A rare gemstone opportunity appears once per lifetime. Yours is approaching.", icons: "💎✨👑" },
        { text: "The winds of fortune blow in your favor. Set your sails high.", icons: "⛵💨💰" }
    ],
    
    health: [
        { text: "Your life force grows stronger. Three hearts of vitality are being restored.", icons: "❤️❤️❤️" },
        { text: "A healing fairy blesses you with renewed energy and wellbeing.", icons: "🧚‍♀️✨💚" },
        { text: "The great fairy fountain calls. Visit nature and let restoration flow through you.", icons: "⛲🌿💫" },
        { text: "Your stamina wheel is expanding. New levels of endurance are within reach.", icons: "🟢⚡💪" },
        { text: "Balance in all things brings harmony. Walk the path between rest and action.", icons: "⚖️🧘‍♀️✨" },
        { text: "The potion of wellness is brewing in your daily choices. Continue your healthy habits.", icons: "🧪💚🌟" }
    ],
    
    cosmic: [
        { text: "The stars align in your favor. Celestial forces guide your every step.", icons: "⭐🌟✨" },
        { text: "A comet of change streaks across your sky. Embrace the transformation it brings.", icons: "☄️💫🌠" },
        { text: "The moon's phases whisper secrets. Pay attention to your dreams this lunar cycle.", icons: "🌙🌛🌜" },
        { text: "Jupiter's wisdom and Saturn's discipline unite to support your endeavors.", icons: "🪐✨🌌" },
        { text: "Stardust runs through your veins. You are made of the same matter as galaxies.", icons: "✨🌌💫" },
        { text: "The cosmic dance aligns all elements in your favor. Flow with the universe.", icons: "🌀🪐⭐" },
        { text: "A meteor shower of blessings rains upon you. Make a wish for each one.", icons: "🌠🌠🌠" }
    ],
    
    winter: [
        { text: "Like the first snowflake, something unique and beautiful enters your life.", icons: "❄️✨💎" },
        { text: "The winter solstice brings renewal. Darkness gives way to growing light within you.", icons: "🌙🕯️☀️" },
        { text: "A cozy hearth of friendship warms you through the coldest challenges ahead.", icons: "🔥🏠💕" },
        { text: "The northern lights dance with news of wonder. Look up and be amazed.", icons: "🌌💚💙" },
        { text: "Like an evergreen, you remain vibrant even in the harshest seasons.", icons: "🌲❄️💚" },
        { text: "Hot cocoa moments of joy are coming. Savor the small magical instances.", icons: "☕🍫✨" },
        { text: "The snow blankets the world with possibility. Each step you take creates a new path.", icons: "👣❄️🌟" }
    ],
    
    wisdom: [
        { text: "The Triforce of Wisdom illuminates your mind. Trust your inner knowing.", icons: "▲💡✨" },
        { text: "Ancient sages whisper through the ages: The answer you seek is already within.", icons: "🧙‍♂️📚💫" },
        { text: "In the temple of silence, the loudest truths are heard. Meditate on your question.", icons: "🏛️🧘‍♀️🔮" },
        { text: "The owl's perspective sees what ground-dwellers cannot. Seek higher viewpoints.", icons: "🦉🏔️👁️" },
        { text: "Every puzzle has a solution. Step back, observe the pattern, and the way reveals itself.", icons: "🧩🔍✨" },
        { text: "Time's arrow moves forward, but wisdom is gained by looking back. Reflect and grow.", icons: "⏳📜🌱" }
    ],
    
    courage: [
        { text: "The Triforce of Courage burns within you. No dragon is too fierce for your spirit.", icons: "▲🔥⚔️" },
        { text: "Fear is the threshold to growth. Step through it and discover your power.", icons: "🚪💪✨" },
        { text: "The hero's journey begins with a single brave step. Today is that day.", icons: "👣🗡️🌟" },
        { text: "Your roar is louder than you know. Let it be heard when justice calls.", icons: "🦁📣⚡" },
        { text: "Shields are for the cautious; you wield courage itself as your defense.", icons: "🛡️❌💖" },
        { text: "In the darkest dungeon, your inner light shines brightest. Trust it.", icons: "🕯️🏰✨" }
    ]
};

// Function to get a random fortune
function getRandomFortune() {
    const categories = Object.keys(fortunes);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryFortunes = fortunes[randomCategory];
    const randomFortune = categoryFortunes[Math.floor(Math.random() * categoryFortunes.length)];
    
    return {
        ...randomFortune,
        category: randomCategory
    };
}

// Special seasonal fortunes for different times
function getSeasonalFortune() {
    const hour = new Date().getHours();
    const date = new Date();
    const month = date.getMonth();
    
    // Winter months (Nov, Dec, Jan)
    if (month === 11 || month === 0 || month === 1) {
        return fortunes.winter[Math.floor(Math.random() * fortunes.winter.length)];
    }
    
    // Evening/night - cosmic fortunes
    if (hour >= 18 || hour <= 5) {
        return fortunes.cosmic[Math.floor(Math.random() * fortunes.cosmic.length)];
    }
    
    // Default to random
    return getRandomFortune();
}

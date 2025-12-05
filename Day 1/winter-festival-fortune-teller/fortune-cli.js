#!/usr/bin/env node

// CLI Fortune Teller with Different Personalities
// Run with: node fortune-cli.js

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

// Personality templates for different fortune teller characters
const personalities = {
    madameZelda: {
        name: "Madame Zelda",
        greeting: "🔮 Greetings, traveler... Madame Zelda sees all...",
        prefix: "The crystal ball reveals:",
        suffix: "So it is written in the stars...",
        style: "mystical",
        color: "\x1b[35m" // Magenta
    },
    
    wiseSage: {
        name: "The Wise Sage",
        greeting: "🧙‍♂️ Ah, seeker of wisdom. The ancient scrolls speak...",
        prefix: "Ancient wisdom decrees:",
        suffix: "Heed these words, for they come from ages past.",
        style: "scholarly",
        color: "\x1b[36m" // Cyan
    },
    
    fairyQueen: {
        name: "The Fairy Queen",
        greeting: "🧚‍♀️ ✨ Welcome, dear soul! The fairy realm whispers...",
        prefix: "The fairies sing of:",
        suffix: "May magic guide your path! ✨",
        style: "whimsical",
        color: "\x1b[95m" // Light Magenta
    },
    
    winterSpirit: {
        name: "The Winter Spirit",
        greeting: "❄️ The frost carries a message from the north...",
        prefix: "The winter winds speak:",
        suffix: "May the snowflakes guide you home.",
        style: "seasonal",
        color: "\x1b[96m" // Light Cyan
    },
    
    cosmicOracle: {
        name: "The Cosmic Oracle",
        greeting: "🌌 The universe aligns to share its secrets...",
        prefix: "The cosmos reveals:",
        suffix: "Written in stardust across the heavens.",
        style: "celestial",
        color: "\x1b[94m" // Light Blue
    },
    
    courageousHero: {
        name: "The Courageous Hero",
        greeting: "⚔️ Brave one! Your destiny calls...",
        prefix: "Your quest shows:",
        suffix: "Go forth with courage! ⚔️✨",
        style: "heroic",
        color: "\x1b[91m" // Light Red
    }
};

// Color codes
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m"
};

// Get random item from array
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Get seasonal/contextual category
function getPreferredCategory() {
    const hour = new Date().getHours();
    const month = new Date().getMonth();
    
    // Winter months (Nov=10, Dec=11, Jan=0)
    if (month === 11 || month === 0 || month === 10) {
        return Math.random() < 0.4 ? 'winter' : null; // 40% chance winter
    }
    
    // Evening/night - cosmic fortunes
    if (hour >= 18 || hour <= 5) {
        return Math.random() < 0.3 ? 'cosmic' : null; // 30% chance cosmic
    }
    
    return null; // Random
}

// Falling sword animation
async function fallingSwordsAnimation() {
    const swords = ['🗡️', '⚔️', '🗡️', '⚔️', '🗡️'];
    const width = 70;
    const height = 12;
    
    // Helper to sleep
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    // Create sword positions
    const swordPositions = swords.map((sword, i) => ({
        sword,
        x: Math.floor((width / (swords.length + 1)) * (i + 1)),
        y: 0,
        rotation: Math.random() > 0.5 ? '/' : '\\'
    }));
    
    // Animate falling
    for (let frame = 0; frame < height; frame++) {
        // Clear screen
        console.clear();
        
        // Create empty grid
        const grid = Array(height).fill(null).map(() => Array(width).fill(' '));
        
        // Place swords at current positions
        swordPositions.forEach(pos => {
            if (pos.y >= 0 && pos.y < height && pos.x >= 0 && pos.x < width) {
                grid[pos.y][pos.x] = pos.sword;
            }
        });
        
        // Draw grid
        console.log('\n');
        grid.forEach(row => console.log(row.join('')));
        console.log('\n');
        
        // Update positions
        swordPositions.forEach(pos => {
            pos.y++;
            // Add slight horizontal wobble
            if (Math.random() > 0.7) {
                pos.x += Math.random() > 0.5 ? 1 : -1;
                pos.x = Math.max(0, Math.min(width - 1, pos.x));
            }
        });
        
        await sleep(100);
    }
    
    // Final impact effect
    console.clear();
    console.log('\n');
    console.log(' '.repeat(10) + '⚔️  🗡️  ⚔️  🗡️  ⚔️');
    console.log(' '.repeat(10) + '💥 💥 💥 💥 💥');
    console.log('\n');
    await sleep(500);
}

// Get a random fortune
function getFortune(categoryPreference = null) {
    let category;
    
    if (categoryPreference && fortunes[categoryPreference]) {
        category = categoryPreference;
    } else {
        const categories = Object.keys(fortunes);
        category = random(categories);
    }
    
    const fortune = random(fortunes[category]);
    return {
        ...fortune,
        category: category
    };
}

// Display fortune with personality
function displayFortune(personality, fortune) {
    const p = personalities[personality];
    const reset = colors.reset;
    const bright = colors.bright;
    const dim = colors.dim;
    
    console.log("\n");
    console.log("🗡️ " + "═".repeat(68));
    console.log(p.color + bright + p.greeting + reset);
    console.log("🗡️ " + "═".repeat(68));
    console.log("\n");
    
    console.log(dim + p.prefix + reset);
    console.log("\n");
    console.log(bright + p.color + fortune.icons + "  " + fortune.text + "  " + fortune.icons + reset);
    console.log("\n");
    console.log(dim + p.suffix + reset);
    console.log("\n");
    console.log(colors.yellow + "Category: " + fortune.category.toUpperCase() + reset);
    console.log("🗡️ " + "═".repeat(68));
    console.log("\n");
}

// Main function
async function main() {
    // Play falling swords animation
    await fallingSwordsAnimation();
    
    // Random personality each time
    const personalityKeys = Object.keys(personalities);
    const randomPersonality = random(personalityKeys);
    
    // Get contextual category preference
    const preferredCategory = getPreferredCategory();
    
    // Get fortune
    const fortune = getFortune(preferredCategory);
    
    // Display with chosen personality
    displayFortune(randomPersonality, fortune);
}

// Run it!
main();

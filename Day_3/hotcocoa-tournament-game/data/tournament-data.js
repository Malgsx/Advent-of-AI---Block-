/**
 * Tournament Data Configuration
 * Modify this file to update tournament information
 */

const tournamentData = {
    title: "HOT COCOA CHAMPIONSHIP",
    subtitle: "TOURNAMENT RESULTS - SEASON 2024",
    
    champion: {
        name: "Dark Chocolate Decadence",
        votes: 678
    },
    
    stats: {
        totalVotes: 5294,
        closestMatch: 14,
        biggestBlowout: 73,
        competitors: 8
    },
    
    quarterfinals: [
        {
            winner: { name: "Classic Swiss Velvet", votes: 234 },
            loser: { name: "Spicy Mexican Mocha", votes: 189 }
        },
        {
            winner: { name: "Peppermint Dream", votes: 312 },
            loser: { name: "Salted Caramel Swirl", votes: 298 }
        },
        {
            winner: { name: "Dark Chocolate Decadence", votes: 276 },
            loser: { name: "White Chocolate Wonder", votes: 203 }
        },
        {
            winner: { name: "Cinnamon Fireside", votes: 267 },
            loser: { name: "Hazelnut Heaven", votes: 245 }
        }
    ],
    
    semifinals: [
        {
            winner: { name: "Peppermint Dream", votes: 445 },
            loser: { name: "Classic Swiss Velvet", votes: 398 }
        },
        {
            winner: { name: "Dark Chocolate Decadence", votes: 512 },
            loser: { name: "Cinnamon Fireside", votes: 387 }
        }
    ],
    
    finals: {
        winner: { name: "Dark Chocolate Decadence", votes: 678 },
        loser: { name: "Peppermint Dream", votes: 623 }
    },
    
    recipes: [
        {
            name: "Classic Swiss Velvet",
            badge: "",
            stats: { richness: 8, sweetness: 6, creativity: 4, presentation: 7 }
        },
        {
            name: "Spicy Mexican Mocha",
            badge: "",
            stats: { richness: 7, sweetness: 5, creativity: 9, presentation: 8 }
        },
        {
            name: "Peppermint Dream",
            badge: "🥈",
            stats: { richness: 6, sweetness: 9, creativity: 7, presentation: 9 }
        },
        {
            name: "Salted Caramel Swirl",
            badge: "",
            stats: { richness: 9, sweetness: 8, creativity: 6, presentation: 7 }
        },
        {
            name: "Dark Chocolate Decadence",
            badge: "👑",
            stats: { richness: 10, sweetness: 5, creativity: 8, presentation: 10 }
        },
        {
            name: "White Chocolate Wonder",
            badge: "",
            stats: { richness: 5, sweetness: 10, creativity: 5, presentation: 6 }
        },
        {
            name: "Cinnamon Fireside",
            badge: "",
            stats: { richness: 7, sweetness: 7, creativity: 8, presentation: 8 }
        },
        {
            name: "Hazelnut Heaven",
            badge: "",
            stats: { richness: 8, sweetness: 7, creativity: 6, presentation: 7 }
        }
    ],
    
    votingTrends: [
        { period: "MORNING", votes: 1247, percentage: 41.5 },
        { period: "AFTERNOON", votes: 1891, percentage: 63 },
        { period: "EVENING", votes: 2156, percentage: 100 }
    ],
    
    funStats: [
        {
            icon: "🔥",
            label: "CLOSEST MATCH",
            text: "Peppermint Dream vs Salted Caramel Swirl (Only 14 vote difference!)"
        },
        {
            icon: "💪",
            label: "BIGGEST BLOWOUT",
            text: "Dark Chocolate Decadence vs White Chocolate Wonder (73 vote margin)"
        },
        {
            icon: "⚡",
            label: "MOST CONTROVERSIAL",
            text: "Spicy Mexican Mocha (People either loved it or hated it)"
        },
        {
            icon: "📊",
            label: "TOTAL PARTICIPATION",
            text: "5,294 votes across all rounds"
        },
        {
            icon: "🌙",
            label: "PEAK VOTING TIME",
            text: "Evening with 2,156 votes (40.7% of total)"
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tournamentData;
}

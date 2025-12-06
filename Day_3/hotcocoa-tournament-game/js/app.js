/**
 * Tournament Visualization Engine
 * Main application logic for rendering tournament data
 */

class TournamentApp {
    constructor(data) {
        this.data = data;
        this.init();
    }

    init() {
        this.renderHeader();
        this.renderChampion();
        this.renderStats();
        this.renderBracket();
        this.renderRecipes();
        this.renderVotingTrends();
        this.renderFunStats();
        this.animateOnLoad();
    }

    renderHeader() {
        const header = document.getElementById('tournament-header');
        header.innerHTML = `
            <h1>🏆 ${this.data.title} 🏆</h1>
            <p class="subtitle">${this.data.subtitle}</p>
        `;
    }

    renderChampion() {
        const champion = document.getElementById('champion-section');
        champion.innerHTML = `
            <div class="champion-title">👑 CHAMPION 👑</div>
            <div style="font-size: 1.2rem; margin: 1rem 0;">${this.data.champion.name.toUpperCase()}</div>
            <div style="font-size: 0.7rem;">${this.data.champion.votes} VOTES IN THE FINAL</div>
        `;
    }

    renderStats() {
        const statsGrid = document.getElementById('stats-grid');
        statsGrid.innerHTML = `
            <div class="stat-card">
                <div class="stat-label">TOTAL VOTES</div>
                <div class="stat-value">${this.data.stats.totalVotes.toLocaleString()}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">CLOSEST MATCH</div>
                <div class="stat-value">${this.data.stats.closestMatch}</div>
                <div class="stat-label" style="margin-top: 0.5rem;">VOTE DIFFERENCE</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">BIGGEST BLOWOUT</div>
                <div class="stat-value">${this.data.stats.biggestBlowout}</div>
                <div class="stat-label" style="margin-top: 0.5rem;">VOTE MARGIN</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">COMPETITORS</div>
                <div class="stat-value">${this.data.stats.competitors}</div>
            </div>
        `;
    }

    renderMatch(match) {
        return `
            <div class="match">
                <div class="team winner">
                    <span>${match.winner.name}</span>
                    <span class="votes">${match.winner.votes}</span>
                </div>
                <div class="team loser">
                    <span>${match.loser.name}</span>
                    <span class="votes">${match.loser.votes}</span>
                </div>
            </div>
        `;
    }

    renderBracket() {
        const bracket = document.getElementById('tournament-bracket');
        
        // Quarterfinals
        const quarterfinalsHTML = this.data.quarterfinals.map(match => this.renderMatch(match)).join('');
        
        // Semifinals
        const semifinalsHTML = this.data.semifinals.map(match => this.renderMatch(match)).join('');
        
        // Finals
        const finalsHTML = this.renderMatch(this.data.finals);

        bracket.innerHTML = `
            <div class="round">
                <div class="round-title">QUARTERFINALS</div>
                ${quarterfinalsHTML}
            </div>
            <div class="round">
                <div class="round-title">SEMIFINALS</div>
                ${semifinalsHTML}
            </div>
            <div class="round">
                <div class="round-title">🏆 CHAMPIONSHIP 🏆</div>
                ${finalsHTML}
            </div>
        `;
    }

    renderRecipeCard(recipe) {
        const stats = recipe.stats;
        return `
            <div class="recipe-card">
                <div class="recipe-name">${recipe.name} ${recipe.badge}</div>
                <div class="stat-bar-container">
                    <div class="stat-bar-label"><span>Richness</span><span>${stats.richness}/10</span></div>
                    <div class="stat-bar"><div class="stat-bar-fill" style="width: ${stats.richness * 10}%"></div></div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-label"><span>Sweetness</span><span>${stats.sweetness}/10</span></div>
                    <div class="stat-bar"><div class="stat-bar-fill" style="width: ${stats.sweetness * 10}%"></div></div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-label"><span>Creativity</span><span>${stats.creativity}/10</span></div>
                    <div class="stat-bar"><div class="stat-bar-fill" style="width: ${stats.creativity * 10}%"></div></div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-label"><span>Presentation</span><span>${stats.presentation}/10</span></div>
                    <div class="stat-bar"><div class="stat-bar-fill" style="width: ${stats.presentation * 10}%"></div></div>
                </div>
            </div>
        `;
    }

    renderRecipes() {
        const recipesGrid = document.getElementById('recipes-grid');
        recipesGrid.innerHTML = this.data.recipes.map(recipe => this.renderRecipeCard(recipe)).join('');
    }

    renderVotingTrends() {
        const barChart = document.getElementById('bar-chart');
        barChart.innerHTML = this.data.votingTrends.map(trend => `
            <div class="bar" style="height: ${trend.percentage}%;">
                <div class="bar-value">${trend.votes.toLocaleString()}</div>
                <div class="bar-label">${trend.period}</div>
            </div>
        `).join('');
    }

    renderFunStats() {
        const funStats = document.getElementById('fun-stats');
        funStats.innerHTML = this.data.funStats.map(stat => `
            <div class="fun-stat-item">
                ${stat.icon} <strong>${stat.label}:</strong> ${stat.text}
            </div>
        `).join('');
    }

    animateOnLoad() {
        // Animate stat bars
        const fills = document.querySelectorAll('.stat-bar-fill');
        fills.forEach((fill, index) => {
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = width;
            }, index * 50);
        });

        // Add hover effects
        document.querySelectorAll('.card, .stat-card, .recipe-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.1s ease';
            });
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new TournamentApp(tournamentData);
});

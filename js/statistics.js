// Statistics page functionality
let nounChartInstance = null;
let adjectiveChartInstance = null;

// Initialize statistics page
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    generateWordClouds();
    generateCharts();
});

// Setup event listeners
function setupEventListeners() {
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Generate word clouds
function generateWordClouds() {
    const nounFrequency = countWordFrequency('nouns');
    const adjectiveFrequency = countWordFrequency('adjectives');
    
    createWordCloud('nounWordCloud', nounFrequency);
    createWordCloud('adjectiveWordCloud', adjectiveFrequency);
}

// Count word frequency
function countWordFrequency(type) {
    const frequency = {};
    
    villainsData.forEach(villain => {
        const words = villain[type];
        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
        });
    });
    
    // Convert to array and sort by frequency
    return Object.entries(frequency)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count);
}

// Create word cloud visualization
function createWordCloud(containerId, wordData) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    // Find max frequency for scaling
    const maxFreq = Math.max(...wordData.map(d => d.count));
    const minFreq = Math.min(...wordData.map(d => d.count));
    
    wordData.forEach(item => {
        const word = item.word;
        const count = item.count;
        
        // Scale font size based on frequency (1rem to 3rem)
        const fontSize = 1 + ((count - minFreq) / (maxFreq - minFreq)) * 2;
        
        // Random color from gradient
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const wordElement = document.createElement('div');
        wordElement.className = 'word-item';
        wordElement.textContent = `${word} (${count})`;
        wordElement.style.fontSize = `${fontSize}rem`;
        wordElement.style.color = color;
        
        container.appendChild(wordElement);
    });
}

// Generate bar charts
function generateCharts() {
    const nounFrequency = countWordFrequency('nouns').slice(0, 15);
    const adjectiveFrequency = countWordFrequency('adjectives').slice(0, 15);
    
    createBarChart('nounChart', nounFrequency, '명사 빈도');
    createBarChart('adjectiveChart', adjectiveFrequency, '형용사 빈도');
}

// Create bar chart
function createBarChart(canvasId, wordData, label) {
    const ctx = document.getElementById(canvasId);
    
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded, skipping chart rendering');
        ctx.style.display = 'none';
        return;
    }
    
    ctx.style.display = 'block';
    
    // Destroy existing chart if any
    if (canvasId === 'nounChart' && nounChartInstance) {
        nounChartInstance.destroy();
    }
    if (canvasId === 'adjectiveChart' && adjectiveChartInstance) {
        adjectiveChartInstance.destroy();
    }
    
    const labels = wordData.map(d => d.word);
    const data = wordData.map(d => d.count);
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(118, 75, 162, 0.8)',
                borderColor: 'rgba(118, 75, 162, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    },
                    title: {
                        display: true,
                        text: '빈도',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '키워드',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `빈도: ${context.parsed.y}회`;
                        }
                    }
                }
            }
        }
    });
    
    // Store chart instance
    if (canvasId === 'nounChart') {
        nounChartInstance = chart;
    } else if (canvasId === 'adjectiveChart') {
        adjectiveChartInstance = chart;
    }
}

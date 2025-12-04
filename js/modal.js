// Modal functionality
let currentVillain = null;
let currentImageIndex = 0;
let imageSliderInterval = null;
let sentimentChart = null;

// Constants
const IMAGE_SLIDER_INTERVAL_MS = 3000;

// Setup modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('detailModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Show villain details in modal
function showVillainDetails(villain) {
    currentVillain = villain;
    currentImageIndex = 0;
    
    // Update basic info
    document.getElementById('modalName').textContent = villain.name;
    document.getElementById('modalWork').textContent = villain.work;
    document.getElementById('modalDescription').textContent = villain.description;
    document.getElementById('modalSource').textContent = `출처: ${villain.source}`;
    
    // Update keywords
    updateKeywords(villain);
    
    // Setup image slider
    setupImageSlider(villain);
    
    // Update sentiment analysis
    updateSentimentChart(villain);
    updateSentimentResult(villain);
    
    // Show similar villains
    showSimilarVillains(villain);
}

// Update keywords display
function updateKeywords(villain) {
    const keywordsContainer = document.getElementById('modalKeywords');
    keywordsContainer.innerHTML = '';
    
    villain.nouns.forEach(noun => {
        const span = document.createElement('span');
        span.className = 'keyword noun';
        span.textContent = noun;
        keywordsContainer.appendChild(span);
    });
    
    villain.adjectives.forEach(adj => {
        const span = document.createElement('span');
        span.className = 'keyword adjective';
        span.textContent = adj;
        keywordsContainer.appendChild(span);
    });
}

// Setup image slider
function setupImageSlider(villain) {
    const images = [villain.image1, villain.image2];
    const modalImage = document.getElementById('modalImage');
    const dots = document.querySelectorAll('.dot');
    
    // Set initial image
    modalImage.src = images[0];
    
    // Clear existing interval
    if (imageSliderInterval) {
        clearInterval(imageSliderInterval);
    }
    
    // Start auto-slide
    startImageSlider(images, modalImage);
    
    // Setup dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentImageIndex = index;
            modalImage.src = images[currentImageIndex];
            updateDots();
            
            // Reset interval
            clearInterval(imageSliderInterval);
            startImageSlider(images, modalImage);
        });
    });
    
    updateDots();
}

// Start image slider with auto-slide
function startImageSlider(images, modalImage) {
    imageSliderInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % 2;
        modalImage.src = images[currentImageIndex];
        updateDots();
    }, IMAGE_SLIDER_INTERVAL_MS);
}

// Update slider dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Update sentiment chart
function updateSentimentChart(villain) {
    const ctx = document.getElementById('sentimentChart');
    
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded, skipping chart rendering');
        ctx.style.display = 'none';
        return;
    }
    
    ctx.style.display = 'block';
    
    // Destroy existing chart
    if (sentimentChart) {
        sentimentChart.destroy();
    }
    
    const sentiment = villain.sentiment;
    const labels = ['혐오', '분노', '공포', '놀람', '행복', '슬픔', '중립'];
    const data = [
        sentiment.disgust,
        sentiment.anger,
        sentiment.fear,
        sentiment.surprise,
        sentiment.happiness,
        sentiment.sadness,
        sentiment.neutral
    ];
    
    const colors = [
        '#8b5a3c', // disgust - brown
        '#d32f2f', // anger - red
        '#5e35b1', // fear - purple
        '#ffa726', // surprise - orange
        '#66bb6a', // happiness - green
        '#42a5f5', // sadness - blue
        '#9e9e9e'  // neutral - grey
    ];
    
    sentimentChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Update sentiment result display
function updateSentimentResult(villain) {
    const resultDiv = document.getElementById('modalSentiment');
    const sentimentClass = villain.sentimentClass;
    
    let text = '';
    if (sentimentClass === 'positive') {
        text = '긍정적 감성';
    } else if (sentimentClass === 'negative') {
        text = '부정적 감성';
    } else {
        text = '중립적 감성';
    }
    
    resultDiv.textContent = text;
    resultDiv.className = `sentiment-result ${sentimentClass}`;
}

// Show similar villains based on sentiment
function showSimilarVillains(villain) {
    const container = document.getElementById('similarVillains');
    container.innerHTML = '';
    
    // Calculate similarity scores
    const similarities = villainsData
        .filter(v => v.id !== villain.id)
        .map(v => ({
            villain: v,
            score: calculateSentimentSimilarity(villain.sentiment, v.sentiment)
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    similarities.forEach(item => {
        const card = createSimilarCard(item.villain);
        container.appendChild(card);
    });
}

// Calculate sentiment similarity
function calculateSentimentSimilarity(sentiment1, sentiment2) {
    const keys = ['disgust', 'anger', 'fear', 'surprise', 'happiness', 'sadness', 'neutral'];
    let totalDiff = 0;
    
    keys.forEach(key => {
        totalDiff += Math.abs(sentiment1[key] - sentiment2[key]);
    });
    
    // Return inverse similarity (lower diff = higher similarity)
    return 100 - (totalDiff / keys.length);
}

// Create similar villain card
function createSimilarCard(villain) {
    const card = document.createElement('div');
    card.className = 'similar-card';
    
    card.innerHTML = `
        <img src="${villain.image1}" alt="${villain.name}">
        <div class="card-info">
            <div class="card-name">${villain.name}</div>
            <div class="card-work">${villain.work}</div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        showVillainDetails(villain);
    });
    
    return card;
}

// Close modal
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    
    // Clear interval
    if (imageSliderInterval) {
        clearInterval(imageSliderInterval);
        imageSliderInterval = null;
    }
    
    // Destroy chart
    if (sentimentChart) {
        sentimentChart.destroy();
        sentimentChart = null;
    }
}

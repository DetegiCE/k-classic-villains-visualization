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
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
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

    // Scroll to top button functionality
    if (modalContent && scrollToTopBtn) {
        modalContent.addEventListener('scroll', () => {
            if (modalContent.scrollTop > 200) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            modalContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Show villain details in modal
function showVillainDetails(villain) {
    currentVillain = villain;
    currentImageIndex = 0;
    
    // Update basic info
    document.getElementById('modalName').textContent = villain.name;
    document.getElementById('modalWork').textContent = villain.work;
    updateDescription(villain); // Updated this line
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
    const showMoreBtn = document.getElementById('showMoreKeywords');
    keywordsContainer.innerHTML = '';

    const allKeywords = [
        ...villain.nouns.map(noun => ({ text: noun, type: 'noun' })),
        ...villain.adjectives.map(adj => ({ text: adj, type: 'adjective' }))
    ];

    const displayKeywords = (keywords) => {
        keywordsContainer.innerHTML = '';
        keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.className = `keyword ${keyword.type}`;
            span.textContent = keyword.text;
            keywordsContainer.appendChild(span);
        });
    };

    // To prevent multiple event listeners, clone and replace the button
    const newShowMoreBtn = showMoreBtn.cloneNode(true);
    showMoreBtn.parentNode.replaceChild(newShowMoreBtn, showMoreBtn);

    if (allKeywords.length > 5) {
        let isExpanded = false;
        displayKeywords(allKeywords.slice(0, 5));
        newShowMoreBtn.style.display = 'inline-block';
        newShowMoreBtn.textContent = '더보기';
        
        newShowMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                displayKeywords(allKeywords);
                newShowMoreBtn.textContent = '줄이기';
            } else {
                displayKeywords(allKeywords.slice(0, 5));
                newShowMoreBtn.textContent = '더보기';
            }
        });

    } else {
        displayKeywords(allKeywords);
        newShowMoreBtn.style.display = 'none';
    }
}

// Update description with show more/less functionality
function updateDescription(villain) {
    const descriptionContainer = document.getElementById('modalDescription');
    const fullText = villain.description;

    if (fullText.length <= 300) {
        descriptionContainer.innerHTML = fullText;
        return;
    }

    const shortText = fullText.substring(0, 300);
    let isExpanded = false;

    const render = () => {
        if (isExpanded) {
            descriptionContainer.innerHTML = `${fullText} <span class="toggle-description" style="cursor: pointer; color: #999; font-style: italic;">(줄이기)</span>`;
        } else {
            descriptionContainer.innerHTML = `${shortText}... <span class="toggle-description" style="cursor: pointer; color: #999; font-style: italic;">(더보기)</span>`;
        }

        const toggleButton = descriptionContainer.querySelector('.toggle-description');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                isExpanded = !isExpanded;
                render();
            }, { once: true }); // Use { once: true } to avoid multiple listeners if render is called elsewhere
        }
    };

    render();
}

// Setup image slider
function setupImageSlider(villain) {
    const images = villain.images;
    const sliderContainer = document.getElementById('imageSliderContainer');
    const sliderDots = document.querySelector('.slider-dots');
    
    // Clear existing content
    sliderContainer.innerHTML = '';
    sliderDots.innerHTML = '';

    // Create images and dots
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${villain.name} 이미지 ${index + 1}`;
        sliderContainer.appendChild(img);

        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.dataset.index = index;
        sliderDots.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Set initial state
    if (images.length > 0) {
        currentImageIndex = 0;
        updateSliderPosition();
    }
    
    // Clear existing interval
    if (imageSliderInterval) {
        clearInterval(imageSliderInterval);
    }
    
    // Start auto-slide only if there are multiple images
    if (images.length > 1) {
        startImageSlider(images.length);
    }
    
    // Setup dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentImageIndex = index;
            updateSliderPosition();
            
            // Reset interval
            if (images.length > 1) {
                clearInterval(imageSliderInterval);
                startImageSlider(images.length);
            }
        });
    });
    
    updateDots();
}

// Start image slider with auto-slide
function startImageSlider(imageCount) {
    imageSliderInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageCount;
        updateSliderPosition();
    }, IMAGE_SLIDER_INTERVAL_MS);
}

// Update slider position for animation
function updateSliderPosition() {
    const sliderContainer = document.getElementById('imageSliderContainer');
    const slideWidth = sliderContainer.clientWidth;
    sliderContainer.style.transform = `translateX(-${currentImageIndex * slideWidth}px)`;
    updateDots();
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
        <img src="${villain.images[0]}" alt="${villain.name}">
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
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    modal.classList.remove('active');
    scrollToTopBtn.classList.remove('visible');
    
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

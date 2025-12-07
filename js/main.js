// Main page functionality
let currentView = 'floating';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initFloatingView();
    initListView();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    const toggleViewBtn = document.getElementById('toggleViewBtn');
    const statsBtn = document.getElementById('statsBtn');

    toggleViewBtn.addEventListener('click', toggleView);
    statsBtn.addEventListener('click', () => {
        window.location.href = 'statistics.html';
    });
}

// Toggle between floating and list views
function toggleView() {
    const floatingView = document.getElementById('floatingView');
    const listView = document.getElementById('listView');
    const toggleBtn = document.getElementById('toggleViewBtn');

    if (currentView === 'floating') {
        floatingView.classList.remove('active');
        listView.classList.add('active');
        toggleBtn.textContent = '플로팅 보기';
        currentView = 'list';
    } else {
        listView.classList.remove('active');
        floatingView.classList.add('active');
        toggleBtn.textContent = '리스트 보기';
        currentView = 'floating';
    }
}

// Initialize floating view
function initFloatingView() {
    const container = document.getElementById('floatingContainer');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    villainsData.forEach((villain, index) => {
        const card = createFloatingCard(villain);
        
        // Random position
        const randomX = Math.random() * (containerWidth - 100);
        const randomY = Math.random() * (containerHeight - 150);
        
        card.style.left = `${randomX}px`;
        card.style.top = `${randomY}px`;
        
        // Random animation delay
        card.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(card);
    });
}

// Create floating card element
function createFloatingCard(villain) {
    const card = document.createElement('div');
    card.className = `floating-card sentiment-${villain.sentimentClass}`;
    card.dataset.villainId = villain.id;
    
    card.innerHTML = `
        <div class="img-container">
            <img src="${villain.images[0]}" alt="${villain.name}">
        </div>
        <div class="card-info">
            <div class="card-name">${villain.name}</div>
            <div class="card-work">${villain.work}</div>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(villain.id));
    
    return card;
}

// Initialize list view
function initListView() {
    const container = document.getElementById('listContainer');
    
    villainsData.forEach(villain => {
        const card = createListCard(villain);
        container.appendChild(card);
    });
}

// Create list card element
function createListCard(villain) {
    const card = document.createElement('div');
    card.className = `list-card sentiment-${villain.sentimentClass}`;
    card.dataset.villainId = villain.id;
    
    card.innerHTML = `
        <img src="${villain.images[0]}" alt="${villain.name}">
        <div class="card-info">
            <div class="card-name">${villain.name}</div>
            <div class="card-work">${villain.work}</div>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(villain.id));
    
    return card;
}

// Open modal with villain details
function openModal(villainId) {
    const villain = villainsData.find(v => v.id === villainId);
    if (!villain) return;
    
    const modal = document.getElementById('detailModal');
    modal.classList.add('active');
    showVillainDetails(villain);
}

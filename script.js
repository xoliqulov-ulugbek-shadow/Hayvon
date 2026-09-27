import { animals } from './animals.js';

const container = document.getElementById('animalsContainer');
const searchInput = document.getElementById('searchInput');

// Функция рендеринга карточек
function renderAnimals(list) {
    if (list.length === 0) {
        container.innerHTML = '<div class="no-results">Bunaqa Hayvon Yoq!</div>';
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="card">
            <div class="card-top">
                <img src="${item.img}" alt="${item.name}" class="emoji" />
                <span class="badge">${item.type}</span>
            </div>
            <h3 class="name">${item.name}</h3>
            <p class="fact">${item.fact}</p>
        </div>
    `).join('');
}

// Поиск при вводе
searchInput.addEventListener('input', (event) => {
    const text = event.target.value.toLowerCase().trim();

    const filtered = animals.filter(item => 
        item.name.toLowerCase().includes(text) || 
        item.fact.toLowerCase().includes(text)
    );

    renderAnimals(filtered);
});

// Первичный вывод карточек сразу при загрузке
renderAnimals(animals);
"use strict";
// 1. Примітивні типи (можна залишити тут)
const message = 'Hello from TypeScript!';
console.log(message);
// Функцію fetch можна оголосити тут
function fetchAndDisplayPosts() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer)
        return;
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then((posts) => {
        let html = '';
        posts.forEach(post => {
            html += `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
        });
        postsContainer.innerHTML = html;
    })
        .catch((error) => console.error('Error fetching posts:', error));
}
// +++++++ ГОЛОВНА ЗМІНА ТУТ +++++++
// Чекаємо, доки ВЕСЬ HTML завантажиться
document.addEventListener('DOMContentLoaded', () => {
    // 1. Тепер викликаємо завантаження постів
    fetchAndDisplayPosts();
    // 2. І ТІЛЬКИ ТЕПЕР шукаємо кнопки та модальне вікно
    const openModalButton = document.getElementById('open-modal-btn');
    const modal = document.getElementById('my-modal');
    const closeModalButton = document.querySelector('.close-modal');
    openModalButton === null || openModalButton === void 0 ? void 0 : openModalButton.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'block';
        }
    });
    closeModalButton === null || closeModalButton === void 0 ? void 0 : closeModalButton.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'none';
        }
    });
    // 3. Обробник 'scroll' можна теж додати сюди
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            console.log('Scroll position is over 100px');
        }
    });
});

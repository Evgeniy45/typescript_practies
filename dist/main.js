import { fetchAndDisplayPosts } from './modules/posts.js';
import { initModal } from './modules/modal.js';
import { initScrollListener } from './modules/scroll.js';
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayPosts();
    initModal();
    initScrollListener();
});

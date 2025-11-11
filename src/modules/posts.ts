import { Post } from '../types/post.js';

export function fetchAndDisplayPosts(): void {
  const postsContainer: HTMLElement | null = document.getElementById('posts-container');
  if (!postsContainer) return; 

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then((posts: Post[]) => {
      let html: string = '';
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
    .catch((error: Error) => console.error('Error fetching posts:', error));
}
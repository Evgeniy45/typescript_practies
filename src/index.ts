const message: string = 'Hello from TypeScript!';
console.log(message);

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function fetchAndDisplayPosts(): void {
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



document.addEventListener('DOMContentLoaded', () => {

  fetchAndDisplayPosts();

  const openModalButton: HTMLElement | null = document.getElementById('open-modal-btn');
  const modal: HTMLElement | null = document.getElementById('my-modal');
  const closeModalButton: HTMLElement | null = document.querySelector('.close-modal');

  openModalButton?.addEventListener('click', () => {
    if (modal) {
      modal.style.display = 'block';
    }
  });
  
  closeModalButton?.addEventListener('click', () => {
    if (modal) {
      modal.style.display = 'none';
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      console.log('Scroll position is over 100px');
    }
  });

});
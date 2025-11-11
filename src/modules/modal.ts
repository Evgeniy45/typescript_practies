export function initModal(): void {
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
}
export function initModal() {
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
}

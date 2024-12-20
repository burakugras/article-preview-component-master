const shareButton = document.getElementById('share-icon')

shareButton.addEventListener('click', () => {
    const popup = document.getElementById('popup')
    popup.classList.toggle('hidden');
})
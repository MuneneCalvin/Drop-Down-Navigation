let toggleBtn = document.querySelector('.toggle-btn');
let toggleBtnIcon = document.querySelector('.toggle-btn i');
let dropDown = document.querySelector('drop-down');

toggleBtn.onclick = function () {
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fas fa-times'
    : 'fas fa-bars'
    }
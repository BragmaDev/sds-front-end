const signInBtn = document.querySelector('.btn-signin');
const panel = document.querySelector('.panel-signin');
const closeBtn = document.querySelector('.btn-close');

let showPanel = false;

signInBtn.addEventListener('click', togglePanel);
closeBtn.addEventListener('click', togglePanel);

function togglePanel() {
    if (!showPanel) {
        panel.classList.add('show');
        showPanel = true;
    } else {
        panel.classList.remove('show');
        showPanel = false;
    }
}
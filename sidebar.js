const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close');
const openButton = document.getElementById('open');

function toggleSidebar(shouldShow) {
    sidebar.style.display = shouldShow ? 'block' : 'none';
    openButton.style.display = shouldShow ? 'none' : 'block';
}

closeButton.addEventListener('click', () => {
    toggleSidebar(false);
});

openButton.addEventListener('click', () => {
    toggleSidebar(true);
});

function checkScreenSize() {
    if (window.innerWidth < 1600) {
        toggleSidebar(false);
    } else {
        toggleSidebar(true);
    }
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);
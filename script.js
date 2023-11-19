const allLoadings = document.querySelectorAll('.loading');
const toggle = document.getElementById('toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkmode', isDarkModeEnabled);

    document.title = isDarkModeEnabled ? 'Dark Mode' : 'Light Mode';
    
    if (isDarkModeEnabled) {
        toggle.style.color = '#fff';
    } else {
        toggle.style.color = '#000';
    }
}

toggle.addEventListener('click', toggleDarkMode);

toggle.addEventListener('mouseenter', () => {
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    toggle.setAttribute('title', isDarkModeEnabled ? 'Change to Light Mode' : 'Change to Dark Mode');
})

window.addEventListener('load', () => {
    const isDarkModeEnabled = localStorage.getItem('darkmode');

    if(isDarkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
        document.title = 'Dark Mode';
        toggle.setAttribute('title', 'Change to Light Mode');
        toggle.style.color = '#fff';
    } else {
        document.body.classList.remove('dark-mode');
        document.title = 'Light Mode';
        toggle.setAttribute('title', 'Change to Dark Mode');
    }

    setInterval(() => {
        allLoadings.forEach(item => {
            item.classList.remove('loading');
        });
    }, 2000);
})

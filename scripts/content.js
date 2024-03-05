document.addEventListener('keydown', (event) => {
    chrome.storage.local.get('tailwindcss_dark_mode_toggle_key').then((result) => {
        if (event.key === result?.tailwindcss_dark_mode_toggle_key) {
            document.body.classList.toggle('dark');
        }
    });
});
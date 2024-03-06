document.addEventListener('keydown', (event) => {
    chrome.storage.local.get('tailwindcss_dark_mode_toggle_key').then((result) => {
        if (event.key === result?.tailwindcss_dark_mode_toggle_key) {
            document.body.classList.toggle('dark');

            chrome.storage.local.set({
                'tailwindcss_dark_mode_status' : document.body.classList.contains('dark')
            });
        }
    });
});

window.addEventListener('load', () => {
    chrome.storage.local.get('tailwindcss_dark_mode_status').then((result) => {
        if (result?.tailwindcss_dark_mode_status ?? false) {
            document.body.classList.add('dark');
        }
    });
});
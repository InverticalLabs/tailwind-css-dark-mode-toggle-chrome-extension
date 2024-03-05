/**
 * Listen for the button click.
 *
 */
document.getElementById('save').addEventListener('click', () => {
    let key = document.getElementById('toggle_key').value;

    chrome.storage.local.set({ 'tailwindcss_dark_mode_toggle_key' : key }).then((result) => {
        alert('Saved! Refresh page before using.');
    });
});

/**
 * Retrieve the page number using local storage.
 *
 */
chrome.storage.local.get('tailwindcss_dark_mode_toggle_key').then((result) => {
    document.getElementById('toggle_key').value = result?.tailwindcss_dark_mode_toggle_key ?? 'F1';
});
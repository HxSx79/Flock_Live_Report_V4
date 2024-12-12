// Add this function at the end of the file
function closeApplication() {
    if (confirm('Are you sure you want to close the application?')) {
        fetch('/shutdown', { method: 'POST' })
        .then(() => window.close())
        .catch(() => window.close());
    }
}
function showPage(pageId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}
// Show the selected section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Toggle menu visibility (for mobile)
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('show');
});

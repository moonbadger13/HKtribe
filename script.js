// Basic JavaScript to add a simple interactive feature.
document.addEventListener('DOMContentLoaded', function() {
    // Example: Console log the sections when clicked
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('click', function() {
            console.log('Section clicked:', this.id);
        });
    });
});
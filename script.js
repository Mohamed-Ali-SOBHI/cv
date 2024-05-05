document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.textContent = 'Email sent successfully!';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (name && email && message) {
        // Handle form submission (e.g., send data to a server or display a success message)
        alert('Form submitted successfully!');
        // Reset form fields
        document.getElementById('contact-form').reset();
    } else {
        alert('Sos burro? llena todo.');
    }
});

// Sample dynamic update for news section
const newsSection = document.querySelector('.news');
const newsUpdates = [
    { title: "Accidente en la entrada de la Universidad del Valle", date: "2024-05-01", content: "Imprudente conductor choca a joven estudiante que iba a estacionarse en el parqueo de la institución." },
    { title: "Nico se va a cambiar de carrera", date: "2024-06-03", content: "Le ganaron los pensamientos intrusivos." }
];

newsUpdates.forEach(update => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `<h3>${update.title}</h3><p>${update.date}</p><p>${update.content}</p>`;
    newsSection.appendChild(newsItem);
});

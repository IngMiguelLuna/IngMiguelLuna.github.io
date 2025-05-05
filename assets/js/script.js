// Theme toggle functionality
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Set initial theme based on saved preference or system preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://formspree.io/f/mldjzpng', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('Gracias por tu mensaje, ' + data.Name + '! Nos pondremos en contacto contigo pronto.');
                    event.target.reset();
                } else {
                    alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
            }
        });
    }
});
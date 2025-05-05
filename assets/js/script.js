// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');

    // Toggle base theme classes
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-black');
    document.body.classList.toggle('text-white');

    // Update navigation and other components
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('text-gray-700');
        el.classList.toggle('text-gray-300');
        el.classList.toggle('hover:text-black');
        el.classList.toggle('hover:text-white');
    });

    // Update cards and containers
    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.toggle('bg-white');
        el.classList.toggle('bg-gray-800');
        el.classList.toggle('shadow-lg');
    });
}

// Set initial theme based on user preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleTheme();
}

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
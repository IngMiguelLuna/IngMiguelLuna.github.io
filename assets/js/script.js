// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');

    // Toggle base theme classes
    const body = document.body;
    body.classList.toggle('bg-white');
    body.classList.toggle('bg-black');
    body.classList.toggle('text-gray-900');
    body.classList.toggle('text-white');

    // Update headings and text
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
        el.classList.toggle('text-gray-900');
        el.classList.toggle('text-white');
    });

    // Update paragraphs and other text elements
    document.querySelectorAll('p, span, a:not(.fa)').forEach(el => {
        el.classList.toggle('text-gray-700');
        el.classList.toggle('text-gray-300');
    });

    // Update icons
    document.querySelectorAll('.fa').forEach(el => {
        el.classList.toggle('text-gray-900');
        el.classList.toggle('text-white');
    });

    // Update project cards
    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.toggle('bg-white');
        el.classList.toggle('bg-gray-800');
    });

    // Update navigation elements
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('hover:bg-gray-200');
        el.classList.toggle('hover:bg-gray-800');
    });

    // Update form inputs
    document.querySelectorAll('.contact-input').forEach(el => {
        el.classList.toggle('border-gray-300');
        el.classList.toggle('border-gray-600');
        el.classList.toggle('text-gray-900');
        el.classList.toggle('text-white');
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
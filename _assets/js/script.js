// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    if (!body) return;

    body.classList.toggle('bg-black');
    body.classList.toggle('bg-white');
    body.classList.toggle('text-white');
    body.classList.toggle('text-black');

    document.querySelectorAll('.bg-gray-800, .text-gray-300, .fa').forEach(el => {
        if (body.classList.contains('bg-white')) {
            el.classList.replace('bg-gray-800', 'bg-gray-200');
            el.classList.replace('text-gray-300', 'text-gray-700');
            if (el.classList.contains('fa')) {
                el.style.color = '#000';
            }
        } else {
            el.classList.replace('bg-gray-200', 'bg-gray-800');
            el.classList.replace('text-gray-700', 'text-gray-300');
            if (el.classList.contains('fa')) {
                el.style.color = '#fff';
            }
        }
    });
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
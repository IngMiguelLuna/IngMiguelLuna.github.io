---
layout: default
# Prefijo del nombre
prefijo: "Ing."
# Nombre completo
nombre: "Miguel Luna"
imgProfile: "https://avatars.githubusercontent.com/u/179346487" 
# Descripción breve
descripcion: "Ingeniero en Mecatrónica | Desarrollo de Software | AI | Sistemas Embebidos."
# Acerca de mí
acercaDe: "Apasionado por la automatización, el desarrollo de software y la inteligencia artificial."
email: "ing.miguel.luna.l@gmail.com"
ubi: "Estado de México, MX"
tel: "+52 ---- ----"
aboutme: "Este es un sitio web tipo portafolio para mostrar mis proyectos y habilidades en busqueda de oportunidades"
aboutme2: "Página desarrollada en Ruby Jekyll. Para más información, visita mi perfil en GitHub." 
#links
x: "https://x.com/Ing_MikeLuna"
ig: "https://www.instagram.com/mikirokorokomiki/"
github: "https://github.com/IngMiguelLuna"
patreon: https://patreon.com/IngMiguelLuna?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink
infoFooter: "© 2025 Ing. Miguel Luna. Todos los derechos reservados." 
---

<!-- Header/Home -->
<header class="text-center py-8" id="home">
    <h1 class="text-7xl mb-4 text-gray-900 dark:text-white">
        <span class="hidden sm:inline">{{page.prefijo}}</span> {{page.nombre}}
    </h1>
    <p class="text-gray-700 dark:text-gray-300">{{page.descripcion}}</p>
    <img id="pPhoto" src="{{page.imgProfile}}" alt="{{page.nombre}}" class="w-full h-auto mt-8">
</header>

<!-- About Section -->
<div class="py-16" id="aboutme">
    <h2 class="text-3xl text-gray-900 dark:text-white mb-4">Sobre Mí</h2>
    <hr class="w-48 opacity-50 mb-8">
    <p class="text-justify text-gray-700 dark:text-gray-300">{{page.acercaDe}}</p>
    <h3 class="text-2xl text-gray-900 dark:text-white py-4 mt-8">Mis Habilidades</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {% for habilidad in site.data.habilidades %}
            <div class="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {% if habilidad.type == "custom" %}
                    <img src="{{ '/assets/img/icons/' | append: habilidad.icon | relative_url }}" 
                         alt="{{ habilidad.nombre }}" 
                         class="w-12 h-12 mb-3">
                {% else %}
                    <i class="{{ habilidad.type }} {{ habilidad.icon }} text-4xl mb-3"></i>
                {% endif %}
                <p class="text-lg text-center text-gray-900 dark:text-white">{{ habilidad.nombre }}</p>
            </div>
        {% endfor %}
    </div>
</div>

<!-- Portfolio Section -->
<div class="py-16" id="proyects">
    <h2 class="text-3xl text-gray-900 dark:text-white mb-4">Mis Proyectos</h2>
    <hr class="w-48 opacity-50 mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {% for post in site.posts %}
            <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <a href="{{ post.url }}" class="block">
                    <div class="aspect-w-16">
                        <img src="{{post.img}}" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ post.titulo }}</h3>
                        <p class="text-gray-700 dark:text-gray-300 text-sm">{{ post.descripcion }}</p>
                    </div>
                </a>
            </div>
        {% endfor %}
    </div>
</div>

<!-- Contact Section -->
<div class="py-16" id="contact">
    <h2 class="text-3xl text-gray-900 dark:text-white mb-4">Contáctame</h2>
    <hr class="w-48 opacity-50 mb-8">
    <div class="space-y-4 mb-8 text-gray-700 dark:text-gray-300">
        <p><i class="fa fa-map-marker fa-fw text-gray-900 dark:text-white text-4xl mr-4"></i> {{page.ubi}}</p>
        <p><i class="fa fa-phone fa-fw text-gray-900 dark:text-white text-4xl mr-4"></i> Teléfono: {{page.tel}}</p>
        <p><i class="fa fa-envelope fa-fw text-gray-900 dark:text-white text-4xl mr-4"></i> Email: {{page.email}}</p>
    </div>
    <p class="mb-4 text-gray-900 dark:text-white">Envíame un mensaje:</p>
    <form id="contactForm" class="space-y-4">
        <input class="w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white" 
               type="text" placeholder="Nombre" required name="Name" autocomplete="name">
        <input class="w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white" 
               type="email" placeholder="Email" required name="Email" autocomplete="email">
        <input class="w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white" 
               type="text" placeholder="Asunto" required name="Subject">
        <textarea class="w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white resize-y" 
                  placeholder="Mensaje" required name="Message"></textarea>
        <button class="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors" 
                type="submit">
            <i class="fa fa-paper-plane"></i> ENVIAR MENSAJE
        </button>
        <p class="text-sm text-gray-700 dark:text-gray-300">La información proporcionada será utilizada únicamente para responder a tu mensaje. Para más detalles consulta nuestro <a href="/legal/avisoDePrivacidad" target="_blank">Aviso de Privacidad</a>.</p>
    </form>
</div>

<!-- About Section -->
<div class="py-16" id="about">
    <h2 class="text-3xl text-gray-900 dark:text-white mb-4">Acerca de</h2>
    <hr class="w-48 opacity-50 mb-8">
    <p class="mb-4 text-gray-700 dark:text-gray-300">{{page.aboutme}}</p>
    <p class="text-gray-700 dark:text-gray-300">{{page.aboutme2}}</p>
</div>
---
layout: default
# Prefijo del nombre
prefijo: "Ing."
# Nombre completo
nombre: "Miguel Luna"
imgProfile: "https://avatars.githubusercontent.com/u/179346487?v=4"
# Descripción breve
descripcion: "Ingeniero en Mecatrónica | Desarrollo de Software | AI | Sistemas Embebidos."
# Acerca de mí
acercaDe: "Apasionado por la automatización, el desarrollo de software y la inteligencia artificial."
# Habilidades y porcentajes de dominio
skill1: "C++"
prc1: "90%"
skill2: "Python"
prc2: "92%"
skill3: "Kotlin"
prc3: "60%"
skill4: "Diseño Web"
prc4: "98%"
skill5: "Modelado 3D en Blender"
prc5: "50%"
skill6: "Modelado 3D en SolidWorks"
prc6: "90%"
skill7: "Modelado en Blockbench"
prc7: "100%"
skill8: "Inglés"
prc8: "75%"
---

{% for post in site.posts %}
  <div class="w3-card-4 w3-margin w3-white">
    <a href="{{ post.url }}">
      <div class="w3-container" id="mi-imagenes">
        {% assign image_files = site.static_files | where: "image", true %}
        {% for myimage in image_files %}
          <img src="{{ myimage.path }}" alt="Atir">
        {% endfor %}
      </div>
      <div class="w3-container">
        <h3>{{ post.titulo }}</h3>
        <p>{{ post.descripcion }}</p>
      </div>
    </a>
  </div>
{% endfor %}
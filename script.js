// Script.js - Funcionalidades básicas de la Plataforma Académica

// Función para manejar el scroll suave en los links del menú
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para agregar efecto hover a las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.6)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
        });
    });
});

// Mensaje de consola de bienvenida
console.log('Bienvenido a la Plataforma Académica Básica');
console.log('Versión 1.0 - Proyecto de demostración Git/GitHub');

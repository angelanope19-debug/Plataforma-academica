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
            this.style.boxShadow = '0 10px 20px rgba(42, 82, 152, 0.6)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(42, 82, 152, 0.4)';
        });
    });
});

// Mensaje de consola de bienvenida
console.log('Bienvenido a la Plataforma de Ingeniería de Software');
console.log('Versión 1.0 - Especialización en Ingeniería de Software');
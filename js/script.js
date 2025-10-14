// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами для анимации
    document.querySelectorAll('.info-block').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Добавляем стили для анимации
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Плавная прокрутка для индикатора
document.addEventListener('DOMContentLoaded', function() {
    // Прокрутка при клике на индикатор
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});

// Простой вариант - по одному клику
document.addEventListener('DOMContentLoaded', function() {
    const blockPhoto = document.querySelector('.main-portrait');
    
    if (blockPhoto) {
        blockPhoto.style.cursor = 'pointer';
        
        blockPhoto.addEventListener('click', function() {
            // Создаем эффект "взрыва" перед переходом
            this.style.transition = 'all 0.5s ease';
            this.style.transform = 'scale(1.2)';
            this.style.opacity = '0.5';
            
            setTimeout(() => {
                window.location.href = 'secret.html';
            }, 500);
        });
        
        // Подсказка при наведении
        blockPhoto.addEventListener('mouseenter', function() {
            this.title = 'Открыть секрет...';
        });
    }
});
// Инициализация страницы произведений
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для индикатора
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Плавное появление элементов при скролле
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

    // Наблюдаем за секциями произведений
    document.querySelectorAll('.works-section, .stats-section').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Обработка кнопок "Читать отрывок"
    const readButtons = document.querySelectorAll('.btn-read');
    readButtons.forEach(button => {
        button.addEventListener('click', function() {
            const work = this.getAttribute('data-work');
            showExcerpt(work);
        });
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

// Функция показа отрывка произведения
function showExcerpt(work) {
    const excerpts = {
        'dvenadcat': `
            <h4>Отрывок из поэмы "Двенадцать"</h4>
            <div class="excerpt-content">
                <p>Чёрный вечер.<br>
                Белый снег.<br>
                Ветер, ветер!<br>
                На ногах не стоит человек.<br>
                Ветер, ветер —<br>
                На всём божьем свете!</p>
                
                <p>Завивает ветер<br>
                Белый снежок.<br>
                Под снежком — ледок.<br>
                Скользко, тяжко,<br>
                Всякий ходок<br>
                Скользит — ах, бедняжка!</p>
            </div>
        `,
        'skify': `
            <h4>Отрывок из поэмы "Скифы"</h4>
            <div class="excerpt-content">
                <p>Мильоны — вас. Нас — тьмы, и тьмы, и тьмы.<br>
                Попробуйте, сразитесь с нами!<br>
                Да, скифы — мы! Да, азиаты — мы,<br>
                С раскосыми и жадными очами!</p>
                
                <p>Для вас — века, для нас — единый час.<br>
                Мы, как послушные холопы,<br>
                Держали щит меж двух враждебных рас<br>
                Монголов и Европы!</p>
            </div>
        `,
        'vozmezdie': `
            <h4>Отрывок из поэмы "Возмездие"</h4>
            <div class="excerpt-content">
                <p>В те годы дальние, глухие,<br>
                В сердцах царили сон и мгла:<br>
                Победоносцев над Россией<br>
                Простер совиные крыла...</p>
                
                <p>И не было ни дня, ни ночи,<br>
                А только — тень огромных крыл;<br>
                Он дивным кругом очертил<br>
                Россию, заглянув ей в очи...</p>
            </div>
        `
    };

    // Создаем модальное окно с отрывком
    const modal = document.createElement('div');
    modal.className = 'excerpt-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            ${excerpts[work]}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}
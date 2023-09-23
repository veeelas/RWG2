// Отримуємо посилання на елемент header_top
const header_top = document.querySelector('#header_top');
const header_bottom = document.querySelector('#header_bottom');

// Встановлюємо початковий стиль для header_top
header_top.style.transition = 'top 0.8s, opacity 0.8s';
header_top.style.position = 'fixed';
header_top.style.top = '0px';
header_top.style.opacity  = '100%';


header_bottom.style.transition = 'top 0.8s, background-color 0.5s'; // Додаємо перехід для background-color
header_bottom.style.position = 'fixed';
header_bottom.style.top = '30px';
header_bottom.style.backgroundColor = "rgba(0, 0, 0, 0)";
header_bottom.style.backdropFilter = 'blur(0px)';





// Функція, яка буде викликана при прокрутці сторінки
function handleScroll() {
  // Отримуємо поточне положення прокрутки сторінки
  var scrollY = window.scrollY || window.pageYOffset;

  // Визначаємо, наскільки має зсунутися header_top вгору
  var offset = 40; // Ви можете налаштувати це значення відповідно до вашого дизайну

  // Якщо користувач прокрутив сторінку достатньо вниз, ховаємо header_top
  if (scrollY > offset) {
    header_top.style.top = '-30px';
    header_top.style.opacity  = '0%';


    header_bottom.style.top = '0';
    header_bottom.style.backgroundColor = "#1a1a1a70";
    header_bottom.style.backdropFilter = 'blur(40px)';
    
  } else {
    // Якщо користувач прокрутив сторінку наверх, показуємо header_top
    header_top.style.top = '0';
    header_top.style.opacity  = '100%';


    header_bottom.style.top = '30px';
    header_bottom.style.backgroundColor = "rgba(0, 0, 0, 0)";
    header_bottom.style.backdropFilter = 'blur(0px)';
  }
}

// Додаємо обробник події прокрутки
window.addEventListener('scroll', handleScroll);



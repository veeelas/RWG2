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


//Шум


class Noise {
 
  constructor(container = document.body, options) {
    
    if (document.getElementById('canvas-noise')) return;
    
    this.canvas = 
    this.ctx =
    this.canvasData =
    this.ctxData =
    this.imageData = null;
    this.container = container;
    this.settings = Object.assign({
      size: 120,
      interval: 3,
      alpha: 15
    }, options);
    this.loop = this.loop.bind(this);
    this.size = this.size.bind(this);
    this.frame = 0;
    this.animation = null;
    
    this.init();
  }
  
  init() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas-noise';
    this.ctx = this.canvas.getContext('2d');
    
    this.size();
    
    window.addEventListener('resize', this.size);
    
    this.container.appendChild(this.canvas);
    

    this.canvasData = document.createElement('canvas');
    this.ctxData = this.canvasData.getContext('2d');
    this.canvasData.width = this.settings.size;
    this.canvasData.height = this.settings.size;
    this.imageData = this.ctxData.createImageData(this.settings.size, this.settings.size);
    
    this.loop();
    
  }
  size() {

    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }
  
  pixel() {
    const pixelLength = this.imageData.data.length;
    
    for(let i = 0; i < pixelLength; i += 4) {
        const baseColor = Math.floor(Math.random() * 350); 
        const colorOffset = Math.floor(Math.random() * 50); 

        this.imageData.data[i] = baseColor + colorOffset;
        this.imageData.data[i+1] = baseColor + colorOffset;
        this.imageData.data[i+2] = baseColor + colorOffset;
        this.imageData.data[i+3] = this.settings.alpha;
    }
    this.ctxData.putImageData(this.imageData, 0, 0);
}

  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.ctx.createPattern(this.canvasData, 'repeat');
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
  
  loop() {
    this.frame += 1;
    if (this.frame % this.settings.interval === 0) {
      this.pixel();
      this.draw();
    }
    
    this.animation = window.requestAnimationFrame(this.loop);
  }
  
  destroy() {
    window.removeEventListener('resize', this.size);
    window.cancelAnimationFrame(this.animation);
    this.canvas.remove();
    for(let i in this) {
      delete this[i];
    }
  }
  
}

var noise = new Noise();




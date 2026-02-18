import './style.css';

// Interactive Grid Background
const gridBackground = document.getElementById('grid-background');

if (gridBackground) {
  // Add mouse move interaction
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gridBackground.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
  });
  
  // Add subtle color shift on click
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(220, 38, 38, 0.3)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '-1';
    ripple.style.transform = 'translate(-50%, -50%)';
    
    gridBackground.appendChild(ripple);
    
    let size = 0;
    const maxSize = 300;
    const growth = 5;
    
    const expandInterval = setInterval(() => {
      size += growth;
      ripple.style.width = size + 'px';
      ripple.style.height = size + 'px';
      ripple.style.opacity = Math.max(0, 1 - size / maxSize);
      
      if (size >= maxSize) {
        clearInterval(expandInterval);
        ripple.remove();
      }
    }, 16);
  });
}

// Countdown Timer Logic
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14); // 2 weeks from now

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById('days').innerText = d < 10 ? '0' + d : d;
  document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
  document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
  document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
updateCountdown();

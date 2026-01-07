// Loader simulation
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('main-site').classList.remove('hidden');
    }, 500);
  }, 2000); // Loader lasts 2 seconds
});

// Key system
const validKeys = ["ATLAS123", "ATLAS2026", "WELCOMEATLAS"];

function validateKey() {
  const input = document.getElementById('key-input').value.trim();
  const msg = document.getElementById('key-msg');

  if (validKeys.includes(input)) {
    msg.style.color = '#0f0';
    msg.textContent = "Key valid! Access granted 🔓";
  } else {
    msg.style.color = '#f00';
    msg.textContent = "Invalid key ❌";
  }
}

// Tools
function runTestTool() {
  const output = document.getElementById('tool-output');
  output.textContent = "Atlas Test Tool: Success! 🚀";
}

function runAnimation() {
  const output = document.getElementById('tool-output');
  output.innerHTML = '';
  
  for(let i=0; i<10; i++) {
    const star = document.createElement('div');
    star.textContent = '✨';
    star.style.position = 'absolute';
    star.style.top = Math.random()*80 + '%';
    star.style.left = Math.random()*90 + '%';
    star.style.fontSize = Math.random()*30+10+'px';
    document.body.appendChild(star);
    
    setTimeout(() => star.remove(), 2000);
  }
}

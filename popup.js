document.getElementById('toggle-panel').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Inyectás solo el botón
        if (!document.getElementById('breakpoints-toggle-btn')) {
          const btn = document.createElement('button');
          btn.id = 'breakpoints-toggle-btn';
          btn.textContent = 'Abrir Panel';
          btn.onclick = () => {
            window.dispatchEvent(new CustomEvent('toggle-breakpoints-panel'));
          };
          Object.assign(btn.style, {
            position: 'fixed',
            bottom: '80px',
            right: '10px',
            zIndex: '2147483648',
            padding: '8px 12px',
            fontSize: '14px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            boxShadow: '0 0 6px rgba(0,0,0,0.2)',
            cursor: 'pointer'
          });
          btn.onmouseover = () => btn.style.background = '#0056b3';
          btn.onmouseleave = () => btn.style.background = '#007bff';

          document.body.appendChild(btn);
        } else {
          window.dispatchEvent(new CustomEvent('toggle-breakpoints-panel'));
        }
      }
    });
  });
});

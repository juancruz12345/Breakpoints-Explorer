document.getElementById('toggle-panel').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
     
        if (!document.getElementById('breakpoints-toggle-btn')) {
          const btn = document.createElement('button')
          btn.id = 'breakpoints-toggle-btn'
          btn.textContent = 'Abrir Panel'
          btn.onclick = () => {
            window.dispatchEvent(new CustomEvent('toggle-breakpoints-panel'))
          }

          btn.style.position = 'fixed'
          btn.style.bottom = '80px'
          btn.style.right = '10px'
          btn.style.zIndex = '2147483648'
          btn.style.padding = '8px 12px'
          btn.style.fontSize = '14px'
          btn.style.background = '#007bff'
          btn.style.color = 'white'
          btn.style.border = 'none'
          btn.style.borderRadius = '6px'
          btn.style.boxShadow = '0 0 6px rgba(0,0,0,0.2)'
          btn.style.cursor = 'pointer'
          btn.onmouseover = () => btn.style.background = '#0056b3'
          btn.onmouseleave = () => btn.style.background = '#007bff'

          document.body.appendChild(btn)
        } else {
          
          window.dispatchEvent(new CustomEvent('toggle-breakpoints-panel'))
        }
      }
    })
  })
})

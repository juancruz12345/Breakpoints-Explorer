export function extractDOMData() {
  return {
    title: document.title,
    url: window.location.href,
    html: document.documentElement.outerHTML,
    headings: [...document.querySelectorAll("h1")].map(h => h.textContent)
  };
}

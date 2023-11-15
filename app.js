function getCurrentHashRoute() {
  const hash = window.location.hash;
  return hash.slice(1);
}

function renderPage(htmlFile) {
  const rootElement = document.getElementById('root');

  fetch(htmlFile)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const firstLine = html.trim().split('\n')[0].trim();
      if (firstLine !== '<!--moni-->') {
        throw new Error('This is not a moni template file.');
      }

      const moniCompElements = doc.getElementsByTagName('moniComp');

      if (moniCompElements.length === 0) {
        throw new Error('The target HTML file does not contain <moniComp> element.');
      } else if (moniCompElements.length > 1) {
        throw new Error('The target HTML file contains multiple <moniComp> elements.');
      }

      const moniCompElement = moniCompElements[0];
      const content = moniCompElement.innerHTML;
      rootElement.innerHTML = content;
    })
    .catch(error => {
      console.error('Error rendering page:', error);
    });
}


window.addEventListener('hashchange', function() {
  const hashRoute = getCurrentHashRoute();

  if (hashRoute === '') {
    renderPage('pages/home.html');
  } else if (hashRoute === 'manager') {
    renderPage('pages/manager.html');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  renderPage('pages/home.html');
});
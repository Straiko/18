document.addEventListener('DOMContentLoaded', function() {
    const preloaderContainer = document.getElementById('preloaderContainer');
    const content = document.getElementById('content');
  
    // Имитация загрузки данных
    setTimeout(function() {
      preloaderContainer.style.opacity = '0';
      setTimeout(function() {
        preloaderContainer.style.display = 'none';
        content.style.display = 'block';
      }, 300);
    }, 3000); // Задержка в 3 секунды
  });
  
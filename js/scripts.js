document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
      var fadeContainer = document.getElementById('fade-container');
      var fadeInClass = 'fade-in';

      if (isElementInViewport(fadeContainer)) {
        fadeContainer.classList.add(fadeInClass);
      }
    });

    // Helper function to check if an element is in the viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
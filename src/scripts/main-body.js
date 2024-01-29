
document.addEventListener('DOMContentLoaded', function() {
  let circles = document.querySelectorAll('.materials__circle');

  circles.forEach(function(circle) {
    let card = circle.nextElementSibling; // Załóżmy, że .materials__card jest bezpośrednim rodzeństwem .materials__circle

    circle.addEventListener('click', function() {
      // Usuń klasę .materials__card--clicked i .materials__circle--clicked, jeśli jest obecna
      if (card.classList.contains('materials__card--clicked')) {
        card.classList.remove('materials__card--clicked');
        circle.classList.remove('materials__circle--clicked');
      } else {
        // Dodaj klasę .materials__card--clicked i .materials__circle--clicked, jeśli nie jest obecna
        card.classList.add('materials__card--clicked');
        circle.classList.add('materials__circle--clicked');
      }
    });
  });
});

/* document.addEventListener('DOMContentLoaded', function() {
  // Sprawdź szerokość ekranu
  if (window.innerWidth > 767) {
    let circles = document.querySelectorAll('.materials__circle');

    circles.forEach(function(circle) {
      let card = circle.nextElementSibling; // Załóżmy, że .materials__card jest bezpośrednim rodzeństwem .materials__circle

      circle.addEventListener('click', function() {
        // Usuń klasę .materials__card--clicked i .materials__circle--clicked, jeśli jest obecna
        if (card.classList.contains('materials__card--clicked')) {
          card.classList.remove('materials__card--clicked');
          circle.classList.remove('materials__circle--clicked');
        } else {
          // Dodaj klasę .materials__card--clicked i .materials__circle--clicked, jeśli nie jest obecna
          card.classList.add('materials__card--clicked');
          circle.classList.add('materials__circle--clicked');
        }
      });
    });
  }
}); */

(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var cards = document.querySelectorAll("[data-paper]");
  if (!cards.length) return;

  cards.forEach(function (card) {
    var rest = Number(card.getAttribute("data-rot") || 0);

    card.addEventListener("pointermove", function (event) {
      var box = card.getBoundingClientRect();
      var x = (event.clientX - box.left) / box.width - 0.5;
      var y = (event.clientY - box.top) / box.height - 0.5;
      card.style.transform =
        "rotate(" + rest + "deg) rotateX(" + (-y * 9).toFixed(2) +
        "deg) rotateY(" + (x * 10).toFixed(2) + "deg) translateY(-6px)";
    });

    card.addEventListener("pointerleave", function () {
      card.style.transform = "rotate(" + rest + "deg)";
    });
  });
})();

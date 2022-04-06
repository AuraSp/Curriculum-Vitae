tsParticles.load({
  particles: {
    color: { value: "#f61a16" },
    move: {
      direction: "top",
      enable: true,
      speed: 0.5
    },
    number: {
      value: 50
    },
    opacity: {
      value: 0.7
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 1.5
    },
    zIndex: {
      value: { min: 0, max: 20 }
    }
  }
});

ScrollOut({
  targets: 'h1, p, h2'
});

$(document).ready(function () {
  $('body').mousemove((e) => {
    $('.cursor').css({ left: e.clientX, top: e.clientY });
    $('.cursorInner').css({ left: e.clientX, top: e.clientY });
  });
})

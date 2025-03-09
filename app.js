document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: false },
      },
      size: {
        value: 2.5,
        random: true,
        anim: { enable: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.8,
        width: 1.2,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: { opacity: 1 },
        },
        push: { particles_nb: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    retina_detect: true,
  });
});

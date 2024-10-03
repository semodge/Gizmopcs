// buildparticles.js

particlesJS("particles-js", {
    particles: {
        number: {
            value: 50, // Number of particles
            density: {
                enable: true,
                value_area: 800 // Density of particles
            }
        },
        color: {
            value: "#00bfff" // Explosive color
        },
        shape: {
            type: ["circle"], // Using circle shapes to represent explosions
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg", // Example image shape
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.6, // Particle opacity
            random: true,
            anim: {
                enable: true,
                speed: 2,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 10, // Base particle size (explosive effect)
            random: true,
            anim: {
                enable: true,
                speed: 20,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false, // Disable linking to keep it explosive
        },
        move: {
            enable: true,
            speed: 4, // Particle speed
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false // Disable hover effects
            },
            onclick: {
                enable: false // Disable click effects
            },
            resize: true
        },
    },
    retina_detect: true
});
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff0000" // Red color for particles
        },
        "shape": {
            "type": "star", // Star shape for particles
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.8, // Opacity of particles
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3, // Size of particles
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false // Disable lines connecting particles
        },
        "move": {
            "enable": true,
            "speed": 1, // Slower speed for falling effect
            "direction": "bottom", // Move downwards
            "random": false,
            "straight": false,
            "out_mode": "out", // Particles will disappear when they leave the canvas
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false // Disable interaction on hover
            },
            "onclick": {
                "enable": false // Disable interaction on click
            },
            "resize": true
        }
    },
    "retina_detect": true
});


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 200, // Increase number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00bfff" // Bright blue color for particles
        },
        "shape": {
            "type": ["square"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 8, // Smaller size for a pixelated effect
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#00bfff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3, // Speed of square movement
            "direction": "none",
            "random": true, // Allow random movement
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

function createShootingStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";

    // Set random position for the star
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    // Append to the particles container
    document.getElementById("particles-js").appendChild(star);

    // Remove the star after the animation ends
    star.addEventListener("animationend", () => {
        star.remove();
    });
}

// Create shooting stars at intervals
setInterval(createShootingStar, 500); // Adjust interval as needed
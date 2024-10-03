const sparkContainer = document.createElement('div');
sparkContainer.className = 'spark-container';
document.body.appendChild(sparkContainer);

function createSpark() {
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = Math.random() * window.innerWidth + 'px';
    spark.style.bottom = '0px';

    // Random size for sparks
    const size = Math.random() * (5 - 1) + 1; // Spark size between 1 and 5
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    // Random animation duration
    const duration = Math.random() * (1.5 - 0.5) + 0.5; // Duration between 0.5s and 1.5s
    spark.style.animationDuration = `${duration}s`;

    sparkContainer.appendChild(spark);

    // Remove spark after animation
    setTimeout(() => {
        spark.remove();
    }, duration * 1000);
}

// Create sparks at regular intervals
setInterval(createSpark, 200); // Adjust for more or fewer sparks

function createExplosion() {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = Math.random() * window.innerWidth + 'px';
    explosion.style.bottom = Math.random() * window.innerHeight + 'px';

    sparkContainer.appendChild(explosion);

    // Remove explosion after animation
    setTimeout(() => {
        explosion.remove();
    }, 1000); // Duration of the explosion effect
}

// Create explosions at regular intervals
setInterval(createExplosion, 3000); // Adjust for more or fewer explosions
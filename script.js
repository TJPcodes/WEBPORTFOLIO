document.addEventListener('DOMContentLoaded', function () {
    const body = document.body; 
    const themeToggle = document.getElementById('themeToggle');
    let imageIndex = 0;
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const carouselImage = document.querySelector('.carousel-image');

    // Function to change the image every 3 seconds
    function changeImage() {
        imageIndex = (imageIndex + 1) % images.length; // Loop back to the first image
        carouselImage.src = images[imageIndex];
    }

    // Call changeImage every 3 seconds
    setInterval(changeImage, 3000);

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light';
        } else {
            themeToggle.textContent = 'Dark';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
});

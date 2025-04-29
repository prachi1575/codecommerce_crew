// Ensure the DOM content is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => { 
// Select the image element with the 'zoomable-image' class
    const image = document.querySelector('.zoomable-image');

 // Add a click event listener to toggle the 'zoom-out' class on the image
    image.addEventListener('click', () => {
        image.classList.toggle('zoom-out');
    });
});

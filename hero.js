const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
            currentIndex = index;
        }

        function nextSlide() {
            const nextIndex = (currentIndex + 1) % slides.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentIndex -1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        function goToSlide(index) {
            showSlide(index);
        }
        setInterval(nextSlide, 5000); // Change slide every 5 seconds 
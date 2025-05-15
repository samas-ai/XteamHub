document.addEventListener("DOMContentLoaded", function () {
    // --- CARROSSEL SLIDES ---
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    };

    document.getElementById("nextSlide").addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById("prevSlide").addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Slide automático opcional (a cada 5s)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Já mostra o primeiro slide corretamente ao carregar
    showSlide(currentSlide);
});

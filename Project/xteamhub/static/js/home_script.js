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

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    showSlide(currentSlide);

    // --- GRÁFICO 1: Horas Jogadas ---
    const ctx = document.getElementById("myChart");
    if (ctx) {
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Red Dead Redemption 2",
                    "CS2",
                    "FORZA 5",
                    "CYBERPUNK",
                    "Assassins Creed Shadows",
                    "Minecraft",
                ],
                datasets: [{
                    label: "# HORAS JOGADAS",
                    data: [5000, 4700, 4200, 4800, 4500, 4900],
                    borderWidth: 1,
                    backgroundColor: "rgba(255, 165, 0, 0.8)",
                    borderColor: "rgba(255, 140, 0, 1)",
                    barThickness: "flex",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, max: 6000 },
                },
            },
        });
    }

    // --- DADOS DO RANKING ---
    let registros = [
        { nome: "Felipe", jogo: "FIFA 24", horas: 10 },
        { nome: "Samuel", jogo: "GTA V", horas: 15 },
        { nome: "Galvao", jogo: "Valorant", horas: 8 },
        { nome: "Lael", jogo: "Counter Strike 2", horas: 12 },
        { nome: "Felipe", jogo: "Elden Ring", horas: 9 },
        { nome: "Samuel", jogo: "Fortnite", horas: 14 },
    ];

    function atualizarTabela() {
        const tabela = document.getElementById("rankingTable");
        if (!tabela) return;

        const tbody = tabela.querySelector("tbody");
        tbody.innerHTML = "";

        registros.sort((a, b) => b.horas - a.horas);

        registros.forEach((registro, index) => {
            let linha = tbody.insertRow();
            linha.innerHTML = `
                <td>${index + 1}</td>
                <td>${registro.nome}</td>
                <td>${registro.jogo}</td>
                <td>${registro.horas}</td>
            `;
        });

        atualizarGrafico();
    }

    window.adicionarHoras = function () {
        let randomIndex = Math.floor(Math.random() * registros.length);
        registros[randomIndex].horas += Math.floor(Math.random() * 5) + 1;
        atualizarTabela();
    };

    // --- GRÁFICO 2: Horas Jogadas com Amigos ---
    const ctx2 = document.getElementById("graficoHoras");
    let grafico;

    if (ctx2) {
        grafico = new Chart(ctx2, {
            type: "bar",
            data: {
                labels: registros.map((r) => `${r.nome} - ${r.jogo}`),
                datasets: [{
                    label: "Horas Jogadas",
                    data: registros.map((r) => r.horas),
                    backgroundColor: "orange",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    function atualizarGrafico() {
        if (grafico) {
            grafico.data.labels = registros.map((r) => `${r.nome} - ${r.jogo}`);
            grafico.data.datasets[0].data = registros.map((r) => r.horas);
            grafico.update();
        }
    }

    atualizarTabela();
});

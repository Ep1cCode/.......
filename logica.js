let countdown = 777600;  // Tempo inicial (em segundos)
let timer;

// Cria o som da vitória
const victorySound = new Audio('emi.mp3');
victorySound.volume = 0.7; // Volume opcional

function startCountdown() {
    timer = setInterval(function() {
        countdown--;
        const countdownElement = document.getElementById("countdown");

        const days = Math.floor(countdown / 86400);
        const hours = Math.floor((countdown % 86400) / 3600);
        const minutes = Math.floor((countdown % 3600) / 60);
        const seconds = countdown % 60;

        countdownElement.textContent = 
          `${days < 10 ? '0' : ''}${days} dias ` +
          `${hours < 10 ? '0' : ''}${hours}h ` +
          `${minutes < 10 ? '0' : ''}${minutes}m ` +
          `${seconds < 10 ? '0' : ''}${seconds}s`;

        if (countdown <= 0) {
            clearInterval(timer);
            document.getElementById("feedback").innerHTML = "O tempo acabou. O abismo se abriu...";
            document.getElementById("answer").disabled = true;
            document.querySelector("button").disabled = true;
        }
    }, 1000);
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "começo"; // A resposta correta

    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.style.color = "#4CAF50";
        feedback.innerHTML = "A escolha correta. O mundo acabou ou o ciclo se reiniciou..?";
        clearInterval(timer); // Para o contador
        document.getElementById("countdown").textContent = "00:00"; // Reseta o contador

        // Mostrar a data
        document.getElementById("date").style.display = "block";

        // Tocar som de vitória
        victorySound.play();
    } else {
        feedback.style.color = "#f44336";
        feedback.innerHTML = "Resposta errada. O abismo aguarda mais uma tentativa.";
    }
}

// Inicia o temporizador ao carregar a página
window.onload = function() {
    startCountdown();
};

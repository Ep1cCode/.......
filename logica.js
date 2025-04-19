let countdown = 777600;  // Defina o tempo inicial (em segundos)
let timer;

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
    const correctAnswer = "começo";  // Defina a resposta correta, de acordo com seu enigma

    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.style.color = "#4CAF50";
        feedback.innerHTML = "A escolha correta. O mundo acabou ou o ciclo se reiniciou..?";
        clearInterval(timer);  // Stop the countdown when the correct answer is given
        document.getElementById("countdown").textContent = "00:00";  // Reset countdown
    } else {
        feedback.style.color = "#f44336";
        feedback.innerHTML = "Resposta errada. O abismo aguarda mais uma tentativa.";
    }
}

// Inicia o temporizador assim que a página for carregada
window.onload = function() {
    startCountdown();
};

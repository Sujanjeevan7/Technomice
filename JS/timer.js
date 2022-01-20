function startTimer(duration, display) {
    const audio = document.querySelector("audio");
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();

    var timer = duration, minutes, seconds;
    
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            window.location.href = "../Pages/funTime.html";
        }
    }, 1000);
}
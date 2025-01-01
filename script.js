function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearTime = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
    const currentTime = now.getTime();

    const timeLeft = newYearTime - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    const milliseconds = timeLeft % 1000;

    // 초와 밀리초를 함께 표시 (소수점 한 자리)
    const secondsWithMs = (seconds + milliseconds / 1000).toFixed(1);

    // 현재 연도 표시
    const currentYear = now.getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // 새해가 되면 "Happy New Year" 표시
    if (timeLeft <= 0) {
        document.getElementById('happy-new-year').style.display = 'block'; // 새해가 되면 메시지 보이게 설정
        document.querySelector('.countdown-container').style.display = 'none'; // 카운트다운 숨기기
    } else {
        document.getElementById('happy-new-year').style.display = 'none'; // 카운트다운이 계속 보이게
        document.querySelector('.countdown-container').style.display = 'block';
    }

    // 화면에 출력
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = secondsWithMs;
}

// Initialize and update every 50 milliseconds
setInterval(updateCountdown, 50);
updateCountdown();

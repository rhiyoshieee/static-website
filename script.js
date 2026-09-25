
function initLiveClock() {
    const clockDisplay = document.getElementById('live-clock');

    function updateTime() {
        const now = new Date();
        clockDisplay.textContent = now.toLocaleTimeString();
    }

    updateTime(); 
    setInterval(updateTime, 1000); 
}


function initCountdownTimer() {
    const targetDate = new Date('December 31, 2026 23:59:59').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            document.getElementById('countdown').innerHTML = "

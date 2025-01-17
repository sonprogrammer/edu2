document.addEventListener("DOMContentLoaded", () => {
    const chargeElement = document.querySelector(".charge");
    const statusElement = document.querySelector(".battery-status");

    chargeElement.addEventListener("animationiteration", () => {
        // Reset when animation restarts
        statusElement.textContent = "Charging...";
    });

    chargeElement.addEventListener("animationstart", () => {
        updateBatteryStatus(0);
    });

    chargeElement.addEventListener("animationiteration", () => {
        updateBatteryStatus(100); // Update on animation restart
    });

    chargeElement.addEventListener("animationstart", () => {
        updateBatteryStatus();
    });
});

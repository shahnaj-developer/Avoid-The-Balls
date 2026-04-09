 const answerBtn = document.getElementById("answerBtn");
    const answerPopup = document.getElementById("answerPopup");
    const closePopup = document.getElementById("closePopup");
    const watchAdsBtn = document.getElementById("watchAds");
    const coinDisplay = document.getElementById("coinDisplay");

    let coinBalance = parseInt(localStorage.getItem("coinBalance")) || 0;
    let lastLogin = localStorage.getItem("lastLogin") || "";
    const today = new Date().toLocaleDateString();

    if (today !== lastLogin) {
      coinBalance += 50;
      localStorage.setItem("coinBalance", coinBalance);
      localStorage.setItem("lastLogin", today);
    }

    coinDisplay.innerText = coinBalance;

    answerBtn.onclick = () => {
      answerPopup.style.display = "flex";
    };

    closePopup.onclick = () => {
      answerPopup.style.display = "none";
    };

    watchAdsBtn.onclick = () => {
      if (coinBalance >= 10) {
        coinBalance -= 10;
        localStorage.setItem("coinBalance", coinBalance);
        coinDisplay.innerText = coinBalance;
        alert("Correct answer is: " + getCorrectAnswer());
        answerPopup.style.display = "none";
      } else {
        alert("Not enough coins.");
      }
    };

    function getCorrectAnswer() {
      return "42";
    }
    
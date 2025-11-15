document.addEventListener("DOMContentLoaded", () => {
  const joinButton = document.getElementById("join-button");

  if (joinButton) {
    joinButton.addEventListener("click", () => {
      window.location.href = "join.html";
    });
  }
});

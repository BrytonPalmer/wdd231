document.addEventListener("DOMContentLoaded", () => {
  const footerDate = document.getElementById("footerDate");

  if (footerDate) {
    const today = new Date();

    // Day of the week (e.g., "Thursday")
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

    // Year (e.g., "2025")
    const year = today.getFullYear();

    // Populate footer
    footerDate.textContent = `${dayName}, ${year}`;
  }
});

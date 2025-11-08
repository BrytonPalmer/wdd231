document.addEventListener("DOMContentLoaded", function() {
  // Set current year
  const currentYearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;

  // Set last modified date
  const lastModifiedSpan = document.getElementById("lastModified");
  const lastModified = new Date(document.lastModified);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  lastModifiedSpan.textContent = `Last Modified: ${lastModified.toLocaleString(undefined, options)}`;
});

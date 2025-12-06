async function loadGallery() {
  try {
    const response = await fetch("./data/gallery.json");
    if (!response.ok) throw new Error("Network error");
    const galleryItems = await response.json();

    const galleryGrid = document.querySelector(".gallery_grid");
    galleryItems.forEach(item => {
      galleryGrid.insertAdjacentHTML("beforeend", `
        <figure>
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <figcaption>${item.caption}</figcaption>
        </figure>
      `);
    });

    // ✅ Attach modal logic AFTER gallery is populated
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const closeModal = document.getElementById("closeModal");

    galleryGrid.addEventListener("click", e => {
      if (e.target.tagName === "IMG") {
        modalImg.src = e.target.src;
        modalImg.alt = e.target.alt;
        modalCaption.textContent = e.target.nextElementSibling.textContent;
        modal.showModal();
      }
    });

    closeModal.addEventListener("click", () => modal.close());
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.close();
    });

  } catch (error) {
    console.error("Error loading gallery:", error);
  }
}

loadGallery();
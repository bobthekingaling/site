const viewer = document.querySelector(".gallery-viewer");
const viewerImage = viewer.querySelector(".gallery-viewer-image");
const viewerCaption = viewer.querySelector(".gallery-viewer-caption");

document.querySelectorAll(".gallery-open").forEach((button) => {
	button.addEventListener("click", () => {
		viewerImage.src = button.dataset.gallerySrc;
		viewerImage.alt = button.dataset.galleryAlt;
		viewerCaption.textContent = button.dataset.galleryCaption;
		viewer.showModal();
	});
});

viewer.querySelector(".gallery-close").addEventListener("click", () => {
	viewer.close();
});

viewer.addEventListener("click", (event) => {
	if (event.target === viewer) {
		viewer.close();
	}
});

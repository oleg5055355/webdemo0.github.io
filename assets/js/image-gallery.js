document.querySelectorAll('.gallery .image').forEach(image => {
    image.onclick = function() {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-image');
        const captionText = document.getElementById('caption');
        modal.style.display = "block";
        modalImg.src = this.dataset.image;
        captionText.innerHTML = this.alt;
    };
});

// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

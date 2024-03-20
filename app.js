function imageGallery(){
    const highlight = document.querySelector(".gallery-highlight");
    const previews =  document.querySelectorAll(".room-preview img");

    previews.forEach(preview => {
        preview.addEventListener("click", function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            
            // Remove "room-active" class from all previews
            previews.forEach(preview => preview.classList.remove("room-active"));

            // Add "room-active" class to the clicked preview
            this.classList.add("room-active");

            console.log(bigSrc);
        });
    });
}

imageGallery();
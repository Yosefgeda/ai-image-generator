const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');
const handleSubmisson = (e) => {
    e.preventDefault();
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;

    let imgMarkup = `
        <div class="img-card loading">
            <img src="images/loader.svg" alt="Hot air ballon"/>
            <a href="#" class="download-btn">
                <img src="images/download.svg" alt="download"/>
            </a>
        </div>
    `;
    imageGallery.innerHTML = '';
    for(let i = 0; i < userImgQuantity; i++){
        imageGallery.innerHTML += imgMarkup;
    }
} 
generateForm.addEventListener('submit', handleSubmisson);
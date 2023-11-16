const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');

const apiKey = 'k65he_gPlyR76ovg_qq9esbN_O7BmjJwtfWTTVov65g';

// const updateImageCard = (imgDataArray) => {
//     imgDataArray.forEach((imgObject, index) => {
//         const imgCard = imageGallery.querySelectorAll('.img-card')[index];
//         const imgElement = imgCard.querySelector('img');
//         const downloadBtn = imgCard.querySelector(".download-btn");

//         const aiGeneratedImg = `data:image/jpeg:base64,${imgObject.b64_json}`;
//         imgElement.src = aiGeneratedImg;

//         imgElement.onload = () => {
//             imgCard.classList.remove("loading");
//             downloadBtn.setAttribute("href", aiGeneratedImg);
//             downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
//         }
//     });
//     console.log(imgDataArray);
// }

const generateAiImages = async (userPrompt, userImgQuantity) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?
            page=${userImgQuantity}&query=${userPrompt}&client_id=${apiKey}`
        );
    const data = await response.json();
    const res = data.results;
    imageGallery.innerHTML = '';
    let imgMarkup = res.map(itm =>
        `
        <div class="img-card">
            <img src="${itm.urls.full}" alt=${itm.alt_description} class="generated-images"/>
        </div>
    `
    ).join('');
    imageGallery.innerHTML += imgMarkup;
}

const handleSubmisson = (e) => {
    e.preventDefault();
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;
    generateAiImages(userPrompt, userImgQuantity);
} 
generateForm.addEventListener('submit', handleSubmisson);
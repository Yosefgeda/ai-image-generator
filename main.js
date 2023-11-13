const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');

const apiKey = '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';
const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: userPrompt,
            n: parseInt(userImgQuantity),
            size: "512x512",
            response_format: "b64_json"
        })
    });
    if(!response.ok) throw new Error("Failed to generate images! Please try again.");

    const data = await response.json()
    console.log(data)
    } catch (error) {
        alert(error.message);
    }
}
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
    };

    generateAiImages(userPrompt, userImgQuantity);
} 
generateForm.addEventListener('submit', handleSubmisson);
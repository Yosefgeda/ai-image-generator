const generateForm = document.querySelector('.generate-form');

const handleSubmisson = (e) => {
    e.preventDefault();
    console.log(e.srcElement)
} 
generateForm.addEventListener('submit', handleSubmisson);
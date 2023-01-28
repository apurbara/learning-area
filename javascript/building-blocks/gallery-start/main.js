const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    // newImage.setAttribute('src', `images/pic${i + 1}.jpg`);
    newImage.src = `images/pic${i + 1}.jpg`;
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', function(event){
    // displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.src = event.target.src;
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
    if (btn.textContent === 'Darken') {
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
const thumbnailContainer = document.querySelector('.thumbnail-wrapper');

let catIndex = 1;

function addThumbnail(imageSrc, title, description) {
  const thumbnailDiv = document.createElement('div');
  thumbnailDiv.classList.add('thumbnail');
  
  const thumbnailImg = document.createElement('img');
  thumbnailImg.classList.add('thumbnailImg');
  thumbnailImg.src = imageSrc;
  
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description-hidden', 'desc');
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  
  descriptionDiv.appendChild(titleElement);
  descriptionDiv.appendChild(descriptionElement);
  
  thumbnailDiv.appendChild(thumbnailImg);
  thumbnailDiv.appendChild(descriptionDiv);
  
  thumbnailContainer.appendChild(thumbnailDiv);
}

addThumbnail('img/img' + catIndex + '.jfif', 'Cat ' + catIndex, "Chill, I've got my paws on you.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.png', 'Cat ' + catIndex, "Can't handle this anymoar");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "I'm donezo with fixing stuff today");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "In the matrix.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "I can do better than u, hooman.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Big biznis here.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Unbothered.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Uuugh, crap.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Brain???");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "This not gonna end well");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Mmmmm");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Crazy, but free");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Ready to go fighting");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "It's over");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Don't forget to say uno");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "It's so over");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Errything is OK (maybe not).");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Meow.");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Amen");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Majestic");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Am I smart??");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "on appétite");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Ready, comrade");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Muhaha");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Terrorist brotherhood");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "How to fix, hmm");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Communism");
catIndex = catIndex + 1;
addThumbnail('img/img' + catIndex + '.jpg', 'Cat ' + catIndex, "Errrgh");
catIndex = catIndex + 1;


const thumbnails = document.querySelectorAll('.thumbnail');
const activeImg = document.querySelector('.activeImg');

let descriptionsH = document.getElementsByClassName('description-hidden');

for (let i = 0; i < descriptionsH.length; i++) {
    descriptionsH[i].style.display = "none";
    descriptionsH[i].classList.add('description-hidden');
    descriptionsH[i].classList.remove('description');
}

thumbnails[0].classList.add('selected');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const thumbnailImg = thumbnail.querySelector('.thumbnailImg');
    const thumbnailDesc = thumbnail.querySelector('.description-hidden');

    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('selected');
    });

    activeImg.src = thumbnailImg.src;
    activeImg.alt = thumbnailImg.alt;
    thumbnail.classList.add('selected');
    activeImg.parentElement.querySelector('.desc').innerHTML = thumbnailDesc.innerHTML;
  });
});

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
  swapImage('left');
});

rightArrow.addEventListener('click', () => {
  swapImage('right');
});

function swapImage(direction) {
  const thumbnailsArray = Array.from(thumbnails);
  const activeImgSrc = activeImg.src;

  const activeIndex = thumbnailsArray.findIndex((thumbnail) => thumbnail.querySelector('.thumbnailImg').src === activeImgSrc);

  let nextIndex;
  if (direction === 'left') {
    nextIndex = (activeIndex - 1 + thumbnailsArray.length) % thumbnailsArray.length;
  } else if (direction === 'right') {
    nextIndex = (activeIndex + 1) % thumbnailsArray.length;
  }

  const nextThumbnail = thumbnailsArray[nextIndex];
  const nextThumbnailImg = nextThumbnail.querySelector('.thumbnailImg');
  const nextThumbnailDesc = nextThumbnail.querySelector('.description-hidden');

  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('selected');
  });

  activeImg.src = nextThumbnailImg.src;
  activeImg.alt = nextThumbnailImg.alt;
  nextThumbnail.classList.add('selected');
  activeImg.parentElement.querySelector('.desc').innerHTML = nextThumbnailDesc.innerHTML;

  const containerRect = thumbnailContainer.getBoundingClientRect();
  const nextThumbnailRect = nextThumbnail.getBoundingClientRect();

  if (nextThumbnailRect.left < containerRect.left || nextThumbnailRect.right > containerRect.right) {
    thumbnailContainer.scrollLeft = nextThumbnail.offsetLeft - thumbnailContainer.offsetLeft;
  }
}


document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    scrollThumbnailsLeft()
  } else if (event.key === 'ArrowRight') {
    scrollThumbnailsRight()
  }
}

function scrollThumbnailsLeft() {
  thumbnailContainer.scrollLeft -= thumbnailContainer.offsetWidth;
}

function scrollThumbnailsRight() {
  thumbnailContainer.scrollLeft += thumbnailContainer.offsetWidth;
}



/* let btnLeft = document.querySelector('.left-arrow');
let btnRight = document.querySelector('.right-arrow');
let thumbnailBtns = document.querySelectorAll('.thumbnail');
let activeImg = document.querySelector('.activeSlide');

const wrapper = document.querySelector('.wrapper');
const thumbnailWrapper = document.querySelector('.thumbnail-wrapper');

let currentSlide = 0;

thumbnailBtns = [activeImg, ...thumbnailBtns];


btnLeft.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + thumbnailBtns.length) % thumbnailBtns.length;
    showSlide(currentSlide);
  });
  
  btnRight.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % thumbnailBtns.length;
    showSlide(currentSlide);
  });
  
  thumbnailBtns.forEach((thumbnailBtn, index) => {
    thumbnailBtn.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  
  function showSlide(slideIndex) {
    thumbnailBtns.forEach((thumbnailBtn) => {
      thumbnailBtn.classList.remove('activeSlide');
    });
  
    activeImg.classList.remove('activeSlide');
    
    thumbnailBtns[slideIndex].classList.remove('thumbnail');
    thumbnailBtns[slideIndex].classList.add('activeSlide');
  
    let description = activeImg.querySelector('.description');
    if (description) {
      description.classList.remove('description');
      description.classList.add('description-hidden');
    }
  
    activeImg.classList.add('thumbnail');
    activeImg.querySelector('img').classList.add('thumbnailImg');
    activeImg.querySelector('img').classList.remove('activeImg');
    thumbnailBtns[slideIndex].querySelector('img').classList.add('activeImg');
    thumbnailBtns[slideIndex].querySelector('img').classList.remove('thumbnailImg');
    thumbnailBtns[slideIndex].querySelector('.desc').classList.add('description');
    thumbnailBtns[slideIndex].querySelector('.desc').classList.remove('description-hidden');
  
    thumbnailWrapper.appendChild(activeImg);
    wrapper.innerHTML = '';
    activeImg = thumbnailBtns[slideIndex];
    activeImg.querySelector('.description').style.display = "block";
    wrapper.appendChild(btnLeft);
    wrapper.appendChild(activeImg);
    wrapper.appendChild(btnRight);

    let descriptionsH = document.getElementsByClassName('description-hidden');

    for (let i = 0; i < descriptionsH.length; i++) {
        descriptionsH[i].style.display = "none";
        descriptionsH[i].classList.add('description-hidden');
        descriptionsH[i].classList.remove('description');
    }

    if (currentSlide === 0) {
        activeImg.classList.remove('thumbnail');
        activeImg.querySelector('.desc').classList.remove('description-hidden');
        activeImg.querySelector('.desc').classList.add('description');
      }

  }
  
  showSlide(currentSlide); */


  /* thumbnailBtns.forEach((thumbnailBtn, index) => {
  thumbnailBtn.addEventListener('click', () => {
    thumbnailBtns.forEach((thumbnail) => {
      thumbnail.classList.remove('activeSlide');
      thumbnail.classList.add('thumbnail');
    });

    activeImg.classList.remove('activeSlide');
    thumbnailBtn.classList.remove('thumbnail');
    thumbnailBtn.classList.add('activeSlide');

    let description = thumbnailBtn.querySelector('.description-hidden');
    if (description) {
        description.classList.remove('description-hidden');
        description.classList.add('description');
      }

    activeImg.classList.add('thumbnail');
    activeImg.querySelector('img').classList.add('thumbnailImg');
    activeImg.querySelector('img').classList.remove('activeImg');
    thumbnailBtn.querySelector('img').classList.add('activeImg');
    thumbnailBtn.querySelector('img').classList.remove('thumbnailImg');

    thumbnailWrapper.appendChild(activeImg);
    wrapper.innerHTML = '';
    activeImg = thumbnailBtn;
    wrapper.appendChild(btnLeft);
    wrapper.appendChild(activeImg);
    wrapper.appendChild(btnRight);

    let descriptionShown = document.querySelector('.description');
    if (descriptionShown) {
      descriptionShown.style.display = 'none';
      descriptionShown.classList.remove('description');
      descriptionShown.classList.add('description-hidden');
    }

    descriptionShown = description;

    currentSlide = index;

  });
}); */
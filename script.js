const thumbnailContainer = document.querySelector('.thumbnail-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const activeImg = document.querySelector('.activeImg');

const cats = [];

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

cats.push(['img/img1.jfif', 'Cat 1', "Chill, I've got my paws on you."]);
cats.push(['img/img2.png', 'Cat 2', "Can't handle this anymoar."]);
cats.push(['img/img3.jpg', 'Cat 3', "I'm donezo with fixing stuff today."]);
cats.push(['img/img4.jpg', 'Cat 4', "In the matrix."]);
cats.push(['img/img5.jpg', 'Cat 5', "I can do better than u, hooman."]);
cats.push(['img/img6.jpg', 'Cat 6', "Big biznis here."]);
cats.push(['img/img7.jpg', 'Cat 7', "Unbothered."]);
cats.push(['img/img8.jpg', 'Cat 8', "Uuugh, crap."]);
cats.push(['img/img9.jpg', 'Cat 9', "Brain???"]);
cats.push(['img/img10.jpg', 'Cat 10', "This not gonna end well."]);
cats.push(['img/img11.jpg', 'Cat 11', "Mmmmm."]);
cats.push(['img/img12.jpg', 'Cat 12', "Crazy, but free."]);
cats.push(['img/img13.jpg', 'Cat 13', "Ready to go fighting."]);
cats.push(['img/img14.jpg', 'Cat 14', "It's over."]);
cats.push(['img/img15.jpg', 'Cat 15', "Don't forget to say uno."]);
cats.push(['img/img16.jpg', 'Cat 16', "it's so over."]);
cats.push(['img/img17.jpg', 'Cat 17', "Errything is OK (maybe not)."]);
cats.push(['img/img18.jpg', 'Cat 18', "Meow."]);
cats.push(['img/img19.jpg', 'Cat 19', "Amen."]);
cats.push(['img/img20.jpg', 'Cat 20', "Majestic."]);
cats.push(['img/img21.jpg', 'Cat 21', "Am I smart??"]);
cats.push(['img/img22.jpg', 'Cat 22', "Bon appétite."]);
cats.push(['img/img23.jpg', 'Cat 23', "Ready, comrade."]);
cats.push(['img/img24.jpg', 'Cat 24', "Muhaha."]);
cats.push(['img/img25.jpg', 'Cat 25', "Terrorist brotherhood."]);
cats.push(['img/img26.jpg', 'Cat 26', "How to fix, hmm."]);
cats.push(['img/img27.jpg', 'Cat 27', "Communism."]);
cats.push(['img/img28.jpg', 'Cat 28', "Errrgh."]);

for (let i = 0; i < cats.length; i += 4) {
  const thumbnailMatrix = document.createElement('div');
  thumbnailMatrix.classList.add('matrix');
  for (let j = 0; j < 4; j++) {
    const catIndex = i + j;

    if (catIndex >= cats.length) {
      break;
    }
    const cat = cats[catIndex];
    addThumbnail(cat[0], cat[1], cat[2]);
    thumbnailMatrix.appendChild(thumbnailContainer.lastElementChild);
  }
  thumbnailContainer.appendChild(thumbnailMatrix);
}


const thumbnails = document.querySelectorAll('.thumbnail');
const matrices = document.querySelectorAll('.matrix');


let descriptionsH = document.getElementsByClassName('description-hidden');

for (let i = 0; i < descriptionsH.length; i++) {
    descriptionsH[i].style.display = "none";
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


leftArrow.addEventListener('click', () => {
  swapImage('left');
});

rightArrow.addEventListener('click', () => {
  swapImage('right');
});

function swapImage(direction) {
  const thumbnailsArray = Array.from(thumbnails);
  const matrixArray = Array.from(matrices);
  const activeImgSrc = activeImg.src;

  const activeIndex = thumbnailsArray.findIndex((thumbnail) => thumbnail.querySelector('.thumbnailImg').src === activeImgSrc);

  let nextIndex;
  if (direction === 'left') {
    nextIndex = (activeIndex - 1 + thumbnailsArray.length) % thumbnailsArray.length;
  } else if (direction === 'right') {
    nextIndex = (activeIndex + 1) % thumbnailsArray.length;
  }

  const nextThumbnail = thumbnailsArray[nextIndex];
  const nextMatrix = matrixArray[Math.floor(nextIndex / 4)];
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
    const scrollLeft = nextMatrix.offsetLeft;
    thumbnailContainer.scrollLeft = scrollLeft;
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


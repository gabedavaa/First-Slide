const sliderDate = [
  {
    url: 'https://www.google.com/',
    img: 'https://www.mac-group.com/wp-content/uploads/2017/05/Cover-image-Irish-Life-400x400.jpg',
    title: 'Title 1',
  },
  {
    url: 'https://www.google.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Vrp-400x400.jpg',
    title: 'Title 2',
  },
  {
    url: 'https://www.google.com/',
    img: 'https://www.sccnewsbyte.co.uk/wp-content/uploads/2020/08/securitythumbnail400x400.png',
    title: 'Title 3',
  },
  {
    url: 'https://www.google.com/',
    img: 'https://www.cclonline.com/images/articles/937_google-chrome-logo-400x400.jpg',
    title: 'Title 4',
  },
];
const slider = document.getElementById('slider');
const right = document.getElementById('right');
const left = document.getElementById('left');
const title = document.getElementById('title');
let currentIndex = 0;

function createImgelement(img) {
  let element = document.createElement('img');
  element.src = img;
  element.style.borderRadius = '50PX';
  return element;
}
function createAelement(url) {
  let element = document.createElement('a');
  element.href = url;
  return element;
}
function createTielement(ti) {
  let element = document.createElement('p');
  element.textContent = ti;
  element.style.marginTop = '30px';
  return element;
}
function setTitle(index) {
  let currentSlide = sliderDate[index];
  let element = createTielement(currentSlide.url);
  title.innerHTML = '';
  title.appendChild(createTielement(currentSlide.title));
}
function setSlider(index) {
  let currentSlide = sliderDate[index];
  let element = createAelement(currentSlide.url);
  element.appendChild(createImgelement(currentSlide.img));
  slider.innerHTML = '';
  slider.appendChild(element);
}

setSlider(currentIndex);
setTitle(currentIndex);

right.addEventListener('click', function () {
  if (currentIndex == sliderDate.length - 1) {
    currentIndex = 0;
  }
  if (currentIndex < sliderDate.length - 1) {
    currentIndex++;
    setSlider(currentIndex);
    setTitle(currentIndex);
  }
});
left.addEventListener('click', function () {
  if (currentIndex == 0) {
    currentIndex = sliderDate.length;
  }
  if (currentIndex !== 0) {
    currentIndex--;
    setSlider(currentIndex);
    setTitle(currentIndex);
  }
});

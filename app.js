//! element reference
const carousel = document.getElementById("carousel");
const slides = document.getElementById("slides");

const controls = document.getElementById("controls");
const prevbtn = document.querySelector(".prevBTN");
const nextbtn = document.querySelector(".nextBTN");

const dotsbtn = document.getElementById("dotBTN");

const page = { slideList: [], dots: [], counter: 0, delay: 7000, auto: {} }; //!slider contents

//! Images container
const imgBox = [
  {
    url: "https://picsum.photos/800/600?random=12",
    title: "Demo Pic 1",
    subText: "My pictures are great",
  },
  {
    url: "https://picsum.photos/800/600?random=1",
    title: "Demo Pic 2",
    subText: "Do you like these pics?",
  },
  {
    url: "https://picsum.photos/800/600?random=122",
    title: "Demo Pic 3",
    subText: "Here are my some favorite pictures",
  },
  {
    url: "https://picsum.photos/800/600?random=20",
    title: "Demo Pic 4",
    subText: "Here are my some favorite pictures",
  },
  {
    url: "https://picsum.photos/800/600?random=2",
    title: "Demo Pic 5",
    subText: "Here are my some favorite pictures",
  },
  {
    url: "https://picsum.photos/800/600?random=102",
    title: "Demo Pic 6",
    subText: "Here are my some favorite pictures",
  },
];

const startSetup = () => {
  imgBox.forEach((img, index) => {
    //! load images
    let imgCard = document.createElement("div");
    imgCard.classList.add("slide");
    imgCard.classList.add("select");

    let title = `<h3>${img.title}</h3>`;
    let subText = `<p>${img.subText}</p>`;
    let pic = `<img src="${img.url}" alt="demo pic" >`;

    imgCard.innerHTML = title + subText + pic;

    page.slideList.push(imgCard);

    slides.append(imgCard);

    //! create dots
    let dotIcon = document.createElement("span");
    dotIcon.classList.add("dot");
    dotIcon.classList.add("select");
    dotIcon.addEventListener("click", (e) => {
      page.counter = index;
      console.log("work");
      showImages();
      restartInt();
    });
    dotsbtn.append(dotIcon);
    page.dots.push(dotIcon);
  });
  showImages();
  page.auto = setInterval(updateSlide, page.delay);
};

//! auto slide

const updateSlide = () => {
  page.counter++;
  showImages();
};

//! load startSetup when DOMContentLoaded is loaded
window.addEventListener("DOMContentLoaded", startSetup);

//! slide through images with buttons
const showImages = () => {
  if (page.counter < 0) {
    page.counter = page.slideList.length - 1;
  }
  if (page.counter >= page.slideList.length) {
    page.counter = 0;
  }
  console.log(page);
  page.slideList.forEach((item) => {
    item.style.display = "none";
  });
  page.slideList[page.counter].style.display = "block";

  page.dots.forEach((item) => {
    item.classList.remove("active");
  });
  page.dots[page.counter].classList.add("active");
};
const restartInt = () => {
  clearInterval(page.auto);
  page.auto = setInterval(updateSlide, page.delay);
};
//! prev & next buttons

prevbtn.classList.add("select");
nextbtn.classList.add("select");

prevbtn.addEventListener("click", (e) => {
  page.counter--;
  showImages();
  restartInt();
});
nextbtn.addEventListener("click", (e) => {
  page.counter++;
  showImages();
  restartInt();
});

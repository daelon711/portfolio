let images = document.querySelectorAll("section img");
let head=document.querySelector("header")
let names = document.querySelectorAll(".p-div p");
let pDiv = document.querySelector(".p-div");
let footer = document.querySelector("footer")
let mainWindow= document.querySelector("footer .word")
let infoBtn=document.querySelector("footer #infoBtn")
let card=document.querySelector("footer .card")
let scroll=document.querySelector("footer #scroller")

let newSrc = [
  "imgs/skillsOPEN.PNG",
  "imgs/experienceOPEN.PNG",
  "imgs/planOPEN.PNG",
  "imgs/techOPEN.PNG",
];

let classes = [
  "hovered-skills",
  "hovered-experience",
  "hovered-plan",
  "hovered-hobbies",
];

let windows=[
  "first-window",
  "second-window",
  "third-window",
  "fourth-window",
];

let words=[
  "skills",
  "experience",
  "plans",
  "hobbies"
]

let pClasses = ["p-skills", "p-experience", "p-plan", "p-hobbies"];


let clickedImageIndex = null;

images.forEach((image) => {
  image.setAttribute("data-original-src", image.src);
});

images.forEach((image, i) => {
  let originalSrc = image.getAttribute("data-original-src"); // grabing the original source of old imgs and storing here




  image.addEventListener("click", () => {
    mainWindow.innerHTML=words[i]
    // Reset all images to their original state
    images.forEach((img, j) => {
      if (j !== i) {
        img.src = img.getAttribute("data-original-src");
        img.classList.remove(classes[j]);
        names[j].classList.remove(pClasses[j]);
        names[j].style.display = "none";
      }
    });

    // Update the clicked image
    image.src = newSrc[i];
    document.getElementById(windows[i]).scrollIntoView({
      behavior: "smooth",
    });

    clickedImageIndex = i;
  });


  image.addEventListener("mouseover", () => {
    if (clickedImageIndex !== i) { // Only change on hover if not clicked
      image.src = newSrc[i];
      image.classList.add(classes[i]);
      names[i].classList.add(pClasses[i]);
      names[i].style.display = "block";
    }
  });

  image.addEventListener("mouseout", () => {
    if (clickedImageIndex !== i) { // Only revert if not clicked
      image.src = originalSrc;
      image.classList.remove(classes[i]);
      names[i].classList.remove(pClasses[i]);
      names[i].style.display = "none";
    }
  });
});

infoBtn.addEventListener("click", ()=>{
  card.classList.toggle("visible");
})


scroll.addEventListener("click", ()=>{
  head.scrollIntoView({
  behavior: "smooth",
  block: "start"  
});
})

document.addEventListener('mousemove', (event) => {
  let mouseY = event.clientY;
  let windowHeight= window.innerHeight

  if(windowHeight-mouseY<100){
footer.style.transform="translate(0)"
  }
else{
  footer.style.transform = 'translateY(100%)';
}
  
});

document.addEventListener('mousemove', (event) => {
  let mouseY = event.clientY;
console.log(mouseY)
  })
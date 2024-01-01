
// toggle menu
function openMenu (){
  document.querySelector('nav').style.right = "0";
};

function closeMenu (){
  document.querySelector('nav').style.right = "-200px";
};

//attire images

// function changeOldImage (){
//   const oldImage = document.getElementById('old-ozonde');
//   const imgsrc = oldImage.getAttribute('src');

//   if (imgsrc === './images/old-ozonde-6.jpg') {
//     oldImage.setAttribute('src','./images/old-ozonde4.jpg');
//   } 

//   else if (imgsrc === './images/old-ozonde4.jpg') {
//     oldImage.setAttribute('src','./images/old-ozonde5.jpg');
//   }

//   else {
//     oldImage.setAttribute('src','./images/old-ozonde-6.jpg');
//   } 

// };

// function changeModernImage(){
//    const modernImage = document.getElementById('modern-ozonde');
//   const imgsrc = modernImage.getAttribute('src');
 

//   if (imgsrc === './images/modern-ozonde-green.jpg') {
//     modernImage.setAttribute('src','./images/modern-ozonde-pink.jpg');
//   } 

//   else if (imgsrc === './images/modern-ozonde-pink.jpg') {
//     modernImage.setAttribute('src','./images/modern-ozonde3.jpg');
//   }

//   else {
//     modernImage.setAttribute('src','./images/modern-ozonde-green.jpg');
//   } 




// document.getElementById('button1').addEventListener('click',changeOldImage);
// document.getElementById('button2').addEventListener('click',changeOldImage);

// document.getElementById('button3').addEventListener('click',changeModernImage);
// document.getElementById('button4').addEventListener('click',changeModernImage);


//language
function showCategory(name,yname){
  const theCategory = document.getElementById(name)
  const theButton= document.getElementById(yname)
  if (theCategory.style.display === 'none'){
      theCategory.style.display  = 'flex'
      theButton.style.backgroundColor='#f86836'
      theButton.style.color= 'white';
  }
  else{
   theCategory.style.display  = 'none'
   theButton.style.backgroundColor='white'
   theButton.style.color= 'black';
  }
}



//slides

let slideIndex = 1;
let thename = 'mySlides'
let thename2 = 'mySlides2'
showSlides(slideIndex,thename);
showSlides(slideIndex,thename2);

// Next/previous controls
function plusSlides(n,name) {
  showSlides(slideIndex += n,name);
  
}

// Thumbnail image controls
function currentSlide(n,name) {
  showSlides(slideIndex = n,name);
}

function showSlides(n,name) {
  let i;
  let slides = document.getElementsByClassName(name);

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";

}
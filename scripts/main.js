
// toggle menu
function openMenu (){
  document.querySelector('nav').style.right = "0";
};

function closeMenu (){
  document.querySelector('nav').style.right = "-200%";
};





//language
function showCategory(name,yname){
  const theCategory = document.getElementById(name)
  const theButton= document.getElementById(yname)
  if (theCategory.style.display === 'flex'){
    theCategory.style.display  = 'none'
    theButton.style.backgroundColor='white'
    theButton.style.color= 'black';
  }
   
  else{
      theCategory.style.display  = 'flex'
      theButton.style.backgroundColor='#f86836'
      theButton.style.color= 'white';
  }
  
}

//read more
document.querySelector('#attire .read-more-btn1').onclick = ()=>{
  document.querySelector('.hide1').style.display ='inline-block';
  document.querySelector('#attire .read-more-btn1').style.display='none'
}

document.querySelector('#attire .read-more-btn2').onclick = ()=>{
  document.querySelector('.hide2').style.display ='inline-block';
  document.querySelector('#attire .read-more-btn2').style.display='none'
}


//Attire slides

let index = 1;
let oldOzonde = 'old-ozonde-slides'
let newOzonde = 'new-Ozonde-slides'
showSlides(index,oldOzonde);
showSlides(index,newOzonde);

// history slides
let history = 'history-slides'
showSlides(index,history);

//education slides
let greeting = 'greetings-slides';
let counting = 'counting-slides';
let days = 'days-slides';
let body = 'body-slides';

showSlides(index,greeting);
showSlides(index,counting);
showSlides(index,days);
showSlides(index,body);



function plusSlides(n,name) {
  showSlides(index += n,name);
  
}

function currentSlide(n,name) {
  showSlides(index = n,name);
}



function showSlides(n,name) {
  let i;
  let slides = document.getElementsByClassName(name);

  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[index-1].style.display = "block";

}




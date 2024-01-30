
// toggle menu
function openMenu (){
  document.querySelector('nav').style.right = "0";
};

function closeMenu (){
  document.querySelector('nav').style.right = "-200%";
};


document.querySelectorAll('.navlink').forEach(link=>{
  link.addEventListener('click', ()=>{
    closeMenu ();
  }
  )
});

const header = document.getElementById('header');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.opacity= '1';
        
	} else {
		header.style.opacity= '0.8';;
	}
});




//language
function showCategory(name,buttonName){
  const theCategory = document.getElementById(name)
  const theButton= document.getElementById(buttonName)
  if (theCategory.style.display === 'flex'){
    theCategory.style.display  = 'none'
    theButton.style.backgroundColor='white'
    theButton.style.color= 'black';
  }
   
  else{
      theCategory.style.display  = 'flex'
      theButton.style.backgroundColor='red'
      theButton.style.color= 'white';
  }
  
}




// history slides
let index = 1;
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




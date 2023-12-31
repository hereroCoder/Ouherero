
// toggle menu
function openMenu (){
  document.querySelector('nav').style.right = "0";
};

function closeMenu (){
  document.querySelector('nav').style.right = "-200px";
};

//attire images



function changeOldImage (){
  const oldImage = document.getElementById('old-ozonde');
  const imgsrc = oldImage.getAttribute('src');

  if (imgsrc === './images/old-ozonde-green.jpg') {
    oldImage.setAttribute('src','./images/old-ozonde-pink.jpg');
  } 

  else if (imgsrc === './images/old-ozonde-pink.jpg') {
    oldImage.setAttribute('src','./images/old-ozonde3.jpg');
  }

  else {
    oldImage.setAttribute('src','./images/old-ozonde-green.jpg');
  } 

};

function changeModernImage(){
   const modernImage = document.getElementById('modern-ozonde');
  const imgsrc = modernImage.getAttribute('src');
 

  if (imgsrc === './images/modern-ozonde-green.jpg') {
    modernImage.setAttribute('src','./images/modern-ozonde-pink.jpg');
  } 

  else if (imgsrc === './images/modern-ozonde-pink.jpg') {
    modernImage.setAttribute('src','./images/modern-ozonde3.jpg');
  }

  else {
    modernImage.setAttribute('src','./images/modern-ozonde-green.jpg');
  } 

}


document.getElementById('button1').addEventListener('click',changeOldImage);
document.getElementById('button2').addEventListener('click',changeOldImage);

document.getElementById('button3').addEventListener('click',changeModernImage);
document.getElementById('button4').addEventListener('click',changeModernImage);






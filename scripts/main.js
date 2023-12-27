const myButton = document.getElementById('nextImg');
const myImage = document.querySelector('img');
const userButton =  document.getElementById('userBtn');
const greetText = document.querySelector('h1');


myButton.onclick = () =>{
  const theSource = myImage.getAttribute('src')

  if (theSource === '/images/cattle.jpeg'){
    myImage.setAttribute('src','/images/chickens.jpeg')
  }
  else{
    myImage.setAttribute('src','/images/cattle.jpeg')
  }
};

userButton.onclick = ()=>{
  const name = prompt("What is your name?");
  greetText.textContent = `How are you doing ${name}`;
}



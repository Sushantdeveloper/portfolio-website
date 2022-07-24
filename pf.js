window.onload = start();
window.onload = start1();

window.onload = start2();
window.onload = start3();
window.onload = start4();
window.onload = start5();
window.onload = start6();
window.onload = start7();


  function start(){
    const progresshtml=document.getElementById("first");
    let width=0;
    const timeInterval=setInterval(fill,20)
    function fill(){
        if(width>=80){
            clearInterval(timeInterval);
        }
        else{
            width++;
            progresshtml.style.width=width+"%"
            progresshtml.innerHTML=width+"%";
        }
    }
}
function start1(){
  const progresshtml=document.getElementById("second");
  let width=0;
  const timeInterval=setInterval(fill1,20)
  function fill1(){
      if(width>=80){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
function start2(){
  const progresshtml=document.getElementById("third");
  let width=0;
  const timeInterval=setInterval(fill2,20)
  function fill2(){
      if(width>=60){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
function start3(){
  const progresshtml=document.getElementById("fourth");
  let width=0;
  const timeInterval=setInterval(fill3,20)
  function fill3(){
      if(width>=70){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
function start4(){
  const progresshtml=document.getElementById("fifth");
  let width=0;
  const timeInterval=setInterval(fill4,20)
  function fill4(){
      if(width>=50){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
function start5(){
  const progresshtml=document.getElementById("sixth");
  let width=0;
  const timeInterval=setInterval(fill5,20)
  function fill5(){
      if(width>=50){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
function start6(){
  const progresshtml=document.getElementById("seven");
  let width=0;
  const timeInterval=setInterval(fill6,20)
  function fill6(){
      if(width>=60){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
function start7(){
  const progresshtml=document.getElementById("eight");
  let width=0;
  const timeInterval=setInterval(fill7,20)
  function fill7(){
      if(width>=50){
          clearInterval(timeInterval);
      }
      else{
          width++;
          progresshtml.style.width=width+"%"
          progresshtml.innerHTML=width+"%";
      }
  }
}
//  write js for container section 

const typeword = document.querySelector(".name");
const cursor= document.querySelector(".cursor");

// create an array 
const wordArray=["Sushant Saini","Web Developer"];

let wordArrayIndex=0;
let LetterIndex=0;

const Typingdelay=200;
const ereasingdelay=100;
const newworddelay=2000;
//  create type function for typing the array wowrds 
 function type(){
  if(LetterIndex < wordArray[wordArrayIndex].length){
    typeword.textContent+= wordArray[wordArrayIndex].charAt(LetterIndex);
    LetterIndex++;
    setTimeout(type,Typingdelay);
  }
  else{

  }
 }
 type();


//  write js for the project section 
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const blogs1=document.querySelectorAll(".blogitem");

let index=0;
function display(index){
  blogs1.forEach((blogitem) => {
    blogitem.style.display="none"
  });
blogs1[index].style.display="flex";
}

function nextblog(){
  index++;
  if(index>blogs1.length-1){
    index=0;

  }
  display(index);
}

function prevblog(){
  index--;
  if(index<0){
    index=blogs1.length - 1;

  }
  display(index);
}
next.addEventListener("click" ,nextblog);
prev.addEventListener("click" ,prevblog);
display(index);

// js for form 
const submit=document.querySelectorAll(".submit-form");
submit.addEventListener("click",sndmssg);


const sndmssg=()=>{
 
}
// menubutton 
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const toggleNavbar = ()=>{
   menu.classList.toggle("active");
};

menuBtn.addEventListener("click",()=>toggleNavbar());

// sticky navigation menu 
let nav=document.querySelector(".navbar");
let val;
window.onscroll=function(){
   if(document.documentElement.scrollTop>20){
      nav.classList.add("sticky");
   }
   else{
      nav.classList.remove("sticky");
   }
}

// typing animation 
var typed= new Typed(".typing",{
   strings:["Developer","Designer","Freelancer"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
});

//  form validation
const name = document.getElementById('name')
const email = document.getElementById('email')
const subject  = document.getElementById('subject')
const textArea  = document.getElementById('textarea')
const errorElement =document.getElementById('error_message')

//
myform.addEventListener('submit',(e) =>{
  let messages=[]
  if(name.value === '' || name.value == null){
   messages.push('Name is required')
  }
  if (subject.value.length <=6){
   messages.push('subject must be longer than 6 characters')
  }
  if (subject.value.length >=40){
   messages.push('subject must be less than 40 characters')
  }
 
  if (textArea.value.length <=50){
   messages.push('Description must be longer than 50 characters')
  }

  
  if(messages.length>0){
     e.preventDefault()
   errorElement.innerText = messages.join(', ')
  }

})


// moving image
var main =  document.querySelector("#main");
var image = document.querySelector("#page>img");

main.addEventListener("mousemove",function(dets){
  image.style.top = 1-dets.y*0.05 + "px"
// console.log(dets.x)
// console.log(dets.y)
  image.style.left = 1-dets.x *0.05+ "px" 
})

//form reeset
document.getElementById("myform").reset(); 

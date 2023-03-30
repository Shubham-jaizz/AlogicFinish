const logo = document.querySelector('.logo');
const navu = document.querySelector('.navbar');
const myelement = document.querySelector('#my-element');
const enquiry = document.querySelector('.enquiry-box');
const floatForm = document.querySelector('#float');
const floatingBox = document.querySelector(".enquiryDetails")
const closingBtn = document.querySelector('.floating-form-close-button')
let counters1 = document.querySelectorAll(".count1");
let counters2 = document.querySelectorAll(".count2");


// const match1 = document.querySelector('.section6');
    //     const speed = 50;
    // counters.forEach((counter) => {
    //   const updateCount = () => {
    //     const target = parseInt(+counter.getAttribute("data-target"));
    //     const count = parseInt(+counter.innerText);
    //     const increment = Math.trunc(target / speed);
      

    //     if (count < target) {
    //       counter.innerText = count + increment;
    //       setTimeout(updateCount, 1);
    //     } else {
    //       count.innerText = `${target}+`;
    //     }
    //   };
    //   updateCount();
    // });
 



logo.addEventListener('click', function(){
    alert(`welcome to ${logo.dataset.logo}`);
})
const boy = document.querySelector('.edu');
const icon1 = document.querySelector('.icons1');
const icon3 = document.querySelector('.icons3');

const icon2 = document.querySelector('.icons2');
const girly = document.querySelector('.girl');
// console.log(boy);
console.log(window.scrollY);
console.log(enquiry);



enquiry.addEventListener('click',()=>{
    floatForm.classList.toggle('animate');
});
closingBtn.addEventListener('click',function(event){ 
    floatForm.classList.toggle('animate');
})
  






document.addEventListener("scroll",function(){ 
     if(window.scrollY >=4000){
      const speed = 72;
      counters1.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(+counter.getAttribute("data-target"));
          const count = parseInt(+counter.innerText);
          const increment = Math.trunc(target / speed);
        
  
          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            count.innerText = `${target}+`;
          }
        };
        updateCount();
      });
     } else{
       counters1.forEach((counter)=>{
        counter.innerText = '0';
       })
     } 
     

     if(window.scrollY >=5000){
      const speed = 90;
      counters2.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(+counter.getAttribute("data-target"));
          const count = parseInt(+counter.innerText);
          const increment = Math.trunc(target / speed);
        
  
          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            count.innerText = `${target}+`;
          }
        };
        updateCount();
      });
     } else{
       counters2.forEach((counter)=>{
        counter.innerText = '0';
       })
     } 



     if(window.scrollY >= 1000 ){
         boy.classList.add('boy');
        // console.log("ff")
    }else{
        boy.classList.remove('boy');
    }
    if(window.scrollY >= 500){
        icon1.classList.add('just1'); 
        icon2.classList.add('just2');
        icon3.classList.add('just3');
        navu.classList.add('my-bg-color'); 
    }else{
        icon1.classList.remove('just1'); 
        icon2.classList.remove('just2');
        icon3.classList.remove('just3');
        navu.classList.remove('my-bg-color'); 
    }
   
})
(document).ready(function(){
    ('.dropdown-toggle[data-hover="dropdown"]').dropdownHover();
  });
  
 
  (document).ready(function() {
    (window).scroll(function() {
      var scrollPosition = (this).scrollTop();
      var opacity = scrollPosition / 500; // Replace 500 with the height of your navbar
      
      ('#my-element').css('opacity', opacity);
    });
  });
 
  
  
  

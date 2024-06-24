// pricing triggers 





let pricingTrigger = document.querySelector('#toggler-pricing');
let prices = document.querySelectorAll('.priceId');
let perTime = document.querySelectorAll('.timeId');
let pricesContent = [8, 20,48];

pricingTrigger.addEventListener('click', ()=> {
    if (  pricingTrigger.style.justifyContent === "end")
    {
        pricingTrigger.style.justifyContent = "start";
        pricingTrigger.previousElementSibling.classList.add("text-white");
        pricingTrigger.nextElementSibling.classList.remove("text-white");
        for (let i= 0; i<prices.length ;i++) {
            prices[i].textContent = pricesContent[i];
            perTime[i].textContent  = "month";
          
            
            }

        
       
    }
    else {
        pricingTrigger.style.justifyContent = "end";
       
        pricingTrigger.previousElementSibling.classList.remove("text-white");
        pricingTrigger.nextElementSibling.classList.add('text-white');

        for (let i= 0; i<prices.length ;i++) {
            prices[i].textContent = Math.floor((+prices[i].textContent *0.9 * 12));
            perTime[i].textContent  = "year";
          
            
            }
    }
   
})

// pricingTrigger.addEventListener('click' , function() {
//     pricingTrigger.classList.toggle('justify-content-end');
// })


// let navtoggle = document.querySelector('.navbar-toggler');
// navtoggle.addEventListener('click', ()=> {
//     let navbarProperty= document.querySelector('.navbar-collapse');
//     let scrollHeight =document.documentElement.scrollHeight;


// navbarProperty.style.setProperty('--page-height',scrollHeight);

// console.log(scrollHeight);

// })


// document.body.style.setProperty('--foo-bar', newValue);//set

// if (document.documentElement.clientWidth < 768) {
//     let overlay = document.querySelector('.overlay');
    

//     overlay.addEventListener('click',()=>{

//     //     overlay.classList.toggle('d-block');

//     // })
//     overlay.style.position = "static";
//     overlay.style.display = "none";
//     overlay.style.height = "0";
    


   
   
// }


//     )}

// document.querySelector('.navbar-toggler').addEventListener('click',()=>{

//     overlay.style.position = "absolute";
//     overlay.style.height = "6645px";
//     overlay.style.display="block";

// })

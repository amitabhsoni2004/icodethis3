let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
// console.log(btn1);

btn1.addEventListener("mouseover",(evt) =>{
    evt.target.style.background = "white";

    setTimeout(() => {
        evt.target.style.background = "";
      }, 1000);
    },
    false,
);

btn2.addEventListener("mouseover",(evt) =>{
    evt.target.style.background = "white";

    setTimeout(() => {
        evt.target.style.background = "";
      }, 1000);
    },
    false,
);

let card = document.querySelector(".card");
console.log(card);

card.addEventListener("mouseenter",(evt) =>{
    evt.target.style.boxShadow = "-28px -34px 0px 20px rgba(0, 42, 255, 0.082)";
    evt.target.style.border ="1px solid blue";

});


let div1 = document.querySelector(".div");
console.log(div1);

div1.addEventListener("mouseover",(evt) =>{
    evt.target.style.scale = "10px";
    // evt.target.style.border ="1px solid blue";
});


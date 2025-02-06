let PouseBtn = document.querySelector("#PousePlyayBtn")
let PlayBn = document.querySelector("#PlyayBtn")
let Restard = document.querySelector("#Restard")

var typed = new Typed('#typed-output', {
  strings: ["Text Gradients", "Design is intelligence made visible"],
  typeSpeed: 40,  
  backSpeed: 25,  
  cursorChar: "▌",
});

var typed2 = new Typed('#tayped-mini', {
    strings: ["Make your headlines stand out" , "Interaction design isn’t merely a matter of aesthetic choice; rather, it is based on an understanding of users and cognitive principles."],
    typeSpeed: 50,
    backSpeed: 40,
    cursorChar: "▌",

})


Restard.addEventListener('click', () => {
    typed.reset();
    typed2.reset();
})

PouseBtn.addEventListener('click', () => {
    typed.stop();
    typed2.stop();
})
PlayBn.addEventListener('click' , () => {
    typed.start();
    typed2.start();
})
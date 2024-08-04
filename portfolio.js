const elementReveal = document.querySelectorAll("[data-reveal");

const  scrollReveal = function(){
    for(let i = 0, len = elementReveal.length;i<len;i++){
        const element = elementReveal[i].getBoundingClientRect().top < window.innerHeight;

        if(element){
            elementReveal[i].classList.add("revealed");

        }else{
            elementReveal[i].classList.remove("revealed");

        }
    }

}
window.addEventListener("scroll",scrollReveal);
window.addEventListener("load",scrollReveal);
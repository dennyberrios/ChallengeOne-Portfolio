const animationScroll = document.querySelectorAll("[date-anime]");
const transitionList = "transition";

function animaElementos() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    animationScroll.forEach(element => {
        if((windowTop) > element.offsetTop) {
            element.classList.add(transitionList);
        }else{
            element.classList.remove(transitionList);
        };
    });
};

 if (animationScroll.length) {
    window.addEventListener("scroll", () => {
        animaElementos();
    });
 };
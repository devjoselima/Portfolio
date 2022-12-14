const item = document.querySelectorAll("[data-anime]")

export default function animeScroll(){
    const windowTop = window.pageYOffset + window.innerHeight * 0.88 ;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
  });
}

animeScroll()

window.addEventListener("scroll", () =>{
    animeScroll()
} )
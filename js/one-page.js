const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

const performTransition = sectionEq =>{
    if (inScroll === false){
        inScroll = true;
        const position = sectionEq * - 100;

        sections
            .eq(sectionEq)
            .addClass("active")
            .siblings()
            .removeClass("active");

    display.css({
        transform: `translateY(${position}%)`
    });

    setTimeout(()=>{
        inScroll=false;
    }, 800);
}
};

const scrollToSection = direction =>{
    const activeSecton = sections.filter('.active');
    const nextSection = activeSecton.next();
    const prevSection = activeSecton.prev();

    if(direction === "next" && nextSection.length){
        performTransition(nextSection.index());
    }

    if(direction === "prev" && prevSection.length){
        performTransition(prevSection.index());
    }
};

$(window).on("wheel",e=>{
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0){
        scrollToSection("next");
    }

    if(deltaY < 0){
        scrollToSection("prev");
    }
});

$(document).on("keydown", e=>{
    const tagName = e.target.tagName.toLowerCase();
    if (tagName !== "input" && tagName !== "textarea") {
        switch (e.keyCode){
            case 38:
            scrollToSection("prev");
            break;
            case 40:
            scrollToSection("next");
            break;
        }
    }
});

$("[data-scroll-to]").on("click", e => {
    e.preventDefault();
    performTransition(parseInt($(e.currentTarget).attr("data-scroll-to")));
  });
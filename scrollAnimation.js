document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        if (document.querySelector("[data-move='red']")) {
            console.log("Elements found. Starting animation...");
            startAnimations();
        } else {
            console.log("Elements NOT found. Check loading order.");
        }
    }, 500); // Delay for 500ms
});

function startAnimations() {
    gsap.to("[data-move='red'], [data-move='green1']", {
        y: "-7cm",
        ease: "power2.out",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=200",
            scrub: 3
        }
    });

    gsap.to("[data-move='red'], [data-move='green1'], [data-move='yellow']", {
        y: "-5cm",
        ease: "power2.out",
        scrollTrigger: {
            trigger: "body",
            start: "top -200",
            end: "+=200",
            scrub: 3
        }
    });

    gsap.to("[data-move='blue'], [data-move='green1'], [data-move='green2'], [data-move='yellow']", {
        y: "-4cm",
        ease: "power2.out",
        scrollTrigger: {
            trigger: "body",
            start: "top -400",
            end: "+=200",
            scrub: 3
        }
    });
}

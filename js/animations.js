gsap.registerPlugin(ScrollTrigger);

gsap.to(".block",{
    scrollTrigger: {
        trigger: ".block",
        start: "-100px",
        end: "1500px",
        markers: true,
        pin: true,
        toggleAcrions: "restart pause none none",
        scrub: 1
    },
    x: 500,
    rotation: 60,
    duration: 3,
    scale: 10
})
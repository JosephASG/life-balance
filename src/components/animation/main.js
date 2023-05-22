import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Observer } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer)
const Animations = () => {
    gsap.to('.main-navbar', {
        scrollTrigger: {
            trigger: '.second-section',
            start: 'top 80%',
            scrub: 0.01,
            // markers:true
        },
        ease: false,
        backgroundColor: "#000000"
    })

    const nav = document.querySelector('.send-message');
    Observer.create({
        target: window,
        type: 'scroll',
        tolerance: 100,
        onUp: () => nav.classList.remove('is-hidden'),
        onDown: () => nav.classList.add('is-hidden'),
    });
}

export default Animations
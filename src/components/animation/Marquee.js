import { Splide } from "@splidejs/splide";
const Marquee = () => {
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    if (ww < 968) {
        var device = "mobile";
    } else {
        var device = "desktop";
    }
    if (device === "desktop") {
        var splide = new Splide('.splide', {
            // type: "loop",
            perPage: 3,
            cover: true,
            lazyLoad: 'nearby',
            arrows: false,
        });

        splide.mount();
    }
    if (device === "mobile") {
        var splide = new Splide('.splide', {
            // type: "loop",
            perPage: 1,
            cover: true,
            lazyLoad: 'nearby',
            arrows: false,
            gap: 120,
        });

        splide.mount();
    }
}

export default Marquee;
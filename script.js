var tl2 = gsap.timeline();

tl2
gsap.from(".page-2 .h5", {
    opacity: 0,
    top: 20,
    scrollTrigger: {
        trigger: ".page-2 .h5",
        scroller: "body",
        start: "top 80%",
        // end: "bottom center",
        // markers: true,
    }
})
gsap.from(".page-2 .h1", {
    opacity: 0,
    top: 40,
    scrollTrigger: {
        trigger: ".page-2 .h1",
        scroller: "body",
        start: "top 75%",
        // end: "bottom center",
        // markers: true,
    }
})
gsap.from(".page-2 .btn-3", {
    opacity: 0,
    top: -20,
    scrollTrigger: {
        trigger: ".page-2 .btn-3",
        scroller: "body",
        start: "top 90%",
        // end: "bottom center",
        // markers:true,
    }
})


var tl = gsap.timeline();

tl
    .from(".lowest", {
        opacity: 0,
        onStart: function () {
            $('.lowest').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('.lowest').textillate('out')
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from(".sec-low", {
        opacity: 0,
        delay: 1,
        onStart: function () {
            $('.sec-low').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('.sec-low').textillate('out')
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from(".sec-top", {
        opacity: 0,
        delay: 1,
        onStart: function () {
            $('.sec-top').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('.sec-top').textillate('out')
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from(".top", {
        opacity: 0,
        delay: 0.8,
        onStart: function () {
            $('.top').textillate({
                in: {
                    effect: 'fadeInUp',
                },
            });
        }
    })
    .to('.top-scr', {
        top: "-100%",
        delay: 1,
        duration: 1.2,
        ease: "Power4.easeOut"
    })
// .from('.icon-2', {
//     scale: 0.1,
//     opacity: 0,
//     delay: 0.1,
// })
// .from('.icon-1', {
//     scale: 0.1,
//     opacity: 0,
//     delay: 0.1,
// })





document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("no-scroll");

    setTimeout(function () {
        document.body.classList.remove("no-scroll");
    }, 6800);
});








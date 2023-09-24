function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
loco()



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
    .from('.icon-2', {
        scale: 0.1,
        opacity: 0,
        delay: 0.1,
    })
    .from('.icon-1', {
        scale: 0.1,
        opacity: 0,
        delay: 0.1,
    })














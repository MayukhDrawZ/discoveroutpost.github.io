
//  const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//      smooth: true
//   });

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.from("#page1 h1",{
      y:-1000,
    duration:1.5,
    stagger:0.4,

})

gsap.from("#page1 img",{
    
    x:-1000,
    duration:1.5,

})
 gsap.from(".navbar, #page1 ",{
     opacity:0,
    duration:1.7,
 })

gsap.from(".sub-page2",{
    x:-1030,
    duration:1,
    scrollTrigger:{
        trigger:".sub-page2",
        scroller:"#main",
        scrub:2,
        
        start:"top 90%",
        end:"top 40%"
        


    }

})

gsap.from(".sub-page3",{
    x:1030,
    duration:1,
    scrollTrigger:{
        trigger:".sub-page3",
        scroller:"#main",
        scrub:2,
 
       
        start:"top 90%",
        end:"top 40%"

        


    }

})

gsap.from(".sub-page4",{
  x:-1030,
    duration:1,
   
    scrollTrigger:{
        trigger:".sub-page4",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",
      
    }

})



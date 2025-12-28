 document.addEventListener("DOMContentLoaded", () => {
        
        /* 1. MOBILE MENU TOGGLE */
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
          });
        }

      
        if (typeof gsap !== "undefined") {
          
          const tl = gsap.timeline({
            defaults: {
              ease: "power4.out",
              duration: 1.2,
            },
          });

          // 'from' 
          tl.from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1
          })
          .from(".hero-text", {
            y: 30,
            opacity: 0,
          }, "-=0.8")
          .from(".hero-buttons", {
            y: 20,
            opacity: 0,
          }, "-=0.8")
          .from(".hero-video", {
            scale: 0.95,
            opacity: 0,
            duration: 1.5,
          }, "-=1");
        }
      });


    //   3rd section
      gsap.registerPlugin(ScrollTrigger);

  // Text Animation
  gsap.from(".gsap-text > *", {
    scrollTrigger: {
      trigger: ".gsap-text",
      start: "top 75%"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });

  // Images Animation (fade + slide)
  gsap.from(".gsap-img", {
    scrollTrigger: {
      trigger: ".gsap-images",
      start: "top 70%"
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.2
  });

  // Floating Animation for all images
  gsap.to(".gsap-img", {
    y: "-=15",
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 0.2
  });

//   announsmant
document.addEventListener("DOMContentLoaded", () => {
  if(typeof gsap !== "undefined") {
    gsap.set(".gsap-hidden", {opacity: 0, y: 50});
    
    const tl = gsap.timeline({defaults: {ease: "power4.out", duration: 1}});
    
    tl.to(".gsap-hidden", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      duration: 1
    });

    // Floating card subtle animation
    gsap.to(".hidden.lg\\:block", {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
      delay: 1
    });
  }
});

// 
document.addEventListener("DOMContentLoaded", () => {
        // ScrollTrigger 
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#ecosystem-section",
                start: "top 80%", 
                toggleActions: "play none none reverse"
            }
        });

    //   header animation
        tl.to("#eco-header", {
            autoAlpha: 1, // visibility: visible + opacity: 1
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            startAt: { y: 30 } 
        })
        
        // card animation
        .to(".eco-card", {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1, // 
            ease: "back.out(1.7)", 
            startAt: { y: 50, scale: 0.9 }
        }, "-=0.4");
    });


    // 
     const slider = document.querySelector("#scroll-container");
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("cursor-grabbing");
        slider.classList.remove("cursor-grab");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("cursor-grabbing");
        slider.classList.add("cursor-grab");
      });

      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("cursor-grabbing");
        slider.classList.add("cursor-grab");
      });

      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });


      //  ======================================
        // GSAP ScrollTrigger Registration
        gsap.registerPlugin(ScrollTrigger);

        const textSteps = document.querySelectorAll(".text-step");
        const visualImages = document.querySelectorAll(".visual-img");

        textSteps.forEach((step, index) => {
            ScrollTrigger.create({
                trigger: step,
                // ট্রিগার পয়েন্ট: যখন টেক্সটটি স্ক্রিনের মাঝখানে আসবে তখন এক্টিভ হবে
                start: "top center+=10%", 
                end: "bottom center+=10%",
                
                onEnter: () => updateState(index),
                onEnterBack: () => updateState(index),
            });
        });

        function updateState(activeIndex) {
            // Update Text Focus
            textSteps.forEach((step, i) => {
                if (i === activeIndex) {
                    step.classList.add("active");
                } else {
                    step.classList.remove("active");
                }
            });

            // Update Image Switch
            visualImages.forEach((img, i) => {
                if (i === activeIndex) {
                    img.classList.add("active");
                } else {
                    img.classList.remove("active");
                }
            });
        }
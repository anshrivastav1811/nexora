/* ========================================= */
/* NEXORA V2 | HERO JAVASCRIPT               */
/* File: js/sections/hero.js                 */
/* ========================================= */


function initHero(){


    const hero =
    document.querySelector("#hero");


    if(!hero) return;




    /* ===================================== */
    /* Reveal Animation                      */
    /* ===================================== */


    const revealItems =
    hero.querySelectorAll(
        ".hero-content > *, .hero-visual"
    );



    revealItems.forEach(
        (item,index)=>{


        item.style.opacity="0";


        item.style.transform=
        "translateY(30px)";



        setTimeout(()=>{


            item.style.transition=
            "all .7s ease";


            item.style.opacity="1";


            item.style.transform=
            "translateY(0)";



        }, index * 120);



    });






    /* ===================================== */
    /* Stats Counter                         */
    /* ===================================== */


    const counters =
    hero.querySelectorAll(
        ".hero-stat h3"
    );



    counters.forEach(counter=>{


        const target =
        parseInt(
            counter.innerText
        );


        let current=0;


        const speed =
        Math.ceil(
            target / 50
        );



        const updateCounter=()=>{


            current += speed;



            if(current < target){


                counter.innerText =
                current + "+";


                requestAnimationFrame(
                    updateCounter
                );


            }

            else{


                counter.innerText =
                target + "+";


            }


        };



        updateCounter();



    });







    /* ===================================== */
    /* Browser Mockup Movement               */
    /* ===================================== */


    const visual =
    hero.querySelector(
        ".browser-window"
    );



    if(
        visual &&
        window.innerWidth > 900
    ){



        hero.addEventListener(
            "mousemove",
            (e)=>{


                const x =
                (window.innerWidth / 2 - e.clientX)
                / 80;


                const y =
                (window.innerHeight / 2 - e.clientY)
                / 80;



                visual.style.transform =
                `
                rotateY(${x}deg)
                rotateX(${y}deg)
                `;


            }
        );




        hero.addEventListener(
            "mouseleave",
            ()=>{


                visual.style.transform =
                "rotateY(0deg) rotateX(0deg)";


            }
        );


    }



}


/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initHero =
initHero;
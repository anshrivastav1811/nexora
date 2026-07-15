/* ========================================= */
/* NEXORA V2 | TESTIMONIALS JAVASCRIPT       */
/* File: js/sections/testimonials.js         */
/* ========================================= */


function initTestimonials(){


    const testimonials =
    document.querySelector("#testimonials");


    if(!testimonials) return;




    const cards =
    testimonials.querySelectorAll(
        ".testimonial-card"
    );





    /* ===================================== */
    /* Card Reveal Animation                 */
    /* ===================================== */


    cards.forEach(
        (card,index)=>{


        card.style.opacity="0";


        card.style.transform=
        "translateY(35px)";



        setTimeout(()=>{


            card.style.transition=
            "all .7s ease";


            card.style.opacity="1";


            card.style.transform=
            "translateY(0)";



        }, index * 150);



    });







    /* ===================================== */
    /* Hover Shadow                          */
    /* ===================================== */


    cards.forEach(card=>{


        card.addEventListener(
            "mouseenter",
            ()=>{


                card.style.boxShadow =
                "0 25px 50px rgba(0,0,0,.25)";


            }
        );



        card.addEventListener(
            "mouseleave",
            ()=>{


                card.style.boxShadow =
                "none";


            }
        );


    });



}



/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initTestimonials =
initTestimonials;
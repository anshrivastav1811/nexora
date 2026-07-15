/* ========================================= */
/* NEXORA V2 | SERVICES JAVASCRIPT           */
/* File: js/sections/services.js             */
/* ========================================= */


function initServices(){


    const services =
    document.querySelector("#services");


    if(!services) return;




    const cards =
    services.querySelectorAll(
        ".service-card"
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
            "all .6s ease";


            card.style.opacity="1";


            card.style.transform=
            "translateY(0)";



        }, index * 120);



    });







    /* ===================================== */
    /* Card Hover Effect                     */
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


window.initServices =
initServices;
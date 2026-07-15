/* ========================================= */
/* NEXORA V2 | PROCESS JAVASCRIPT            */
/* File: js/sections/process.js              */
/* ========================================= */


function initProcess(){


    const process =
    document.querySelector("#process");


    if(!process) return;




    const cards =
    process.querySelectorAll(
        ".process-card"
    );





    /* ===================================== */
    /* Card Reveal                           */
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
    /* Hover Highlight                       */
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


window.initProcess =
initProcess;
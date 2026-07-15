/* ========================================= */
/* NEXORA V2 | PRICING JAVASCRIPT            */
/* File: js/sections/pricing.js              */
/* ========================================= */


function initPricing(){


    const pricing =
    document.querySelector("#pricing");


    if(!pricing) return;




    const cards =
    pricing.querySelectorAll(
        ".pricing-card"
    );





    /* ===================================== */
    /* Card Reveal Animation                 */
    /* ===================================== */


    cards.forEach(
        (card,index)=>{


        card.style.opacity="0";


        card.style.transform=
        "translateY(40px)";



        setTimeout(()=>{


            card.style.transition=
            "all .7s ease";


            card.style.opacity="1";


            card.style.transform=
            "translateY(0)";



        }, index * 150);



    });







    /* ===================================== */
    /* Active Card Pulse                     */
    /* ===================================== */


    const popularCard =
    pricing.querySelector(
        ".pricing-card.active"
    );



    if(popularCard){


        popularCard.addEventListener(
            "mouseenter",
            ()=>{


                popularCard.style.boxShadow =
                "0 30px 70px rgba(37,99,235,.15)";


            }
        );



        popularCard.addEventListener(
            "mouseleave",
            ()=>{


                popularCard.style.boxShadow =
                "none";


            }
        );


    }




}



/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initPricing =
initPricing;
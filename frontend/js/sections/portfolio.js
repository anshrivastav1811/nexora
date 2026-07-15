/* ========================================= */
/* NEXORA V2 | PORTFOLIO JAVASCRIPT          */
/* File: js/sections/portfolio.js            */
/* ========================================= */


function initPortfolio(){


    const portfolio =
    document.querySelector("#portfolio");


    if(!portfolio) return;




    const content =
    portfolio.querySelector(
        ".portfolio-content"
    );



    /* ===================================== */
    /* Reveal Animation                      */
    /* ===================================== */


    if(content){


        content.style.opacity="0";


        content.style.transform=
        "translateY(40px)";



        setTimeout(()=>{


            content.style.transition=
            "all .8s ease";


            content.style.opacity="1";


            content.style.transform=
            "translateY(0)";



        },200);


    }





    /* ===================================== */
    /* Development Status                    */
    /* ===================================== */


    const badge =
    portfolio.querySelector(
        ".development-badge"
    );



    if(badge){


        badge.title =
        "Portfolio section is currently under development";


    }




}



/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initPortfolio =
initPortfolio;
function initAbout(){


    const about =
    document.querySelector("#about");


    if(!about) return;




    const content =
    about.querySelector(".about-content");


    const boxes =
    about.querySelectorAll(
        ".about-box"
    );





    /* ===================================== */
    /* Content Reveal                        */
    /* ===================================== */


    if(content){


        content.style.opacity="0";


        content.style.transform=
        "translateY(30px)";



        setTimeout(()=>{


            content.style.transition=
            "all .7s ease";


            content.style.opacity="1";


            content.style.transform=
            "translateY(0)";



        },200);


    }






    /* ===================================== */
    /* Box Reveal                            */
    /* ===================================== */


    boxes.forEach(
        (box,index)=>{


        box.style.opacity="0";


        box.style.transform=
        "translateX(30px)";



        setTimeout(()=>{


            box.style.transition=
            "all .6s ease";


            box.style.opacity="1";


            box.style.transform=
            "translateX(0)";



        },400 + index * 150);



    });







    /* ===================================== */
    /* Hover Enhancement                     */
    /* ===================================== */


    boxes.forEach(box=>{


        box.addEventListener(
            "mouseenter",
            ()=>{


                box.style.boxShadow =
                "0 20px 40px rgba(0,0,0,.25)";


            }
        );



        box.addEventListener(
            "mouseleave",
            ()=>{


                box.style.boxShadow =
                "none";


            }
        );



    });



}



/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initAbout =
initAbout;
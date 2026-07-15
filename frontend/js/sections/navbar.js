/* ========================================= */
/* NEXORA V2 | NAVBAR JS                     */
/* File: js/sections/navbar.js               */
/* ========================================= */


function initNavbar(){


    const navbar =
    document.querySelector("#navbar");


    const menuToggle =
    document.querySelector("#menuToggle");


    const mobileMenu =
    document.querySelector("#mobileMenu");


    const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


    const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );




    /* ===================================== */
    /* Scroll Navbar                         */
    /* ===================================== */


    if(navbar){


        window.addEventListener(
            "scroll",
            ()=>{


                if(window.scrollY > 50){


                    navbar.classList.add(
                        "scrolled"
                    );


                }

                else{


                    navbar.classList.remove(
                        "scrolled"
                    );


                }


            }
        );


    }





    /* ===================================== */
    /* Mobile Menu Toggle                    */
    /* ===================================== */


    if(menuToggle && mobileMenu){


        menuToggle.addEventListener(
            "click",
            ()=>{


                mobileMenu.classList.toggle(
                    "active"
                );


                menuToggle.classList.toggle(
                    "open"
                );


                document.body.style.overflow =
                mobileMenu.classList.contains(
                    "active"
                )
                ? "hidden"
                : "";



            }
        );


    }





    /* ===================================== */
    /* Close Mobile Menu                     */
    /* ===================================== */


    mobileLinks.forEach(link=>{


        link.addEventListener(
            "click",
            ()=>{


                mobileMenu.classList.remove(
                    "active"
                );


                menuToggle.classList.remove(
                    "open"
                );


                document.body.style.overflow="";


            }
        );


    });






    /* ===================================== */
    /* Active Navigation                     */
    /* ===================================== */


    const sections =
    document.querySelectorAll(
        "section[id]"
    );



    window.addEventListener(
        "scroll",
        ()=>{


            let current="";



            sections.forEach(section=>{


                const top =
                section.offsetTop - 150;


                const height =
                section.offsetHeight;



                if(
                    window.scrollY >= top &&
                    window.scrollY < top + height
                ){


                    current =
                    section.id;


                }


            });




            navLinks.forEach(link=>{


                link.classList.remove(
                    "active"
                );


                if(
                    link.getAttribute("href")
                    === `#${current}`
                ){


                    link.classList.add(
                        "active"
                    );


                }


            });


        }
    );






    /* ===================================== */
    /* Smooth Scroll                         */
    /* ===================================== */


    document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor=>{


        anchor.addEventListener(
            "click",
            function(e){


                const target =
                document.querySelector(
                    this.getAttribute("href")
                );



                if(target){


                    e.preventDefault();


                    target.scrollIntoView({

                        behavior:"smooth"

                    });


                }


            }
        );


    });



}



/* ========================================= */
/* Export Function                           */
/* ========================================= */


window.initNavbar =
initNavbar;
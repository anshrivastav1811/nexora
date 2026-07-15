/* ========================================= */
/* NEXORA V2 | CONTACT JAVASCRIPT            */
/* File: js/sections/contact.js              */
/* ========================================= */


function initContact(){


    const form =
    document.querySelector(
        ".contact-form"
    );


    if(!form) return;




    const inputs =
    form.querySelectorAll(
        "input, textarea"
    );


    const button =
    form.querySelector(
        "button"
    );






    /* ===================================== */
    /* Form Submit                           */
    /* ===================================== */


    form.addEventListener(
        "submit",
        (e)=>{


            e.preventDefault();



            let valid = true;



            inputs.forEach(input=>{


                if(input.value.trim()===""){


                    input.style.borderColor =
                    "#ef4444";


                    valid = false;


                }

                else{


                    input.style.borderColor =
                    "";


                }


            });





            if(!valid){


                showMessage(
                    "Please fill all fields",
                    "error"
                );


                return;


            }






            /* Email Check */


            const email =
            form.querySelector(
                'input[type="email"]'
            );



            const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



            if(
                !emailPattern.test(
                    email.value
                )
            ){


                email.style.borderColor =
                "#ef4444";


                showMessage(
                    "Enter a valid email address",
                    "error"
                );


                return;


            }






            /* Loading */


            button.disabled=true;


            button.innerText =
            "Sending...";






            /*
            Future Integration:

            EmailJS
            OR
            FastAPI Backend
            OR
            Database API

            */





            setTimeout(()=>{



                button.disabled=false;


                button.innerText =
                "Send message";



                form.reset();



                showMessage(
                    "Message sent successfully 🚀",
                    "success"
                );



            },1500);



        }
    );







    /* ===================================== */
    /* Remove Error On Typing                 */
    /* ===================================== */


    inputs.forEach(input=>{


        input.addEventListener(
            "input",
            ()=>{


                input.style.borderColor =
                "";


            }
        );


    });







    /* ===================================== */
    /* Reveal Animation                       */
    /* ===================================== */


    const section =
    document.querySelector(
        ".contact"
    );



    if(section){


        section.style.opacity="0";


        section.style.transform=
        "translateY(30px)";



        setTimeout(()=>{


            section.style.transition=
            "all .8s ease";


            section.style.opacity="1";


            section.style.transform=
            "translateY(0)";



        },200);


    }





}






/* ========================================= */
/* Message Function                          */
/* ========================================= */


function showMessage(text,type){


    let message =
    document.querySelector(
        ".contact-message"
    );



    if(!message){


        message =
        document.createElement(
            "div"
        );


        message.className =
        "contact-message";



        document
        .querySelector(
            ".contact-form"
        )
        .appendChild(
            message
        );


    }





    message.innerText = text;


    message.className =
    `contact-message ${type}`;




    setTimeout(()=>{


        message.innerText="";


    },3000);



}





/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initContact =
initContact;
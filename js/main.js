//


//popup
// need to learn jquery cookies to get the popup to ONLY show up the first load - or none! if I just navigate to new pages
window.addEventListener("load", function(){
    setTimeout(
        function open(){
            document.querySelector(".popup").style.opacity = 1;
        },
        1000
    )
});


//const thingsToClosePopup = document.querySelectorAll(".close");
//window.thingsToClosePopup = thingsToClosePopup; //can't figure out for loop through these


// document.querySelector('#close-button').addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// })

// document.querySelector('#close-student').addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// })

// document.querySelector('#close-admin').addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// })

// document.querySelector('#close-guest').addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// })

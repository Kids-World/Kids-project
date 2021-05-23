"use strict";
////////Create Top button////// 
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
        // console.log("hello"); 
    } else {
        //    console.log('hi');
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top 
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

//////////Create an Event////////////////

function myRequest() {
    document.getElementById("send").innerHTML = "Your request has been received";
}

////2////

document.getElementById("myDIV").addEventListener("scroll", myFunction);

function myFunction() {
document.getElementById("word").innerHTML = "Our advise to your kids";
}
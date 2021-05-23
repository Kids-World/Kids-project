'use strict';
let soundsArray = [];
let showArray = [];
function Display(namedisplay, typeofdisplay, images) {
    this.namedisplay = namedisplay;
    this.typeofdisplay = typeofdisplay;
    this.images = images;


    if (typeofdisplay === 'audio') {
        soundsArray.push(this);
    } else if (typeofdisplay === 'vedio') {
        showArray.push(this);
    }
}

// arrayOf=[soundsArray,showArray];


let tuyOur = new Display('Tuyour ALjana Audio', 'audio', 'songimg/tuyuor.png');
let spaCe = new Display('Spacetoon Audio', 'audio', 'songimg/space.jpg');
let islaMic = new Display('Islamic Audio', 'audio', 'songimg/islamic.png');
/////////////////////////////////////////////////////////////////////////////
let kidsVedio = new Display('Kids Vedio', 'vedio', 'songimg/vediosongs.jpg');
let spaceToonVedio = new Display('Spacetoon Vedio', 'vedio', 'songimg/spa.jpg');
///////////////////////////////////////////////////////////////////////////////


// console.log(showArray,'sfsfsfs')


// let souNds=document.getElementById('render');
// souNds.addEventListener('click',function(event){
//     let theDoc=document.getElementById('render');
//     theDoc.innerHTML='';
//     for(let i=0;i<soundsArray.length;i++){
//         let letsShow=document.createElement('div');
//         letsShow.innerHTML="<div  class='newdiv'><h1 class='newclass'>" + soundsArray[i].name + "</h1><a href='toyuor.html'><img class='songimg/tuyuor.png'" + soundsArray[i].image + " ' width='405' height='200'></a></div>";
//         letsShow.appendChild(theDoc);
//         let documEnttoshow=document.getElementById('render');
//         documEnttoshow.appendChild(documEnttoshow);


//     }
// })



// let showVedio = document.getElementById("video");
// showVedio.addEventListener('click', function (event) {
//     let getDiv = document.getElementById("render");
//     getDiv.innerHTML = '';
//     for (let index = 0; index < showArray.length; index++) {
//         let div1 = document.createElement("div");
//         div1.innerHTML = "<div  class='column'><h1 class='textstyle'>" + showArray[index].name + "</h1><a href='pages/rate.html'><img class='ras-img' id=" + arrayShawarma[index].img + " src='./img/" + arrayShawarma[index].img + "' width='405' height='200'></a></div>";
//         getDiv.appendChild(div1);
//     }
// });


let showVedio = document.getElementById("video");
showVedio.addEventListener('click', function (event) {
    let getDiv = document.getElementById("render");
    getDiv.innerHTML = '';
    // for (let index = 0; index < showArray.length; index++) {
    // }
    let div1 = document.createElement("div");
    div1.innerHTML = showArray[0].namedisplay + "<a href='video.html'><img class='ras-img' " + showArray[0].images + " src='songimg/vediosongs.jpg" + "' width='405' height='200'></a></div>" + showArray[1].namedisplay + "<a href='spacevedio.html'><img class='ras-img' " + showArray[1].images + " src='songimg/spa.jpg" + "' width='405' height='200'></a></div>";
    getDiv.appendChild(div1);
});



let showSound = document.getElementById("audio");
showSound.addEventListener('click', function (event) {
    let getDiv = document.getElementById("render");
    getDiv.innerHTML = '';
    // for (let index = 0; index < showArray.length; index++) {
    // }
    let div1 = document.createElement("div");
    div1.innerHTML = soundsArray[0].namedisplay + "<a href='toyuor.html'><img class='ras-img' " + soundsArray[0].images + " src='songimg/tuyuor.png" + "' width='405' height='200'></a></div>" + soundsArray[1].namedisplay + "<a href='space.html'><img class='ras-img' " + soundsArray[1].images + " src='songimg/space.jpg" + "' width='405' height='200'></a></div>"+soundsArray[2].namedisplay + "<a href='islamic.html'><img class='ras-img' " + soundsArray[2].images + " src='songimg/islamic.png" + "' width='405' height='200'></a></div>";
    getDiv.appendChild(div1);
});

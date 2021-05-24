'use-strict'
let questionsArr = ['which one is a yellow square',
    'which one is a blue circle',
    'which one is a green square',
    'which one is a red circle',
    'which one is a black circle',
    'which one is a lion',
    'which one is a penguin',
    'which one is a crocodile',
    'which one is a giraffe',
    'which one is a parrot',
    'which one is a yellow car',
    'which one is a green car',
    'which one is a cat'];

let imagesArr = ['yellow-rectangle.jpg',
    'blue-circle.png',
    'green-square.png',
    'red-circle.png',
    'black-circle.png',
    'lion.png',
    'penguin.png',
    'crocodile.png',
    'giraffe.png',
    'parrot.png',
    'yellow-car.png',
    'green-car.png',
    'cat.png',
    'purple-traingle.png',
    'blue-rectangle.png',
    'red-square.png',
    'green-traingle.png',
    'green-circle.png',
    'blue-traingle.png'
];
let imgsSection=document.getElementById('images');
let img1 = document.getElementById('image1');
let img2 = document.getElementById('image2');
let img3 = document.getElementById('image3');
let imgNum = random(1, 3);


pic.all = [];

function pic(name, extension) {
    this.name = name;
    this.extension = extension;
    this.path = `/img/gusse-game/${name}${extension}`
    pic.all.push(this);
}
console.log(pic.all)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < imagesArr.length; i++) {
    let point = imagesArr[i].indexOf('.');
    let name = imagesArr[i].substring(0, point);
    let extension = imagesArr[i].substring(point, imagesArr[i].length);
    new pic(name, extension);
    console.log(name, extension)
}

//------take randomly number to set index and image index---------------

// let index = random(0, questionsArr.length - 1);
// let randomImageIndex=random(0 , imagesArr.length - 1);
// while(index == randomImageIndex)
// {
//     index=random(0 , questionsArr.length-1);
// }

//---------set images to images section----------------------------

function setImage(imageIndex, questionIndex, num) {
    console.log('imageIndex ', imageIndex, 'index', questionIndex);

    if (imageIndex !== questionIndex) {
        if (num == 1) {
            img2.src = pic.all[imageIndex].path;
            if (imageIndex == imagesArr.length - 1) {
                console.log(imageIndex - 1);
                img3.src = pic.all[imageIndex - 1].path;
            }
            else {
                if (imageIndex + 1 != questionIndex)
                    img3.src = pic.all[imageIndex + 1].path
                else
                    img3.src = pic.all[imageIndex + 2].path;
            }

        }
        if (num == 2) {
            img1.src = pic.all[imageIndex].path;
            if (imageIndex == imagesArr.length - 1) {
                console.log(imageIndex - 1)
                img3.src = pic.all[imageIndex - 1].path;
            }
            else {
                if (imageIndex + 1 != questionIndex)
                    img3.src = pic.all[imageIndex + 1].path
                else
                    img3.src = pic.all[imageIndex + 2].path;
            }

        }
        if (num == 3) {
            img1.src = pic.all[imageIndex].path;
            if (imageIndex == imagesArr.length - 1) { img2.src = pic.all[imageIndex - 1].path; }
            else {
                if (imageIndex + 1 != questionIndex)
                    img2.src = pic.all[imageIndex + 1].path
                else
                    img2.src = pic.all[imageIndex + 2].path;
                // img2.src=pic.all[imageIndex+1].path
                console.log(imageIndex + 1);
            }

        }


    }
    // else  if(imageIndex > index){

    //     setImage(index-1 , index);
    //    }
    // else{
    //     console.log("we're here boss");
    //     if(imageIndex !==0)
    //    {console.log("if condition boss");
    //         setImage(imageIndex+10 , index+10);}
    //     else{
    //         console.log("else condition boss")
    //         setImage(imageIndex+1 , index+2);
    //     }
    // }
}


//-----------show the images-------------------------

function renderImgs() {
   
    let index = random(0, questionsArr.length - 1);
    let randomImageIndex=random(0 , imagesArr.length - 1);
    while(index == randomImageIndex)
    {
        index=random(0 , questionsArr.length-1);
    }


    let imgName = 'img';
    let ask = questionsArr[index];
    let answer = index;
    console.log(index, answer)
    document.writeln(ask);

    console.log("imgnum ", imgNum, 'randomImageIndex', randomImageIndex);
    console.log("imgNum",imgNum);
    switch (imgNum) {
        case 1: img1.src = pic.all[index].path;
            console.log(pic.all[index].path);
            setImage(randomImageIndex, index, 1);
            break;
        case 2: img2.src = pic.all[index].path;
            setImage(randomImageIndex, index, 2);
            break;
        case 3: img3.src = pic.all[index].path;
            setImage(randomImageIndex, index, 3);


    }
    console.log('we are here in render images');
    // img1.src = pic.all[answer].path;  
}

renderImgs();

//----------------- handle every click to every correct image-------------------
let points = 0;
let attemps = 10;
let count = 0;
//img1.addEventListener('click', handleImg1);
//img2.addEventListener('click' , handleImg2);
//img3.addEventListener('click',handleImg3);


imgsSection.addEventListener('click',handleEvent)
function handleEvent(events)
{  events.preventDefault();
    if (count ===attemps) { alert(`no more clicks , you have reached ${numOfClicks} click`) }
    else {
        if (events.target.id != 'images') {
            if (events.target.id === img1.id)
                points++

            else if (events.target.id === img2.id)
                points++;
            else
                points++;
        }
        console.log("showImges()" , renderImgs);
        renderImgs();
        count++;
       
    }
 
}



 




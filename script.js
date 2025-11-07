function getRandomImage(){
    const number = Math.floor(Math.random() * 7);
    const imagePath =`./images/omikuji-${number.toString()}.png`;
    return imagePath;
}

function playOmikuji(){
    const resultImg =document.querySelector("#js-result");
    const retryBtn =document.querySelector("#js-retry");
    const drawBtn =document.querySelector("#js-button");

    resultImg.setAttribute("src","./images/omikuji.png");

    drawBtn.style.display ="none";

    const timer = setInterval(function(){
        document.querySelector("#js-result").setAttribute("src",getRandomImage());
    },100);

    setTimeout(function(){
        clearInterval(timer);
        document.querySelector("#js-retry").style.display = "inline-block";
    },3000);
}


document.querySelector("#js-button").addEventListener("click", playOmikuji);

function resetOmikuji(){
        document.querySelector("#js-result").setAttribute("src","./images/omikuji.png");
        document.querySelector("#js-retry").style.display = "none";
        document.querySelector("#js-button").style.display ="inline-block"
}

document.querySelector("#js-retry").addEventListener("click",resetOmikuji);

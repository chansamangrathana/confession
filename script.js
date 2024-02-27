"use strict";

let profileImage = document.querySelector("#profile-picture");

let title = document.querySelector("#title");
let descritpion = document.querySelector("#description");

// select buttons
let yesButton = document.querySelector("#btn-yes");
let noButton = document.querySelector("#btn-no");

profileImage.src =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGHnMrcfmAjXu1mR0n3vhceuk_y-2jag7YjvY9bqvL0Fs2Y_YMeXRae5dVsnpTllQDI8&usqp=CAU";

title.innerHTML = "Moew Confession";
descritpion.innerHTML = "Do you love me?🔪";

// change value in buttons

yesButton.innerHTML = "Yes";
noButton.innerHTML = "No";


let happyCatAudio = new Audio("/assets/happy-happy-happy-cat.mp3");
let sadCatAudio = new Audio("/assets/cry-banana-cat.mp3");

// button yes
yesButton.addEventListener("click", () => {
    // change profile picture
    profileImage.src = "https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif"

    // change title
    title.innerHTML = "I love you too!";
    // change description
    descritpion.innerHTML = "I'm so happy to hear that!";

    // play audio
    happyCatAudio.play();
    // stop audio
    sadCatAudio.pause();
    
    // loop audio
    happyCatAudio.loop = true;

});

let scaleBtnYes = 1;
let scaleBtnNo = 1;

noButton.addEventListener("click", () => {
    profileImage.src = "https://media.tenor.com/UNaQFutfOF0AAAAi/banana-crying-cat.gif"

    // change title
    title.innerHTML = "oh no!";
    // change description
    descritpion.innerHTML = "I'm so sad to hear that!";

    // change button size
    scaleBtnYes += 0.1;
    yesButton.style.transform = `scale(${scaleBtnYes})`;

    scaleBtnNo -= 0.1;
    noButton.style.transform = `scale(${scaleBtnNo})`;

    // stop audio
    happyCatAudio.pause();

    // play audio
    sadCatAudio.play();
    // loop audio
    sadCatAudio.loop = true;
})
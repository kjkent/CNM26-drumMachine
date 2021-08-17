const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const boom = document.getElementById("boom");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tom = document.getElementById("tom");
const tink = document.getElementById("tink");
const scream = document.getElementById("scream");

const playSound = (e) => {
    if(e.code == undefined) {
        let sound = document.querySelector(`audio[data-key-eventcode="${e.currentTarget.getAttribute("data-key-eventcode")}"]`);
        sound.play();
        if (!sound) return;
        sound.currentTime = 0;
        sound.play();
    } else {
        let sound = document.querySelector(`audio[data-key-eventcode="${e.code}"]`);
        sound.play();
        if (!sound) return;
        sound.currentTime = 0;
        sound.play();
    }
}

document.addEventListener("keydown", playSound);
clap.addEventListener("click", playSound);
hihat.addEventListener("click", playSound);
kick.addEventListener("click", playSound);
openhat.addEventListener("click", playSound);
boom.addEventListener("click", playSound);
ride.addEventListener("click", playSound);
snare.addEventListener("click", playSound);
tom.addEventListener("click", playSound);
tink.addEventListener("click", playSound);
scream.addEventListener("click", playSound);
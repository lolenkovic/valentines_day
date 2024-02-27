var dugmeyes = document.getElementById("yes");
var dugmeno = document.getElementById("no");

dugmeyes.addEventListener("click", promeniugif);

function promeniugif() {
    var containerimg = document.querySelector(".imgcontainer");
    var tekst = document.querySelector("h2");
    tekst.innerHTML = "LESGOOOOOOOOOOOOOOOO";


    var gif = document.createElement("img");
    gif.src = "too.gif";
    gif.classList.add("custom-gif");

    containerimg.replaceWith(gif);
}

dugmeno.addEventListener("click", povecajdugme);

var brojac = 0;

function povecajdugme() {
    var trenutnipadding = parseFloat(window.getComputedStyle(dugmeyes).padding);
    var trenutnifont = parseFloat(window.getComputedStyle(dugmeyes).fontSize);
    brojac++;
    if(brojac===6)
    {
        dugmeno.disabled = true;
        dugmeyes.innerHTML= "Come on..";
    }
    var novipadding = trenutnipadding + 4;
    var novifont = trenutnifont + 4;

    dugmeyes.style.padding = novipadding + "px";
    dugmeyes.style.fontSize = novifont + "px";
}

function startConfetti() {
    const container = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      container.appendChild(confetti);
    }
  }
  
function openLetter(){document.getElementById("letter").scrollIntoView({behavior:"smooth"});}
function birthdaySurprise(){document.getElementById("surpriseModal").classList.add("show");burstHearts();}
function closeSurprise(){document.getElementById("surpriseModal").classList.remove("show");}
document.getElementById("surpriseModal").addEventListener("click",function(e){if(e.target===this)closeSurprise();});
function createHeart(){const h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.5?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.fontSize=14+Math.random()*28+"px";h.style.animationDuration=5+Math.random()*7+"s";document.getElementById("hearts-container").appendChild(h);setTimeout(()=>h.remove(),13000);}
setInterval(createHeart,850);
function burstHearts(){for(let i=0;i<30;i++)setTimeout(createHeart,i*70);}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSurprise();});
// ✨ Special birthday sparkles
function createSparkle() {
  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";

  const symbols = ["✦", "✧", "♡", "♥", "✨", "⋆"];
  sparkle.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.bottom = "-20px";
  sparkle.style.fontSize = 12 + Math.random() * 22 + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 4000);
}

// Keep the birthday atmosphere alive
setInterval(createSparkle, 450);

// Extra sparkles when the page opens
window.addEventListener("load", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(createSparkle, i * 150);
  }
});
// ===============================================
// EPIC SIUU-STYLE BIRTHDAY CELEBRATION
// ===============================================

function startCelebration() {

  const intro =
    document.getElementById("intro");

  const celebration =
    document.getElementById("celebration");

  const countdown =
    document.getElementById("countdown");

  const player =
    document.getElementById("player");

  const ball =
    document.getElementById("ball");

  const message =
    document.getElementById("finalMessage");

  const flash =
    document.getElementById("flash");

  const rings =
    document.querySelectorAll(".shockwave");

  const replay =
    document.querySelector(".replay");


  // Hide intro

  intro.style.display = "none";

  celebration.classList.add("active");


  // Reset everything

  countdown.classList.remove("show");

  player.classList.remove("jump");

  ball.classList.remove("fly");

  message.classList.remove("show");

  flash.classList.remove("boom");

  replay.classList.remove("show");

  rings.forEach(ring => {
    ring.classList.remove("expand");
  });


  // Countdown

  let number = 3;


  function countdownStep() {

    countdown.textContent = number;

    countdown.classList.remove("show");

    // Force browser reflow
    void countdown.offsetWidth;

    countdown.classList.add("show");


    number--;


    if (number >= 0) {

      setTimeout(
        countdownStep,
        950
      );

    } else {

      setTimeout(
        launchCelebration,
        500
      );

    }

  }


  countdownStep();


  function launchCelebration() {

    // Player jumps

    player.classList.add("jump");


    // Football flies

    setTimeout(() => {

      ball.classList.add("fly");

    }, 200);


    // Landing impact

    setTimeout(() => {

      flash.classList.add("boom");

      rings.forEach(ring => {
        ring.classList.add("expand");
      });


      // Create explosion

      createExplosion();


      // Screen shake

      celebration.animate(
        [
          {
            transform: "translate(0,0)"
          },

          {
            transform: "translate(-8px,4px)"
          },

          {
            transform: "translate(8px,-4px)"
          },

          {
            transform: "translate(-5px,2px)"
          },

          {
            transform: "translate(5px,-2px)"
          },

          {
            transform: "translate(0,0)"
          }
        ],
        {
          duration: 600
        }
      );


    }, 2500);


    // Birthday reveal

    setTimeout(() => {

      message.classList.add("show");

      createMegaExplosion();

    }, 3000);


    // Replay button

    setTimeout(() => {

      replay.classList.add("show");

    }, 4700);

  }

}


// ===============================================
// PARTICLE EXPLOSION
// ===============================================

function createExplosion() {

  const symbols = [
    "♥",
    "♡",
    "✨",
    "✦",
    "✧",
    "💗",
    "💕",
    "🎉",
    "🎊",
    "⭐"
  ];


  for (let i = 0; i < 100; i++) {

    setTimeout(() => {

      const particle =
        document.createElement("div");

      particle.className = "particle";

      particle.textContent =
        symbols[
          Math.floor(
            Math.random() * symbols.length
          )
        ];


      particle.style.left = "50%";
      particle.style.top = "72%";

      particle.style.fontSize =
        (12 + Math.random() * 30) + "px";


      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        150 + Math.random() * 500;


      particle.style.setProperty(
        "--x",
        Math.cos(angle) * distance + "px"
      );

      particle.style.setProperty(
        "--y",
        Math.sin(angle) * distance + "px"
      );


      document.body.appendChild(
        particle
      );


      setTimeout(() => {
        particle.remove();
      }, 2500);


    }, i * 10);

  }

}


// ===============================================
// SECOND BIG EXPLOSION
// ===============================================

function createMegaExplosion() {

  const symbols = [
    "❤️",
    "💖",
    "💗",
    "✨",
    "⭐",
    "🎉",
    "🎂",
    "💕"
  ];


  for (let i = 0; i < 70; i++) {

    setTimeout(() => {

      const particle =
        document.createElement("div");

      particle.className = "particle";

      particle.textContent =
        symbols[
          Math.floor(
            Math.random() * symbols.length
          )
        ];


      particle.style.left =
        Math.random() * 100 + "vw";

      particle.style.top =
        (60 + Math.random() * 40) + "vh";


      particle.style.fontSize =
        (15 + Math.random() * 25) + "px";


      particle.style.setProperty(
        "--x",
        (Math.random() * 300 - 150) + "px"
      );

      particle.style.setProperty(
        "--y",
        (-200 - Math.random() * 500) + "px"
      );


      document.body.appendChild(
        particle
      );


      setTimeout(() => {
        particle.remove();
      }, 2500);


    }, i * 20);

  }

}

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

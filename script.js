function openLetter(){document.getElementById("letter").scrollIntoView({behavior:"smooth"});}
function birthdaySurprise(){document.getElementById("surpriseModal").classList.add("show");burstHearts();}
function closeSurprise(){document.getElementById("surpriseModal").classList.remove("show");}
document.getElementById("surpriseModal").addEventListener("click",function(e){if(e.target===this)closeSurprise();});
function createHeart(){const h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.5?"♥":"♡";h.style.left=Math.random()*100+"vw";h.style.fontSize=14+Math.random()*28+"px";h.style.animationDuration=5+Math.random()*7+"s";document.getElementById("hearts-container").appendChild(h);setTimeout(()=>h.remove(),13000);}
setInterval(createHeart,850);
function burstHearts(){for(let i=0;i<30;i++)setTimeout(createHeart,i*70);}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSurprise();});

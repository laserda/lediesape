(()=>{"use strict";!async function(){try{const t=await async function(){return(await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")).json()}();let e=document.createElement("div");e.innerHTML=t.join("<br />"),document.getElementsByTagName("body")[0].appendChild(e)}catch(t){console.log("Error",t)}}()})();
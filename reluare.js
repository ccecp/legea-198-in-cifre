"use strict";
(function(){
  function addReplayButtons(){
    document.querySelectorAll(".audio-controls").forEach(group=>{
      const card=group.closest("[data-card]");
      if(!card || group.querySelector("[data-replay]")) return;
      const i=Number(card.dataset.card);
      const btn=document.createElement("button");
      btn.type="button";
      btn.dataset.replay=String(i);
      btn.textContent="↺ Reluare";
      btn.onclick=()=>{
        const keepContinuous=typeof speechContinuous!=="undefined" && typeof speechSection!=="undefined" && speechContinuous && speechSection===i;
        if(typeof speakSection==="function") speakSection(i,keepContinuous);
      };
      const continuous=group.querySelector("[data-continuous]");
      group.insertBefore(btn,continuous||group.firstChild);
    });
  }
  const observer=new MutationObserver(addReplayButtons);
  observer.observe(document.getElementById("app"),{childList:true,subtree:true});
  addReplayButtons();
})();
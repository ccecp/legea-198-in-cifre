"use strict";
const SECTIONS=[{"title":"Duratele nivelurilor de învățământ","article":"Art. 15","facts":["Educația timpurie: 3 luni–6 ani.","Antepreșcolar: 3 luni–3 ani.","Preșcolar: 3–6 ani.","Învățământ primar: 5 ani.","Gimnazial: 4 ani.","Liceal: de regulă 4 ani.","Învățământ postliceal: 1–3 ani.","Liceal tehnologic: diplomă după 3 ani.","Seral/frecvență redusă: 5 ani."]},{"title":"Personalitatea juridică a unităților","article":"Art. 16","facts":["Unitățile de învățământ de stat au personalitate juridică, după caz, cu minimum 500 de elevi ori minimum 500 de elevi, preșcolari și/sau antepreșcolari.","Pragurile sunt: minimum 250 preșcolari și/sau antepreșcolari.","Minimum 200 antepreșcolari.","Minimum 300 elevi pentru unitățile postliceale.","Învățământ special: minimum 50 elevi sau 50 elevi și/sau preșcolari.","Liceele tehnologice cu peste 75% dintre elevi în sistem dual pot funcționa cu efective mai mici."]},{"title":"Frecvența redusă și depășirea vârstei clasei","article":"Art. 17 alin. (2)","facts":["Primar: vârsta clasei depășită cu mai mult de 3 ani.","Gimnazial: vârsta clasei depășită cu mai mult de 4 ani.","Liceal: vârsta clasei depășită cu mai mult de 5 ani.","Reper comparativ: primar 3 ani, gimnazial 4 ani, liceal 5 ani peste vârsta clasei.","Succesiunea numerică de memorat este 3–4–5 ani."]},{"title":"Durata orei și a pauzelor","article":"Art. 19","facts":["Primar: ora de curs este de 45 minute, cu pauză de 15 minute.","După a doua oră, pauza este de 20 minute.","Dacă clasele primare funcționează împreună cu clase superioare: ora este de 50 minute, iar ultimele 5 minute sunt pentru activități recreative.","Gimnazial/liceal/postliceal: 50 minute cu pauză 10 minute.","Învățământ special: 45 minute cu pauză 15 minute, iar după a doua oră pauza este de 30 minute."]},{"title":"Programul educațional „A doua șansă”","article":"Art. 20, raportat la art. 17 alin. (2)","facts":["Programul „A doua șansă” se poate organiza pentru învățământul primar, gimnazial și liceal.","Programul se organizează în regim gratuit și cu durată flexibilă.","Pentru primar, reperul de depășire a vârstei clasei este mai mult de 3 ani.","Pentru gimnazial, reperul de depășire a vârstei clasei este mai mult de 4 ani.","Pentru liceal, reperul de depășire a vârstei clasei este mai mult de 5 ani.","Înscrierea se poate solicita online sau prin depunere la unitatea de învățământ din localitatea de domiciliu ori la cea mai apropiată unitate.","Programul este organizat de unități acreditate/autorizate sau de alte entități în parteneriat cu o unitate acreditată/autorizată."]},{"title":"Consorțiul de învățământ dual","article":"Art. 22","facts":["Acordul de parteneriat pentru consorțiul de învățământ dual are o durată de cel puțin 15 ani.","Îndeplinirea obligațiilor asumate se evaluează o dată la cel mult 5 ani.","Reper de memorare: 15 ani pentru parteneriat și maximum 5 ani între evaluări.","Durata minimă a acordului de parteneriat este de 15 ani.","Intervalul maxim dintre evaluări este de 5 ani."]},{"title":"Efective antepreșcolar și preșcolar","article":"Art. 23 alin. (1) lit. a)-b)","facts":["Antepreșcolar: grupa mică 9 copii, interval 7–11.","Grupa mijlocie 14, interval 10–17.","Grupa mare 16, interval 10–22.","Preșcolar: media 17 preșcolari, minimum 12 și maximum 22.","În situații excepționale, formațiunea poate funcționa cu cel mult 2 beneficiari sub minim și cel mult 4 peste maxim."]},{"title":"Efective primar, gimnazial, liceal, postliceal","article":"Art. 23 alin. (1)","facts":["Primar: media 18, minimum 12, maximum 24.","Gimnazial: media 20, minimum 12, maximum 28.","Liceal, inclusiv dual: media 23, minimum 16, maximum 30.","Postliceal: media 26, minimum 20, maximum 32.","Reper comparativ al mediilor: 18 la primar, 20 la gimnazial, 23 la liceal și 26 la postliceal."]},{"title":"Efective speciale, sport/artă și practică","article":"Art. 23 alin. (1)","facts":["Sport și artă: clasa are media 16, minimum 8, maximum 24 și poate avea maximum 4 grupe.","Grupa are media 7, minimum 4, maximum 10.","Instruirea practică: grupe de minimum 8 și maximum 15 elevi.","Liceal tehnologic: maximum 3 grupe cu calificări diferite.","Pentru fiecare copil/elev cu CES integrat în învățământul de masă, efectivul maxim al grupei/clasei se diminuează cu 3."]},{"title":"Minorități și efective","article":"Art. 23 alin. (1^3), (4), (6)","facts":["Pentru unitățile vizate de art. 23 alin. (1^3), pragul pentru personalitate juridică este echivalent cu 60% din numărul prevăzut la art. 16 alin. (1).","Formațiunile de studiu prevăzute la art. 23 alin. (1^3) au efective echivalente cu 80% din numărul stabilit la alin. (1).","În situații excepționale: cel mult 2 beneficiari sub minim și cel mult 4 peste maxim.","În cazul prevăzut pentru minorități, maximul nu poate fi depășit cu mai mult de 2.","Reper comparativ: 60% pentru pragul de personalitate juridică și 80% pentru efectivele formațiunilor vizate."]},{"title":"Clasa pregătitoare","article":"Art. 31","facts":["Înscrierea standard: copilul împlinește 6 ani până la 31 august.","În cazuri justificate, înscrierea în clasa pregătitoare poate fi amânată cu maximum 1 an.","Copiii cu CES pot fi înscriși în clasa pregătitoare la 6–8 ani.","Pentru învățământul special, reperul este 31 decembrie.","Reper sintetic: 6 ani până la 31 august; pentru situația specială indicată de lege, 31 decembrie."]},{"title":"Filiera liceală și învățământul dual","article":"Art. 33 și 35","facts":["Unitatea funcționează cu respectarea principiului asumării filierei dacă școlarizează minimum 2/3 dintre elevi corespunzător filierei specifice.","Finalizarea a cel puțin 3 ani în filiera tehnologică sau vocațională poate conferi calificare de nivel 3.","În tehnologic special sunt prevăzuți 4 ani.","Elevii care au împlinit 16 ani pot încheia contract individual de muncă cu timp parțial.","Contractul de parteneriat acoperă cel puțin perioada celor 3 sau 4 ani de studiu."]},{"title":"Învățământ militar și persoane private de libertate","article":"Art. 40 și 56","facts":["Consiliul de conducere din unitățile militare are maximum 15 membri, iar directorul poate fi ajutat de cel mult 2 locțiitori/directori adjuncți.","Clasele organizate cu persoane private de libertate pot avea 8–12 elevi.","În cazuri justificate, se pot constitui grupe de 4–6 elevi, iar efectivul poate fi majorat, fără a depăși 20 elevi.","În unitățile militare, directorul poate fi ajutat de cel mult 2 locțiitori/directori adjuncți.","Pentru grupele constituite în cazuri justificate cu persoane private de libertate, intervalul este 4–6 elevi."]},{"title":"Siguranță, CES și Școala din spital","article":"Art. 64–71","facts":["Planul național pentru siguranța în învățământul preuniversitar: termen 12 luni.","Planul național de combatere a violenței școlare: 6 luni.","Școala din spital: reperul este o spitalizare mai mare de 4 săptămâni.","Sistemul de sprijin are 4 niveluri.","Nivel II: reducere curriculară de cel mult 20%.","Nivel III: 2–4 ore/săptămână de sprijin și cel mult 70% din activități în spații speciale.","Școlarizarea elevilor cu CES poate fi prelungită cu până la 3 ani."]},{"title":"Programe, reduceri și limbi moderne","article":"Art. 77, 83, 88, 92","facts":["Programul național «Masă sănătoasă»: cel puțin 1.000.000 beneficiari direcți.","Hotărârea de Guvern: termen 6 luni.","Voucher cultural: 250 lei.","Reducerea pentru acces la manifestări culturale și sportive organizate de instituții publice: minimum 75%.","Limba semnelor române: cel puțin 2 ore/săptămână.","Intensiv: cel puțin 2 ore în plus.","Bilingv: cel puțin 3 ore în plus."]},{"title":"Admitere, bacalaureat și evaluări","article":"Art. 96, 101, 103, 106 și art. 248","facts":["În gimnazial, liceal și postliceal, evaluarea se exprimă prin note de la 1 la 10.","Prevederea care permitea concurs propriu de admitere în clasa a IX-a pentru maximum 50% din locuri a fost abrogată pentru anul școlar 2026–2027.","Locurile la clasa a IX-a se atribuie în condițiile legii, fără concursul suplimentar prevăzut anterior la art. 101 alin. (2).","Probele bacalaureatului pot fi susținute fără taxă de cel mult 3 ori.","Rezultatele evaluărilor scrise se comunică în maximum 15 zile lucrătoare.","Evaluările și examenele naționale sunt prevăzute a fi integral standardizate și administrate digital începând cu anul școlar 2027–2028."]},{"title":"Sancțiuni elevi și bursă pentru mame minore","article":"Art. 107 și 108¹","facts":["Suspendarea elevului se poate realiza pentru maximum 5 zile lucrătoare.","Un elev nu poate fi suspendat, într-un an școlar, pentru mai mult de 15 zile lucrătoare.","Mamele minore reintegrate beneficiază de bursă lunară de 700 lei.","Pentru situațiile medicale din «Școala din Spital» apare reperul de peste 4 săptămâni.","Reper comparativ pentru suspendare: maximum 5 zile lucrătoare pentru o măsură și maximum 15 zile lucrătoare într-un an școlar."]},{"title":"Consiliul de administrație","article":"Art. 128","facts":["Consiliul de administrație poate avea 7, 9 sau 11 membri.","Cvorumurile sunt, respectiv, 4, 5 și 6 membri.","CA cu 7 membri: director, 2 cadre didactice, 2 părinți, primar/reprezentant, 1 reprezentant al consiliului local.","CA cu 9: director, 3 cadre didactice, primar/reprezentant, 2 reprezentanți CL și 2 părinți.","CA cu 11 membri: director, 4 cadre didactice, primar/reprezentant, 2 reprezentanți CL și 3 părinți.","Reprezentantul elevilor cu drept de vot trebuie să fi împlinit 18 ani."]},{"title":"Digitalizare și termene administrative","article":"Art. 132–133","facts":["Strategia națională pentru digitalizarea educației: termen 12 luni.","Lista platformelor educaționale digitale: maximum 120 zile.","Calendarul operaționalizării catalogului electronic: maximum 180 zile.","Interoperabilitatea datelor din sistemele de management al școlarității: maximum 36 luni.","Reper comparativ al termenelor: 12 luni, 120 de zile, 180 de zile și 36 de luni."]},{"title":"Finanțare, patrimoniu și amenzi","article":"Art. 134, 139, 144, 146, 148","facts":["Finanțarea cheltuielilor pentru educație reprezintă anual minimum 15% din cheltuielile bugetului general consolidat.","Studiile de impact ale programelor naționale se realizează din 3 în 3 ani.","Pentru «Școala din spital», costul standard este majorat cu cel puțin 100%.","Anumite componente prevăzute la art. 139 reprezintă minimum 20% din costul standard.","Schimbarea nelegală a destinației bazei materiale poate fi sancționată cu închisoare de la 6 luni la 5 ani sau amendă.","Anumite contravenții prevăzute la art. 148 au amendă 1.000–5.000 lei."]},{"title":"Cariera didactică și formarea","article":"Art. 168–191","facts":["Comisia pentru inaptitudine psihocomportamentală are 3–5 membri.","Pentru Corpul de mentorat se cer cel puțin gradul didactic II și minimum 5 ani experiență.","Gradul didactic II: minimum 4 ani de la licențiere.","Gradul I: minimum 4 ani de la gradul II.","Repetarea examenului: după minimum 2 ani școlari.","Formare continuă: cel puțin o dată la 2 ani.","Detașare: maximum 5 ani școlari consecutivi.","Concediu fără plată: 1 an școlar, o dată la 10 ani consecutivi."]},{"title":"Concursul și mandatul directorului","article":"Art. 196 și 203","facts":["Pentru director/director adjunct este necesară o vechime în învățământ de cel puțin 5 ani.","Mandatul directorului și al directorului adjunct este de 4 ani.","Pentru promovarea la interviu este necesar minimum 7 la proba scrisă/proiectul managerial, după caz.","Punctajul la interviu trebuie să fie minimum 7.","Reper sintetic: minimum 5 ani vechime, mandat de 4 ani și pragul 7 pentru promovare."]},{"title":"Conducerea structurilor județene","article":"Art. 199, 200, 202","facts":["Director general/director general adjunct DJIP/DMBIP: minimum 10 ani vechime în învățământ și mandat de 4 ani.","Contractul de management este pe 4 ani.","Funcțiile de îndrumare și control sunt numite pentru 4 ani.","Directorul unui birou județean ARACIIP, respectiv directorul CCD: minimum 10 ani vechime în învățământ.","Reper sintetic: minimum 10 ani vechime și mandat de 4 ani pentru funcțiile vizate."]},{"title":"Norma didactică și servicii de sprijin","article":"Art. 207–208","facts":["Activitatea personalului didactic de predare: 8 ore/zi și 40 ore/săptămână.","Pentru profesorii din gimnazial, liceal și postliceal apare norma de 18 ore/săptămână în forma indicată de text.","Pregătirea remedială: obligatoriu 2 ore/săptămână.","Pentru remedial/excelență pot fi alocate până la 4 ore.","Mentoratul remunerat este echivalent cu 4 ore/săptămână.","Profesor consilier și profesor logoped: maximum 500 elevi, 500 elevi și preșcolari sau 300 preșcolari.","Modulul pentru o nouă disciplină: minimum 90 credite transferabile."]},{"title":"Răspunderea disciplinară a personalului","article":"Art. 210–215","facts":["Reducerea salariului poate fi de până la 15% pe o perioadă de 1–6 luni.","Suspendarea unor drepturi poate ajunge la 3 ani.","Comisia de cercetare disciplinară: 3–5 membri.","Sancțiunile se aprobă de cel puțin 2/3 din CA.","Convocarea la audiere se face cu minimum 48 ore înainte.","Cercetarea și comunicarea deciziei: cel mult 30 zile, dar nu mai târziu de 6 luni de la faptă.","Contestația: 15 zile.","După desfacerea disciplinară, interdicția este de 7 ani școlari."]},{"title":"Recompense, concedii și pensionare","article":"Art. 217–229","facts":["Gradația de merit: 5 ani.","Diploma «Gheorghe Lazăr»: 20%, 15%, 10% din suma salariilor de bază pe ultimele 12 luni.","Diploma de excelență: 20%.","Concediul pentru redactarea tezei de doctorat/lucrări: 6 luni, o singură dată.","La art. 227 apare durata totală maximă de 3 ani într-un interval de 7 ani.","Pensionare: reper 65 ani.","Apar termene de 30, 15 și 5 zile, în funcție de situație.","Reîncadrarea/menținerea este posibilă până la 5 ani peste vârsta standard, în condițiile legii."]},{"title":"Acreditare și evaluare periodică","article":"Art. 241, 243, 246, 247","facts":["Cererea de acreditare se depune în maximum 2 ani de la absolvirea primei promoții.","Unitățile de învățământ acreditate se supun evaluării externe obligatorii din 5 în 5 ani.","Pentru curriculum străin și pentru unitățile extrașcolare apar proceduri/evaluări periodice din 5 în 5 ani.","Reper de memorare: maximum 2 ani pentru depunerea cererii de acreditare.","Reper de memorare: evaluarea externă obligatorie se realizează din 5 în 5 ani."]},{"title":"Dispoziții tranzitorii și definiții","article":"Art. 248–251","facts":["Reorganizarea creșelor: 3 ani școlari.","Creșele cu minimum 120 antepreșcolari se pot reorganiza ca unități cu personalitate juridică, în condițiile legii.","În art. 248 apar termene de 90 zile, 6 luni, 3 luni și 2 ani școlari, după caz.","Asumarea filierei: minimum 2/3 dintre elevi.","Abandonul școlar presupune imposibilitatea finalizării a 2 ani școlari succesivi.","Vârsta clasei pornește de la înscrierea în clasa pregătitoare la 6 ani."]}];
const app=document.getElementById("app");
const search=document.getElementById("search");
let view="theory",qIndex=0,score=0,answered={},flash=0,show=false;
let quizStartedAt=null,quizTimer=null,totalQuizTime=0;
function elapsedTime(){return quizStartedAt===null?totalQuizTime:Math.max(0,performance.now()-quizStartedAt);}
function formatTime(ms){const s=Math.floor(ms/1000);return [Math.floor(s/3600),Math.floor(s/60)%60,s%60].map(n=>String(n).padStart(2,"0")).join(":");}
function updateQuizTime(){const label=document.getElementById("quizElapsed");if(label)label.textContent="Timp scurs: "+formatTime(elapsedTime());}
const ICONS=["0but.gif","1but.gif","2but.gif","3but.gif","4but.gif","5but.gif","6but.gif","7but.gif","8but.gif","9but.gif","abut.gif","bbut.gif","cbut.gif","dbut.gif","ebut.gif","fbut.gif","gbut.gif","hbut.gif","ibut.gif","jbut.gif","kbut.gif","lbut.gif","mbut.gif","nbut.gif","obut.gif","pbut.gif","qbut.gif","rbut.gif","sbut.gif","tbut.gif","ubut.gif","vbut.gif","wbut.gif","xbut.gif","ybut.gif","Zbut.gif"];
const icon=i=>ICONS[Math.abs(Number(i)||0)%ICONS.length];
const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function nums(text){return [...text.matchAll(/\d+(?:[.,]\d+)?/g)].map(m=>({v:m[0],i:m.index}));}
function variants(fact){
  const out=[];
  const first=fact.match(/\d+(?:[.,]\d+)?/);
  if(!first) return [fact+" — variantă modificată 1",fact+" — variantă modificată 2",fact+" — variantă modificată 3"];
  const raw=first[0];
  const n=Number(raw.replace(",","."));
  const candidates=[];
  if(n>=100000) candidates.push(Math.max(0,n-100000),n+100000,Math.max(0,n-250000));
  else if(n>=1000) candidates.push(Math.max(0,n-1000),n+1000,Math.max(0,n-500));
  else if(n>=100) candidates.push(Math.max(0,n-100),n+100,Math.max(0,n-50));
  else if(n>=50) candidates.push(Math.max(0,n-10),n+10,Math.max(0,n-20));
  else if(n>=20) candidates.push(n-5,n+5,n-10);
  else if(n>=10) candidates.push(n-2,n+2,n-5);
  else candidates.push(Math.max(0,n-1),n+1,n+2);
  for(const v of candidates){
    const shown=String(v).replace(".",",");
    const s=fact.replace(raw,shown);
    if(s!==fact&&!out.includes(s)) out.push(s);
  }
  while(out.length<3) out.push(fact.replace(raw,String(Math.max(0,n+out.length+1))));
  return out.slice(0,3);
}
function buildExamPrompt(title,fi){
  const topic=title.toLowerCase();
  if(fi===0){
    if(topic.includes("efective")) return "Care dintre următoarele variante prezintă corect efectivul prevăzut?";
    if(topic.includes("durata")||topic.includes("duratele")) return "Care dintre următoarele variante prezintă corect durata prevăzută?";
    if(topic.includes("personalitatea juridică")) return "Care este pragul numeric corect pentru dobândirea personalității juridice?";
    if(topic.includes("frecvența redusă")) return "Care este depășirea de vârstă prevăzută pentru această situație?";
    if(topic.includes("clasa pregătitoare")) return "Care este reperul de vârstă sau de dată corect?";
    if(topic.includes("consiliul de administrație")) return "Care este configurația numerică corectă a consiliului de administrație?";
    return "Care dintre următoarele variante conține reperul numeric corect?";
  }
  if(fi===1){
    if(topic.includes("efective")) return "Un director verifică încadrarea unei formațiuni de studiu. Ce valori trebuie să aibă în vedere?";
    if(topic.includes("digitalizare")) return "Pentru respectarea termenelor de digitalizare, care variantă este corectă?";
    if(topic.includes("răspunderea disciplinară")) return "Într-o procedură disciplinară, care dintre următoarele repere numerice este corect?";
    if(topic.includes("concursul și mandatul directorului")) return "Pentru concursul și exercitarea mandatului de director, care reper numeric este corect?";
    return "În aplicarea acestei prevederi, ce reper numeric trebuie respectat?";
  }
  if(topic.includes("efective")) return "Care asociere dintre limitele numerice este corectă?";
  if(topic.includes("programe")||topic.includes("finanțare")) return "Care asociere dintre sumă, procent sau termen este corectă?";
  if(topic.includes("admitere")||topic.includes("bacalaureat")) return "Care dintre următoarele asocieri numerice este corectă?";
  if(topic.includes("recompense")||topic.includes("pensionare")) return "Care dintre următoarele asocieri de valori este corectă?";
  return "Care dintre următoarele asocieri numerice este corectă?";
}
const QUESTIONS=[];

SECTIONS.forEach((s,si)=>s.facts.forEach((fact,fi)=>{
  let opts=[fact,...variants(fact)];
  const rot=(si+fi)%4; opts=opts.slice(rot).concat(opts.slice(0,rot));
  QUESTIONS.push({section:si,article:s.article,title:s.title,prompt:buildExamPrompt(s.title,fi),options:opts,correct:opts.indexOf(fact),explanation:fact});
}));
function setView(v){
  if(v==="quiz")resetQuiz();
  view=v;
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===v));
  search.style.display=v==="theory"?"block":"none";
  render();
}
document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>setView(b.dataset.view));
function theory(){
  const term=(search.value||"").toLowerCase().trim();
  const items=SECTIONS.map((s,i)=>({s,i})).filter(({s})=>!term||(`${s.title} ${s.article} ${s.facts.join(" ")}`).toLowerCase().includes(term));
  app.innerHTML=`<div class="stats"><div class="stat"><strong>${SECTIONS.length}</strong>aspecte numerice</div><div class="stat"><strong>${QUESTIONS.length}</strong>itemi</div><div class="stat"><strong>≥5</strong>repere/aspect</div></div><div class="grid">${items.map(({s,i})=>`<article class="card"><div class="card-head"><img src="${icon(i)}" alt=""><div><div class="article">${esc(s.article)}</div><h2>${esc(s.title)}</h2></div></div><ol class="facts">${s.facts.map(f=>`<li>${esc(f)}</li>`).join("")}</ol></article>`).join("")}</div>`;
}
search.oninput=()=>view==="theory"&&theory();
function quiz(){
  const q=QUESTIONS[qIndex],sec=SECTIONS[q.section],done=answered[qIndex];
  app.innerHTML=`<div class="quiz-wrap"><div class="stats"><div class="stat"><strong>${qIndex+1}/${QUESTIONS.length}</strong>item</div><div class="stat"><strong>${score}</strong>corecte</div><div class="stat"><strong>${QUESTIONS.length}</strong>repere numerice</div></div><div class="progress"><span style="width:${((qIndex+1)/QUESTIONS.length)*100}%"></span></div><div class="question"><div class="q-top"><img src="${icon(q.section)}" alt=""><div><div class="question-topic">${esc(q.title||sec.title)}</div><h2>${esc(q.prompt)}</h2></div></div>${q.options.map((o,i)=>`<button class="option ${done!==undefined?(i===q.correct?"correct":(i===done&&done!==q.correct?"wrong":"")):""}" data-opt="${i}" ${done!==undefined?"disabled":""}>${"ABCD"[i]}. ${esc(o)}</button>`).join("")}<div id="fb">${done!==undefined?`<div class="feedback"><strong>${done===q.correct?"Corect.":"Răspuns corect:"}</strong><br>${esc(q.explanation)}<div class="article-source">Sursa: ${esc(q.article)}</div></div>`:""}</div><div class="navq"><button data-prev ${qIndex===0?"disabled":""}>← Înapoi</button><button data-next>${qIndex===QUESTIONS.length-1?"Final":"Următorul →"}</button></div></div></div>`;
  const restart=document.createElement("button");
  restart.type="button";
  restart.className="reset";
  restart.textContent="Reia de la început";
  restart.onclick=()=>{resetQuiz();quiz();};
  app.querySelector(".navq").appendChild(restart);
  const timer=document.createElement("p");
  timer.id="quizElapsed";
  timer.className="quiz-time";
  app.querySelector(".quiz-wrap").prepend(timer);
  updateQuizTime();
  document.querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>answer(Number(b.dataset.opt)));
  document.querySelector("[data-prev]").onclick=()=>{if(qIndex>0){qIndex--;quiz();}};
  document.querySelector("[data-next]").onclick=()=>{if(qIndex<QUESTIONS.length-1){qIndex++;quiz();}else finish();};
}
function answer(i){
  if(answered[qIndex]!==undefined)return;
  answered[qIndex]=i;
  if(i===QUESTIONS[qIndex].correct)score++;
  quiz();
}
function resetQuiz(){
  answered={};score=0;qIndex=0;totalQuizTime=0;
  quizStartedAt=performance.now();
  clearInterval(quizTimer);
  quizTimer=setInterval(updateQuizTime,1000);
}
function finish(){
  totalQuizTime=elapsedTime();quizStartedAt=null;clearInterval(quizTimer);quizTimer=null;
  const pct=Math.round(score/QUESTIONS.length*100);
  app.innerHTML=`<div class="flash"><img src="${icon(pct)}" alt=""><h2>Rezultat</h2><div class="big-number">${score}/${QUESTIONS.length} · ${pct}%</div><p class="quiz-time"><strong>Timp total: ${formatTime(totalQuizTime)}</strong></p><p>Explicația corectă a fost afișată după fiecare răspuns.</p><button class="reset" id="reset">Reia de la început</button></div>`;
  document.getElementById("reset").onclick=()=>{resetQuiz();quiz();};
}
function review(){
  const s=SECTIONS[flash];
  app.innerHTML=`<div class="flash"><img src="${icon(flash)}" alt=""><div class="article">${esc(s.article)}</div><h2>${esc(s.title)}</h2>${show?`<ol class="facts">${s.facts.map(f=>`<li>${esc(f)}</li>`).join("")}</ol>`:`<p>Spune din memorie cifrele, apoi verifică.</p>`}<button id="flip">${show?"Ascunde":"Arată cifrele"}</button><button id="prevF">←</button><button id="nextF">→</button><div>${flash+1}/${SECTIONS.length}</div></div>`;
  document.getElementById("flip").onclick=()=>{show=!show;review();};
  document.getElementById("prevF").onclick=()=>{flash=(flash-1+SECTIONS.length)%SECTIONS.length;show=false;review();};
  document.getElementById("nextF").onclick=()=>{flash=(flash+1)%SECTIONS.length;show=false;review();};
}
function render(){if(view==="theory")theory();else if(view==="quiz")quiz();else review();}
try{localStorage.removeItem("198-cifre-progress");}catch(e){}
render();


// Lectură continuă în română, independentă de teste și de căutare.
(() => {
  const panel = document.createElement('section');
  panel.className = 'audio-player';
  panel.setAttribute('aria-label', 'Player audio în limba română');
  panel.innerHTML = `<h2>Ascultă materialul în limba română</h2>
    <p>Lectură integrală, cu trecere automată la tema următoare.</p>
    <div class="audio-controls"><button type="button" id="audioPlay">▶ Redare</button><button type="button" id="audioPause" disabled>⏸ Pauză</button><button type="button" id="audioRestart">↺ De la început</button></div>
    <div class="audio-settings"><label>Tema <select id="audioTopic"></select></label><label>Viteză <select id="audioRate"><option value="0.8">0,8×</option><option value="1" selected>1×</option><option value="1.15">1,15×</option><option value="1.3">1,3×</option></select></label><label>Voce în română <select id="audioVoice"></select></label></div>
    <p id="audioStatus" role="status" aria-live="polite">Pregătit pentru redare.</p><progress id="audioProgress" value="0" max="1" aria-label="Progresul lecturii"></progress><p id="audioText" class="audio-text"></p>`;
  document.querySelector('main').prepend(panel);
  const style = document.createElement('style');
  style.textContent = `.audio-player{margin:20px;padding:20px;background:#fff;border:1px solid #d8c8e5;border-radius:20px}.audio-player h2{margin:0;font-size:1.25rem;color:#5e337a}.audio-player p{margin:8px 0}.audio-controls,.audio-settings{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}.audio-controls button{padding:11px 16px;border:0;border-radius:10px;background:#6a3b7d;color:#fff;font:inherit;font-weight:700;cursor:pointer}.audio-controls button:disabled{opacity:.45;cursor:default}.audio-settings label{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.audio-settings select{padding:8px;border:1px solid #d8c8e5;border-radius:8px;max-width:100%;font:inherit}.audio-settings label:first-child{flex:1 1 100%}.audio-settings label:first-child select{flex:1;min-width:0}.audio-player progress{width:100%;height:12px;accent-color:#6a3b7d}.audio-text{padding:12px;background:#f5eff9;border-radius:10px;min-height:48px}.audio-player button:focus-visible,.audio-player select:focus-visible{outline:3px solid #e8b72c;outline-offset:3px}@media(max-width:650px){.audio-player{margin:12px;padding:15px}.audio-settings label{width:100%}}`;
  document.head.append(style);
  const el = id => document.getElementById(id);
  const play = el('audioPlay'), pause = el('audioPause'), restart = el('audioRestart');
  const topic = el('audioTopic'), rate = el('audioRate'), voiceSelect = el('audioVoice');
  const status = el('audioStatus'), progress = el('audioProgress'), text = el('audioText');
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    status.textContent = 'Acest browser nu permite lectura audio. Deschide pagina într-un browser care acceptă sinteza vocală.';
    [play,pause,restart,topic,rate,voiceSelect].forEach(e => e.disabled = true);
    return;
  }
  const synth = window.speechSynthesis, parts = [], starts = [];
  // Expand only the spoken copy; the study text stays unchanged.
  function spoken(value) {
    return value.replace(/\bArt\./gi,'Articolul').replace(/\bart\./g,'articolul').replace(/\balin\./g,'alineatul')
      .replace(/\b2\/3\b/g,'două treimi').replace(/\b1\/3\b/g,'o treime')
      .replace(/(\d)[–-](\d)/g,'$1 până la $2').replace(/%/g,' la sută')
      .replace(/\bCA\b/g,'consiliul de administrație').replace(/\bCES\b/g,'cerințe educaționale speciale')
      .replace(/ore\/zi/g,'ore pe zi').replace(/ore\/săptămână/g,'ore pe săptămână').replace(/note\/an/g,'note pe an');
  }
  function add(value, section) {
    // Short utterances avoid long-text cutoffs in browser speech engines.
    const words = spoken(value).split(/\s+/); let chunk = '';
    for (const word of words) { if (chunk.length + word.length > 190 && chunk) { parts.push({text:chunk,section});chunk=''; } chunk += (chunk?' ':'')+word; }
    if (chunk) parts.push({text:chunk,section});
  }
  SECTIONS.forEach((s,i) => {
    starts.push(parts.length);
    const option = document.createElement('option');option.value=i;option.textContent=`${i+1}. ${s.title}`;topic.append(option);
    add(`Tema ${i+1}. ${s.title}. ${s.article}.`, i);
    s.facts.forEach(f => add(f, i));
  });
  let voices = [], index = 0, active = false, token = 0, utterance = null;
  progress.max = parts.length;
  function loadVoices() {
    const selected=voiceSelect.value;
    voices=synth.getVoices().filter(v=>/^ro(?:[-_]|$)/i.test(v.lang));
    voiceSelect.replaceChildren();
    const fallback=document.createElement('option');fallback.value='';fallback.textContent=voices.length?'Voce română automată':'Română — vocea disponibilă în browser';voiceSelect.append(fallback);
    voices.forEach(v=>{const o=document.createElement('option');o.value=v.voiceURI;o.textContent=v.name;voiceSelect.append(o);});
    if(voices.some(v=>v.voiceURI===selected))voiceSelect.value=selected;
  }
  loadVoices();synth.addEventListener('voiceschanged',loadVoices);
  function buttons(){play.disabled=active;pause.disabled=!active;play.textContent=index>0&&index<parts.length?'▶ Continuă':'▶ Redare';}
  function cancel(){token++;active=false;synth.cancel();utterance=null;buttons();}
  function read(){
    if(!active)return;
    if(index>=parts.length){active=false;progress.value=parts.length;status.textContent='Lectură încheiată. Poți relua materialul de la început.';buttons();return;}
    const part=parts[index], current=token;
    topic.value=part.section;text.textContent=part.text;progress.value=index;
    status.textContent=`Se citește tema ${part.section+1} din ${SECTIONS.length}: ${SECTIONS[part.section].title}`;
    utterance=new SpeechSynthesisUtterance(part.text);utterance.lang='ro-RO';utterance.rate=Number(rate.value);utterance.volume=1;
    const voice=voices.find(v=>v.voiceURI===voiceSelect.value)||voices[0];if(voice)utterance.voice=voice;
    utterance.onend=()=>{if(current!==token||!active)return;index++;read();};
    utterance.onerror=event=>{if(current!==token||!active)return;active=false;buttons();status.textContent='Redarea s-a oprit. Apasă Continuă pentru a reîncerca. Verifică dacă dispozitivul are o voce în limba română.';};
    synth.speak(utterance);buttons();
  }
  function start(){if(index>=parts.length)index=0;cancel();active=true;read();}
  play.onclick=start;
  pause.onclick=()=>{cancel();status.textContent='Pauză. Continuă reia fraza curentă.';};
  restart.onclick=()=>{cancel();index=0;progress.value=0;start();};
  topic.onchange=()=>{const was=active;cancel();index=starts[Number(topic.value)];progress.value=index;text.textContent=parts[index].text;status.textContent='Tema selectată. Apasă Redare pentru a asculta.';if(was)start();};
  [rate,voiceSelect].forEach(control=>control.onchange=()=>{if(active)start();});
  window.addEventListener('pagehide',cancel);
})();

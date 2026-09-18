// 문서 목록과 입력 항목을 정의합니다. 모든 데이터는 브라우저에 포함되어 API가 필요 없습니다.
const docs=[
{id:"resignation",name:"사직서",cat:"직장",desc:"퇴직 의사를 공식적으로 전달하는 문서",fields:[["name","성명","text"],["company","회사명","text"],["department","소속/부서","text"],["position","직급","text"],["date","퇴직 예정일","date"],["reason","사직 사유","textarea"]]},
{id:"power",name:"위임장",cat:"생활",desc:"업무나 권한을 다른 사람에게 위임할 때 사용하는 문서",fields:[["grantor","위임인 성명","text"],["grantee","수임인 성명","text"],["purpose","위임 내용","textarea"],["date","작성일","date"],["phone","연락처","tel"]]},
{id:"loan",name:"차용증",cat:"금전",desc:"금전이나 물품을 빌린 사실과 조건을 기록하는 문서",fields:[["lender","채권자","text"],["borrower","채무자","text"],["amount","차용 금액","number"],["due","변제 예정일","date"],["interest","이자 조건","text"],["date","작성일","date"]]},
{id:"agreement",name:"각서",cat:"생활",desc:"특정 사항을 이행하겠다는 의사를 기록하는 문서",fields:[["writer","작성자","text"],["title","제목","text"],["content","각서 내용","textarea"],["date","작성일","date"]]},
{id:"consent",name:"동의서",cat:"생활",desc:"특정 사항에 대한 동의 의사를 확인하는 문서",fields:[["name","성명","text"],["subject","동의 사항","text"],["content","동의 내용","textarea"],["date","작성일","date"]]},
{id:"report",name:"경위서",cat:"직장",desc:"사건이나 업무의 발생 경위를 정리하는 문서",fields:[["name","작성자","text"],["department","소속/부서","text"],["title","사건명","text"],["content","경위 내용","textarea"],["date","작성일","date"]]},
{id:"reason",name:"사유서",cat:"직장",desc:"결근·지각 등 특정 사유를 설명하는 문서",fields:[["name","성명","text"],["department","소속/부서","text"],["reason","사유","textarea"],["date","작성일","date"]]},
{id:"meeting",name:"회의록",cat:"업무",desc:"회의 내용과 결정 사항을 기록하는 문서",fields:[["title","회의명","text"],["date","회의일","date"],["attendees","참석자","text"],["agenda","회의 안건","textarea"],["result","결정 사항","textarea"]]},
{id:"worklog",name:"업무일지",cat:"업무",desc:"하루 업무 내용과 결과를 정리하는 문서",fields:[["name","작성자","text"],["date","작성일","date"],["today","오늘의 업무","textarea"],["result","업무 결과","textarea"],["tomorrow","내일의 업무","textarea"]]}
];
let category="전체";
const cards=document.querySelector("#cards"),search=document.querySelector("#search"),editor=document.querySelector("#editor");
const cats=["전체",...new Set(docs.map(d=>d.cat))];
document.querySelector("#categories").innerHTML=cats.map(c=>`<button class="cat ${c==="전체"?"active":""}" data-cat="${c}">${c}</button>`).join("");
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{category=b.dataset.cat;document.querySelectorAll(".cat").forEach(x=>x.classList.toggle("active",x===b));render();});
search.oninput=render;
function render(){const q=search.value.trim();const list=docs.filter(d=>(category==="전체"||d.cat===category)&&(!q||d.name.includes(q)||d.desc.includes(q)));cards.innerHTML=list.map(d=>`<article class="card" onclick="openDoc('${d.id}')"><span class="badge">${d.cat}</span><h2>${d.name}</h2><p>${d.desc}</p></article>`).join("")||"<p>찾는 문서가 없습니다.</p>";}
function openDoc(id){const d=docs.find(x=>x.id===id);editor.classList.remove("hidden");editor.innerHTML=`<h2>${d.name}</h2><p class="desc">${d.desc}</p><div class="formgrid">${d.fields.map(f=>`<div class="field ${f[2]==="textarea"?"full":""}"><label for="${f[0]}">${f[1]}</label>${f[2]==="textarea"?`<textarea id="${f[0]}" placeholder="${f[1]}을 입력하세요"></textarea>`:`<input id="${f[0]}" type="${f[2]}" placeholder="${f[1]}을 입력하세요">`}</div>`).join("")}</div><div class="actions"><button class="btn primary" onclick="printDoc('${id}')">문서 만들기 / 인쇄</button><button class="btn secondary" onclick="closeDoc()">닫기</button></div>`;editor.scrollIntoView({behavior:"smooth",block:"start"});}
function closeDoc(){editor.classList.add("hidden");editor.innerHTML="";}
function printDoc(id){const d=docs.find(x=>x.id===id);const values={};d.fields.forEach(f=>values[f[0]]=document.getElementById(f[0]).value||"");const body=d.fields.map(f=>`<p><b>${f[1]}</b><br>${escapeHtml(values[f[0]]).replace(/\n/g,"<br>")}</p>`).join("");const w=window.open("","_blank");w.document.write(`<!doctype html><html lang="ko"><head><meta charset="UTF-8"><title>${d.name}</title><style>body{font-family:Arial,'Noto Sans KR',sans-serif;max-width:760px;margin:70px auto;line-height:1.8;color:#111}h1{text-align:center;margin-bottom:50px}p{margin:0 0 22px}b{display:inline-block;min-width:110px}</style></head><body><h1>${d.name}</h1>${body}<p style="text-align:right;margin-top:60px">${new Date().toLocaleDateString("ko-KR")}</p><script>window.onload=()=>window.print()<\\/script></body></html>`);w.document.close();}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
render();
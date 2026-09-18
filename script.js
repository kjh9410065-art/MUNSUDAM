// 문서담의 문서 데이터입니다. 외부 API나 서버 없이 브라우저에서 직접 사용합니다.
const docs = [
  {id:"resignation", name:"사직서", cat:"직장", desc:"퇴직 의사를 공식적으로 전달하는 문서", keywords:"퇴직 사직 퇴사 resignation", fields:[["name","성명","text"],["company","회사명","text"],["department","소속/부서","text"],["position","직급","text"],["date","퇴직 예정일","date"],["reason","사직 사유","textarea"]]},
  {id:"power", name:"위임장", cat:"생활", desc:"업무나 권한을 다른 사람에게 위임할 때 사용하는 문서", keywords:"위임 위임인 수임인 권한", fields:[["grantor","위임인 성명","text"],["grantee","수임인 성명","text"],["purpose","위임 내용","textarea"],["date","작성일","date"],["phone","연락처","tel"]]},
  {id:"loan", name:"차용증", cat:"금전", desc:"금전이나 물품을 빌린 사실과 조건을 기록하는 문서", keywords:"차용 돈 금전 대여 채무 채권 빌린돈", fields:[["lender","채권자","text"],["borrower","채무자","text"],["amount","차용 금액","number"],["due","변제 예정일","date"],["interest","이자 조건","text"],["date","작성일","date"]]},
  {id:"agreement", name:"각서", cat:"생활", desc:"특정 사항을 이행하겠다는 의사를 기록하는 문서", keywords:"각서 약속 이행 서약", fields:[["writer","작성자","text"],["title","제목","text"],["content","각서 내용","textarea"],["date","작성일","date"]]},
  {id:"consent", name:"동의서", cat:"생활", desc:"특정 사항에 대한 동의 의사를 확인하는 문서", keywords:"동의 동의서 승인 허가", fields:[["name","성명","text"],["subject","동의 사항","text"],["content","동의 내용","textarea"],["date","작성일","date"]]},
  {id:"report", name:"경위서", cat:"직장", desc:"사건이나 업무의 발생 경위를 정리하는 문서", keywords:"경위 사건 사고 설명 보고", fields:[["name","작성자","text"],["department","소속/부서","text"],["title","사건명","text"],["content","경위 내용","textarea"],["date","작성일","date"]]},
  {id:"reason", name:"사유서", cat:"직장", desc:"결근·지각 등 특정 사유를 설명하는 문서", keywords:"사유 결근 지각 사유서 설명", fields:[["name","성명","text"],["department","소속/부서","text"],["reason","사유","textarea"],["date","작성일","date"]]},
  {id:"meeting", name:"회의록", cat:"업무", desc:"회의 내용과 결정 사항을 기록하는 문서", keywords:"회의 회의록 미팅 안건 결정 참석자", fields:[["title","회의명","text"],["date","회의일","date"],["attendees","참석자","text"],["agenda","회의 안건","textarea"],["result","결정 사항","textarea"]]},
  {id:"worklog", name:"업무일지", cat:"업무", desc:"하루 업무 내용과 결과를 정리하는 문서", keywords:"업무 일지 업무일지 근무 작업 기록", fields:[["name","작성자","text"],["date","작성일","date"],["today","오늘의 업무","textarea"],["result","업무 결과","textarea"],["tomorrow","내일의 업무","textarea"]]},
  {id:"expense", name:"지출결의서", cat:"업무", desc:"업무상 지출 내용을 정리하고 결재를 요청하는 문서", keywords:"지출 결의 비용 경비 결재", fields:[["name","작성자","text"],["department","부서","text"],["amount","지출 금액","number"],["purpose","지출 목적","textarea"],["date","작성일","date"]]},
  {id:"travel", name:"출장보고서", cat:"업무", desc:"출장 목적과 결과를 정리하는 문서", keywords:"출장 보고 출장보고서 방문 업무 결과", fields:[["name","작성자","text"],["destination","출장지","text"],["date","출장일","date"],["purpose","출장 목적","textarea"],["result","출장 결과","textarea"]]},
  {id:"receipt", name:"영수증", cat:"금전", desc:"금액과 거래 내용을 기록하는 간단한 영수 문서", keywords:"영수증 수령 금액 거래 결제", fields:[["recipient","받는 사람","text"],["payer","지급자","text"],["amount","금액","number"],["content","거래 내용","textarea"],["date","작성일","date"]]}
];

let category = "전체";
const cards = document.querySelector("#cards");
const search = document.querySelector("#search");
const editor = document.querySelector("#editor");
const categories = document.querySelector("#categories");

// 문서 카테고리를 자동으로 만들어 보여줍니다.
const cats = ["전체", ...new Set(docs.map(d => d.cat))];
categories.innerHTML = cats.map(c => `<button class="cat ${c === "전체" ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");

// 카테고리 버튼을 클릭하면 해당 문서만 필터링합니다.
document.querySelectorAll(".cat").forEach(button => {
  button.addEventListener("click", () => {
    category = button.dataset.cat;
    document.querySelectorAll(".cat").forEach(item => item.classList.toggle("active", item === button));
    render();
  });
});

// 검색어가 바뀔 때마다 문서 목록을 즉시 갱신합니다.
search.addEventListener("input", render);

// 한글/영문 일부 검색과 띄어쓰기 차이를 모두 어느 정도 흡수하는 검색 함수입니다.
function normalize(value) {
  return String(value || "").toLowerCase().replace(/\\s+/g, "").replace(/[·・_-]/g, "");
}

// 문서명, 설명, 검색 키워드를 모두 검색합니다.
function render() {
  const query = normalize(search.value);
  const list = docs.filter(doc => {
    const categoryMatch = category === "전체" || doc.cat === category;
    const searchable = normalize(`${doc.name} ${doc.desc} ${doc.keywords}`);
    return categoryMatch && (!query || searchable.includes(query));
  });

  cards.innerHTML = list.length
    ? list.map(doc => `
      <article class="card" onclick="openDoc('${doc.id}')">
        <span class="badge">${doc.cat}</span>
        <h2>${doc.name}</h2>
        <p>${doc.desc}</p>
      </article>`).join("")
    : `
      <div class="empty">
        <strong>검색 결과가 없습니다.</strong>
        <p>다른 문서명이나 관련 단어로 검색해 보세요.</p>
        <button class="btn secondary" onclick="clearSearch()">전체 문서 보기</button>
      </div>`;
}

// 검색창을 비우고 전체 문서를 다시 보여줍니다.
function clearSearch() {
  search.value = "";
  category = "전체";
  document.querySelectorAll(".cat").forEach(item => item.classList.toggle("active", item.dataset.cat === "전체"));
  render();
}

// 선택한 문서의 입력 화면을 엽니다.
function openDoc(id) {
  const doc = docs.find(item => item.id === id);
  if (!doc) return;

  editor.classList.remove("hidden");
  editor.innerHTML = `
    <h2>${doc.name}</h2>
    <p class="desc">${doc.desc}</p>
    <div class="formgrid">
      ${doc.fields.map(field => `
        <div class="field ${field[2] === "textarea" ? "full" : ""}">
          <label for="field-${field[0]}">${field[1]}</label>
          ${field[2] === "textarea"
            ? `<textarea id="field-${field[0]}" placeholder="${field[1]}을 입력하세요"></textarea>`
            : `<input id="field-${field[0]}" type="${field[2]}" placeholder="${field[1]}을 입력하세요">`}
        </div>`).join("")}
    </div>
    <div class="actions">
      <button class="btn primary" onclick="printDoc('${doc.id}')">문서 만들기 / 인쇄</button>
      <button class="btn secondary" onclick="closeDoc()">닫기</button>
    </div>`;

  editor.scrollIntoView({behavior:"smooth", block:"start"});
}

// 작성 화면을 닫습니다.
function closeDoc() {
  editor.classList.add("hidden");
  editor.innerHTML = "";
}

// 입력값을 안전하게 HTML에 넣기 위해 특수문자를 변환합니다.
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

// 작성된 문서를 새 창에서 인쇄할 수 있게 만듭니다.
function printDoc(id) {
  const doc = docs.find(item => item.id === id);
  if (!doc) return;

  const values = {};
  doc.fields.forEach(field => {
    const element = document.getElementById(`field-${field[0]}`);
    values[field[0]] = element ? element.value : "";
  });

  const body = doc.fields.map(field => `
    <div class="row"><strong>${field[1]}</strong><div>${escapeHtml(values[field[0]]).replace(/\\n/g, "<br>") || " "}</div></div>
  `).join("");

  const win = window.open("", "_blank");
  if (!win) {
    alert("팝업이 차단되었습니다. 팝업을 허용한 뒤 다시 시도해 주세요.");
    return;
  }

  win.document.write(`<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>${doc.name}</title>
<style>
body{font-family:Arial,"Noto Sans KR",sans-serif;max-width:760px;margin:60px auto;padding:0 30px;color:#111;line-height:1.7}
h1{text-align:center;margin:0 0 50px}
.row{display:grid;grid-template-columns:130px 1fr;gap:20px;border-bottom:1px solid #ddd;padding:14px 0}
.date{text-align:right;margin-top:50px}
@media print{body{margin:30px auto}.row{break-inside:avoid}}
</style>
</head>
<body>
<h1>${doc.name}</h1>
${body}
<div class="date">${new Date().toLocaleDateString("ko-KR")}</div>
<script>window.onload=function(){window.print()}<\\/script>
</body>
</html>`);
  win.document.close();
}

// 처음 사이트에 들어오면 전체 문서를 보여줍니다.
render();
// 문서담의 문서 데이터입니다. 외부 API나 서버 없이 브라우저에서 직접 사용합니다.
const docs = [
  {id:"resignation", name:"사직서", cat:"직장", desc:"퇴직 의사와 퇴직 예정일을 제출하는 문서", keywords:"퇴직 사직 퇴사 사직원 resignation", fields:[["name","성명","text"],["department","소속/부서","text"],["position","직위/직급","text"],["date","퇴직 예정일","date"],["reason","퇴직 사유","textarea"]]},
  {id:"power", name:"위임장", cat:"생활", desc:"본인이 처리할 권한을 다른 사람에게 위임하는 문서", keywords:"위임 위임인 수임인 대리인 권한 위임장", fields:[["grantor","위임인 성명","text"],["grantorBirth","위임인 생년월일","text"],["grantorAddress","위임인 주소","text"],["grantee","수임인 성명","text"],["granteeBirth","수임인 생년월일","text"],["granteeAddress","수임인 주소","text"],["relation","위임인과의 관계","text"],["purpose","위임 내용","textarea"],["date","작성일","date"]]},
  {id:"loan", name:"차용증", cat:"금전", desc:"금전의 차용 사실과 변제 조건을 기록하는 문서", keywords:"차용 돈 금전 대여 채무 채권 빌린돈 차용증", fields:[["lender","채권자","text"],["borrower","채무자","text"],["amount","차용 금액","number"],["due","변제 예정일","date"],["interest","이자 조건","text"],["repayMethod","변제 방법","text"],["date","작성일","date"]]},
  {id:"agreement", name:"각서", cat:"생활", desc:"특정 사항의 이행 의사와 내용을 기록하는 문서", keywords:"각서 약속 이행 서약 확인 각서", fields:[["writer","작성자","text"],["title","각서 제목","text"],["content","각서 내용","textarea"],["date","작성일","date"]]},
  {id:"consent", name:"동의서", cat:"생활", desc:"특정 사항에 대한 동의 의사를 확인하는 문서", keywords:"동의 동의서 승인 허가 개인정보 동의", fields:[["name","성명","text"],["subject","동의 사항","text"],["content","동의 내용","textarea"],["date","작성일","date"]]},
  {id:"report", name:"경위서", cat:"직장", desc:"사건의 발생 경위와 조치·재발방지 대책을 기록하는 문서", keywords:"경위 사건 사고 육하원칙 발생경위 조치 대책 재발방지", fields:[["name","작성자","text"],["department","소속/부서","text"],["title","사건명","text"],["when","발생 일시","text"],["where","발생 장소","text"],["who","관련자","text"],["what","사건 내용","textarea"],["how","발생 경위","textarea"],["action","조치 및 결과","textarea"],["prevention","개선 및 재발 방지 대책","textarea"],["date","작성일","date"]]},
  {id:"reason", name:"사유서", cat:"직장", desc:"결근·지각·업무상 사유 등을 설명하는 문서", keywords:"사유 결근 지각 설명 사유서", fields:[["name","성명","text"],["department","소속/부서","text"],["title","사유 제목","text"],["date","발생일","date"],["reason","사유 내용","textarea"],["action","후속 조치 또는 요청사항","textarea"],["writeDate","작성일","date"]]},
  {id:"meeting", name:"회의록", cat:"업무", desc:"회의의 기본정보와 논의·결정사항을 기록하는 문서", keywords:"회의 회의록 미팅 안건 참석자 의결 결정 회의록", fields:[["title","회의명","text"],["date","회의일","date"],["time","회의 시간","text"],["place","회의 장소","text"],["attendees","참석자","text"],["agenda","회의 안건","textarea"],["discussion","주요 논의 내용","textarea"],["result","결정 사항","textarea"],["next","후속 조치 및 담당","textarea"]]},
  {id:"worklog", name:"업무일지", cat:"업무", desc:"일일 업무와 처리 결과 및 예정 업무를 기록하는 문서", keywords:"업무 일지 업무일지 근무 작업 기록 일일업무", fields:[["name","작성자","text"],["department","부서","text"],["date","작성일","date"],["today","오늘의 업무","textarea"],["result","업무 결과","textarea"],["issue","문제점 및 특이사항","textarea"],["tomorrow","향후 업무","textarea"]]},
  {id:"expense", name:"지출결의서", cat:"업무", desc:"업무상 지출의 내용과 금액을 결의·승인받기 위한 문서", keywords:"지출 결의 비용 경비 결재 지출결의서", fields:[["name","작성자","text"],["department","부서","text"],["date","작성일","date"],["total","총 지출 금액","number"],["purpose","지출 목적","textarea"],["details","지출 내역","textarea"],["evidence","첨부 증빙","text"]]},
  {id:"travel", name:"출장보고서", cat:"업무", desc:"출장의 개요와 수행 내용 및 결과를 보고하는 문서", keywords:"출장 보고 출장보고서 방문 업무 결과 출장보고", fields:[["name","작성자","text"],["department","소속/부서","text"],["destination","출장지","text"],["date","출장일","date"],["purpose","출장 목적","textarea"],["activities","주요 수행 내용","textarea"],["result","출장 결과","textarea"],["followup","후속 조치","textarea"]]},
  {id:"receipt", name:"영수증", cat:"금전", desc:"금액과 지급·수령 내용을 확인하는 간단한 영수 문서", keywords:"영수증 수령 금액 거래 결제 영수", fields:[["recipient","받는 사람","text"],["payer","지급자","text"],["amount","금액","number"],["content","거래 내용","textarea"],["date","작성일","date"]]}
];

let category = "전체";
const cards = document.querySelector("#cards");
const search = document.querySelector("#search");
const editor = document.querySelector("#editor");
const categories = document.querySelector("#categories");

// 문서 카테고리를 자동으로 만들어 보여줍니다.
const cats = ["전체", ...new Set(docs.map(d => d.cat))];
categories.innerHTML = cats.map(c => `<button class="cat ${c === "전체" ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");

document.querySelectorAll(".cat").forEach(button => {
  button.addEventListener("click", () => {
    category = button.dataset.cat;
    document.querySelectorAll(".cat").forEach(item => item.classList.toggle("active", item === button));
    render();
  });
});

search.addEventListener("input", render);

// 검색어를 비교하기 쉽게 정규화합니다.
function normalize(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "").replace(/[·・_-]/g, "");
}

// 문서명, 설명, 검색 키워드를 기준으로 문서를 필터링합니다.
function render() {
  const query = normalize(search.value);
  const list = docs.filter(doc => {
    const categoryMatch = category === "전체" || doc.cat === category;
    const searchable = normalize(`${doc.name} ${doc.desc} ${doc.keywords}`);
    return categoryMatch && (!query || searchable.includes(query));
  });

  cards.innerHTML = list.length
    ? list.map(doc => `<article class="card" onclick="openDoc('${doc.id}')"><span class="badge">${doc.cat}</span><h2>${doc.name}</h2><p>${doc.desc}</p></article>`).join("")
    : `<div class="empty"><strong>검색 결과가 없습니다.</strong><p>다른 문서명이나 관련 단어로 검색해 보세요.</p><button class="btn secondary" onclick="clearSearch()">전체 문서 보기</button></div>`;
}

// 검색 조건을 초기화합니다.
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
  editor.innerHTML = `<h2>${doc.name}</h2><p class="desc">${doc.desc}</p><div class="formgrid">${doc.fields.map(field => `<div class="field ${field[2] === "textarea" ? "full" : ""}"><label for="field-${field[0]}">${field[1]}</label>${field[2] === "textarea" ? `<textarea id="field-${field[0]}" placeholder="${field[1]}을 입력하세요"></textarea>` : `<input id="field-${field[0]}" type="${field[2]}" placeholder="${field[1]}을 입력하세요">`}</div>`).join("")}</div><div class="actions"><button class="btn primary" onclick="previewDoc('${doc.id}')">미리보기</button><button class="btn secondary" onclick="closeDoc()">닫기</button></div>`;
  editor.scrollIntoView({behavior:"smooth", block:"start"});
}

// 작성 화면을 닫습니다.
function closeDoc() {
  editor.classList.add("hidden");
  editor.innerHTML = "";
}

// 입력값을 안전하게 HTML에 넣기 위해 특수문자를 변환합니다.
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"}[char]));
}

// 날짜 입력값을 한국식 문서 날짜로 변환합니다.
function formatDate(value) {
  if (!value) return "";
  const parts = value.split("-");
  return parts.length === 3 ? `${parts[0]}년 ${Number(parts[1])}월 ${Number(parts[2])}일` : value;
}

// 문서별로 실제 업무 서식에 가까운 출력 구조를 만듭니다.
function buildPrintTemplate(doc, values) {
  const date = formatDate;
  const val = key => escapeHtml(values[key] || "").replace(/\n/g, "<br>");
  const today = new Date();
  const todayText = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`;

  // 표의 한 행을 생성합니다.
  const infoRow = (label, value) => `<div class="info-row"><div class="label">${label}</div><div class="value">${value || "&nbsp;"}</div></div>`;
  // 긴 내용을 위한 본문 영역을 생성합니다.
  const contentBox = (title, value, height="55mm") => `<div class="section"><div class="section-title">${title}</div><div class="section-body" style="min-height:${height}">${value || "&nbsp;"}</div></div>`;

  if (doc.id === "resignation") return `<h1>사 직 서</h1><div class="info">${infoRow("성 명",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("직위 / 직급",val("position"))}</div><div class="resignation-text">본인은 일신상의 사유로 인하여<br><strong>${date(values.date) || "____년 __월 __일"}</strong>부로 사직하고자 하오니<br>허락하여 주시기 바랍니다.</div>${contentBox("사직 사유",val("reason"),"40mm")}<div class="date-line">${todayText}</div><div class="signature-line">성 명 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div><div class="recipient">○ ○ 회 사 귀 중</div>`;
  if (doc.id === "power") return `<h1>위 임 장</h1><div class="info">${infoRow("위 임 인",val("grantor"))}${infoRow("생년월일",val("grantorBirth"))}${infoRow("주 소",val("grantorAddress"))}${infoRow("수 임 인",val("grantee"))}${infoRow("생년월일",val("granteeBirth"))}${infoRow("주 소",val("granteeAddress"))}${infoRow("관 계",val("relation"))}</div><div class="formal-text">위임인은 수임인에게 아래 사항에 관한 권한을 위임합니다.</div>${contentBox("위임 내용",val("purpose"),"70mm")}<div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">위임인 : ${val("grantor") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "loan") return `<h1>차 용 증</h1><div class="loan-intro">채권자와 채무자는 아래와 같이 금전을 차용하였음을 확인합니다.</div><div class="info">${infoRow("채 권 자",val("lender"))}${infoRow("채 무 자",val("borrower"))}${infoRow("차용 금액",values.amount ? Number(values.amount).toLocaleString("ko-KR")+"원" : "")}${infoRow("변제 예정일",date(values.due))}${infoRow("이자 조건",val("interest"))}${infoRow("변제 방법",val("repayMethod"))}</div><div class="terms">1. 채무자는 약정한 변제일까지 차용금을 변제합니다.<br>2. 기타 조건은 당사자가 합의한 내용에 따릅니다.</div><div class="date-line">${date(values.date) || todayText}</div><div class="two-sign"><div>채권자 : ${val("lender") || "________________"} (서명 또는 인)</div><div>채무자 : ${val("borrower") || "________________"} (서명 또는 인)</div></div>`;
  if (doc.id === "agreement") return `<h1>각 서</h1><div class="info">${infoRow("작 성 자",val("writer"))}${infoRow("제 목",val("title"))}</div>${contentBox("각서 내용",val("content"),"90mm")}<div class="confirmation">위 내용을 확인하고 성실히 이행할 것을 확인합니다.</div><div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">작성자 : ${val("writer") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "consent") return `<h1>동 의 서</h1><div class="info">${infoRow("성 명",val("name"))}${infoRow("동의 사항",val("subject"))}</div>${contentBox("동의 내용",val("content"),"85mm")}<div class="confirmation">본인은 위 내용을 확인하고 이에 동의합니다.</div><div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">성 명 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "report") return `<h1>경 위 서</h1><div class="info">${infoRow("작성자",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("사건명",val("title"))}${infoRow("발생 일시",val("when"))}${infoRow("발생 장소",val("where"))}${infoRow("관련자",val("who"))}</div>${contentBox("1. 사건 내용",val("what"),"40mm")}${contentBox("2. 발생 경위",val("how"),"50mm")}${contentBox("3. 조치 및 결과",val("action"),"40mm")}${contentBox("4. 개선 및 재발 방지 대책",val("prevention"),"40mm")}<div class="confirmation">위 내용은 사실과 다름없음을 확인합니다.</div><div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">작성자 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "reason") return `<h1>사 유 서</h1><div class="info">${infoRow("성 명",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("사유 제목",val("title"))}${infoRow("발생일",date(values.date))}</div>${contentBox("사유 내용",val("reason"),"80mm")}${contentBox("후속 조치 또는 요청사항",val("action"),"45mm")}<div class="date-line">${date(values.writeDate) || todayText}</div><div class="signature-line">작성자 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "meeting") return `<h1>회 의 록</h1><div class="info">${infoRow("회의명",val("title"))}${infoRow("회의일",date(values.date))}${infoRow("회의 시간",val("time"))}${infoRow("회의 장소",val("place"))}${infoRow("참석자",val("attendees"))}</div>${contentBox("1. 회의 안건",val("agenda"),"40mm")}${contentBox("2. 주요 논의 내용",val("discussion"),"55mm")}${contentBox("3. 결정 사항",val("result"),"45mm")}${contentBox("4. 후속 조치 및 담당",val("next"),"40mm")}`;
  if (doc.id === "worklog") return `<h1>업 무 일 지</h1><div class="info">${infoRow("작성자",val("name"))}${infoRow("부서",val("department"))}${infoRow("작성일",date(values.date))}</div>${contentBox("오늘의 업무",val("today"),"50mm")}${contentBox("업무 결과",val("result"),"45mm")}${contentBox("문제점 및 특이사항",val("issue"),"40mm")}${contentBox("향후 업무",val("tomorrow"),"40mm")}`;
  if (doc.id === "expense") return `<h1>지 출 결 의 서</h1><div class="approval">결 재 &nbsp; □ 담당 &nbsp;&nbsp; □ 팀장 &nbsp;&nbsp; □ 부서장</div><div class="info">${infoRow("작성자",val("name"))}${infoRow("부서",val("department"))}${infoRow("작성일",date(values.date))}${infoRow("총 지출 금액",values.total ? Number(values.total).toLocaleString("ko-KR")+"원" : "")}${infoRow("첨부 증빙",val("evidence"))}</div>${contentBox("지출 목적",val("purpose"),"40mm")}${contentBox("지출 내역",val("details"),"75mm")}<div class="signature-line">작성자 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "travel") return `<h1>출 장 보 고 서</h1><div class="info">${infoRow("작성자",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("출장지",val("destination"))}${infoRow("출장일",date(values.date))}</div>${contentBox("1. 출장 목적",val("purpose"),"40mm")}${contentBox("2. 주요 수행 내용",val("activities"),"55mm")}${contentBox("3. 출장 결과",val("result"),"55mm")}${contentBox("4. 후속 조치",val("followup"),"40mm")}<div class="signature-line">작성자 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "receipt") {
    // 작은 영수증은 한 장을 두 번 출력해 A4를 효율적으로 사용할 수 있게 합니다.
    const receiptTemplate = `<div class="receipt-copy">
      <h2>영 수 증</h2>
      <div class="receipt">
        <div class="receipt-row"><span>받는 사람</span><strong>${val("recipient") || "________________"}</strong></div>
        <div class="receipt-amount">${values.amount ? Number(values.amount).toLocaleString("ko-KR")+" 원" : "____________ 원"}</div>
        <div class="receipt-row"><span>지급자</span><strong>${val("payer") || "________________"}</strong></div>
        <div class="receipt-row"><span>내용</span><strong>${val("content") || "________________"}</strong></div>
        <div class="receipt-row"><span>작성일</span><strong>${date(values.date) || todayText}</strong></div>
        <div class="signature-line">받는 사람 : ${val("recipient") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>
      </div>
    </div>`;
    return `<div class="small-document">${receiptTemplate}<div class="cut-line">✂ · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·</div>${receiptTemplate}</div>`;
  }
  return `<h1>${escapeHtml(doc.name)}</h1><div class="info">${doc.fields.map(field => infoRow(field[1], field[2] === "date" ? date(values[field[0]]) : val(field[0]))).join("")}</div>`;
}

// 작성한 문서를 A4 미리보기 창으로 만들어 보여줍니다. 실제 인쇄는 미리보기의 인쇄 버튼을 눌렀을 때만 실행합니다.
function previewDoc(id) {
  const doc = docs.find(item => item.id === id);
  if (!doc) return;

  // 현재 입력창의 값을 문서 필드별로 수집합니다.
  const values = {};
  doc.fields.forEach(field => {
    const element = document.getElementById(`field-${field[0]}`);
    values[field[0]] = element ? element.value : "";
  });

  const template = buildPrintTemplate(doc, values);
  const win = window.open("", "_blank");
  if (!win) {
    alert("팝업이 차단되었습니다. 팝업을 허용한 뒤 다시 시도해 주세요.");
    return;
  }

  // 실제 A4 문서처럼 보이는 인쇄 전용 화면을 만듭니다.
  win.document.write(`<!doctype html><html lang="ko"><head><meta charset="UTF-8"><title>${escapeHtml(doc.name)} - 문서담</title><style>
  @page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0 auto;max-width:186mm;min-height:273mm;padding:12mm 12mm;border:1.2px solid #222;color:#111;background:#fff;font-family:"Noto Sans KR","Malgun Gothic",Arial,sans-serif;font-size:13px;line-height:1.7}
  h1{margin:5mm 0 12mm;text-align:center;font-size:25px;letter-spacing:.16em}.info{border-top:2px solid #222;border-bottom:1px solid #222;margin-bottom:8mm}.info-row{display:grid;grid-template-columns:39mm 1fr;min-height:11mm;border-bottom:1px solid #d3d3d3}.info-row:last-child{border-bottom:0}.label{display:flex;align-items:center;padding:3mm 4mm;font-weight:700;background:#f6f6f6;border-right:1px solid #d3d3d3}.value{display:flex;align-items:center;padding:3mm 4mm;overflow-wrap:anywhere}.section{margin-bottom:6mm;break-inside:avoid}.section-title{padding:2.5mm 4mm;border:1px solid #999;border-bottom:0;font-weight:700;background:#f6f6f6}.section-body{padding:4mm;border:1px solid #999;overflow-wrap:anywhere}.resignation-text,.formal-text,.loan-intro{margin:13mm 4mm;text-align:center;font-size:15px;line-height:2.2}.confirmation{margin:10mm 0 8mm;text-align:center;font-size:14px}.date-line{margin-top:10mm;text-align:right}.signature-line{margin-top:5mm;text-align:right}.recipient{margin-top:12mm;text-align:center;font-size:16px;font-weight:700}.terms{margin:7mm 4mm;line-height:2.1}.two-sign{margin-top:9mm;display:grid;gap:5mm;text-align:right}.approval{border:1px solid #222;padding:3mm;margin-bottom:6mm;text-align:right;font-weight:700}.small-document{height:100%;display:flex;flex-direction:column;justify-content:space-between}.receipt-copy{height:124mm;break-inside:avoid}.receipt-copy h2{margin:0 0 5mm;text-align:center;font-size:21px;letter-spacing:.14em}.receipt{border:2px solid #222;padding:7mm;margin:0}.cut-line{text-align:center;color:#777;font-size:11px;height:8mm;line-height:8mm;overflow:hidden;white-space:nowrap}.receipt-copy .signature-line{margin-top:4mm}.receipt-row{display:flex;justify-content:space-between;gap:10mm;padding:4mm 0;border-bottom:1px solid #bbb}.receipt-amount{padding:10mm 0;text-align:center;font-size:24px;font-weight:800;border-bottom:1px solid #222}.print-tools{position:fixed;top:15px;right:15px;display:flex;gap:8px;z-index:10}.print-tools button{border:0;border-radius:8px;padding:9px 14px;background:#111;color:#fff;font-size:13px;font-weight:700;cursor:pointer}.print-tools .close{background:#e9e9e9;color:#222}.info,.receipt,.section{break-inside:avoid}@media print{body{max-width:none;min-height:273mm;border:1.2px solid #222}.print-tools{display:none}}</style></head><body><div class="print-tools"><button type="button" onclick="window.print()">🖨 인쇄하기</button><button type="button" class="close" onclick="window.close()">닫기</button></div>${template}</body></html>`);
  win.document.close();
}

// 처음 사이트에 들어오면 전체 문서를 보여줍니다.
render();
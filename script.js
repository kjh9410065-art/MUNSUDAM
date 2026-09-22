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
  {id:"employment", name:"재직증명서", cat:"증명", desc:"현재 재직 사실과 소속·직위 등을 증명하는 문서", keywords:"재직 재직증명 증명서 회사 직장 소속 직위", fields:[["company","회사명","text"],["name","성명","text"],["birth","생년월일","text"],["department","소속/부서","text"],["position","직위/직급","text"],["joinDate","입사일","date"],["purpose","용도","text"],["date","발급일","date"]]},
  {id:"career", name:"경력증명서", cat:"증명", desc:"근무 기간과 담당 업무 등의 경력을 증명하는 문서", keywords:"경력 경력증명 증명서 근무기간 담당업무 퇴직", fields:[["company","회사명","text"],["name","성명","text"],["birth","생년월일","text"],["department","소속/부서","text"],["position","직위/직급","text"],["joinDate","입사일","date"],["leaveDate","퇴사일","date"],["work","담당 업무","textarea"],["purpose","용도","text"],["date","발급일","date"]]},
  {id:"leave", name:"휴가신청서", cat:"신청", desc:"휴가 종류와 기간 및 사유를 신청하는 문서", keywords:"휴가 연차 휴가신청 휴가원 연차신청 신청서", fields:[["name","성명","text"],["department","소속/부서","text"],["position","직위/직급","text"],["type","휴가 종류","text"],["start","시작일","date"],["end","종료일","date"],["days","휴가 일수","number"],["reason","휴가 사유","textarea"],["date","신청일","date"]]},
  {id:"businessTripApply", name:"출장신청서", cat:"신청", desc:"출장 목적과 일정 및 출장지를 사전에 신청하는 문서", keywords:"출장 출장신청 출장신청서 출장계획 출장지", fields:[["name","성명","text"],["department","소속/부서","text"],["destination","출장지","text"],["start","출장 시작일","date"],["end","출장 종료일","date"],["purpose","출장 목적","textarea"],["companion","동행자","text"],["expense","예상 경비","number"],["date","신청일","date"]]},
  {id:"handover", name:"업무인수인계서", cat:"업무", desc:"업무와 진행 상황 및 관련 자료를 인수인계하기 위한 문서", keywords:"인수인계 업무인수인계 인계 인수 업무자료 퇴사", fields:[["giver","인계자","text"],["receiver","인수자","text"],["department","소속/부서","text"],["date","인계일","date"],["work","담당 업무","textarea"],["progress","진행 중인 업무","textarea"],["schedule","향후 일정","textarea"],["documents","관련 자료 및 위치","textarea"],["note","특이사항","textarea"]]},
  {id:"approval", name:"품의서", cat:"업무", desc:"업무 진행이나 비용 집행 등을 승인받기 위한 문서", keywords:"품의 품의서 결재 승인 업무 비용 구매 기안", fields:[["title","품의 제목","text"],["name","작성자","text"],["department","부서","text"],["date","작성일","date"],["purpose","품의 목적","textarea"],["details","주요 내용","textarea"],["amount","예상 금액","number"],["request","요청 사항","textarea"]]},
  {id:"purchase", name:"구매요청서", cat:"신청", desc:"업무에 필요한 물품의 구매 내용과 수량을 요청하는 문서", keywords:"구매 구매요청 물품 구매신청 비품 소모품", fields:[["name","요청자","text"],["department","부서","text"],["date","요청일","date"],["item","품목","text"],["quantity","수량","number"],["amount","예상 금액","number"],["purpose","사용 목적","textarea"],["details","상세 요청 내용","textarea"]]},
  {id:"pledge", name:"서약서", cat:"생활", desc:"특정 사항의 준수와 이행을 약속하는 문서", keywords:"서약 서약서 준수 약속 보안 비밀유지 확약", fields:[["name","성명","text"],["department","소속/부서","text"],["subject","서약 사항","text"],["content","서약 내용","textarea"],["date","작성일","date"]]},
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

  const requiredKeys = ["name","writer","grantor","grantee","borrower","lender","title","company","recipient","payer"];

  // 선택한 문서의 입력 화면을 먼저 생성합니다.
  editor.classList.remove("hidden");
  editor.innerHTML = `<button type="button" class="btn secondary editor-back" onclick="closeEditor()">← 문서 목록으로</button><h2>${doc.name}</h2><p class="desc">${doc.desc}</p><div class="formgrid">${doc.fields.map(field => {
    const required = requiredKeys.includes(field[0]);
    return `<div class="field ${field[2] === "textarea" ? "full" : ""}"><label for="field-${field[0]}">${field[1]}${required ? '<span class="required-mark">*</span>' : ""}</label>${field[2] === "textarea" ? `<textarea id="field-${field[0]}" placeholder="${field[1]}을 입력하세요"></textarea>` : `<input id="field-${field[0]}" type="${field[2]}" placeholder="${field[1]}을 입력하세요">`}</div>`;
  }).join("")}</div><div id="formError" class="form-error" role="alert"></div><div class="actions"><button class="btn primary" onclick="previewDoc('${doc.id}')">미리보기</button><button class="btn secondary" onclick="closeDoc()">닫기</button></div>`;

  // 이전 작성 내용을 복원합니다.
  const savedDraft = sessionStorage.getItem(`munsudam-draft-${doc.id}`);
  if (savedDraft) {
    try {
      const draft = JSON.parse(savedDraft);
      doc.fields.forEach(field => {
        const input = document.getElementById(`field-${field[0]}`);
        if (input && draft[field[0]] != null) input.value = draft[field[0]];
      });
    } catch {}
  }

  // 작성 중인 내용은 브라우저 세션에 임시 저장합니다.
  doc.fields.forEach(field => {
    const input = document.getElementById(`field-${field[0]}`);
    if (!input) return;
    input.addEventListener("input", () => {
      const draft = {};
      doc.fields.forEach(item => {
        const el = document.getElementById(`field-${item[0]}`);
        if (el) draft[item[0]] = el.value;
      });
      sessionStorage.setItem(`munsudam-draft-${doc.id}`, JSON.stringify(draft));
    });
  });

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
  if (doc.id === "employment") return `<h1>재 직 증 명 서</h1><div class="info">${infoRow("회사명",val("company"))}${infoRow("성 명",val("name"))}${infoRow("생년월일",val("birth"))}${infoRow("소속 / 부서",val("department"))}${infoRow("직위 / 직급",val("position"))}${infoRow("입사일",date(values.joinDate))}</div><div class="formal-text">위 사람은 당사에 재직하고 있음을 증명합니다.</div><div class="info">${infoRow("용 도",val("purpose"))}</div><div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">${val("company") || "________________"} &nbsp;&nbsp; 대표자 : __________________ (인)</div>`;
  if (doc.id === "career") return `<h1>경 력 증 명 서</h1><div class="info">${infoRow("회사명",val("company"))}${infoRow("성 명",val("name"))}${infoRow("생년월일",val("birth"))}${infoRow("소속 / 부서",val("department"))}${infoRow("직위 / 직급",val("position"))}${infoRow("근무 기간",date(values.joinDate)+" ~ "+date(values.leaveDate))}</div>${contentBox("담당 업무",val("work"),"55mm")}<div class="info">${infoRow("용 도",val("purpose"))}</div><div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">${val("company") || "________________"} &nbsp;&nbsp; 대표자 : __________________ (인)</div>`;
  if (doc.id === "leave") return `<h1>휴 가 신 청 서</h1><div class="info">${infoRow("성 명",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("직위 / 직급",val("position"))}${infoRow("휴가 종류",val("type"))}${infoRow("휴가 기간",date(values.start)+" ~ "+date(values.end))}${infoRow("휴가 일수",values.days ? values.days+"일" : "")}</div>${contentBox("휴가 사유",val("reason"),"55mm")}<div class="date-line">${date(values.date) || todayText}</div><div class="two-sign"><div>신청자 : ${val("name") || "________________"} (서명 또는 인)</div><div>승인 : __________________ (인)</div></div>`;
  if (doc.id === "businessTripApply") return `<h1>출 장 신 청 서</h1><div class="info">${infoRow("성 명",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("출장지",val("destination"))}${infoRow("출장 기간",date(values.start)+" ~ "+date(values.end))}${infoRow("동행자",val("companion"))}${infoRow("예상 경비",values.expense ? Number(values.expense).toLocaleString("ko-KR")+"원" : "")}</div>${contentBox("출장 목적",val("purpose"),"45mm")}<div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">신청자 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "handover") return `<h1>업 무 인 수 인 계 서</h1><div class="info">${infoRow("인계자",val("giver"))}${infoRow("인수자",val("receiver"))}${infoRow("소속 / 부서",val("department"))}${infoRow("인계일",date(values.date))}</div>${contentBox("1. 담당 업무",val("work"),"35mm")}${contentBox("2. 진행 중인 업무",val("progress"),"35mm")}${contentBox("3. 향후 일정",val("schedule"),"30mm")}${contentBox("4. 관련 자료 및 위치",val("documents"),"25mm")}${contentBox("5. 특이사항",val("note"),"25mm")}<div class="two-sign"><div>인계자 : ${val("giver") || "________________"} (서명 또는 인)</div><div>인수자 : ${val("receiver") || "________________"} (서명 또는 인)</div></div>`;
  if (doc.id === "approval") return `<h1>품 의 서</h1><div class="approval">결 재 &nbsp; □ 담당 &nbsp;&nbsp; □ 팀장 &nbsp;&nbsp; □ 부서장</div><div class="info">${infoRow("품의 제목",val("title"))}${infoRow("작성자",val("name"))}${infoRow("부서",val("department"))}${infoRow("작성일",date(values.date))}${infoRow("예상 금액",values.amount ? Number(values.amount).toLocaleString("ko-KR")+"원" : "")}</div>${contentBox("품의 목적",val("purpose"),"40mm")}${contentBox("주요 내용",val("details"),"55mm")}${contentBox("요청 사항",val("request"),"35mm")}`;
  if (doc.id === "purchase") return `<h1>구 매 요 청 서</h1><div class="info">${infoRow("요청자",val("name"))}${infoRow("부서",val("department"))}${infoRow("요청일",date(values.date))}${infoRow("품목",val("item"))}${infoRow("수량",values.quantity ? values.quantity+"개" : "")}${infoRow("예상 금액",values.amount ? Number(values.amount).toLocaleString("ko-KR")+"원" : "")}</div>${contentBox("사용 목적",val("purpose"),"45mm")}${contentBox("상세 요청 내용",val("details"),"55mm")}<div class="signature-line">요청자 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
  if (doc.id === "pledge") return `<h1>서 약 서</h1><div class="info">${infoRow("성 명",val("name"))}${infoRow("소속 / 부서",val("department"))}${infoRow("서약 사항",val("subject"))}</div>${contentBox("서약 내용",val("content"),"75mm")}<div class="confirmation">본인은 위 서약 내용을 충분히 확인하였으며 성실히 준수할 것을 서약합니다.</div><div class="date-line">${date(values.date) || todayText}</div><div class="signature-line">성 명 : ${val("name") || "________________"} &nbsp;&nbsp; (서명 또는 인)</div>`;
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

// A4의 절반 크기로 출력하기 적합한 문서는 같은 양식을 위·아래로 2장 배치합니다.
function duplicateHalfPage(template) {
  return `<div class="half-page-document"><div class="half-page-copy">${template}</div><div class="half-cut-line">✂ · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·</div><div class="half-page-copy">${template}</div></div>`;
}

// 작성 화면을 닫고 문서 목록으로 돌아갑니다.
function closeEditor() {
  editor.classList.add("hidden");
  cards.classList.remove("hidden");
  window.scrollTo({top: 0, behavior: "smooth"});
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

  const requiredKeys = doc.fields.filter(field => ["name","writer","grantor","grantee","borrower","lender","title","content","company","recipient","payer"].includes(field[0])).map(field => field[0]);
  const missing = requiredKeys.filter(key => !String(values[key] || "").trim());
  const errorBox = document.querySelector("#formError");
  if (missing.length) {
    if (errorBox) {
      errorBox.textContent = "필수 항목을 입력해 주세요.";
      errorBox.classList.add("show");
    }
    return;
  }
  if (errorBox) errorBox.classList.remove("show");

  const template = buildPrintTemplate(doc, values);
  const win = window.open("", "_blank");
  if (!win) {
    alert("팝업이 차단되었습니다. 팝업을 허용한 뒤 다시 시도해 주세요.");
    return;
  }

  // 실제 A4 문서처럼 보이는 인쇄 전용 화면을 만듭니다.
  win.document.write(`<!doctype html><html lang="ko"><head><meta charset="UTF-8"><title>${escapeHtml(doc.name)} - 문서담</title><style>
  @page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0 auto;max-width:186mm;min-height:273mm;padding:12mm 12mm;border:1.2px solid #222;color:#111;background:#fff;font-family:"Noto Sans KR","Malgun Gothic",Arial,sans-serif;font-size:13px;line-height:1.7}
  h1{margin:5mm 0 12mm;text-align:center;font-size:25px;letter-spacing:.16em}.info{border-top:2px solid #222;border-bottom:1px solid #222;margin-bottom:8mm}.info-row{display:grid;grid-template-columns:39mm 1fr;min-height:11mm;border-bottom:1px solid #d3d3d3}.info-row:last-child{border-bottom:0}.label{display:flex;align-items:center;padding:3mm 4mm;font-weight:700;background:#f6f6f6;border-right:1px solid #d3d3d3}.value{display:flex;align-items:center;padding:3mm 4mm;overflow-wrap:anywhere}.section{margin-bottom:6mm;break-inside:avoid}.section-title{padding:2.5mm 4mm;border:1px solid #999;border-bottom:0;font-weight:700;background:#f6f6f6}.section-body{padding:4mm;border:1px solid #999;overflow-wrap:anywhere}.resignation-text,.formal-text,.loan-intro{margin:13mm 4mm;text-align:center;font-size:15px;line-height:2.2}.confirmation{margin:10mm 0 8mm;text-align:center;font-size:14px}.date-line{margin-top:10mm;text-align:right}.signature-line{margin-top:5mm;text-align:right}.recipient{margin-top:12mm;text-align:center;font-size:16px;font-weight:700}.terms{margin:7mm 4mm;line-height:2.1}.two-sign{margin-top:9mm;display:grid;gap:5mm;text-align:right}.approval{border:1px solid #222;padding:3mm;margin-bottom:6mm;text-align:right;font-weight:700}.small-document{height:100%;display:flex;flex-direction:column;justify-content:space-between}.half-page-document{height:100%;display:flex;flex-direction:column;justify-content:space-between}.half-page-copy{height:124mm;padding:2mm 0;overflow:hidden}.half-page-copy h1{margin:2mm 0 5mm;font-size:20px}.half-page-copy .info{margin-bottom:4mm}.half-page-copy .info-row{min-height:7mm}.half-page-copy .section{margin-bottom:3mm}.half-page-copy .section-title{padding:1.5mm 3mm}.half-page-copy .section-body{padding:2.5mm}.half-page-copy .confirmation{margin:4mm 0 3mm;font-size:12px}.half-page-copy .date-line{margin-top:4mm}.half-page-copy .signature-line{margin-top:3mm}.half-cut-line{text-align:center;color:#777;font-size:10px;height:7mm;line-height:7mm;overflow:hidden;white-space:nowrap}.receipt-copy{height:124mm;break-inside:avoid}.receipt-copy h2{margin:0 0 5mm;text-align:center;font-size:21px;letter-spacing:.14em}.receipt{border:2px solid #222;padding:7mm;margin:0}.cut-line{text-align:center;color:#777;font-size:11px;height:8mm;line-height:8mm;overflow:hidden;white-space:nowrap}.receipt-copy .signature-line{margin-top:4mm}.receipt-row{display:flex;justify-content:space-between;gap:10mm;padding:4mm 0;border-bottom:1px solid #bbb}.receipt-amount{padding:10mm 0;text-align:center;font-size:24px;font-weight:800;border-bottom:1px solid #222}.print-tools{position:fixed;top:15px;right:15px;display:flex;gap:8px;z-index:10}.print-tools button{border:0;border-radius:8px;padding:9px 14px;background:#111;color:#fff;font-size:13px;font-weight:700;cursor:pointer}.print-tools .close{background:#e9e9e9;color:#222}.info,.receipt,.section,.two-sign,.signature-line,.date-line{break-inside:avoid}.section-body{overflow-wrap:anywhere;word-break:break-word}@media print{body{max-width:none;min-height:273mm;border:1.2px solid #222}.print-tools{display:none}}</style></head><body><div class="print-tools"><button type="button" onclick="window.print()">🖨 인쇄하기</button><button type="button" class="close" onclick="window.close()">닫기</button></div>${template}</body></html>`);
  win.document.close();
}

// 다크모드 버튼을 직접 켜고 끄며 선택 상태를 브라우저에 저장합니다.
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("munsudam-theme");
if (savedTheme === "dark") document.body.classList.add("dark");

function updateThemeButton() {
  const dark = document.body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀️ 라이트모드" : "🌙 다크모드";
  themeToggle.setAttribute("aria-label", dark ? "라이트모드 전환" : "다크모드 전환");
}

themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  localStorage.setItem("munsudam-theme", dark ? "dark" : "light");
  updateThemeButton();
});

updateThemeButton();

// 법적 안내 내용을 팝업으로 보여줍니다.
const legalData = {
  terms: {
    title: "이용약관",
    html: "<p class=\"legal-date\">시행일: 2026년 9월 19일</p><h3>제1조 목적</h3><p>이 약관은 문서담(MUNSUDAM)이 제공하는 문서 양식 작성, 미리보기 및 인쇄 서비스의 이용 조건과 절차를 정합니다.</p><h3>제2조 서비스의 내용</h3><p>문서담은 이용자가 제공된 양식을 선택하고 직접 내용을 입력하여 문서를 작성하고 미리보기 및 인쇄할 수 있는 기능을 제공합니다. 문서담은 이용자가 입력한 문서 내용을 대신 작성하거나 사실관계를 확인하지 않습니다.</p><h3>제3조 이용자의 책임</h3><p>이용자는 입력하는 내용의 정확성, 적법성 및 제3자의 권리 침해 여부를 스스로 확인해야 합니다. 문서의 실제 제출·사용에 필요한 요건은 이용자가 해당 기관이나 상대방에게 확인해야 합니다.</p><h3>제4조 서비스의 변경 및 중단</h3><p>서비스 운영에 필요한 경우 제공되는 양식, 기능, 화면 및 안내 내용은 변경될 수 있습니다. 기술적 장애나 점검 등으로 서비스 이용이 일시적으로 제한될 수 있습니다.</p><h3>제5조 지식재산권</h3><p>문서담의 서비스 화면, 디자인, 로고 및 자체 제작 콘텐츠에 관한 권리는 관련 법령에 따라 보호됩니다. 이용자는 서비스를 정상적인 목적과 방법으로 이용해야 합니다.</p><h3>제6조 약관의 변경</h3><p>약관을 변경하는 경우 변경 내용과 시행일을 서비스 화면을 통해 안내합니다.</p>"
  },
  privacy: {
    title: "개인정보처리방침",
    html: "<p class=\"legal-date\">시행일: 2026년 9월 19일</p><h3>1. 개인정보의 처리</h3><p>현재 문서담의 기본 문서 작성 기능은 별도의 회원가입 없이 이용할 수 있으며, 사용자가 입력한 문서 내용은 자체 서버로 전송하거나 자체 데이터베이스에 저장하지 않습니다. 입력 내용은 이용자의 브라우저에서 문서 작성, 미리보기 및 인쇄를 위해 처리됩니다.</p><h3>2. 처리하는 정보</h3><p>문서 작성 과정에서 이름, 주소, 생년월일 등 이용자가 문서에 직접 입력하는 정보가 있을 수 있습니다. 이러한 정보는 현재 브라우저 안에서 문서 생성에 사용되며 문서담 서버에 저장되지 않습니다.</p><h3>3. 보유 및 이용기간</h3><p>문서담 자체 서버에는 현재 문서 작성 내용의 보관 기능이 없으므로 문서담이 작성 내용을 별도로 보유하지 않습니다. 브라우저의 자동완성, 캐시 등 기기 자체 기능에 의해 정보가 남는 경우는 이용자의 기기 및 브라우저 설정에 따릅니다.</p><h3>4. 개인정보 보호</h3><p>공용 PC나 타인이 사용하는 기기에서 개인정보가 포함된 문서를 작성한 경우 이용자는 작성 후 해당 기기에 정보가 남아 있는지 직접 확인해야 합니다.</p><h3>5. 방침의 변경</h3><p>향후 회원가입, 문서 저장, 문의 접수 등 개인정보를 처리하는 기능이 추가되는 경우 실제 처리 내용에 맞게 본 방침을 변경하여 안내합니다.</p>"
  },
  notice: {
    title: "법적 고지",
    html: "<p class=\"legal-date\">시행일: 2026년 9월 19일</p><h3>문서 양식의 성격</h3><p>문서담에서 제공하는 양식은 문서 작성 편의를 위한 일반적인 참고용 양식입니다. 특정 기관의 공식 서식이나 법률·세무·노무·행정 전문가의 자문을 대신하지 않습니다.</p><h3>공식 서식 여부</h3><p>문서의 실제 제출처에서 별도의 공식 서식을 요구하는 경우에는 해당 기관이 제공하는 최신 서식을 사용해야 합니다.</p><h3>내용 확인</h3><p>중요한 계약, 금전 거래, 권리·의무에 관한 문서 등은 실제 사용 전에 관련 법령과 제출처의 요구사항을 확인하시기 바랍니다.</p><h3>책임 범위</h3><p>이용자가 작성한 내용의 정확성 및 그 문서를 실제로 사용함으로써 발생하는 결과는 이용자가 확인하고 판단해야 합니다.</p>"
  },
  contact: {
    title: "문의",
    html: "<h3>문서담 서비스 문의</h3><p>서비스 오류, 양식 개선 의견 및 기타 문의는 아래 공식 저장소의 Issues를 이용할 수 있습니다.</p><p><a class=\"legal-contact\" href=\"https://github.com/kjh9410065-art/MUNSUDAM/issues\" target=\"_blank\" rel=\"noopener noreferrer\">문서담 문의하기 →</a></p><p>개인정보가 포함된 내용을 문의 글에 직접 입력하지 마세요.</p>"
  }
};

function openLegal(type) {
  const data = legalData[type];
  if (!data) return;
  document.querySelector("#legalTitle").textContent = data.title;
  document.querySelector("#legalContent").innerHTML = data.html;
  document.querySelector("#legalModal").classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeLegal() {
  document.querySelector("#legalModal").classList.add("hidden");
  document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLegal();
});

// 처음 사이트에 들어오면 전체 문서를 보여줍니다.
render();
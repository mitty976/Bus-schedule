// ====== Holiday calendar ======
let HOLIDAYS = new Set();

async function loadHolidays(){
  try{
    const res = await fetch("holiday-calendar.json", { cache: "no-store" });
    if(!res.ok) return;

    const json = await res.json();

    if(Array.isArray(json)){
      HOLIDAYS = new Set(
        json
          .map(v => (typeof v === "string") ? v : (v.date || ""))
          .filter(Boolean)
      );
    }else{
      HOLIDAYS = new Set(Object.keys(json));
    }
  }catch(e){
    // 読み込めなくても土日判定で動かす
  }
}

// ====== Demo data (ここをあなたのPDF/データに合わせて増やす) ======
const timetables = {
  kobukidai: {
    stopName: "小吹台",
    crumb: "[410] 小吹台［南海バス］",
    direction: "河内長野駅前方面",
    weekday: [
      { dep: "05:55", dest: "河内長野駅前", note: "" },
      { dep: "06:34", dest: "河内長野駅前", note: "" },
      { dep: "06:54", dest: "河内長野駅前", note: "" },
      { dep: "07:12", dest: "河内長野駅前", note: "" },
      { dep: "07:36", dest: "河内長野駅前", note: "" },
      { dep: "07:58", dest: "河内長野駅前", note: "" },
      { dep: "08:16", dest: "河内長野駅前", note: "" },
      { dep: "08:48", dest: "河内長野駅前", note: "" },
      { dep: "09:47", dest: "河内長野駅前", note: "" },
      { dep: "10:46", dest: "河内長野駅前", note: "" },
      { dep: "11:46", dest: "河内長野駅前", note: "" },
      { dep: "12:46", dest: "河内長野駅前", note: "" },
      { dep: "13:46", dest: "河内長野駅前", note: "" },
      { dep: "14:46", dest: "河内長野駅前", note: "" },
      { dep: "15:46", dest: "河内長野駅前", note: "" },
      { dep: "16:58", dest: "河内長野駅前", note: "" },
      { dep: "18:22", dest: "河内長野駅前", note: "" },
      { dep: "19:31", dest: "河内長野駅前", note: "" },
      { dep: "20:31", dest: "河内長野駅前", note: "" },
    ],
    holiday: [
      { dep: "06:10", dest: "河内長野駅前", note: "" },
      { dep: "07:09", dest: "河内長野駅前", note: "" },
      { dep: "07:46", dest: "河内長野駅前", note: "" },
      { dep: "08:33", dest: "河内長野駅前", note: "" },
      { dep: "09:44", dest: "河内長野駅前", note: "" },
      { dep: "10:58", dest: "河内長野駅前", note: "" },
      { dep: "11:56", dest: "河内長野駅前", note: "" },
      { dep: "12:56", dest: "河内長野駅前", note: "" },
      { dep: "13:56", dest: "河内長野駅前", note: "" },
      { dep: "14:56", dest: "河内長野駅前", note: "" },
      { dep: "15:56", dest: "河内長野駅前", note: "" },
      { dep: "16:56", dest: "河内長野駅前", note: "" },
      { dep: "17:57", dest: "河内長野駅前", note: "" },
      { dep: "18:57", dest: "河内長野駅前", note: "" },
      { dep: "19:44", dest: "河内長野駅前", note: "" },
      { dep: "20:42", dest: "河内長野駅前", note: "" },
    ],
  },

  kawachinagano: {
    stopName: "河内長野駅前",
    crumb: "[410] 河内長野駅前［南海バス］",
    direction: "小吹台方面",
    weekday: [
      { dep: "07:52", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "08:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "09:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "10:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "11:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "12:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "13:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "14:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "15:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "16:36", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "17:21", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "18:00", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "18:36", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "19:09", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "19:31", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "20:11", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "20:39", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "21:01", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "21:36", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "22:14", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "22:48", dest: "小吹台", note: "〔4番のりば〕" }
    ],
    holiday: [
      { dep: "07:25", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "08:13", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "09:23", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "10:37", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "11:35", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "12:35", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "13:35", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "14:35", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "15:35", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "16:35", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "17:36", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "18:36", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "19:23", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "20:22", dest: "小吹台", note: "〔4番のりば〕" },
      { dep: "21:41", dest: "小吹台", note: "〔4番のりば〕" },
    ],
  },
};

// ====== Utils ======
const pad2 = (n) => String(n).padStart(2, "0");
function toMinutes(hhmm){
  const [h,m] = hhmm.split(":").map(Number);
  return h*60 + m;
}

function getDayType(isoDate){
  if(!isoDate) return "weekday";
  const d = new Date(isoDate + "T00:00:00");
  const day = d.getDay(); // 0=Sun ... 6=Sat
  if(day === 0 || day === 6) return "holiday";
  if(HOLIDAYS.has(isoDate)) return "holiday";
  return "weekday";
}

// ====== DOM ======
const elDate = document.getElementById("date");
const elHour = document.getElementById("hour");
const elMin  = document.getElementById("minute");
const elStop = document.getElementById("stop");

const elTbody = document.getElementById("timetableBody"); // ✅ HTMLと一致
const elCrumb = document.getElementById("crumb");
const elDir   = document.getElementById("direction");
const elDayChip = document.getElementById("dayTypeChip");
const elAfterChip = document.getElementById("afterChip");
const elHint = document.getElementById("hint");

function buildTimeSelectors(){
  elHour.innerHTML = "";
  for(let h=0; h<=23; h++){
    const opt = document.createElement("option");
    opt.value = String(h);
    opt.textContent = pad2(h);
    elHour.appendChild(opt);
  }

  elMin.innerHTML = "";
  for(let m=0; m<=59; m++){
    const opt = document.createElement("option");
    opt.value = String(m);
    opt.textContent = pad2(m);
    elMin.appendChild(opt);
  }
}

function buildStopSelector(){
  elStop.innerHTML = "";
  Object.entries(timetables).forEach(([key, v]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = v.stopName;
    elStop.appendChild(opt);
  });
}

// ✅ 1時間=1行 表示（分は横並び）
// テーブルは 4列（時/分/行き先/備考）に合わせる
function renderGroupedByHour(list){
  elTbody.innerHTML = "";

  const map = new Map(); // hh -> { minutes:Set, dest:Set, note:Set }
  for(const item of list){
    if(!item?.dep) continue;
    const [hh, mm] = item.dep.split(":");
    if(!map.has(hh)){
      map.set(hh, { minutes: new Set(), dest: new Set(), note: new Set() });
    }
    const g = map.get(hh);
    g.minutes.add(mm);
    if(item.dest) g.dest.add(item.dest);
    if(item.note) g.note.add(item.note);
  }

  const hours = Array.from(map.keys()).sort((a,b)=>Number(a)-Number(b));

  for(const hh of hours){
    const g = map.get(hh);
    const minutes = Array.from(g.minutes).sort((a,b)=>Number(a)-Number(b));
    const destText = Array.from(g.dest).join(" / ");
    const noteText = Array.from(g.note).join(" / ");

    const tr = document.createElement("tr");

    const tdH = document.createElement("td");
    tdH.className = "colHour";
    tdH.textContent = hh;

    const tdM = document.createElement("td");
    tdM.className = "colMin";

    const wrap = document.createElement("div");
    wrap.className = "tt-minutes";

    for(const mm of minutes){
      const span = document.createElement("span");
      span.className = "tt-minute";
      span.textContent = mm;
      wrap.appendChild(span);
    }
    tdM.appendChild(wrap);

    const tdD = document.createElement("td");
    tdD.className = "colDest";
    tdD.textContent = destText;

    const tdN = document.createElement("td");
    tdN.className = "colNote";
    tdN.textContent = noteText;

    tr.append(tdH, tdM, tdD, tdN);
    elTbody.appendChild(tr);
  }
}

// ====== Render ======
function render(){
  const stopKey = elStop.value;
  const current = timetables[stopKey];

  // header
  elCrumb.textContent = current.crumb;
  elDir.textContent = current.direction;

  // chips
  const dayType = getDayType(elDate.value);
  elDayChip.textContent = dayType === "weekday" ? "平日" : "土日祝";

  const after = Number(elHour.value)*60 + Number(elMin.value);
  elAfterChip.textContent = `指定時刻以降（${pad2(elHour.value)}:${pad2(elMin.value)}）`;

  const list = current[dayType]
    .slice()
    .sort((a,b)=>toMinutes(a.dep)-toMinutes(b.dep))
    .filter(it => toMinutes(it.dep) >= after);

  if(list.length === 0){
    elTbody.innerHTML = "";
    elHint.textContent = "指定時刻以降の便が見つかりませんでした。時刻を戻すか、別日を選んでください。";
    return;
  }
  elHint.textContent = "";

  renderGroupedByHour(list);
}

// ====== Init ======
(async function init(){
  await loadHolidays();

  buildTimeSelectors();
  buildStopSelector();

  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = pad2(now.getMonth()+1);
  const dd = pad2(now.getDate());
  elDate.value = `${yyyy}-${mm}-${dd}`;

  elHour.value = String(now.getHours());
  elMin.value = String(now.getMinutes());

  elStop.value = "kobukidai";

  ["date","hour","minute","stop"].forEach(id=>{
    document.getElementById(id).addEventListener("change", render);
  });

  render();
})();

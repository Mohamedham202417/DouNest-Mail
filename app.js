import { getMailCopy } from "./mail-copy.js";

const API = "https://dounest-temp-mail-api.mohamedhamadou202215.workers.dev";
const SESSION_KEY = "dounest.temp-mail.session.v1";
const LANGS = ["ar", "en", "fr", "es", "de", "tr", "ru", "zh", "hi", "pt"];
const EXTRA = {
  ar:{eyebrow:"استقبال مؤقت، بدون تسجيل",mailboxTitle:"صندوق البريد المؤقت",mailboxSub:"عنوان خاص ينتهي تلقائياً بعد ساعة تقريباً",guideKicker:"خطوات بسيطة",footer:"خدمة مستقلة عن أدوات معالجة الملفات المحلية في DouNest.",back:"المزيد من أدوات DouNest",privacy:"سياسة الخصوصية"},
  en:{eyebrow:"Temporary receiving, no sign-up",mailboxTitle:"Temporary inbox",mailboxSub:"A private address that expires in about one hour",guideKicker:"A few simple steps",footer:"A separate service from DouNest's local file-processing tools.",back:"More DouNest tools",privacy:"Privacy policy"},
  fr:{eyebrow:"Réception temporaire, sans inscription",mailboxTitle:"Boîte temporaire",mailboxSub:"Une adresse privée qui expire après environ une heure",guideKicker:"Quelques étapes simples",footer:"Service distinct des outils locaux de traitement de fichiers de DouNest.",back:"Autres outils DouNest",privacy:"Politique de confidentialité"},
  es:{eyebrow:"Recepción temporal, sin registro",mailboxTitle:"Bandeja temporal",mailboxSub:"Una dirección privada que vence en aproximadamente una hora",guideKicker:"Unos pasos sencillos",footer:"Servicio independiente de las herramientas locales de archivos de DouNest.",back:"Más herramientas de DouNest",privacy:"Política de privacidad"},
  de:{eyebrow:"Temporärer Empfang, ohne Anmeldung",mailboxTitle:"Temporäres Postfach",mailboxSub:"Eine private Adresse, die nach etwa einer Stunde abläuft",guideKicker:"In wenigen Schritten",footer:"Ein separater Dienst neben DouNests lokalen Dateitools.",back:"Weitere DouNest-Tools",privacy:"Datenschutzerklärung"},
  tr:{eyebrow:"Geçici alım, kayıt gerekmez",mailboxTitle:"Geçici gelen kutusu",mailboxSub:"Yaklaşık bir saat sonra sona eren özel adres",guideKicker:"Birkaç kolay adım",footer:"DouNest'in yerel dosya araçlarından ayrı bir hizmettir.",back:"Daha fazla DouNest aracı",privacy:"Gizlilik politikası"},
  ru:{eyebrow:"Временный приём, без регистрации",mailboxTitle:"Временный почтовый ящик",mailboxSub:"Адрес автоматически истекает примерно через час",guideKicker:"Всего несколько шагов",footer:"Отдельный сервис, не связанный с локальной обработкой файлов DouNest.",back:"Другие инструменты DouNest",privacy:"Политика конфиденциальности"},
  zh:{eyebrow:"临时收信，无需注册",mailboxTitle:"临时收件箱",mailboxSub:"此专用地址约一小时后自动失效",guideKicker:"简单几步即可使用",footer:"此服务与 DouNest 的本地文件处理工具相互独立。",back:"更多 DouNest 工具",privacy:"隐私政策"},
  hi:{eyebrow:"अस्थायी मेल प्राप्त करें, साइन-अप नहीं",mailboxTitle:"अस्थायी इनबॉक्स",mailboxSub:"यह पता लगभग एक घंटे में समाप्त हो जाता है",guideKicker:"बस कुछ आसान चरण",footer:"यह DouNest के स्थानीय फ़ाइल टूल से अलग सेवा है।",back:"अधिक DouNest टूल",privacy:"गोपनीयता नीति"},
  pt:{eyebrow:"Receba mensagens temporárias, sem cadastro",mailboxTitle:"Caixa de entrada temporária",mailboxSub:"Endereço privado que expira em cerca de uma hora",guideKicker:"Alguns passos simples",footer:"Serviço separado das ferramentas locais de arquivos do DouNest.",back:"Mais ferramentas DouNest",privacy:"Política de privacidade"}
};
const $ = (selector) => document.querySelector(selector);
const root = document.documentElement;
let lang = chooseLanguage();
let copy = getMailCopy(lang);
let extra = EXTRA[lang];
let inbox = readSession();
let busy = false;
let refreshing = false;
let pollTimer = 0;
let clockTimer = 0;

function chooseLanguage(){
  const query = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(query)) return query;
  try { const saved=localStorage.getItem("dounest-mail-language"); if(LANGS.includes(saved)) return saved; } catch {}
  return "en";
}
function el(tag, cls, text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=String(text);return node;}
function readSession(){try{const x=JSON.parse(sessionStorage.getItem(SESSION_KEY)||"null");if(!x||typeof x.address!=="string"||!/^dn-[a-f0-9]{24}@mail\.hmdevelop\.me$/i.test(x.address)||typeof x.token!=="string"||x.token.length<30||!Number.isFinite(Number(x.expiresAt))||Number(x.expiresAt)<=Date.now()){sessionStorage.removeItem(SESSION_KEY);return null;}return{address:x.address,token:x.token,expiresAt:Number(x.expiresAt)};}catch{return null;}}
function saveSession(){try{if(inbox)sessionStorage.setItem(SESSION_KEY,JSON.stringify(inbox));}catch{}}
function clearSession(){try{sessionStorage.removeItem(SESSION_KEY);}catch{}}
function setStatus(text){$("#status").textContent=text;}
function setBusy(value){busy=value;for(const b of document.querySelectorAll(".mailbox button"))b.disabled=value;}
function updateLanguage(){
  copy=getMailCopy(lang);extra=EXTRA[lang];root.lang=lang;root.dir=lang==="ar"?"rtl":"ltr";
  document.title=`${copy.title} | DouNest Mail`;
  for(const node of document.querySelectorAll("[data-copy]")){const key=node.dataset.copy;node.textContent=copy[key]??extra[key]??node.textContent;}
  const steps=$("#steps");steps.replaceChildren(...copy.steps.map(text=>{const li=document.createElement("li");li.textContent=text;return li;}));
  const faq=$("#faq-list");faq.replaceChildren(...copy.faqs.map(([q,a])=>{const d=document.createElement("details"),s=document.createElement("summary"),p=document.createElement("p");s.textContent=q;p.textContent=a;d.append(s,p);return d;}));
  $("#language").value=lang;
  $("#theme-toggle").setAttribute("aria-label",lang==="ar"?"تبديل المظهر":"Toggle theme");
  renderInboxState();
}
async function api(path,{method="GET",token,body}={}){
  const headers={};if(token)headers.Authorization=`Bearer ${token}`;if(body!==undefined)headers["Content-Type"]="application/json";
  const controller=new AbortController(), timeout=setTimeout(()=>controller.abort(),12000);
  let response;
  try{response=await fetch(`${API}${path}`,{method,headers,body:body===undefined?undefined:JSON.stringify(body),cache:"no-store",credentials:"omit",redirect:"error",signal:controller.signal});}
  catch(error){if(error.name==="AbortError")error.code="NETWORK";else if(error instanceof TypeError)error.code="NETWORK";throw error;}finally{clearTimeout(timeout);}
  let data={};try{data=await response.json();}catch{}
  if(!response.ok)throw Object.assign(new Error(data.error||`HTTP_${response.status}`),{status:response.status,code:data.error||"HTTP_ERROR"});
  return data;
}
function errorCopy(error){if(error.status===429||error.code==="RATE_LIMITED")return copy.statusLimit;if(error.status===503||error.code==="SERVICE_SETUP_INCOMPLETE")return copy.statusUnavailable;if(error.code==="NETWORK")return copy.statusNetwork;return copy.statusError;}
function renderInboxState(){
  const active=Boolean(inbox);$("#active-inbox").hidden=!active;$("#create-inbox").hidden=active;
  if(active){$("#email-address").value=inbox.address;updateExpiry();}
}
function updateExpiry(){if(!inbox)return;const seconds=Math.max(0,Math.ceil((inbox.expiresAt-Date.now())/1000));if(seconds<=0){expireInbox();return;}const h=Math.floor(seconds/3600),m=Math.floor(seconds%3600/60),s=seconds%60;const time=h?`${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${m}:${String(s).padStart(2,"0")}`;$("#expiry").textContent=copy.expiresIn.replace("{time}",time);}
function expireInbox(){inbox=null;clearSession();stopTimers();$("#message-list").replaceChildren();$("#message-count").textContent="";$("#empty-state").hidden=false;$("#expiry").textContent=copy.expired;renderInboxState();setStatus(copy.statusExpired);}
function stopTimers(){clearInterval(pollTimer);clearInterval(clockTimer);pollTimer=0;clockTimer=0;}
function startTimers(){stopTimers();pollTimer=setInterval(()=>refreshInbox(false),15000);clockTimer=setInterval(updateExpiry,1000);}
function renderMessages(messages){const list=$("#message-list");list.replaceChildren();const items=Array.isArray(messages)?messages.slice(0,30):[];$("#message-count").textContent=items.length?`(${items.length})`:"";$("#empty-state").hidden=items.length>0;for(const message of items){const details=el("details","message"),summary=el("summary"),subject=el("span","message-subject",message?.subject||"(no subject)"),sender=el("span","message-sender",`${copy.sender}: ${String(message?.sender||"unknown")}`),body=el("div","message-content"),received=Number(message?.receivedAt);summary.append(subject,sender);body.append(el("p","message-meta",`${copy.received}: ${Number.isFinite(received)?new Date(received).toLocaleString(lang):""}`));const count=Number(message?.attachmentCount);if(Number.isFinite(count)&&count>0)body.append(el("p","message-meta",`${count} ${copy.attachments}`));body.append(el("pre","message-body",typeof message?.text==="string"&&message.text?message.text:copy.noPlainText));details.append(summary,body);list.append(details);}}
async function refreshInbox(manual=false){if(!inbox||busy||refreshing)return;if(inbox.expiresAt<=Date.now()){expireInbox();return;}refreshing=true;if(manual){setBusy(true);setStatus(copy.statusRefreshing);}try{const data=await api("/api/inbox",{token:inbox.token});if(!inbox)return;if(Number.isFinite(Number(data.expiresAt)))inbox.expiresAt=Number(data.expiresAt);saveSession();renderMessages(data.messages);updateExpiry();if(manual)setStatus(copy.statusReady);}catch(error){if(error.status===404||error.status===401||error.code==="INBOX_EXPIRED")expireInbox();else setStatus(errorCopy(error));}finally{refreshing=false;if(manual)setBusy(false);}}
$("#create-inbox").addEventListener("click",async()=>{if(busy)return;setBusy(true);setStatus(copy.statusCreating);try{const data=await api("/api/inboxes",{method:"POST",body:{}});if(typeof data.address!=="string"||!/^dn-[a-f0-9]{24}@mail\.hmdevelop\.me$/i.test(data.address)||typeof data.token!=="string"||data.token.length<30||!Number.isFinite(Number(data.expiresAt)))throw new Error("INVALID_RESPONSE");inbox={address:data.address,token:data.token,expiresAt:Number(data.expiresAt)};saveSession();$("#email-address").value=inbox.address;$("#message-list").replaceChildren();$("#message-count").textContent="";$("#empty-state").hidden=false;renderInboxState();setStatus(copy.statusReady);startTimers();setBusy(false);await refreshInbox(false);}catch(error){setStatus(errorCopy(error));setBusy(false);}});
$("#refresh-inbox").addEventListener("click",()=>refreshInbox(true));
$("#delete-inbox").addEventListener("click",async()=>{if(!inbox||busy)return;setBusy(true);try{await api("/api/inbox",{method:"DELETE",token:inbox.token});inbox=null;clearSession();stopTimers();$("#message-list").replaceChildren();$("#message-count").textContent="";$("#empty-state").hidden=false;$("#expiry").textContent="";renderInboxState();setStatus(copy.statusDeleted);}catch(error){if(error.status===404||error.status===401)expireInbox();else setStatus(copy.statusDeleteError);}finally{setBusy(false);}});
$("#copy-address").addEventListener("click",async()=>{if(!inbox)return;try{await navigator.clipboard.writeText(inbox.address);setStatus(copy.copied);}catch{$("#email-address").focus();$("#email-address").select();setStatus(copy.copy);}});
$("#language").addEventListener("change",event=>{lang=LANGS.includes(event.target.value)?event.target.value:"en";try{localStorage.setItem("dounest-mail-language",lang);}catch{}updateLanguage();});
$("#theme-toggle").addEventListener("click",()=>{const dark=document.body.dataset.theme!=="dark";document.body.dataset.theme=dark?"dark":"light";$("#theme-icon").textContent=dark?"☀":"☾";try{localStorage.setItem("dounest-mail-theme",dark?"dark":"light");}catch{}});
try{if(localStorage.getItem("dounest-mail-theme")==="dark"){document.body.dataset.theme="dark";$("#theme-icon").textContent="☀";}}catch{}
updateLanguage();
if(inbox){setStatus(copy.statusLoading);refreshInbox(false);startTimers();}

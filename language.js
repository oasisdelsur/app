const translations = {

it: {
    welcome: "Benvenuto",
    enter: "ENTRA",
    dispensario: "🌿 Dispensario",
    vape: "VAPE",
    weed: "Weed",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extract",
    stickers: "🏷️ Stickers",
    cart: "🛒 Carrello",
    order: "📲 Conferma ordine",
    back: "← Indietro",
    coming: "Ancora non disponibili",
    arrival: "Prodotti in arrivo..."
},
es: {
    welcome: "Bienvenido",
    enter: "ENTRAR",
    dispensario: "🌿 Dispensario",
    vape: "Vaporizadores",
    weed: "Marihuana",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extractos",
    stickers: "🏷️ Pegatinas",
    cart: "🛒 Carrito",
    order: "📲 Confirmar pedido",
    back: "← Atrás",
    coming: "Todavía no disponibles",
    arrival: "Productos próximamente..."
},
en: {
    welcome: "Welcome",
    enter: "ENTER",
    dispensario: "🌿 Dispensary",
    vape: "Vapes",
    weed: "Weed",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extract",
    stickers: "🏷️ Stickers",
    cart: "🛒 Cart",
    order: "📲 Confirm order",
    back: "← Back",
    coming: "Not available yet",
    arrival: "Products coming soon..."
},
de: {
    welcome: "Willkommen",
    enter: "EINTRETEN",
    dispensario: "🌿 Shop",
    vape: "Vapes",
    weed: "Weed",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extrakte",
    stickers: "🏷️ Aufkleber",
    cart: "🛒 Warenkorb",
    order: "📲 Bestellung bestätigen",
    back: "← Zurück",
    coming: "Noch nicht verfügbar",
    arrival: "Produkte kommen bald..."
}

};

/* ==========================
SCELTA LINGUA INIZIALE
========================== */

let selectedWelcomeLanguage =
localStorage.getItem(“language”) || null;

function selectWelcomeLanguage(lang) {

if (!translations[lang]) return;
selectedWelcomeLanguage = lang;
localStorage.setItem("language", lang);
const t = translations[lang];
const welcomeText =
    document.getElementById("welcomeText");
const enterButton =
    document.getElementById("enterButton");
if (welcomeText)
    welcomeText.innerHTML = t.welcome;
if (enterButton)
    enterButton.innerHTML = t.enter;
document
    .querySelectorAll(".welcome-languages button")
    .forEach(button => {
        button.classList.remove("selected");
    });
const selectedButton =
    document.getElementById("lang-" + lang);
if (selectedButton)
    selectedButton.classList.add("selected");

}

/* ==========================
ENTRA NEL SITO
========================== */

function enterSite() {

if (!selectedWelcomeLanguage) {
    selectWelcomeLanguage("it");
}
applyLanguage(selectedWelcomeLanguage);
const welcome =
    document.getElementById("welcomeScreen");
if (welcome) {
    welcome.classList.add("hidden");
}

}

/* ==========================
TRADUZIONE DELLA PAGINA
========================== */

function applyLanguage(lang) {

const t = translations[lang];
if (!t) return;
localStorage.setItem("language", lang);
document.documentElement.lang = lang;
if (document.getElementById("dispensario"))
    document.getElementById("dispensario").innerHTML =
        t.dispensario;
if (document.getElementById("weed"))
    document.getElementById("weed").innerHTML =
        t.weed;
if (document.getElementById("frozen"))
    document.getElementById("frozen").innerHTML =
        t.frozen;
if (document.getElementById("dry"))
    document.getElementById("dry").innerHTML =
        t.dry;
if (document.getElementById("extract"))
    document.getElementById("extract").innerHTML =
        t.extract;
if (document.getElementById("vape"))
    document.getElementById("vape").innerHTML =
        t.vape;
if (document.getElementById("stickers"))
    document.getElementById("stickers").innerHTML =
        t.stickers;
if (document.getElementById("cartTitle"))
    document.getElementById("cartTitle").innerHTML =
        t.cart;
if (document.getElementById("orderButton"))
    document.getElementById("orderButton").innerHTML =
        t.order;
if (document.getElementById("vapeTitle"))
    document.getElementById("vapeTitle").innerHTML =
        "💨 " + t.vape;
if (document.getElementById("weedTitle"))
    document.getElementById("weedTitle").innerHTML =
        "🌿 " + t.weed;
if (document.getElementById("frozenTitle"))
    document.getElementById("frozenTitle").innerHTML =
        "❄️ " + t.frozen;
if (document.getElementById("dryTitle"))
    document.getElementById("dryTitle").innerHTML =
        "🌱 " + t.dry;
if (document.getElementById("extractTitle"))
    document.getElementById("extractTitle").innerHTML =
        "🧪 " + t.extract;
if (document.getElementById("back"))
    document.getElementById("back").innerHTML =
        t.back;
if (document.getElementById("coming"))
    document.getElementById("coming").innerHTML =
        t.coming;
if (document.getElementById("arrival"))
    document.getElementById("arrival").innerHTML =
        t.arrival;

}

/* ==========================
CARRELLO
========================== */

let cart =
JSON.parse(localStorage.getItem(“cart”)) || [];

function showCart() {

const box =
    document.getElementById("cart");
if (!box) return;
if (cart.length === 0) {
    box.innerHTML = "Nessun prodotto";
    return;
}
box.innerHTML = "";
cart.forEach((item, index) => {
    box.innerHTML +=
        item +
        ' <button onclick="removeItem(' +
        index +
        ')">❌</button><br><br>';
});

}

function removeItem(index) {

cart.splice(index, 1);
localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
showCart();

}

function sendOrder() {

if (cart.length === 0) {
    alert("Il carrello è vuoto");
    return;
}
let ordine = cart.join("\n");
let messaggio =
    "Ciao Oasis del Sur, vorrei ordinare:\n\n" +
    ordine;
let telegram =
    "https://t.me/wordex17?text=" +
    encodeURIComponent(messaggio);
window.location.href = telegram;

}

/* ==========================
AVVIO
========================== */

window.addEventListener(“load”, function() {

showCart();
const saved =
    localStorage.getItem("language");
/*
   Se l'utente ha già scelto una lingua,
   la schermata di benvenuto non viene
   mostrata nuovamente.
*/
if (saved && translations[saved]) {
    applyLanguage(saved);
    const welcome =
        document.getElementById("welcomeScreen");
    if (welcome)
        welcome.classList.add("hidden");
}

});

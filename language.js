const translations = {

it: {
    welcome: "Benvenuto",
    enter: "ENTRA",
    dispensario: "🌿 Dispensario",
    weed: "Weed",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extract",
    vape: "VAPE",
    stickers: "🏷️ Stickers",
    cart: "🛒 Carrello",
    order: "📲 Conferma ordine"
},
es: {
    welcome: "Bienvenido",
    enter: "ENTRAR",
    dispensario: "🌿 Dispensario",
    weed: "Marihuana",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extractos",
    vape: "Vaporizadores",
    stickers: "🏷️ Pegatinas",
    cart: "🛒 Carrito",
    order: "📲 Confirmar pedido"
},
en: {
    welcome: "Welcome",
    enter: "ENTER",
    dispensario: "🌿 Dispensary",
    weed: "Weed",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extract",
    vape: "Vapes",
    stickers: "🏷️ Stickers",
    cart: "🛒 Cart",
    order: "📲 Confirm order"
},
de: {
    welcome: "Willkommen",
    enter: "EINTRETEN",
    dispensario: "🌿 Shop",
    weed: "Weed",
    frozen: "Frozen",
    dry: "Dry",
    extract: "Extrakte",
    vape: "Vapes",
    stickers: "🏷️ Aufkleber",
    cart: "🛒 Warenkorb",
    order: "📲 Bestellung bestätigen"
}

};

/* ==========================
LINGUA SELEZIONATA
========================== */

let selectedWelcomeLanguage = null;

/* ==========================
SCELTA LINGUA
========================== */

function selectWelcomeLanguage(lang) {

if (!translations[lang]) {
    return;
}
selectedWelcomeLanguage = lang;
const t = translations[lang];
document.getElementById("welcomeText").innerHTML = t.welcome;
document.getElementById("enterButton").innerHTML = t.enter;
document.querySelectorAll(".welcome-languages button").forEach(function(button) {
    button.classList.remove("selected");
});
const selectedButton = document.getElementById("lang-" + lang);
if (selectedButton) {
    selectedButton.classList.add("selected");
}

}

/* ==========================
ENTRA NEL SITO
========================== */

function enterSite() {

if (!selectedWelcomeLanguage) {
    selectedWelcomeLanguage = "it";
}
localStorage.setItem(
    "language",
    selectedWelcomeLanguage
);
applyLanguage(
    selectedWelcomeLanguage
);
const welcomeScreen =
    document.getElementById("welcomeScreen");
if (welcomeScreen) {
    welcomeScreen.classList.add("hidden");
}

}

/* ==========================
TRADUZIONE
========================== */

function applyLanguage(lang) {

const t = translations[lang];
if (!t) {
    return;
}
document.documentElement.lang = lang;
if (document.getElementById("dispensario")) {
    document.getElementById("dispensario").innerHTML =
        t.dispensario;
}
if (document.getElementById("weed")) {
    document.getElementById("weed").innerHTML =
        t.weed;
}
if (document.getElementById("frozen")) {
    document.getElementById("frozen").innerHTML =
        t.frozen;
}
if (document.getElementById("dry")) {
    document.getElementById("dry").innerHTML =
        t.dry;
}
if (document.getElementById("extract")) {
    document.getElementById("extract").innerHTML =
        t.extract;
}
if (document.getElementById("vape")) {
    document.getElementById("vape").innerHTML =
        t.vape;
}
if (document.getElementById("stickers")) {
    document.getElementById("stickers").innerHTML =
        t.stickers;
}
if (document.getElementById("cartTitle")) {
    document.getElementById("cartTitle").innerHTML =
        t.cart;
}
if (document.getElementById("orderButton")) {
    document.getElementById("orderButton").innerHTML =
        t.order;
}

}

/* ==========================
CARRELLO
========================== */

let cart =
JSON.parse(localStorage.getItem(“cart”)) || [];

function showCart() {

const box =
    document.getElementById("cart");
if (!box) {
    return;
}
if (cart.length === 0) {
    box.innerHTML =
        "Nessun prodotto";
    return;
}
box.innerHTML = "";
cart.forEach(function(item, index) {
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
const ordine =
    cart.join("\n");
const messaggio =
    "Ciao Oasis del Sur, vorrei ordinare:\n\n" +
    ordine;
const telegram =
    "https://t.me/wordex17?text=" +
    encodeURIComponent(messaggio);
window.location.href = telegram;

}

/* ==========================
AVVIO
========================== */

window.addEventListener(“load”, function() {

showCart();

});

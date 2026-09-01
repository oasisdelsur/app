const translations = {
    it: {
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
        arrival: "Prodotti in arrivo...",
        emptyCart: "Nessun prodotto",
        emptyAlert: "Il carrello è vuoto",
        orderMessage: "Ciao Oasis del Sur, vorrei ordinare:"
    },
    es: {
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
        arrival: "Productos próximamente...",
        emptyCart: "Ningún producto",
        emptyAlert: "El carrito está vacío",
        orderMessage: "Hola Oasis del Sur, quisiera hacer un pedido:"
    },
    en: {
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
        arrival: "Products coming soon...",
        emptyCart: "No products",
        emptyAlert: "The cart is empty",
        orderMessage: "Hello Oasis del Sur, I would like to order:"
    },
    de: {
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
        arrival: "Produkte kommen bald...",
        emptyCart: "Keine Produkte",
        emptyAlert: "Der Warenkorb ist leer",
        orderMessage: "Hallo Oasis del Sur, ich möchte bestellen:"
    }
};
/* ==========================
   CAMBIO LINGUA
========================== */
function changeLanguage(lang) {
    if (!translations[lang]) {
        return;
    }
    localStorage.setItem("language", lang);
    const t = translations[lang];
    /* INDEX */
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
    /* PAGINE CATEGORIE */
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
    /* GENERALE */
    if (document.getElementById("back"))
        document.getElementById("back").innerHTML =
            t.back;
    if (document.getElementById("coming"))
        document.getElementById("coming").innerHTML =
            t.coming;
    if (document.getElementById("arrival"))
        document.getElementById("arrival").innerHTML =
            t.arrival;
    if (document.getElementById("cartTitle"))
        document.getElementById("cartTitle").innerHTML =
            t.cart;
    if (document.getElementById("orderButton"))
        document.getElementById("orderButton").innerHTML =
            t.order;
    document.documentElement.lang = lang;
}
/* ==========================
   LINGUA SALVATA
========================== */
window.addEventListener("load", function () {
    const saved =
        localStorage.getItem("language") || "it";
    changeLanguage(saved);
});

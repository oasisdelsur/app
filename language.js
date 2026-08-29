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
        arrival: "Prodotti in arrivo..."
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
        arrival: "Productos próximamente..."
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
        arrival: "Products coming soon..."
    },
    de: {
        dispensario: "🌿 Shop",
        vape: "Vapes",
        weed: "Weed",
        frozen: "Frozen",
        dry: "Dry",
        extract: "Extrakte",
        stickers: "🏷️ Sticker",
        cart: "🛒 Warenkorb",
        order: "📲 Bestellung bestätigen",
        back: "← Zurück",
        coming: "Noch nicht verfügbar",
        arrival: "Produkte kommen bald..."
    }
};

function openLanguage() {
    let menu = document.getElementById("languageMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    let t = translations[lang];

    if (!t) return;

    if (document.getElementById("dispensario"))
        document.getElementById("dispensario").innerHTML = t.dispensario;

    if (document.getElementById("weed"))
        document.getElementById("weed").innerHTML = t.weed;

    if (document.getElementById("frozen"))
        document.getElementById("frozen").innerHTML = t.frozen;

    if (document.getElementById("dry"))
        document.getElementById("dry").innerHTML = t.dry;

    if (document.getElementById("extract"))
        document.getElementById("extract").innerHTML = t.extract;

    if (document.getElementById("vape"))
        document.getElementById("vape").innerHTML = t.vape;

    if (document.getElementById("stickers"))
        document.getElementById("stickers").innerHTML = t.stickers;

    if (document.getElementById("vapeTitle"))
        document.getElementById("vapeTitle").innerHTML = "💨 " + t.vape;

    if (document.getElementById("weedTitle"))
        document.getElementById("weedTitle").innerHTML = "🌿 " + t.weed;

    if (document.getElementById("frozenTitle"))
        document.getElementById("frozenTitle").innerHTML = "❄️ " + t.frozen;

    if (document.getElementById("dryTitle"))
        document.getElementById("dryTitle").innerHTML = "🌱 " + t.dry;

    if (document.getElementById("extractTitle"))
        document.getElementById("extractTitle").innerHTML = "🧪 " + t.extract;

    if (document.getElementById("back"))
        document.getElementById("back").innerHTML = t.back;

    if (document.getElementById("coming"))
        document.getElementById("coming").innerHTML = t.coming;

    if (document.getElementById("arrival"))
        document.getElementById("arrival").innerHTML = t.arrival;

    if (document.getElementById("cartTitle"))
        document.getElementById("cartTitle").innerHTML = t.cart;

    if (document.getElementById("orderButton"))
        document.getElementById("orderButton").innerHTML = t.order;

    document.documentElement.lang = lang;

    let menu = document.getElementById("languageMenu");
    if (menu) {
        menu.classList.remove("show");
    }
}

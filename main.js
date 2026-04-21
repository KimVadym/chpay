// =====================================================
// CONFIG
// =====================================================
const CATEGORY_ICONS = {
  grill: "fa-fire",
  pilaf: "fa-bowl-rice",
  soups: "fa-bowl-food",
  salads: "fa-seedling",
  cold: "fa-cheese",
  special: "fa-star",
  mains: "fa-drumstick-bite",
  desserts: "fa-cake-candles"
};

const CONTACTS = {
  googleMap: "#",
  kakaoMap: "#",
  phone: "010-5949-7681",
  instagram: "https://instagram.com/chaihana_incheon"
};

const translations = {
  ru: {
    brandBadge: "Premium Taste",
    heroTitle: "Вкус восточной кухни",
    heroSubtitle:
      "На карточке спереди — фото, название и цена. Нажми на карточку, чтобы увидеть вес, состав и описание.",
    cartTitle: "Корзина",
    cartButton: "Корзина",
    total: "Итого",
    orderBtn: "Отправить в Telegram",
    payBtn: "Оплатить KakaoPay",
    cartEmpty: "Корзина пуста",
    add: "Добавить",
    added: "Добавлено в корзину",
    yourName: "Имя",
    yourPhone: "Телефон",
    orderType: "Тип заказа",
    comment: "Комментарий",
    placeholderName: "Введите имя",
    placeholderPhone: "010-0000-0000",
    placeholderComment: "Например: без лука",
    pickup: "Самовывоз",
    delivery: "Доставка",
    hall: "В зал / к столу",
    enterName: "Введите имя",
    enterPhone: "Введите телефон",
    orderSent: "Заказ успешно отправлен",
    orderError: "Ошибка отправки заказа",
    paymentError: "Ошибка оплаты",
    connectError: "Ошибка подключения KakaoPay",
    productWeight: "Вес",
    productIngredients: "Состав",
    productAbout: "О блюде",
    qty: "Количество"
  },
  en: {
    brandBadge: "Premium Taste",
    heroTitle: "Taste of Eastern Cuisine",
    heroSubtitle:
      "The front side shows the photo, name and price. Tap the card to see weight, ingredients and description.",
    cartTitle: "Cart",
    cartButton: "Cart",
    total: "Total",
    orderBtn: "Send to Telegram",
    payBtn: "Pay with KakaoPay",
    cartEmpty: "Cart is empty",
    add: "Add",
    added: "Added to cart",
    yourName: "Name",
    yourPhone: "Phone",
    orderType: "Order type",
    comment: "Comment",
    placeholderName: "Enter your name",
    placeholderPhone: "010-0000-0000",
    placeholderComment: "For example: no onion",
    pickup: "Pickup",
    delivery: "Delivery",
    hall: "Dine in",
    enterName: "Enter your name",
    enterPhone: "Enter phone number",
    orderSent: "Order sent successfully",
    orderError: "Failed to send order",
    paymentError: "Payment error",
    connectError: "KakaoPay connection error",
    productWeight: "Weight",
    productIngredients: "Ingredients",
    productAbout: "About",
    qty: "Quantity"
  },
  kr: {
    brandBadge: "Premium Taste",
    heroTitle: "동양 요리의 맛",
    heroSubtitle:
      "카드 앞면에는 사진, 이름, 가격이 있습니다. 카드를 눌러 중량, 재료, 설명을 확인하세요.",
    cartTitle: "장바구니",
    cartButton: "장바구니",
    total: "합계",
    orderBtn: "텔레그램으로 보내기",
    payBtn: "카카오페이로 결제",
    cartEmpty: "장바구니가 비어 있습니다",
    add: "추가",
    added: "장바구니에 추가되었습니다",
    yourName: "이름",
    yourPhone: "전화번호",
    orderType: "주문 방식",
    comment: "메모",
    placeholderName: "이름 입력",
    placeholderPhone: "010-0000-0000",
    placeholderComment: "예: 양파 빼주세요",
    pickup: "포장",
    delivery: "배달",
    hall: "매장 식사",
    enterName: "이름을 입력하세요",
    enterPhone: "전화번호를 입력하세요",
    orderSent: "주문이 성공적으로 전송되었습니다",
    orderError: "주문 전송 실패",
    paymentError: "결제 오류",
    connectError: "카카오페이 연결 오류",
    productWeight: "중량",
    productIngredients: "재료",
    productAbout: "설명",
    qty: "수량"
  }
};

// =====================================================
// STATE
// =====================================================
let currentLang = "ru";
let cart = [];
let activeCategory = null;

// MENU_DATA должен быть подключён отдельным файлом до main.js
if (!Array.isArray(window.MENU_DATA) && !Array.isArray(typeof MENU_DATA !== "undefined" ? MENU_DATA : null)) {
  console.error("MENU_DATA not found");
}
const menuSource = Array.isArray(window.MENU_DATA)
  ? window.MENU_DATA
  : (typeof MENU_DATA !== "undefined" ? MENU_DATA : []);

// =====================================================
// DOM
// =====================================================
const googleMapBtn = document.getElementById("googleMapBtn");
const kakaoMapBtn = document.getElementById("kakaoMapBtn");
const phoneBtn = document.getElementById("phoneBtn");
const instagramBtn = document.getElementById("instagramBtn");

const langButtons = document.querySelectorAll(".lang-btn");

const categoryMenu = document.getElementById("topCategoryNav");
const cardsGrid = document.getElementById("menuGrid");

const heroBadge = document.querySelector(".hero-badge");
const heroTitle = document.querySelector(".hero h1");
const heroSubtitle = document.querySelector(".hero p");

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");

const cartModal = document.getElementById("cartModal");
const cartOpenBtn = document.getElementById("cartOpenBtn");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const cartTitle = document.getElementById("cartTitle");
const totalLabel = document.getElementById("totalLabel");
const cartButtonText = document.getElementById("cartButtonText");
const orderBtn = document.getElementById("orderBtn");
const orderBtnText = document.getElementById("orderBtnText");
const kakaoPayBtn = document.getElementById("kakaoPayBtn");

// =====================================================
// HELPERS
// =====================================================
function t(key) {
  return translations[currentLang]?.[key] ?? translations.ru[key] ?? key;
}

function getText(value) {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  return value[currentLang] || value.ru || value.en || value.kr || "";
}

function formatPrice(price) {
  return `₩${Number(price || 0).toLocaleString("ko-KR")}`;
}

function sanitizePhone(phone = "") {
  return String(phone).replace(/[^\d+]/g, "").trim();
}

// function showToast(message) {
//   alert(message);
// }

function findItemById(itemId) {
  for (const section of menuSource) {
    const found = section.items.find((item) => item.id === itemId);
    if (found) return found;
  }
  return null;
}

function getCartQty(itemId) {
  const found = cart.find((item) => item.id === itemId);
  return found ? found.qty : 0;
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCustomerData() {
  return {
    customerName: document.getElementById("customerName")?.value.trim() || "",
    phone: document.getElementById("customerPhone")?.value.trim() || "",
    deliveryType: document.getElementById("deliveryType")?.value || "pickup",
    comment: document.getElementById("customerComment")?.value.trim() || ""
  };
}

function closeModalById(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("hidden");
}

function openModalById(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("hidden");
}

// =====================================================
// CONTACTS
// =====================================================
function applyContacts() {
  if (googleMapBtn) googleMapBtn.href = CONTACTS.googleMap;
  if (kakaoMapBtn) kakaoMapBtn.href = CONTACTS.kakaoMap;
  if (phoneBtn) phoneBtn.href = `tel:${CONTACTS.phone}`;
  if (instagramBtn) instagramBtn.href = CONTACTS.instagram;
}

// =====================================================
// TRANSLATIONS
// =====================================================
function applyTranslations() {
  if (heroBadge) heroBadge.textContent = t("brandBadge");
  if (heroTitle) heroTitle.textContent = t("heroTitle");
  if (heroSubtitle) heroSubtitle.textContent = t("heroSubtitle");
  if (cartTitle) cartTitle.textContent = t("cartTitle");
  if (cartButtonText) cartButtonText.textContent = t("cartButton");
  if (totalLabel) totalLabel.textContent = t("total");
  if (orderBtnText) orderBtnText.textContent = t("orderBtn");

  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerComment = document.getElementById("customerComment");
  const deliveryType = document.getElementById("deliveryType");

  if (customerName) customerName.placeholder = t("placeholderName");
  if (customerPhone) customerPhone.placeholder = t("placeholderPhone");
  if (customerComment) customerComment.placeholder = t("placeholderComment");

  if (deliveryType) {
    const currentValue = deliveryType.value || "pickup";
    deliveryType.innerHTML = `
      <option value="pickup">${t("pickup")}</option>
      <option value="hall">${t("hall")}</option>
      <option value="delivery">${t("delivery")}</option>
    `;
    deliveryType.value = currentValue;
  }

  if (kakaoPayBtn) {
    const span = kakaoPayBtn.querySelector("span");
    if (span) span.textContent = t("payBtn");
  }
}

// =====================================================
// CATEGORY NAV
// =====================================================
function renderCategoryMenu() {
  if (!categoryMenu) return;

  categoryMenu.innerHTML = menuSource.map((section, index) => {
    const icon = CATEGORY_ICONS[section.category] || "fa-utensils";
    const isActive = (activeCategory || menuSource[0]?.category) === section.category;
    return `
      <button class="menu-chip ${isActive ? "active" : ""}" data-target="${section.category}" type="button">
        <i class="fa-solid ${icon}"></i>
        <span>${getText(section.categoryLabel)}</span>
      </button>
    `;
  }).join("");

  categoryMenu.querySelectorAll("[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.target;
      document.getElementById(`section-${id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function setupSectionObserver() {
  const sections = [...document.querySelectorAll(".menu-category-section")];
  const buttons = [...document.querySelectorAll(".menu-chip")];
  if (!sections.length || !buttons.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const id = visible.target.id.replace("section-", "");
      activeCategory = id;

      buttons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.target === id);
      });
    },
    {
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0.2, 0.35, 0.5, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// =====================================================
// MENU CARDS
// =====================================================
function renderMenu() {
  if (!cardsGrid) return;

  cardsGrid.innerHTML = menuSource.map((section) => `
    <section class="menu-category-section" id="section-${section.category}">
      <div style="grid-column: 1 / -1; margin-bottom: 8px;">
        <h2 style="margin: 8px 0 0; font-size: 28px;">${getText(section.categoryLabel)}</h2>
      </div>

      ${section.items.map((item) => `
        <div class="card-wrap">
          <article class="card" data-card="${item.id}">
            <div class="card-face card-front">
              <img class="card-image" src="${item.image}" alt="${getText(item.name)}" />
              <div class="card-front-content">
                <h3 class="card-title">${getText(item.name)}</h3>
                <div class="card-price">${formatPrice(item.price)}</div>
                <button class="add-btn" data-add="${item.id}" type="button">${t("add")}</button>
              </div>
            </div>

            <div class="card-face card-back">
              <div class="back-line">
                <span>${t("productWeight")}</span>
                <strong>${getText(item.desc) || "-"}</strong>
              </div>

              <div class="back-line">
                <span>${t("productIngredients")}</span>
                <strong>${getText(item.ingredients) || "-"}</strong>
              </div>

              <div class="back-line">
                <span>${t("productAbout")}</span>
                <strong>${getText(item.about) || "-"}</strong>
              </div>

              <button class="add-btn" data-add="${item.id}" type="button">
                ${t("add")} (${getCartQty(item.id)})
              </button>
            </div>
          </article>
        </div>
      `).join("")}
    </section>
  `).join("");

  cardsGrid.querySelectorAll("[data-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      card.classList.toggle("flipped");
    });

    card.addEventListener("dblclick", () => {
      openProductModal(Number(card.dataset.card));
    });
  });

  cardsGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(Number(button.dataset.add), 1);
      showToast(t("added"));
    });
  });

  setupSectionObserver();
}

// =====================================================
// PRODUCT MODAL
// =====================================================
function openProductModal(itemId) {
  const item = findItemById(itemId);
  if (!item || !productModalContent) return;

  productModalContent.innerHTML = `
    <div class="product-modal-grid">
      <img src="${item.image}" alt="${getText(item.name)}" />

      <div>
        <h2 style="margin-top:0;">${getText(item.name)}</h2>
        <div style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">${formatPrice(item.price)}</div>

        <div class="back-line">
          <span>${t("productWeight")}</span>
          <strong>${getText(item.desc) || "-"}</strong>
        </div>

        <div class="back-line">
          <span>${t("productIngredients")}</span>
          <strong>${getText(item.ingredients) || "-"}</strong>
        </div>

        <div class="back-line">
          <span>${t("productAbout")}</span>
          <strong>${getText(item.about) || "-"}</strong>
        </div>

        <div class="qty-row">
          <button class="qty-btn" id="modalMinus" type="button">-</button>
          <span class="qty-value" id="modalQty">${getCartQty(item.id)}</span>
          <button class="qty-btn" id="modalPlus" type="button">+</button>
          <button class="add-btn" id="modalAddBtn" type="button">${t("add")}</button>
        </div>
      </div>
    </div>
  `;

  openModalById("productModal");

  document.getElementById("modalMinus")?.addEventListener("click", () => {
    addToCart(item.id, -1);
    const qtyEl = document.getElementById("modalQty");
    if (qtyEl) qtyEl.textContent = getCartQty(item.id);
  });

  document.getElementById("modalPlus")?.addEventListener("click", () => {
    addToCart(item.id, 1);
    const qtyEl = document.getElementById("modalQty");
    if (qtyEl) qtyEl.textContent = getCartQty(item.id);
  });

  document.getElementById("modalAddBtn")?.addEventListener("click", () => {
    addToCart(item.id, 1);
    const qtyEl = document.getElementById("modalQty");
    if (qtyEl) qtyEl.textContent = getCartQty(item.id);
    showToast(t("added"));
  });
}

// =====================================================
// CART
// =====================================================
function addToCart(itemId, delta) {
  const item = findItemById(itemId);
  if (!item) return;

  const existing = cart.find((cartItem) => cartItem.id === itemId);

  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      cart = cart.filter((cartItem) => cartItem.id !== itemId);
    }
  } else if (delta > 0) {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    });
  }

  renderCart();
  renderMenu();
}

function renderCart() {
  if (!cartItems || !cartTotal || !cartCount) return;

  const total = getCartTotal();
  const count = getCartCount();

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="premium-empty">
        <i class="fa-solid fa-bag-shopping" style="font-size:28px; margin-bottom:12px; color:#d4a64a;"></i>
        <div style="font-size:18px; font-weight:800; margin-bottom:8px;">${t("cartEmpty")}</div>
        <div style="color:#8f96a3;">Добавьте блюда из меню, чтобы оформить заказ.</div>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map((item) => {
      const sourceItem = findItemById(item.id);
      const image = sourceItem?.image || "./images/grill.png";

      return `
        <div class="premium-cart-item">
          <img class="premium-cart-item-image" src="${image}" alt="${getText(item.name)}" />

          <div>
            <div class="premium-cart-item-name">${getText(item.name)}</div>
            <div class="premium-cart-item-meta">${formatPrice(item.price)} × ${item.qty}</div>
            <div class="premium-cart-item-subtotal">${formatPrice(item.price * item.qty)}</div>
          </div>

          <div class="premium-cart-item-controls">
            <div class="premium-qty-box">
              <button class="qty-btn" data-cart-minus="${item.id}" type="button">-</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" data-cart-plus="${item.id}" type="button">+</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  cartTotal.textContent = formatPrice(total);
  cartCount.textContent = String(count);

  cartItems.querySelectorAll("[data-cart-minus]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.cartMinus), -1));
  });

  cartItems.querySelectorAll("[data-cart-plus]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.cartPlus), 1));
  });
}

// =====================================================
// TELEGRAM ORDER
// =====================================================
async function submitTelegramOrder() {
  if (!cart.length) {
    showToast(t("cartEmpty"));
    return;
  }

  const customer = getCustomerData();

  if (!customer.customerName) {
    showToast(t("enterName"));
    return;
  }

  if (!customer.phone) {
    showToast(t("enterPhone"));
    return;
  }

  const payload = {
    lang: currentLang,
    customerName: customer.customerName,
    customerPhone: customer.phone,
    comment: customer.comment,
    deliveryType: customer.deliveryType,
    items: cart.map((item) => ({
      name: getText(item.name),
      price: item.price,
      qty: item.qty
    })),
    total: getCartTotal()
  };

  if (orderBtn) orderBtn.disabled = true;

  try {
    const response = await fetch("/.netlify/functions/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Request failed");

    showToast(t("orderSent"));
    cart = [];
    renderCart();
    renderMenu();

    const formIds = ["customerName", "customerPhone", "customerComment"];
    formIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });

    const deliveryType = document.getElementById("deliveryType");
    if (deliveryType) deliveryType.value = "pickup";

    closeModalById("cartModal");
  } catch (error) {
    console.error(error);
    showToast(t("orderError"));
  } finally {
    if (orderBtn) orderBtn.disabled = false;
  }
}

// =====================================================
// KAKAO PAY
// =====================================================
function getKakaoPayload() {
  const customer = getCustomerData();

  return {
    customerName: customer.customerName,
    phone: customer.phone,
    comment: customer.comment,
    deliveryType: customer.deliveryType,
    items: cart.map((item) => ({
      name: getText(item.name),
      qty: item.qty,
      price: item.price
    })),
    totalAmount: getCartTotal()
  };
}

async function startKakaoPay() {
  const payload = getKakaoPayload();

  if (!payload.customerName) {
    showToast(t("enterName"));
    return;
  }

  if (!payload.phone) {
    showToast(t("enterPhone"));
    return;
  }

  if (!payload.items.length) {
    showToast(t("cartEmpty"));
    return;
  }

  try {
    const res = await fetch("/.netlify/functions/create-kakaopay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      showToast(data.error || t("paymentError"));
      return;
    }

    localStorage.setItem("lastOrderNumber", data.orderNumber);
    localStorage.setItem("lastOrderPhone", payload.phone);
    window.location.href = data.redirectUrl;
  } catch (error) {
    console.error(error);
    showToast(t("connectError"));
  }
}

// =====================================================
// EVENTS
// =====================================================
function bindEvents() {
  applyContacts();

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  cartOpenBtn?.addEventListener("click", () => {
    openModalById("cartModal");
  });

  orderBtn?.addEventListener("click", submitTelegramOrder);
  kakaoPayBtn?.addEventListener("click", startKakaoPay);

  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModalById(button.dataset.close);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModalById("productModal");
      closeModalById("cartModal");
    }
  });
}

// =====================================================
// LANGUAGE
// =====================================================
function setLanguage(lang) {
  currentLang = lang;

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  applyTranslations();
  renderCategoryMenu();
  renderMenu();
  renderCart();
}

// =====================================================
// START
// =====================================================
bindEvents();
setLanguage("ru");
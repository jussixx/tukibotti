/* =========================================================
   Ohjattu demo-chatbotti – app.js (VALMIS)
   - Päätöspuu FLOW-objektissa (helppo muokata)
   - Linkit LINKS-objektissa
   - Navigointi:
       * ← Takaisin (alhaalla): yksi askel taakse
       * Aloita alusta (ylhäällä): palaa alkuun
   - TVT LK5: lyhyt vinkki + "Tutustu tarkemmin..." + linkki
   - Auto-scroll: rullaa aina viimeiseen viestiin (ei jää footerin alle)
   ========================================================= */

/* =========================
   Linkit
   ========================= */
const LINKS = {
  ohjelmointi_vlk5_sisallot:
    "https://sites.google.com/d/1piFANPNP5Si0Z3igSdJK_LRfjOG8UdG_/p/1ki1p_3JeuHsKZCqpE3-_Fkblr7oleaHN/edit",
  ohjelmointi_tuntisuunnitelmat:
    "https://sites.google.com/d/1piFANPNP5Si0Z3igSdJK_LRfjOG8UdG_/p/1YFA_TbgdMfjnsuE4ka6wAvUJ0vCRLjYX/edit",
  yhteystiedot:
    "https://sites.google.com/d/1piFANPNP5Si0Z3igSdJK_LRfjOG8UdG_/p/1WU4pVdMTM58K6i-dlKW1qBzZe4hHoi_n/edit",
  tvt_vlk5:
    "https://sites.google.com/d/1piFANPNP5Si0Z3igSdJK_LRfjOG8UdG_/p/1imiSGd2Y6ymRa0Fgk9-DcgvpziTUt_Xb/edit",
};

/* =========================
   Päätöspuu
   =========================
  action-tyypit:
    - { type: "link", urlKey, title, preface? }
    - { type: "message", text }
    - { type: "tiplink", tip, link: { urlKey, title } }
*/
const FLOW = {
  root: {
    intro: "Hei! Valitse alhaalta vaihtoehto, niin ohjaan sinua.",
    prompt: "Missä tarvitset apua?",
    choices: [
      { label: "Ohjelmointi", next: "ohjelmointi_grade" },
      { label: "TVT-strategia", next: "tvt_grade" },
      {
        label: "Yhteystiedot",
        action: {
          type: "link",
          preface:
            "Tietoturvavastaava: Maija Tietäjä, puh. 040-1234567, Pedagoginen tuki: Matti Vinkkipankki, puh. 040-7654321",
          urlKey: "yhteystiedot",
          title: " Kaikki yhteystiedot",
        },
      },
    ],
  },

  tvt_grade: {
    prompt: "TVT-strategia: valitse luokka-asteesi:",
    choices: [
      {
        label: "LK 1",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      {
        label: "LK 2",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      {
        label: "LK 3",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      {
        label: "LK 4",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      { label: "LK 5", next: "tvt_grade_5" },
      {
        label: "LK 6",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
    ],
  },

  tvt_grade_5: {
    prompt: "Vuosiluokka 5: tärkeimmät TVT-sisällöt",
    choices: [
      {
        label: "Tiedonhaku ja lähdekritiikki",
        action: {
          type: "tiplink",
          tip: "Kun haet tietoa, älä luota ensimmäiseen tulokseen. Tarkista kuka tekstin on tehnyt ja vertaa samaa asiaa useammasta lähteestä.",
          link: { urlKey: "tvt_vlk5", title: "TVT-sisällöt (LK 5)" },
        },
      },
      {
        label: "Tekstinkäsittely ja työn viimeistely",
        action: {
          type: "tiplink",
          tip: "Käytä otsikoita ja lyhyitä kappaleita. Lisää kuvia vain, jos ne auttavat ymmärtämään. Muista tallentaa työ usein.",
          link: { urlKey: "tvt_vlk5", title: "TVT-sisällöt (LK 5)" },
        },
      },
      {
        label: "Esitykset ja mediasisällöt",
        action: {
          type: "tiplink",
          tip: "Dioihin riittää muutama sana. Käytä isoa fonttia ja kuvia tukena. Harjoittele esitys ennen esittämistä.",
          link: { urlKey: "tvt_vlk5", title: "TVT-sisällöt (LK 5)" },
        },
      },
      {
        label: "Tiedostot ja pilvipalvelut",
        action: {
          type: "tiplink",
          tip: "Nimeä tiedostot selkeästi ja pidä kansiot järjestyksessä. Tarkista aina, kenelle jaat tiedoston.",
          link: { urlKey: "tvt_vlk5", title: "TVT-sisällöt (LK 5)" },
        },
      },
      {
        label: "Digiturva ja nettietiketti",
        action: {
          type: "tiplink",
          tip: "Älä jaa salasanoja. Älä julkaise asioita, joita et haluaisi kaikkien näkevän. Kerro aikuiselle, jos jokin tuntuu väärältä.",
          link: { urlKey: "tvt_vlk5", title: "TVT-sisällöt (LK 5)" },
        },
      },
    ],
  },

  ohjelmointi_grade: {
    prompt: "Ohjelmointi: valitse luokka-asteesi:",
    choices: [
      {
        label: "LK 1",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      {
        label: "LK 2",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      {
        label: "LK 3",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      {
        label: "LK 4",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
      { label: "LK 5", next: "ohjelmointi_grade_5" },
      {
        label: "LK 6",
        action: {
          type: "message",
          text: "Tämä on demoversio. Klikkaa LK 5 nähdäksesi enemmän sisältöä..",
        },
      },
    ],
  },

  ohjelmointi_grade_5: {
    prompt: "Vuosiluokka 5: ohjelmointi",
    choices: [
      {
        label: "Ohjelmoinnin sisällöt",
        action: {
          type: "link",
          urlKey: "ohjelmointi_vlk5_sisallot",
          title: "Ohjelmoinnin sisällöt (LK 5)",
          preface:
            "5.-luokkalaisten ohjelmointiosaamiseen kuuluu esim. toistorakenteet (silmukka), graafinen ohjelmointiympäristö, oman ohjelman, pelin tai animaation laatiminen, virheiden korjaaminen ohjelma koodissa. Tutustu tarkemmin sisältöihin linkistä.",
        },
      },
      {
        label: "Valmiita tuntisuunnitelmia",
        action: {
          type: "link",
          urlKey: "ohjelmointi_tuntisuunnitelmat",
          title: "Valmiit tuntisuunnitelmat",
          preface: "Tutustu tarkemmin sisältöihin alla olevasta linkistä.",
        },
      },
    ],
  },
};

/* =========================
   UI-elementit
   ========================= */
const elMessages = document.getElementById("messages");
const elChoices = document.getElementById("choices");
const btnReset = document.getElementById("btnReset"); // ylhäällä
const btnBackBottom = document.getElementById("btnBackBottom"); // alhaalla

const state = {
  currentNodeId: "root",
  history: [], // stack of nodeIds
};

/* =========================
   Init
   ========================= */
init();

function init() {
  if (!elMessages || !elChoices || !btnReset || !btnBackBottom) {
    // auttaa nopeassa debugissa jos id:t eivät täsmää
    // eslint-disable-next-line no-console
    console.error(
      "Puuttuva DOM-elementti. Tarkista että id:t ovat: messages, choices, btnReset, btnBackBottom.",
    );
    return;
  }

  btnReset.addEventListener("click", resetAll);
  btnBackBottom.addEventListener("click", goBack);

  renderNode("root", { showIntro: true });
}

/* =========================
   Auto-scroll (tärkeä)
   ========================= */
function scrollToLatest() {
  const chat = document.querySelector(".widget__chat");
  const lastMsg = elMessages.lastElementChild;
  if (!chat || !lastMsg) return;

  // Odotetaan, että layout päivittyy (muuten viimeinen viesti voi jäädä peittoon)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      lastMsg.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  });
}

/* =========================
   Navigointi
   ========================= */
function resetAll() {
  state.currentNodeId = "root";
  state.history = [];
  elMessages.innerHTML = "";
  renderNode("root", { showIntro: true });
  toggleBack();
  scrollToLatest();
}

function goBack() {
  if (state.history.length === 0) return;

  const prevNodeId = state.history.pop();
  state.currentNodeId = prevNodeId;

  // Poistetaan viimeisin user+bot -pari (kevyt malli)
  removeLastMessagePair();

  // Ei näytetä introa enää takaisin-navigoinnissa
  renderNode(prevNodeId, { showIntro: false });
  toggleBack();
  scrollToLatest();
}

function toggleBack() {
  btnBackBottom.disabled = state.history.length === 0;
}

/* =========================
   Renderöinti
   ========================= */
function renderNode(nodeId, { showIntro }) {
  const node = FLOW[nodeId];
  if (!node) {
    renderBotMessage("Virhe: polkua ei löydy. Tarkista FLOW-objekti.");
    renderChoices([]);
    toggleBack();
    return;
  }

  state.currentNodeId = nodeId;

  if (nodeId === "root" && showIntro && node.intro) {
    renderBotMessage(node.intro);
  }

  renderBotMessage(node.prompt);
  renderChoices(node.choices);
  toggleBack();
}

function renderChoices(choices) {
  elChoices.innerHTML = "";

  choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choiceBtn" + (idx === 0 ? " choiceBtn--accent" : "");
    btn.textContent = choice.label;
    btn.addEventListener("click", () => handleChoice(choice));
    elChoices.appendChild(btn);
  });

  // jos ei ole valintoja, piilotetaan alue tyylikkäästi (valinnainen)
  // elChoices.style.display = choices.length ? "flex" : "none";
}

function handleChoice(choice) {
  // Poista aktiivinen tila kaikilta
  document.querySelectorAll(".choiceBtn").forEach((btn) => {
    btn.classList.remove("choiceBtn--active");
  });

  // Etsi klikattu nappi ja merkitse aktiiviseksi
  const buttons = Array.from(document.querySelectorAll(".choiceBtn"));
  const clicked = buttons.find((b) => b.textContent === choice.label);
  if (clicked) {
    clicked.classList.add("choiceBtn--active");
  }

  renderUserMessage(choice.label);

  state.history.push(state.currentNodeId);
  toggleBack();

  if (choice.next) {
    renderNode(choice.next, { showIntro: true });
    return;
  }

  if (choice.action) {
    handleAction(choice.action);
    return;
  }
}

function handleAction(action) {
  if (action.type === "message") {
    renderBotMessage(action.text);
    return;
  }

  if (action.type === "link") {
    const url = LINKS[action.urlKey];
    if (!url) {
      renderBotMessage("Virhe: linkkiä ei löydy.");
      return;
    }
    renderBotLinkCard(
      action.preface || "Tutustu tarkemmin sisältöihin täältä.",
      action.title || "Avaa sivu",
      url,
    );
    return;
  }

  if (action.type === "tiplink") {
    renderBotMessage(action.tip);

    const url = LINKS[action.link.urlKey];
    if (!url) {
      renderBotMessage("Virhe: linkkiä ei löydy.");
      return;
    }

    renderBotLinkCard(
      "Tutustu tarkemmin sisältöihin täältä.",
      action.link.title || "Avaa sivu",
      url,
    );
    return;
  }

  renderBotMessage("Virhe: tuntematon toiminto.");
}

/* =========================
   Viestit
   ========================= */
function renderBotMessage(text) {
  const div = document.createElement("div");
  div.className = "msg msg--bot";
  div.textContent = text;
  elMessages.appendChild(div);
  scrollToLatest();
}

function renderUserMessage(text) {
  const div = document.createElement("div");
  div.className = "msg msg--user";
  div.textContent = text;
  elMessages.appendChild(div);
  scrollToLatest();
}

function renderBotLinkCard(prefaceText, title, url) {
  const wrapper = document.createElement("div");
  wrapper.className = "msg msg--bot";

  const p = document.createElement("div");
  p.textContent = prefaceText;
  wrapper.appendChild(p);

  const card = document.createElement("div");
  card.className = "cardLink";

  const left = document.createElement("div");
  left.className = "cardLink__text";
  left.textContent = title;

  const a = document.createElement("a");
  a.className = "cardLink__btn";
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = "Avaa sivu";

  card.appendChild(left);
  card.appendChild(a);
  wrapper.appendChild(card);

  const meta = document.createElement("div");
  meta.className = "msg__meta";
  meta.textContent = "Avautuu uuteen välilehteen.";
  wrapper.appendChild(meta);

  elMessages.appendChild(wrapper);
  scrollToLatest();
}

/* =========================
   Takaisin: siisti poisto
   =========================
   Poistaa viimeisimmät 2 viestiä (user + bot).
   Jos toiminto lisäsi 2 bot-viestiä (tiplink), tämä ei täydellisesti kumoa kaikkea,
   mutta käytännössä riittää demoon. Jos haluat täysin tarkan peruutuksen, tehdään
   viestikohtainen history myöhemmin.
*/
function removeLastMessagePair() {
  for (let i = 0; i < 2; i++) {
    const last = elMessages.lastElementChild;
    if (last) last.remove();
  }
}

import { setContext } from "./context.js";
import { t } from "./i18n.js";
import { mountStack } from "./stack.js";
import { citizenHeader, bindLang, esc, icon, siteFooter } from "./ui.js";

/* =========================================================
   BhuSamhita LANDING PAGE
   Both calls to action lead to gated routes (#/map, #/services);
   app.js prompts for sign-in and returns the user to the page they asked for.
   ========================================================= */

export function renderLanding(root, rerender, params = {}) {

  setContext({ page: "home" }, { replace: true });

  root.innerHTML = `
  <div class="page landing">

    ${citizenHeader("home")}

    <main>

      <!-- HERO — LEFT: Prime Minister · CENTRE: BhuSamhita · RIGHT: Minister of Rural Development -->
      <section class="hero-portal" aria-labelledby="hero-title">
        <div class="hp-grid">

          <figure class="hp-person hp-left">
            <img
              src="./assets/pm-modi.jpg"
              width="1288"
              height="1289"
              alt="${esc(t("pmName"))}, ${esc(t("pmRole"))}"
            />
            <figcaption>
              <b>${esc(t("pmName"))}</b>
              <span>${esc(t("pmRole"))}</span>
            </figcaption>
          </figure>

          <div class="hp-center">
            <h1 id="hero-title">${esc(t("brand"))}</h1>
            <div class="hp-rule" aria-hidden="true"></div>
            <p class="hp-tagline">${esc(t("taglineA"))}<span class="hp-hl">${esc(t("taglineB"))}</span></p>
            <p class="hp-intro">${esc(t("intro"))}</p>
            <div class="hp-cta">
              <a class="btn primary lg" href="#/map?search">
                ${icon.search} ${esc(t("qaUlpin"))}
              </a>
              <a class="btn lg" href="#/services">
                ${icon.grid} ${esc(t("tryServices"))}
              </a>
            </div>
          </div>

          <figure class="hp-person hp-right">
            <img
              src="./assets/rd-minister-cutout.png"
              width="1143"
              height="1338"
              alt="${esc(t("mordName"))}, ${esc(t("mordRole"))}"
            />
            <figcaption>
              <b>${esc(t("mordName"))}</b>
              <span>${esc(t("mordRole"))}</span>
            </figcaption>
          </figure>

        </div>
      </section>

      <!-- WHAT LAND STACK CONNECTS -->
      <section class="connects-band" id="connects">
        <div class="wrap">
          <div class="sec-intro"><h2>${esc(t("connects"))}</h2><p>${esc(t("connectsD"))}</p></div>
          <div id="lstack"></div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="band">
        <div class="wrap">
          <h2 class="sec-h">${esc(t("howItWorks"))}</h2>
          <ol class="chain-lg">
            <li><b>${esc(t("storyParcel"))}</b><span>${esc(t("storyParcelD"))}</span></li>
            <li><b>${esc(t("storyUlpin"))}</b><span>${esc(t("storyUlpinD"))}</span></li>
            <li><b>${esc(t("storyRecords"))}</b><span>${esc(t("storyRecordsD"))}</span></li>
            <li><b>${esc(t("storyProfile"))}</b><span>${esc(t("storyProfileD"))}</span></li>
          </ol>
        </div>
      </section>

    </main>

    ${siteFooter()}

  </div>
  `;

  bindLang(root, rerender);
  mountStack(root.querySelector("#lstack"));

  // Deep link (#/explore) scrolls to the connected-stack section.
  if (params.section) setTimeout(() => root.querySelector("#connects")?.scrollIntoView({ block: "start" }), 50);
}

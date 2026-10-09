const { chromium } = require("C:/Users/offic/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const project = path.resolve(__dirname, "..");
const pagePath = path.join(project, "shelter-food-campaign.html");
const output = path.resolve(project, "..", "outputs", "qa");
fs.mkdirSync(output, { recursive: true });

const widths = [1920, 1600, 1480, 1440, 1366, 1280, 1242, 1200, 1024, 900, 768, 600, 480, 430, 390, 375, 360, 320];
;(async () => {
const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
});
const reports = [];

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
  await page.goto(`file:///${pagePath.replace(/\\/g, "/")}`, { waitUntil: "load" });
  await page.waitForTimeout(350);

  const layout = await page.evaluate(() => {
    const root = document.documentElement;
    const overflow = [...document.querySelectorAll("body *")]
      .filter(element => {
        if (element.closest(".mjks-dignity__supporters, .mjks-dignity__gallery-track")) return false;
        if (element.classList.contains("mjks-dignity__dot")) return false;
        const rect = element.getBoundingClientRect();
        return rect.right > root.clientWidth + 1 || rect.left < -1;
      })
      .slice(0, 12)
      .map(element => ({ tag: element.tagName, className: String(element.className).slice(0, 90), left: Math.round(element.getBoundingClientRect().left), right: Math.round(element.getBoundingClientRect().right) }));
    return {
      viewport: root.clientWidth,
      scrollWidth: root.scrollWidth,
      pageHeight: root.scrollHeight,
      h1: document.querySelectorAll("h1").length,
      headerCount: document.querySelectorAll("header").length,
      footerCount: document.querySelectorAll("footer").length,
      donationOverflowY: getComputedStyle(document.querySelector(".donation-panel")).overflowY,
      donationMaxHeight: getComputedStyle(document.querySelector(".donation-panel")).maxHeight,
      overflow
    };
  });

  await page.screenshot({ path: path.join(output, `campaign-${width}.png`), fullPage: true });
  reports.push({ width, errors, ...layout });
  await context.close();
}

const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto(`file:///${pagePath.replace(/\\/g, "/")}`, { waitUntil: "load" });
const functional = {};

await page.locator('[data-donation-type="recurring"]').click();
functional.recurringVisible = await page.locator("#frequency-wrap").isVisible();
for (const frequency of ["weekly", "monthly", "quarterly", "yearly"]) {
  await page.locator(`[data-frequency="${frequency}"]`).click();
  functional[`frequency_${frequency}`] = await page.locator("#summary-label").textContent();
}

const panelBox = await page.locator(".donation-panel").boundingBox();
await page.mouse.move(panelBox.x + panelBox.width / 2, panelBox.y + Math.min(panelBox.height / 2, 500));
const panelScrollBefore = await page.locator(".donation-panel").evaluate(element => element.scrollTop);
await page.locator(".donation-panel").evaluate(element => element.scrollBy({ top: 700 }));
functional.donationPanelScrollsInternally = (await page.locator(".donation-panel").evaluate(element => element.scrollTop)) > panelScrollBefore;
functional.donationPanelHasInternalScroll = await page.locator(".donation-panel").evaluate(element => {
  const style = getComputedStyle(element);
  return style.overflowY === "auto" && style.maxHeight !== "none" && element.scrollHeight > element.clientHeight;
});
await page.locator(".donation-panel").evaluate(element => element.scrollTo({ top: element.scrollHeight }));
functional.donationCTAReachable = await page.locator(".payment-button").count() === 1;
await page.evaluate(() => scrollTo(0, 0));

const dockOrigins = [0, 1000, 2100, 3000];
functional.dockTargets = [];
for (const y of dockOrigins) {
  await page.evaluate(value => scrollTo(0, value), y);
  await page.locator("#campaign-dock-donate").click();
  await page.waitForTimeout(500);
  functional.dockTargets.push(await page.locator("#campaign-donation-form").evaluate(element => element.classList.contains("is-targeted")));
}
functional.dockTargetsDonationForm = functional.dockTargets.every(Boolean);

if (await page.locator(".donation-step-back").isVisible()) {
  await page.locator(".donation-step-back").click();
}
functional.initialCards = await page.locator(".product-card").count();
functional.initialAddButtons = await page.locator(".add-product").count();
functional.initialSteppers = await page.locator(".product-stepper").count();
functional.initialQtyNeededLabels = await page.locator("[data-product-needed]").count();
functional.removedSidebarElements = await page.evaluate(() => ({
  introDescription: document.querySelectorAll(".donation-panel__intro p").length,
  trustRow: document.querySelectorAll(".trust-row").length,
  shelterImage: document.querySelectorAll(".shelter-progress").length,
  donationTypeDescription: document.querySelectorAll(".donation-type-help").length
}));
functional.buttonTextColors = await page.evaluate(() => ({
  add: getComputedStyle(document.querySelector(".add-product")).color,
  continue: getComputedStyle(document.querySelector(".donation-step-action")).color
}));

await page.locator('.add-product[data-product-id="meal"]').click();
functional.addBecameStepper = await page.locator('.product-stepper [data-product-id="meal"][data-adjust="1"]').isVisible();
functional.mealQtyAfterAdd = await page.locator('.product-card:has([data-product-id="meal"]) output').textContent();
functional.stepperGeometry = await page.locator('.product-card:has([data-product-id="meal"]) .product-stepper button').first().evaluate(button => {
  const rect = button.getBoundingClientRect();
  return { width: Math.round(rect.width), height: Math.round(rect.height), radius: getComputedStyle(button).borderRadius };
});
await page.locator('.product-stepper [data-product-id="meal"][data-adjust="1"]').click();
await page.locator('.product-stepper [data-product-id="meal"][data-adjust="1"]').click();
functional.mealQtyAfterPlus = await page.locator('.product-card:has([data-product-id="meal"]) output').textContent();
await page.locator('.add-product[data-product-id="bed"]').click();
await page.locator('.add-product[data-product-id="hygiene"]').click();
await page.locator('.product-stepper [data-product-id="hygiene"][data-adjust="1"]').click();
await page.locator('.product-stepper [data-product-id="hygiene"][data-adjust="1"]').click();
functional.selectedPassText = (await page.locator("#selected-pass").innerText()).replace(/\s+/g, " ").trim();
functional.basketTotal = await page.locator("#total-amount").textContent();

await page.locator('[data-donation-type="one-time"]').click();
await page.locator('[data-donation-type="recurring"]').click();
functional.productStatePersistsOnRecurring = await page.locator('.product-card:has([data-product-id="meal"]) output').textContent();

await page.locator('.product-stepper [data-product-id="meal"][data-adjust="-1"]').click();
await page.locator('.product-stepper [data-product-id="meal"][data-adjust="-1"]').click();
await page.locator('.product-stepper [data-product-id="meal"][data-adjust="-1"]').click();
functional.zeroRestoresAdd = await page.locator('.add-product[data-product-id="meal"]').isVisible();

await page.locator('[data-amount="2500"]').click();
functional.presetTotal = await page.locator("#total-amount").textContent();
await page.locator("#amount-slider").focus();
await page.keyboard.press("ArrowRight");
functional.sliderTotal = await page.locator("#total-amount").textContent();
functional.sliderUpdatesCustomInput = await page.locator("#custom-amount").inputValue();
await page.locator("#amount-slider").evaluate(element => element.dispatchEvent(new WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 100 })));
functional.sliderScrollTotal = await page.locator("#total-amount").textContent();
await page.locator("#custom-amount").fill("3750");
functional.customTotal = await page.locator("#total-amount").textContent();

await page.locator(".donation-step-action").click();
await page.locator('input[name="tax_receipt"][value="no"]').check();
functional.taxFieldsHidden = !(await page.locator("#pan-field").isVisible());
await page.locator('input[name="tax_receipt"][value="yes"]').check();
functional.taxFieldsVisible = await page.locator("#pan-field").isVisible();

functional.storyLocationsRemoved = await page.locator(".mjks-dignity__story-location").count();
functional.nativeShareRemoved = await page.locator('[data-share="native"]').count();
functional.faqItems = [];
for (let index = 0; index < await page.locator(".mjks-dignity__faq-button").count(); index += 1) {
  const question = page.locator(".mjks-dignity__faq-button").nth(index);
  await question.click();
  const opened = (await question.getAttribute("aria-expanded")) === "true";
  await question.click();
  functional.faqItems.push(opened && (await question.getAttribute("aria-expanded")) === "false");
}
functional.faqVisible = functional.faqItems.every(Boolean);

const galleryNext = page.locator('[data-carousel-next="gallery-track"]');
const galleryPrev = page.locator('[data-carousel-prev="gallery-track"]');
for (let index = 0; index < 4; index += 1) await galleryNext.click();
functional.galleryScroll = await page.locator("#gallery-track").evaluate(element => element.scrollLeft);
for (let index = 0; index < 4; index += 1) await galleryPrev.click();
functional.galleryRepeatedControls = true;
await page.setViewportSize({ width: 390, height: 900 });
await galleryNext.click();
await page.waitForTimeout(350);
functional.galleryScrollMobile = await page.locator("#gallery-track").evaluate(element => element.scrollLeft);
functional.mobileDonationPanelExpanded = await page.locator(".donation-panel").evaluate(element => {
  const style = getComputedStyle(element);
  return style.position === "static" && style.maxHeight === "none" && style.overflowY === "visible";
});

if (!(await page.locator(".payment-button").isVisible())) {
  await page.locator(".donation-step-action").click();
}
await page.locator(".payment-button").click();
functional.blankValidation = (await page.locator("#name-error").textContent()).trim();
await page.locator("#donor-name").fill("Test Donor");
await page.locator("#donor-mobile").fill("9876543210");
await page.locator(".payment-button").click();
functional.validFormStatus = (await page.locator("#form-status").textContent()).trim();
functional.domCounts = await page.evaluate(() => ({
  donationForms: document.querySelectorAll("#donation-form").length,
  donationPanels: document.querySelectorAll("#campaign-donation-form").length,
  productGrids: document.querySelectorAll("#product-grid").length,
  productCards: document.querySelectorAll("#product-grid > .product-card").length,
  dignityRoots: document.querySelectorAll(".campaign-content > .mjks-dignity").length
}));

await page.emulateMedia({ reducedMotion: "reduce" });
await page.reload({ waitUntil: "load" });
functional.reducedMotionVideoHidden = await page.locator("#campaign-video").isHidden();

await context.close();
await browser.close();

const result = { reports, functional };
fs.writeFileSync(path.join(output, "qa-report.json"), JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

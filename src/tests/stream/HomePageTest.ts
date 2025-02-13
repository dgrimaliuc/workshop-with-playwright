import { test, describe, expect } from "../../internal";
import { StreamHomePage } from "../../ui/pages/neonStream";

describe("Home page tests", () => {
  test("Home page test test", async ({ page }) => {
    const element = page.locator("[class*=hero-carousel-wrapper]");
    await expect(element).toBeVisible();
    const tabs = page.locator("button[class*=hero-carousel__page]");
    await expect(tabs).toHaveCount(9);
  });

  test("Search test", async ({ page }) => {
    await page.locator("[class*=search_container] input").click();
    await page.locator("[class*=search_container] input").fill("Hello, World!");
    await expect(page.locator("[class*=browse-card_browse-card-body]")).toHaveCount(17);
  });

  test("Series page test", async ({ page }) => {
    await page.goto("/tv/37854");
    await expect(page.locator("[class*=content-header_title]")).toHaveText("One Piece");
    await expect(page.locator("[class*=hero-content_hero-title]")).toHaveText("One Piece (1999)");
    await expect(page.locator("[class*=hero-content_tagline]")).toHaveText(
      "Set sail for One Piece!"
    );
    await expect(page.locator("[class*=description-container]")).toContainText(
      "Years ago, the fearsome Pirate King"
    );
  });

  test("Watch list test", async ({ app, actions }) => {
    const homePage = app.stream.home;

    await actions.shouldSeeNumberOfElements(homePage.heroCarousel.placeholders, 0);
    await actions.shouldSeeNumberOfElementsMore(homePage.heroCarousel.cards, 1);
    await homePage.heroCarousel.activeCard.addToWatchlist.click();
    const watchList = homePage.carousels[0];

    await actions.shouldHaveText(watchList.title, "Your Watchlist");
    await actions.shouldSeeNumberOfElements(homePage.carousels[0].cards, 1);
    await actions.scrollDownTo(watchList.cards[0]);
    await actions.shouldSee(watchList.cards[0].poster);
    await actions.shouldHaveText(watchList.cards[0].title, "Borderlands (2024)");
  });
});

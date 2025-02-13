import { test, describe } from "../../internal";
import { StreamHomePage } from "../../ui/pages/neonStream";

describe("Home page tests", () => {
  test("Open Home page test", async ({ app, actions }) => {
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

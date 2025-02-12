import { test, describe } from "../../internal";
import { StreamHomePage } from "../../ui/pages/neonStream";

describe("LogIn page tests", () => {
  let logInPage: StreamHomePage = null;

  test.beforeEach(async ({ app }) => {
    logInPage = app.stream.home;
  });

  test("Log in test", async ({ page, actions }) => {
    await page.getByTestId("email-input").fill("test@gmail.com");
    await page.getByTestId("password-input").fill("aaaaaa");
    await page.getByTestId("submit-button").click();
    await actions.shouldSeeNumberOfElementsMore(page.getByTestId("media-card"), 0);
  });
});

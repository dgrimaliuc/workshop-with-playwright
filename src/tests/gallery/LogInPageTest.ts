import { test, describe } from "../../internal";

describe("LogIn page tests", () => {
  test("Log in test", async ({ page, actions }) => {
    await page.getByTestId("email-input").fill("test@gmail.com");
    await page.getByTestId("password-input").fill("aaaaaa");
    await page.getByTestId("submit-button").click();
    await actions.shouldSeeNumberOfElementsMore(page.getByTestId("media-card"), 0);
  });
});

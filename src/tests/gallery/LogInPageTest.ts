import { test, describe } from "../../internal";

describe("LogIn page tests", () => {
  test("Log in test", async ({ app, page, actions }) => {
    const { gallery } = app;
    // gallery.home
    await page.getByTestId("email-input").fill("test@gmail.com");
    // TODO: continue test
  });
});

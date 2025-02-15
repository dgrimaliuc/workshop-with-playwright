import { expect } from "playwright/test";
import { test, describe } from "../../internal";

describe("LogIn page tests", () => {
  test("Log in test", async ({ app, page, actions }) => {
    await page.getByTestId("email-input").click();
    await expect(page.getByTestId("email-input")).toBeFocused();
    await page.getByTestId("email-input").fill("test@gmail.com");
    await page.getByTestId("password-input").fill("aaaaaa");
    await page.getByTestId("submit-button").click();
    await expect(page.getByTestId("user-email")).toContainText("test@gmail.com");
  });

  test("Sign up test", async ({ app, page, actions }) => {
    const email = Math.random().toString(36).substring(7) + "@gmail.com";

    const registerPage = app.gallery.register;
    await registerPage.registerLink.click();
    await registerPage.emailInput.fill(email);
    await registerPage.passwordInput.fill("aaaaaa");
    await registerPage.submitBtn.click();
    await expect(page.getByTestId("user-email")).toContainText(email);
  });

  test("Search images test", async ({ app, page, actions }) => {
    await page.getByTestId("email-input").click();
    await expect(page.getByTestId("email-input")).toBeFocused();
    await page.getByTestId("email-input").fill("test@gmail.com");
    await page.getByTestId("password-input").fill("aaaaaa");
    await page.getByTestId("submit-button").click();
    await expect(page.getByTestId("user-email")).toContainText("test@gmail.com");

    await app.gallery.home.searchInput.fill("im");
    await expect(app.gallery.home.mediaCard).toHaveCount(3);
  });
});

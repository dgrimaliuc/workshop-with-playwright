import { test } from "@playwright/test";
test("e2e.base.test.spec.ts", async ({ page }) => {
  await page.goto("/");
});

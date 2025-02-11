import { Locator } from "@playwright/test";
import { waitForCondition } from "./baseUtils";

export async function shouldSee(...elements: Locator[]) {
  await Promise.all(
    elements.map(async element => {
      await waitForCondition(
        async () => await element.isVisible(),
        `Element ${element} is not visible`
      );
    })
  );
}

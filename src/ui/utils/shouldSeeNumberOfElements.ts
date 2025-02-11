import { Locator } from "@playwright/test";
import { waitForCondition } from "./baseUtils";

export async function shouldSeeNumberOfElements(element: Locator, number: number) {
  await waitForCondition(
    async () => (await element.count()) === number,
    `[${element}] are not visible or not equal to expected number ${number}`
  );
}

export async function shouldSeeNumberOfElementsMore(element: Locator, number: number) {
  await waitForCondition(
    async () => (await element.count()) > number,
    `[${element}] are not more then [${number}]`
  );
}

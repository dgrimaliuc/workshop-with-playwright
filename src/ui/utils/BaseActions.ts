import { Locator, Page } from "playwright/test";
import { expect } from "../../internal";
import { sleep, waitForCondition } from "./BaseUtils";
import { BaseComponent } from "../../internal/pom";

type CustomLocator = Locator | BaseComponent;

export class BaseActions {
  constructor(protected readonly page: Page) {
    this.page = page;
  }

  private getLocator(locator: CustomLocator): Locator {
    return locator instanceof BaseComponent ? locator.getRoot() : locator;
  }

  async shouldSeeNumberOfElements(locator: CustomLocator, number: number) {
    await waitForCondition(async () => (await this.getLocator(locator).count()) === number);
  }

  async shouldSeeNumberOfElementsMore(locator: CustomLocator, number: number) {
    await waitForCondition(
      async () => (await this.getLocator(locator).count()) > number,
      `Timeout waiting for [${locator}] count to be more then ${number}`
    );
  }

  async shouldSee(locator: CustomLocator) {
    await expect(this.getLocator(locator)).toBeInViewport();
  }
  async shouldHaveText(locator: CustomLocator, text: string) {
    await expect(this.getLocator(locator)).toHaveText(text);
  }

  async shouldContainText(locator: CustomLocator, text: string) {
    await expect(this.getLocator(locator)).toContainText(text);
  }

  async shouldBeDisplayed(locator: CustomLocator) {
    await expect(this.getLocator(locator)).toBeVisible();
  }

  async scrollIntoCenter(locator: CustomLocator) {
    await this.getLocator(locator).scrollIntoViewIfNeeded();
  }

  async scrollDownTo(locator: CustomLocator) {
    let maxTimex = 10;
    do {
      await this.page.evaluate(() => {
        window.scrollBy(0, 1000);
      });
      await sleep(1000);
    } while (!(await this.getLocator(locator).isVisible()) && maxTimex-- > 0);
    await this.scrollIntoCenter(locator);
  }
}
